import React from "react";
import { Navbar as BSNavbar, Nav, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

export default function Navbar() {
  return (
    <BSNavbar bg="primary" variant="dark" expand="lg">
      <LinkContainer to="home">
        <NavbarBrand>
          <img
            src="./MealWheelLogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="React Bootstrap logo"
          />
          MealWheel
        </NavbarBrand>
      </LinkContainer>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="dinein">
            <Nav.Link>Dine In</Nav.Link>
          </LinkContainer>
          <LinkContainer to="carryout">
            <Nav.Link>Carry Out</Nav.Link>
          </LinkContainer>
        </Nav>
      </NavbarCollapse>
    </BSNavbar>
  );
}
