import React from 'react';
import {Link} from 'react-router-dom';
import { CartWidget } from '../cartWidget/CartWidget';
import styles from './navBar.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {

     return (
        <Navbar id='nav' collapseOnSelect bg="light" expand="lg" sticky='top' className={`${styles.navBarContainer}`}>
            <Container className={`${styles.container}`}>
            <Link to={'/'}><img src='/assets/img/logo.png' className={styles.logo} alt="logo" /></Link>
                <CartWidget className={styles.cartWidget}/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav' className={styles.basicNavbarNav}>
                    <Nav className={`me-auto ${styles.meAuto}`}>
                    <Nav.Link as={Link} eventKey="1" to='/category/jewelery' className={styles.navItems}>Jewelery</Nav.Link>
                    <Nav.Link as={Link} eventKey="2" to='/category/electronics' className={styles.navItems}>Electronics</Nav.Link>
                        <NavDropdown className={`${styles.navItems}`} variant="primary" title="Clothing" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} eventKey="3" className={styles.navItemsDrop} style={{'active': 'background-color: red'}} to="/category/women's clothing">Women's clothing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} eventKey="4" className={styles.navItemsDrop} to="/category/men's clothing" >men's clothing</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
