import React from 'react';
import { Table } from 'react-bootstrap';

export const TicketTable = ({ tickets = [] }) => {
  return (
    <div>
      <h5 className="mb-3">Recently Added Tickets</h5>

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
                <td>{ticket.subject}</td>
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
    </div>
  );
};
