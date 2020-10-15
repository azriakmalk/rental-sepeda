import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import "./style.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <Navbar className="navbar-costume" expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <strong>
              <h2>Rental Sepeda</h2>
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
