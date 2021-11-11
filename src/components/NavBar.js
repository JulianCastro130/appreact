import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget.js'



export default function NavBar(props) {
    return (
      <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Electro Fitz</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Productos</Nav.Link>
        <Nav.Link href="#pricing">Precios</Nav.Link>
      </Nav>
      <CartWidget></CartWidget>
      </Container>
    </Navbar>
    );
}