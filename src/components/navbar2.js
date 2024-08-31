import React from "react";
import { Button, Container, Nav, Image, Navbar } from "react-bootstrap";
import Scroll from "react-scroll";

function Navbar2() {
    return (
        <Navbar className="Navbar" variant="dark" fluid="true" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#home">leostp</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#code">Projects</Nav.Link>
                    <Nav.Link href="#study">Studies</Nav.Link>
                    <Nav.Link href="#photos">Photos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navbar2;
