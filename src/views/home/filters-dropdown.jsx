import React from 'react';
import { Col } from 'react-bootstrap';
import ReactSelect from 'react-select';
import regions from './regions';

function FiltersDropdown({ filterCountriesByRegion }) {
  return (
    <Col md={7} className="d-flex justify-content-md-end">
      <ReactSelect
        className="react-select mt-md-0 mt-4"
        classNamePrefix="select"
        name="color"
        options={regions}
        onChange={filterCountriesByRegion}
        placeholder="Filter by Region"
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </Col>
  );
}

export default FiltersDropdown;
