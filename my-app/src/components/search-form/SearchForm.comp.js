import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export const SearchForm = ({ searchTerm, onSearchChange, onSortToggle, sortAsc }) => {
  return (
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="Search by subject"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <Button variant="secondary" onClick={onSortToggle}>
        Sort {sortAsc ? '↑' : '↓'}
      </Button>
    </InputGroup>
  );
};
