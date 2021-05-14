import React from 'react'
import { Container, Row, Col,Card,Button } from 'react-bootstrap';
import NavBar from "../myComp/NavBar";
import "./About.css";
import pic from "../assets/pic.jpg";
function About() {
    return (
        <>
            <NavBar />
            <Container id="card">
                <Row>
                    <Col id="about">
                        <h1>Hello Visitors !</h1>
                    </Col>
                    <Col id="card">
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={pic} />
                            <Card.Body>
                                <Card.Title>Gourav Ojha</Card.Title>
                                <Card.Text>
                                    I am a React Developer with deep interest in Python and Data Science as well. I am currently in my journey of mastering MERN stack.  
                                 </Card.Text>
                                 <Card.Text>
                                 My other Web Dev Projects<br/>
                                 <a href="https://gouravojha.github.io/PinShots">PinShots - News Search WebApp</a><br/>
                                 <a href="https://gouravojha.github.io/gocovid19-tracker.github.io/">Covid19 Tracker</a>
                                 </Card.Text>
                                <Button style={{backgroundColor:"blueviolet"}} href="https://gouravojha.github.io/gouravprofile.github.io/">Website</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About
