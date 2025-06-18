import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Breadcrumb,
  Badge,
} from 'react-bootstrap';
import tickets from '../../assets/data/dummy-ticket.json';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';

export const Ticket = () => {
  const { tId } = useParams();
  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const selected = tickets.find((t) => String(t.id) === String(tId));
    if (selected) {
      setTicket(selected);
      setStatus(selected.status);
    }
  }, [tId]);

  const handleClose = () => {
    setStatus('Closed');
    setTicket((prev) => ({ ...prev, status: 'Closed' }));
  };

  const handleReplySubmit = (message) => {
    const newReply = {
      sender: 'Operator',
      message,
      msgAt: new Date().toISOString(),
    };

    setTicket((prev) => ({
      ...prev,
      conversations: [...prev.conversations, newReply],
    }));
  };

  if (!ticket) {
    return <p className="text-center mt-5">Ticket not found</p>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Ticket</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <h4 className="mb-4">Ticket Conversation</h4>

      <Row className="mb-2 align-items-center">
        <Col md={8}><strong>Subject:</strong> {ticket.subject}</Col>
        <Col md={4} className="text-end">
          <Button
            variant="outline-danger"
            onClick={handleClose}
            disabled={status === 'Closed'}
          >
            Close Ticket
          </Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}><strong>Ticket Opened:</strong> {ticket.addedAt}</Col>
        <Col md={6}>
          <strong>Status:</strong>{' '}
          <Badge bg={status === 'Closed' ? 'secondary' : 'success'}>
            {status}
          </Badge>
        </Col>
      </Row>

      <hr />

      {ticket.conversations?.map((msg, i) => (
        <Card className="mb-3" key={i}>
          <Card.Header>
            <Row>
              <Col><strong>{msg.sender}</strong></Col>
              <Col className="text-end">{new Date(msg.msgAt).toLocaleString()}</Col>
            </Row>
          </Card.Header>
          <Card.Body className={msg.sender === 'Operator' ? 'bg-light' : ''}>
            <Card.Text>{msg.message}</Card.Text>
          </Card.Body>
        </Card>
      ))}

      <hr className="mt-5" />
      <h5 className="mb-3">Write a Reply</h5>
      <UpdateTicket onSubmit={handleReplySubmit} buttonLabel="Reply" />
    </Container>
  );
};
