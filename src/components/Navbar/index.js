import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiBookCover } from "react-icons/gi";
import './index.css'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <GiBookCover size={35}/>
        <Navbar.Brand className="logoText" href="#">IELTS Institute</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="li" href="#">Home</Nav.Link>
            <Nav.Link className="li" href="#">Courses</Nav.Link>
            <Nav.Link className="li" href="#">Mock Tests</Nav.Link>
            <Nav.Link className="li" href="#">Contact</Nav.Link>
            <Nav.Link className="li" href="#">About Us</Nav.Link>
          </Nav>
          <Button className="loginBtn" variant="primary">Log in</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
