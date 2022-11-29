import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import SmallLogo from '../../assets/img/SmallLogo.png';

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
        <NavbarBrand>
         <img src={SmallLogo} alt='Logo' width='50px'/>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
              <Nav.Link href='/tickets'>Tickets</Nav.Link>
              {/* <Nav.Link href='/logout'>Logout</Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
};
