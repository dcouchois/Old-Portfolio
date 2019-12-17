import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./Nav.css";


function NavBar () {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#Resume">Resume</Nav.Link>
          <Nav.Link href="#Projects">Projects</Nav.Link>
        </Nav>
        <h3 className="name-display">Dillon Couchois</h3>
      </Navbar>
    )
}

export default NavBar;