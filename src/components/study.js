import React from "react";
import { Card,ProgressBar,Accordion } from "react-bootstrap";

function Study () {
    const now1 = 100;
    const now2 = 5;
    return (
        <Card id='study' className="bg-dark text-white">
            <Card.Img src={require("../immagini/laureasfondo.png")} alt="laureasfondo.png" />
            <Card.ImgOverlay>
                <Card.Title>Studies</Card.Title>
                <Card.Text>
                    Computer Science Degree
                </Card.Text>
                <ProgressBar now={now1} label={`${now1}%`} />
                <Card.Text as="h5">25 Marzo 2022 University of Pisa</Card.Text>
                <hr/>
                <Card.Text>
                    Master of Computer Science Degree
                </Card.Text>
                <ProgressBar now={now2} label={`${now2}%`} />
                <Card.Text as="h5">University of Pisa</Card.Text>
                <hr/>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Study;