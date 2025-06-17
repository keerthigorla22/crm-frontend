import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { shortText } from '../../utils/validation'; // ✅ Import validation

export const AddTicketForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    issueDate: '',
    details: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // ✅ Validate subject field
    if (!shortText(formData.subject)) {
      alert('Subject must be at least 5 characters long.');
      return;
    }

    console.log('Ticket submitted:', formData);
    // Add actual form submission logic here
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} lg={6} className="mx-auto">
          <h2 className="text-center">Add New Ticket</h2>
          <hr />

          <Form onSubmit={handleOnSubmit}>
            {/* Subject */}
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                placeholder="Enter ticket subject"
                onChange={handleOnChange}
                required
              />
            </Form.Group>

            {/* Issue Date */}
            <Form.Group controlId="formDate" className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleOnChange}
                required
              />
            </Form.Group>

            {/* Issue Details */}
            <Form.Group controlId="formDetails" className="mb-3">
              <Form.Label>Issue Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="details"
                value={formData.details}
                placeholder="Describe the issue in detail"
                onChange={handleOnChange}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <div className="d-grid mb-2">
              <Button variant="primary" type="submit">
                Submit Ticket
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
