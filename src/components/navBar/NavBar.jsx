import React from 'react';
import styles from './navBar.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" sticky='top' className={`${styles.navBarContainer}`}>
            <Container style={{ 'maxWidth': '100%' }} className={`${styles.container}`}>
                <Navbar.Brand href="#home"><img className={styles.logo} src="/assets/img/logo.png" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav' className={styles.basicNavbarNav} >
                    <Nav className={`"me-auto" ${styles.meAuto}`}  >
                        <NavDropdown className={styles.navItems} variant="primary" title="Sofás" id="basic-nav-dropdown">
                            <NavDropdown.Item className={styles.navItems} href="#link">Sofá Cama</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={styles.navItems} href="#action/3.1">Línea Clásica / Moderna</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={styles.navItems} href="#action/3.3">Línea Hi Teck</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className={styles.navItems} title="Muebles" id="basic-nav-dropdown">
                            <NavDropdown.Item className={styles.navItems} href="#home">Rinconeros</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={styles.navItems} href="#action/3.1">Racks de TV</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={styles.navItems} href="#action/3.1">Ecsritorios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={styles.navItems} href="#action/3.1">Vajilleros</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown className={styles.navItems} title="Comedor" id="basic-nav-dropdown">
                            <NavDropdown.Item className={styles.navItems} href="#action/3.1">Mesas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={styles.navItems} href="#action/3.1">Sillas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}








