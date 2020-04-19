import React from "react";
import { Navbar as BSNavbar, Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <BSNavbar bg="primary" variant="dark" expand="lg">
      <BSNavbar.Brand href="#home">MealWheel</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
}
