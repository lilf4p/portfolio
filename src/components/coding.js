import React, {useState, useEffect} from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

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
    const [cards, setCards] = useState([{}]);

    //Funzione che setta i dati della lista delle repository
    const setData =  ([{name,language,html_url}]) => {
        setCards([ {name,language,html_url} ]);
    }

    const addData =  ({name,language,html_url}) => {
        setCards([...cards, {name,language,html_url} ]);
    }

    //Fetch della lista delle repository dalla api di github
    useEffect(() => {
        fetch('https://api.github.com/users/lilf4p/repos')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                
            });
    }, []);

    console.log(cards);

    return (
        <Container fluid='true' className='Coding'>
            <h1>Coding</h1>
            <Row id='code' xs={3} md={3} className="g-5">
                {Array.from({length: 6}).map((_, idx) => (
                    <Col>
                        <Card text="dark">
                            <Card.Img variant="top" src={require("../immagini/mrrobot.jpg")} />
                            <Card.Body>
                                <Card.Title>
                                    {cards[0].name}
                                </Card.Title>
                                <Card.Text>
                                    {cards[0].language}
                                </Card.Text>
                            </Card.Body>
                            <Button size="sm" 
                                    variant="dark" 
                                    href= {cards[0].html_url}                                  
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