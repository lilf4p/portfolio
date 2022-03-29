import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function Coding () {
    return (
        <Row id='code' xs={'auto'} md={3} className="g-5">
            {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                    <Card text="dark">
                        <Card.Img variant="top" src={require("../immagini/mrrobot.jpg")} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Coding;