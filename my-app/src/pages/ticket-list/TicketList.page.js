import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Breadcrumb, Button } from 'react-bootstrap';
import { SearchForm } from '../../components/search-form/SearchForm.comp';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import ticketsData from '../../assets/data/dummy-ticket.json';

export const TicketList = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    let filtered = ticketsData.filter((ticket) =>
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered = filtered.sort((a, b) => {
      if (a.subject.toLowerCase() < b.subject.toLowerCase()) return sortAsc ? -1 : 1;
      if (a.subject.toLowerCase() > b.subject.toLowerCase()) return sortAsc ? 1 : -1;
      return 0;
    });

    setTickets(filtered);
  }, [searchTerm, sortAsc]);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Ticket List</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Button variant="info">Add New Ticket</Button>
        </Col>
        <Col md={6} className="text-end">
          <SearchForm
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
            onSortToggle={() => setSortAsc((prev) => !prev)}
            sortAsc={sortAsc}
          />
        </Col>
      </Row>

      <hr />

      <Row>
        <Col>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
