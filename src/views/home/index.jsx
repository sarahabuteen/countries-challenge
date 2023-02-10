import React, {
  useCallback, useEffect, useState,
} from 'react';
import {
  Col, Container, Row,
} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import Header from '../../components/header';
import Api from '../../services';
import CountryCard from './country-card';
import FiltersDropdown from './filters-dropdown';
import SearchInput from './search-input';

function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const getCountries = () => {
    setLoading(true);
    Api.countries.getCountries().then((response) => {
      setCountries(response);
      setLoading(false);
    }).catch(() => setLoading(false));
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
            <SearchInput filterCountriesByName={filterCountriesByName} country={country} />
            <FiltersDropdown filterCountriesByRegion={filterCountriesByRegion} />
          </Row>
        </Container>
      </section>
      <section className="pb-5">
        <Container>
          <Row>
            {loading
              ? (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.map((index) => {
                    return (
                      <Col md={3} key={index}>
                        <Skeleton height={355} width="100%" className="mb-3" />
                      </Col>
                    );
                  })}
                </>
              )
              : (
                <>
                  {countries?.map((country, index) => {
                    return (
                      <Col md={3} key={index}>
                        <CountryCard data={country} />
                      </Col>
                    );
                  })}
                </>
              )}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
