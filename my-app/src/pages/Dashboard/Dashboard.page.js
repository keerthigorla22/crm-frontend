import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-ticket.json';

export const Dashboard = () => {
  const handleAddTicket = () => {
    alert('Redirect to Add New Ticket form');
  };

  // 🔢 Dynamic Ticket Stats
  const totalTickets = tickets.length;
  const pendingTickets = tickets.filter(
    ticket => ticket.status === 'Client response pending'
  ).length;
  const newTickets = tickets.filter(ticket => ticket.status === 'New').length;

  return (
    <Container className="mt-4">
      {/* Header and Button */}
      <Row className="mb-3">
        <Col>
          <h2>Dashboard</h2>
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={handleAddTicket}>
            + Add New Ticket
          </Button>
        </Col>
      </Row>

      <hr />

      {/* Ticket Summary Cards */}
      <Row className="mb-4">
        <Col md={4}>
          <Card bg="primary" text="white" className="text-center">
            <Card.Body>
              <Card.Title>Total Tickets</Card.Title>
              <Card.Text style={{ fontSize: '1.5rem' }}>
                {totalTickets}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="warning" text="dark" className="text-center">
            <Card.Body>
              <Card.Title>Pending Tickets</Card.Title>
              <Card.Text style={{ fontSize: '1.5rem' }}>
                {pendingTickets}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" text="white" className="text-center">
            <Card.Body>
              <Card.Title>New Tickets</Card.Title>
              <Card.Text style={{ fontSize: '1.5rem' }}>
                {newTickets}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recently Added Tickets Table */}
      <Row>
        <Col>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
