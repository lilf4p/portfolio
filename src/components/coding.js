import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";
import token from '../token';

/*
let get_repos = () => axios.get('https://api.github.com/users/lilf4p/repos')
    .then(function(response) {
    console.log(response.data)
    return response.data;
  })

let myPromise = get_repos();
console.log(myPromise);

const list_repos = myPromise.then(function(response) {
    console.log(response);
    return response;
});
*/

function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

function Coding() {

    //Stato della lista delle repository
    const [cards, setCards] = useState(null);
    const [length, setLength] = useState(0);

    //Funzione che setta i dati della lista delle repository
    //const setData =  (result) => {
    //    setCards(result);
    //setCards([...cards, card]);
    //}

    //const addData =  ({name,language,html_url}) => {
    //    setCards([...cards, {name,language,html_url} ]);
    //}

    //Fetch della lista delle repository dalla api di github
    useEffect(() => {
        fetch("https://api.github.com/users/lilf4p/repos", { headers: { Authorization: token } })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const result = data.map(
                    ({ name, language, html_url, description, topics }) => ({
                        name,
                        language,
                        html_url,
                        description,
                        topics,
                    }),
                );

                var filtered = [];

                for (var i = 0; i < result.length; i++) {
                    //if (result[i].name === "lilf4p" || result[i].name === "aima-python") {
                    //    result.splice(i, 1);
                    //}

                    //if (result[i].name === "cgc-scaleup3") {
                    //    result.splice(i, 1);
                    //}

                    // keep only the repo that have the topic "portfolio"
                    if (result[i].topics.includes("portfolio")) {
                        filtered.push(result[i]);
                    }
                }

                //console.log(result);
                //setData(result);
                setCards(filtered);
                setLength(filtered.length);
            });
    }, []);

    console.log(length);
    console.log(cards);

    return (
        <Container id="code" className="Coding" >
            <Row xxs={1} xs={1} md={2} xl={3} className="g-5">
                {Array.from({ length: length }).map((_, idx) => (
                    <Col >
                        <Button
                            variant="secondary"
                            href={cards && cards[idx].html_url}
                            style={{
                                boxShadow: "10"
                            }}
                        >
                            <Card
                                style={{
                                    boxSizing: "border-box",
                                    height: "25rem",
                                    width: "fit-content",
                                    display: "flex",
                                    boxShadow: "10",
                                    maxWidth: "25rem",
                                }}
                                text="light"
                                bg="secondary"
                                border="secondary"
                            >
                                <Card.Img className="CardImg"
                                    src={
                                        cards[idx].html_url +
                                        "/raw/main/images/portfolio.png"
                                    }
                                />
                                <Card.Body>
                                    <Card.Title>
                                        <div className="CardTitle">
                                            {cards && cards[idx].name}
                                        </div>
                                    </Card.Title>
                                    <Card.Text className="CardContent">
                                        {
                                            // check if description is more than 100 characters and if it is, cut it and add ...
                                            cards &&
                                                cards[idx].description &&
                                                cards[idx].description.length > 100
                                                ? cards[idx].description.substring(
                                                    0,
                                                    100,
                                                ) + "..."
                                                : cards && cards[idx].description
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Button>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Coding;
