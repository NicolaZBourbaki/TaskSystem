import * as ReactBootstrap from 'react-bootstrap';
import { Nav, Button, Form } from 'react-bootstrap';
import { Routes, Route, HashRouter } from "react-router-dom";
import React from 'react';



export const Navbar = () => {
  return (
      <div>
        <ReactBootstrap.Navbar bg="light" expand="lg">
          <ReactBootstrap.Navbar.Brand href="/Main">__Tasker</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
          <ReactBootstrap.Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/Main" >Main</Nav.Link>
              <Nav.Link href="/Tasks">Tasks</Nav.Link>
              <Nav.Link href="/About">About us</Nav.Link>
              <Nav.Link href="/Create">Create</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav.Link href="/Signup"><Button variant="outline-success">Sign up</Button></Nav.Link>
              <Nav.Link href="/Login"><Button variant="outline-secondary">Log in</Button></Nav.Link>
            </Form>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </div>
  );
};

export default Navbar;