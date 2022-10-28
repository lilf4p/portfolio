import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Alert } from 'react-bootstrap';
import Navbar2 from './components/navbar2';
import Coding from './components/coding';
import Study from './components/study';
import Photos from './components/photos';
import Social from './components/social';
import About from './components/about';

function App() {

  return (
    <>
      <Navbar2 />

      <Container fluid='true' className='slider-thumb'>
          {/* <Photos /> */}
          <About />
          <Coding />
          <Study />
          <Social />
      </Container>

    </>
  );

}

export default App;
