
import * as ReactBootstrap from 'react-bootstrap';
import {Nav, Button, Form } from 'react-bootstrap';

type NavbarProps = {

}


const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <div>
      <ReactBootstrap.Navbar bg="light" expand="lg">
          <ReactBootstrap.Navbar.Brand href="#">__Tasker</ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Navbar.Toggle aria-controls="navbarScroll" />
          <ReactBootstrap.Navbar.Collapse>
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="#action1">Main</Nav.Link>
              <Nav.Link href="#action2">Tasks</Nav.Link>
              <Nav.Link href="#action3">About us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Sign is</Button>
              <Button variant="outline-secondary">Log in</Button>
            </Form>
          </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>

  )
}

export default Navbar;
