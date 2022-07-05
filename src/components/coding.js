import React, {useState, useEffect} from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from "@mui/material";

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
    
function Coding () {

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
        
        fetch('https://api.github.com/users/lilf4p/repos')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const result = data.map(({ name,language,html_url }) => ({
                    name,
                    language,
                    html_url
                  }));
                
                for (let i = 0; i < result.length; i++ ) {
                    if (result[i].name === "lilf4p") {
                        result.splice(i, 1);
                    }
                }

                //console.log(result);
                //setData(result);
                setCards(result);
                setLength(result.length);
                
            });

    }, []);

    console.log(cards);

    return (
        <Container id='code' className="Coding" >
            <hr className="hr"/>
            <h1>Projects</h1>
            <hr className="hr"/>
            <Typography align="center" variant="body1" gutterBottom>
                Here you can find all my projects. I have made a lot of projects, but not all of them are public.
                They include some University projects, but also some personal. All of them can be found on my github by 
                clicking on the button below. The list is in continuos update!
            </Typography>
            <hr className="hr"/>
            <Row xs={2} md={4} className="g-4">
                {Array.from({length: length}).map((_, idx) => (
                    <Col>
                        <Card style={{ height: '10rem', display: 'flex' }} text="light" border="light" bg="dark">
                            <Card.Body>
                                <Card.Title>
                                    <div className="CardTitle">{cards && cards[idx].name}</div>
                                </Card.Title>
                                <Card.Text>
                                    Language: {cards && cards[idx].language}
                                </Card.Text>
                            </Card.Body>
                            <Button size="sm" 
                                    variant="secondary" 
                                    href= {cards && cards[idx].html_url}                            
                                >View on Github
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Coding;