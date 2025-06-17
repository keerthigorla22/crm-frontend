import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp';

export const AddTicket = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Add New Ticket</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2 className="mb-4">Add New Ticket</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="p-4 border rounded bg-light">
            <AddTicketForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
