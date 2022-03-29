import React from "react";
import { Card } from "react-bootstrap";

function Study () {
    return (
        <Card id='study' className="bg-dark text-white">
            <Card.Img src={require("../immagini/laurea.jpg")} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Study</Card.Title>
                <Card.Text>
                Computer Science Degree at University of Pisa.
                </Card.Text>
                <Card.Text>25 Marzo 2022</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Study;