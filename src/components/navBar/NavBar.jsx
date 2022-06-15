import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './navBar.css';
import { CartWidget } from '../cartWidget/CartWidget';

export const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container className='nav-container'>
                    <Nav className="me-auto">
                        <Nav.Link className='nav-link first' href="#home">Productos</Nav.Link>
                        <Nav.Link className='nav-link' href="#categories">Categorias</Nav.Link>
                        <Nav.Link className='nav-link' href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Container>
                <Container className='widget-logout-container'>
                    <CartWidget/>
                    <Nav.Link className='nav-link logout' href="#logOut">Salir</Nav.Link>
                </Container>
            </Navbar>
            <br />
        </>
    )
};

