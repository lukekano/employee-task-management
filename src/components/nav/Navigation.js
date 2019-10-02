import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar className="shadow-sm" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={require("../../assets/images/Amdocs_Logo.png")}
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
