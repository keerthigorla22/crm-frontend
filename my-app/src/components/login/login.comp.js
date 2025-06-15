import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = ({ handleOnChange, handleOnSubmit, email, pass, formSwitcher }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto">
          <h1 className="text-center">Client Login</h1>
          <hr />

          <Form onSubmit={handleOnSubmit}>
            {/* Email Input */}
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={handleOnChange}
                required
              />
            </Form.Group>

            {/* Password Input */}
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
                value={pass}
                placeholder="Enter password"
                onChange={handleOnChange}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <div className="d-grid mb-2">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
