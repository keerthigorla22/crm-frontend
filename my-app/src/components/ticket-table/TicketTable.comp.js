import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const TicketTable = ({ tickets = [] }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Ticket ID</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((ticket, index) => (
            <tr key={ticket.id}>
              <td>{index + 1}</td>
              <td>{ticket.id}</td>
              <td>
                <Link to={`/ticket/${ticket.id}`}>{ticket.subject}</Link>
              </td>
              <td>{ticket.status}</td>
              <td>{ticket.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center">
              No tickets found
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
