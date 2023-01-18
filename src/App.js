import React from 'react';
import './App.css';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col} from 'react-bootstrap';
import Counter from './components/Counter';
import Register from './components/Register';

let App = () =>  {
  return (
    <>
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container className='mt-1'>
       <Navbar.Brand hfref=" /">NuOrder</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
              <Nav.Link href='#about'>About</Nav.Link> 
              <Nav.Link href='#contact'>Contacts</Nav.Link> 
              <NavDropdown title="Action" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Search Restaurant</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className='mt-1'>
          <Form inline>
            <Row>
              <Col md={10}>
              <FormControl 
              type="text"
              placeholder='Search Restaurant Name'
              className='ml-auto'
              />
              </Col>     
              <Col md={1}>
                 <Button variant="outline-success">Search</Button>
              </Col>
            </Row>
          </Form>
          </Container>
    </Navbar>
    <Counter/>
    <Register/>
    </>
  );
}

export default App;
