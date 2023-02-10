import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CountryCard({ data }) {
  const navigate = useNavigate();
  return (
    <Card className="cursor-pointer" onClick={() => navigate(`/country/${data?.name?.common?.toLowerCase()}`)}>
      <Card.Img variant="top" src={data?.flags?.svg} />
      <Card.Body>
        <Card.Title className="text-main fw-bolder mb-3">{data?.name?.common}</Card.Title>
        <Card.Text className="text-main mb-1">
          <span className="fw-medium">Population:</span>
          {' '}
          {data?.population}
        </Card.Text>
        <Card.Text className="text-main mb-1">
          <span className="fw-medium">Region:</span>
          {' '}
          {data?.region}
        </Card.Text>
        <Card.Text className="text-main mb-0">
          <span className="fw-medium">Capital:</span>
          {' '}
          {data?.capital}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;
