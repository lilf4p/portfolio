import { Scale } from "@mui/icons-material";
import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from 'typewriter-effect';


function About () {
    return (
        <Container id = 'about' className="About" fluid = "true">

            <div className="Blob">
                <img className="ImageAvatar" src={require("../immagini/avatar.png")} alt="Avatar" />
            </div>
            
            <Typewriter  options={{
                strings: ['Hey, I\'m lilf4p'],
                autoStart: true,
                pauseFor: 30000,
                loop: true,
                wrapperClassName: 'Typewriter',
            }} />
            
            <div className="Title">
            Artificial Intelligence Master Student
                <div className="Subtitle"> Follow my journey through AI and ML   
                     
                    <img src={require("../immagini/linecurve.png")} alt="separator" width="1000" height="300" style={{maxWidth: "70rem", marginTop:"-5%", marginBottom:"-5%"}}/>

                    <p className="Description">I am a 23 years old student with a Bachelor Degree in Computer Science from Unipi. Currently i am enrolled in Master of Artificial Intelligence at Unipi
                    and I will attend next semester courses at University of Copenhagen!</p>
                </div>
            </div>


        </Container>
    )
}

export default About;