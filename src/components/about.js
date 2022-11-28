import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from 'typewriter-effect';


function About () {
    return (
        <Container id = 'about' className="About">
            <div className="Blob">
                <img className="ImageAvatar" src={require("../immagini/avatar.png")} alt="Avatar" />
            </div>
            
            <Typewriter  options={{
                strings: ['Hey, I\'m lilf4p'],
                autoStart: true,
                loop: true,
            }} />
            
            <div className="Title">
                Developer and Student of Master in Computer Science 
            </div>
            <p className="Description"> Discover my project and hobbies</p>            
        </Container>
    )
}

export default About;