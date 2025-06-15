import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ResetPassword = ({ handleOnChange, handleOnSubmit, email, formSwitcher }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto">
          <h1 className="text-center">Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            {/* Email Field */}
            <Form.Group controlId="formResetEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />
            </Form.Group>

            {/* Reset Button */}
            <div className="d-grid mb-2">
              <Button variant="primary" type="submit">
                Reset Password
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
