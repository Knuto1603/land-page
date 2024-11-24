import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";

export const NavBar = (props) => {
  return (
    <Navbar expand="lg" id="nav-bar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll " />
        <div class="brand brand-logo mx-auto">
          <a href="#logo" class="no-style">
            {props.mensaje}
          </a>
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Nosotros</Nav.Link>
            <NavDropdown title="Tortas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Contactanos</Nav.Link>
            <Nav.Link href="#" disabled>
              Compra
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
