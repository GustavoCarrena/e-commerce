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
        <Navbar collapseOnSelect bg="light" expand="lg" sticky='top' className={`${styles.navBarContainer}`}>
            <Container style={{ 'maxWidth': '92%' }} className={`${styles.container}`}>
            <Link to={'/'}><img src='/assets/img/logo.png' className={styles.logo} alt="logo" /></Link>
                <CartWidget className={styles.cartWidget}/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav' className={styles.basicNavbarNav}>
                    <Nav className={`me-auto ${styles.meAuto}`}>
                    <Nav.Link eventKey="1"><Link to='/category/jewelery' className={styles.navItems}>Jewelery</Link></Nav.Link>
                    <Nav.Link eventKey="2"><Link to='/category/electronics' className={styles.navItems}>Electronics</Link></Nav.Link>
                        <NavDropdown className={`${styles.navItems}`} variant="primary" title="Clothing" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="3" className={styles.navItemsDrop}><Link to="/category/women's clothing" className={styles.navItemsDrop}>Women's clothing</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4" className={styles.navItemsDrop}><Link to="/category/men's clothing" className={styles.navItemsDrop}>men's clothing</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
