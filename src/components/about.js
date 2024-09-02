import { Scale } from "@mui/icons-material";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Social from "./social";

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

function About() {
    return (
        <Container id="about" className="About" >
            <div className="Title">
                {isMobile() ?
                <p>
                <p>Hi there,</p>
                <p>I'm Leonardo 👋</p>
                </p>
                :
                <p>Hi there, I'm Leonardo 👋</p>
                }
                <Social />
                <div className="Subtitle">
                    Follow my journey through AI and ML
                    <p className="Description">
                        Hey 👋, I’m Leonardo Stoppani, a 24-year-old student of
                        AIML with a Bachelor Degree in Computer Science from
                        Unipi. Currently i am enrolled in Master of Artificial
                        Intelligence at Unipi and I have attended one semester
                        at University of Copenhagen! Below, you can find some of
                        my projects, to see more visit my github profile!
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default About;
