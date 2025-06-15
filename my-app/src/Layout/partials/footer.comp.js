import React from 'react';
import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <Container>
        &copy; {new Date().getFullYear()} CRM Ticket System. All rights reserved.
      </Container>
    </footer>
  );
};
