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
            <Nav.Link href="#home" className="me-3">
              Home
            </Nav.Link>
            <NavDropdown
              title="Dropdown"
              className="me-3"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="me-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="me-3">
              Destinations
            </Nav.Link>
            <Nav.Link href="#link" className="me-3">
              Travel Deals
            </Nav.Link>
            <Nav.Link href="#link" className="me-3">
              Services
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="btn-primary">Book a travel</Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
