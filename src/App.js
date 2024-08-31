import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Button, Alert } from "react-bootstrap";
import Navbar2 from "./components/navbar2";
import Coding from "./components/coding";
import Study from "./components/study";
import Social from "./components/social";
import About from "./components/about";

function App() {
    return (
        <Container className="App" fluid="true">
            {/* <Photos /> */}
            <Navbar2 />
            <About />
            <Coding />
            <Study />
        </Container>
    );
}

export default App;
