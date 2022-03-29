import React from 'react';
import { Button,Container,Nav,Image,Navbar } from 'react-bootstrap';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.ScrollLink;

function Navbar2() {
    return (
      <Navbar bg='dark' variant='dark' fluid="true" sticky='top'>
            <Container fluid>
              <Navbar.Brand href='#home'>lilf4p</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#code">Coding</Nav.Link>
                <Nav.Link href="#study">Study</Nav.Link>
                <Nav.Link href="#photos">Photos</Nav.Link>
                <Nav.Link href="#social">Social</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
    )
}

export default Navbar2;