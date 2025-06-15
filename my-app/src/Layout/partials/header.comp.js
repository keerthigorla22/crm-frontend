import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(prev => !prev);
  const handleClose = () => setExpanded(false); // Close menu on link click

  return (
    <Navbar bg="dark" variant="dark" expand="md" expanded={expanded}>
      <Container>
        <Navbar.Brand href="/">CRM System</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#dashboard" onClick={handleClose}>Dashboard</Nav.Link>
            <Nav.Link href="#tickets" onClick={handleClose}>Tickets</Nav.Link>
            <Nav.Link href="#logout" onClick={handleClose}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
