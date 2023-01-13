import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <div class="nav">
      <Navbar variant="light" fixed="top">
        <Navbar.Brand href="#home">Tierney Allen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="https://github.com/tierney03" target="_blank">
            Github
          </Nav.Link>
          <Nav.Link
            href="https://drive.google.com/file/d/1MPI1pmrpXh0Z4_EgQkJEKCkt7Wsov4zT/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
