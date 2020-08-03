import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import { Form, FormControl, Button } from 'react-bootstrap'; 
import Logo from '../Assets/img/LOGO1.png';
import './Style.css';

const NavbarPage = () => {
    return (
        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home"><img src={Logo} className="logo" alt="" /> </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Incio</Nav.Link>
      <Nav.Link href="#features">Nenes</Nav.Link>
      <Nav.Link href="#pricing">Nenas   </Nav.Link> 
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
            
        </>
    )
}

export default NavbarPage
