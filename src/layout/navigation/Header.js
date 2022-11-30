import React from 'react';
import '../../pages/home/Home.css';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import SmallLogo from '../../assets/img/SmallLogo.png';

export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
        <NavbarBrand>
         <img src={SmallLogo} alt='Logo' width='50px'/>
        </NavbarBrand>
        <Navbar.Text className='bold-title'>Ticket Management</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Role: Admin
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
  )
};
