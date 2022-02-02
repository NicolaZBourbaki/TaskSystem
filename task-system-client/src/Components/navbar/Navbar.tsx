import * as ReactBootstrap from 'react-bootstrap';
import { Nav, Button, Form } from 'react-bootstrap';
import { Routes, Route, HashRouter } from "react-router-dom";
import React from 'react';

import Login from '../register/Login';
import SignUp from '../register/SignUp';



export const Navbar = () => {
  return (
      <div>
        <ReactBootstrap.Navbar bg="light" expand="lg">
          <ReactBootstrap.Navbar.Brand href="#">__Tasker</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
          <ReactBootstrap.Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/signup" >Main</Nav.Link>
              <Nav.Link href="#action2">Tasks</Nav.Link>
              <Nav.Link href="#action3">About us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav.Link href="/signup"><Button variant="outline-success">Sign up</Button></Nav.Link>
              <Nav.Link href="/login"><Button variant="outline-secondary">Log in</Button></Nav.Link>
            </Form>
          </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
      </div>
  );
};

export default Navbar;