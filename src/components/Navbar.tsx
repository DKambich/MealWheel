import React from "react";
import { Navbar as BSNavbar, Nav, NavbarBrand, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { routes } from "../constants";

type NavbarProps = {
  activeTab?: string;
};
export default function Navbar(props: NavbarProps) {
  return (
    <BSNavbar bg="primary" variant="dark" expand="lg">
      <LinkContainer to="home">
        <NavbarBrand>
          <Image
            src="./logo.png"
            width={32}
            height={32}
            className="align-top mr-2"
            alt="Meal Wheel logo"
          />
          Meal Wheel
        </NavbarBrand>
      </LinkContainer>
      <NavbarToggle aria-controls="basic-navbar-nav" />
      <NavbarCollapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to={routes.HOME}>
            <Nav.Link active={props.activeTab === routes.HOME}>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to={routes.DINE_IN}>
            <Nav.Link active={props.activeTab === routes.DINE_IN}>
              Dine In
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to={routes.CARRY_OUT}>
            <Nav.Link active={props.activeTab === routes.CARRY_OUT}>
              Carry Out
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </NavbarCollapse>
    </BSNavbar>
  );
}
