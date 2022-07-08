import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './navBar.module.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../cartWidget/CartWidget';
// import { useParams } from "react-router-dom";

export const NavBar = () => {
    // const params = useParams();
    // const navigate = useNavigate();
  
    // const handleCategory = () => {
    //   navigate(`category/${params.categoryId}`);
    // };

    return (
        <Navbar bg="light" expand="lg" sticky='top' className={`${styles.navBarContainer}`}>
            <Container style={{ 'maxWidth': '100%' }} className={`${styles.container}`}>
            <Link to={'/'}><img src='/assets/img/logo.png' className={styles.logo} alt="logo" /></Link>
                <CartWidget className={styles.cartWidget}/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav' className={styles.basicNavbarNav}>
                    <Nav className={`"me-auto" ${styles.meAuto}`}>
                    {/* <div onClick={handleCategory} className={styles.navItems}>Jewelery</div> */}
                    <NavLink to='/category/jewelery' className={styles.navItems} >Jewelery</NavLink>
                    <NavLink to='/category/electronics' className={styles.navItems}>Electronics</NavLink>
                        <NavDropdown className={`${styles.navItems}`} variant="primary" title="Clothing" id="basic-nav-dropdown">
                        <NavDropdown.Item className={styles.navItemsDrop}><Link to="/category/women's clothing" className={styles.navItemsDrop}>Women's clothing</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className={styles.navItemsDrop}><Link to="/category/men's clothing" className={styles.navItemsDrop}>men's clothing</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
