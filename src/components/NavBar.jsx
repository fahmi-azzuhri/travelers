import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand href="#home" className="me-5">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="me-3 text-white fw-medium">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="me-3 text-white fw-medium">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="me-3 text-white fw-medium">
              Destinations
            </Nav.Link>
            <Nav.Link href="#link" className="me-3 text-white fw-medium">
              Travel Deals
            </Nav.Link>
            <Nav.Link href="#link" className="me-3 text-white fw-medium">
              Services
            </Nav.Link>
          </Nav>
          <Button className="btn-primary">Book a travel</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
