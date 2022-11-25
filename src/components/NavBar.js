import React, { useContext } from "react";
import "./styles.css";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { contexto } from "./CustomProvider";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const { totalItemsCart } = useContext(contexto);
  return (
    <Navbar bg="light" expand="lg" className="navcenter">
      <Container className="title" >
      <div className="navcenter">
        <Navbar.Brand >
        <NavLink to="/">
        <h1  className="title">ONE O'CLOCK</h1>
        </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink
            to="/category/Clasico"
            className="navLink negrita"
            activeClassName="currentCategory">
            Clásicos
          </NavLink>
          <NavLink
            to="/category/Deportivo"
            className="navLink negrita"
            activeClassName="currentCategory">
            Deportivos
          </NavLink>
          <NavLink
            to="/cart"
            className="navLink"
            activeClassName="currentCategory">
            <CartWidget />
            <span className="">({totalItemsCart()})</span>
          </NavLink>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;

