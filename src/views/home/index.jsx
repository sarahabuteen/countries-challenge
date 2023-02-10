import { SearchNormal1 } from 'iconsax-react';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import {
  Col, Container, Form, InputGroup, Row,
} from 'react-bootstrap';
import ReactSelect from 'react-select';
import Header from '../../components/header';
import Api from '../../services';
import CountryCard from './country-card';

const regions = [
  {
    label: 'Africa',
    value: 'Africa',
  },
  {
    label: 'Americas',
    value: 'Americas',
  },
  {
    label: 'Asia',
    value: 'Asia',
  },
  {
    label: 'Europe',
    value: 'Europe',
  },
  {
    label: 'Oceania',
    value: 'Oceania',
  },
];
function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  const getCountries = () => {
    Api.countries.getCountries().then((response) => setCountries(response));
  };

  useEffect(() => {
    getCountries();
  }, []);

  const filterCountriesByRegion = useCallback((option) => {
    const region = option.value;
    Api.countries.getCountriesByRegion(region).then((response) => setCountries(response));
  }, [setCountries]);

  const filterCountriesByName = useCallback((event) => {
    const { value } = event.target;
    setCountry(value);
    if (!value) {
      getCountries();
    } else {
      Api.countries.getCountriesByName(value).then((response) => setCountries(response));
    }
  }, [setCountries, setCountry]);
  return (
    <>
      <Header />
      <section className="py-5">
        <Container>
          <Row>
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
          </Row>
        </Container>
      </section>
      <section className="pb-5">
        <Container>
          <Row>
            {countries?.map((country, index) => {
              return (
                <Col md={3} key={index}>
                  <CountryCard data={country} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
