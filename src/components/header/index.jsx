import { Moon } from 'iconsax-react';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ThemeContext from '../../contexts/theme-context';

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const activeTheme = theme === 'dark';
    setTheme(activeTheme ? 'light' : 'dark');
    localStorage.setItem('theme', activeTheme ? 'light' : 'dark');
  };
  return (
    <header className="header d-flex align-items-center">
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={7}>
            <Link to="/" className="text-main text-decoration-none fw-bolder h5 mb-0">
              Where in the world?
            </Link>
          </Col>
          <Col xs={5} className="d-flex justify-content-end">
            <h6 className="d-flex align-items-center cursor-pointer text-main fw-medium mb-0" onClick={handleThemeChange}>
              <Moon className="me-2" variant={theme === 'dark' ? 'Bold' : 'Linear'} />
              Dark mode
            </h6>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
