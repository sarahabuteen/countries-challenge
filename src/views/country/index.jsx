import { ArrowLeft } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header';
import Api from '../../services';

function Country() {
  const { name } = useParams();
  const [country, setCountry] = useState(undefined);

  useEffect(() => {
    Api.countries.getCountriesByName(name).then((response) => setCountry(response[0]));
  }, [name]);

  const renderLanguages = (languages) => {
    if (!languages) return [];
    return Object.values(languages).join(', ');
  };

  const renderCurrencies = (currencies) => {
    if (!currencies) return [];
    return Object.values(currencies).map((currency) => currency.name).join(', ');
  };
  return (
    <>
      <Header />
      <section className="pt-5">
        <Container>
          <Row className="py-5">
            <Col md={12}>
              <Link to="/" className="btn btn-white fw-medium px-2 d-inline-flex align-items-center justify-content-evenly">
                <ArrowLeft />
                {' '}
                Back
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <img src={country?.flags?.svg} alt={country?.name?.common} width="100%" className="rounded mb-4 mb-md-0" />
            </Col>
            <Col md={6} className="d-flex flex-column justify-content-center ps-md-5">
              <h1 className="text-main fw-bolder h2 mb-4">{country?.name?.common}</h1>
              <Row>
                <Col md={6}>
                  <ul className="list-unstyled text-main mb-md-0 mb-4">
                    <li className="mb-2">
                      <span className="fw-medium">Native Name:</span>
                      {' '}
                      {
                        country?.name?.nativeName[
                          Object.keys(country?.name?.nativeName)[0]
                        ]?.common
                      }
                    </li>
                    <li className="mb-2">
                      <span className="fw-medium">Population:</span>
                      {' '}
                      {country?.population?.toLocaleString()}
                    </li>
                    <li className="mb-2">
                      <span className="fw-medium">Region:</span>
                      {' '}
                      {country?.region}
                    </li>
                    <li className="mb-2">
                      <span className="fw-medium">Sub Region:</span>
                      {' '}
                      {country?.subregion}
                    </li>
                    <li className="mb-2">
                      <span className="fw-medium">Capital:</span>
                      {' '}
                      {country?.capital}
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <ul className="list-unstyled text-main">
                    <li className="mb-2">
                      <span className="fw-medium">Top Level Domain:</span>
                      {' '}
                      {country?.tld[0]}
                    </li>
                    <li className="mb-2">
                      <span className="fw-medium">Currencies:</span>
                      {' '}
                      {renderCurrencies(country?.currencies)}
                    </li>
                    <li className="mb-2">
                      <span className="fw-medium">Languages:</span>
                      {' '}
                      {renderLanguages(country?.languages)}
                    </li>
                  </ul>
                </Col>
                {country?.borders?.length > 0
                && (
                  <Col md={12}>
                    <div className="d-flex flex-md-row flex-column align-items-md-center mt-5">
                      <p className="fw-bolder text-flex mb-3 me-3 text-main">Border Countries:</p>
                      {' '}
                      <ul className="list-unstyled list-inline mb-0">
                        {country?.borders?.map((border) => {
                          return (
                            <li className="list-inline-item me-3 mb-3" key={border}>
                              <Link to={`/country/${border}`} className="btn btn-white">{border}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Country;
