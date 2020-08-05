import React from 'react';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav';
import Logo from '../Assets/img/logo2.png';
import './Style.css';

const NavbarPage = () => {
    return (
        <>
  <Navbar bg="transparent" variant="dark">
    <Navbar.Brand href="#home"><img src={Logo} className="logo" alt="" /> </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" className="letras">Incio</Nav.Link>
      <Nav.Link href="#features" className="letras">Nenes</Nav.Link>
      <Nav.Link href="#pricing"className="letras">Nenas   </Nav.Link> 
    </Nav>
    
  </Navbar>
            
        </>
    )
}

export default NavbarPage
