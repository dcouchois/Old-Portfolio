import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./Nav.css";


function NavBar() {
  return (
    <Navbar bg="black" variant="dark">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Resume">Resume</Nav.Link>
        <Nav.Link href="/Projects">Projects</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar;