import { SearchNormal1 } from 'iconsax-react';
import React from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';

function SearchInput({ filterCountriesByName, country }) {
  return (
    <Col md={5}>
      <InputGroup>
        <InputGroup.Text><SearchNormal1 /></InputGroup.Text>
        <Form.Control
          placeholder="Search for a country…"
          onChange={filterCountriesByName}
          value={country || ''}
        />
      </InputGroup>
    </Col>
  );
}

export default SearchInput;
