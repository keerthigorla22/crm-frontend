import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(prev => !prev);
  const handleClose = () => setExpanded(false); // Close menu on link click

  return (
    <Navbar bg="dark" variant="dark" expand="md" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleClose}>
          CRM System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/dashboard" onClick={handleClose}>
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/tickets" onClick={handleClose}>
              Tickets
            </Nav.Link>
            <Nav.Link as={Link} to="/add-ticket" onClick={handleClose}>
              Add Ticket
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
