import React from 'react'
import {Figure, Container, Row, Col,Button } from "react-bootstrap";
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import "./Home.css"
import NavBar from "../myComp/NavBar";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
function Home() {
    return (
        <>
            <NavBar/>
            <Container>
                <Row>
                    <Col>
                        <Figure id="fig">
                            <Row>
                                <Col xs={12}>
                                    <Figure.Image
                                        width={500}
                                        height={500}
                                        alt="figure"
                                        src={c1}
                                    />
                                </Col>
                                <Col xs={12} className="caption">
                                    <h3>What is an <code>API</code> ?</h3>
                                </Col>
                                <Col xs={12} className="caption">
                                    <p>An API (Application Programming Interface) is a set of functions that allows applications to access data and interact with external software components, operating systems, or microservices. To simplify, an API delivers a user response to a system and sends the system's response back to a user.</p>
                                </Col>
                            </Row>
                        </Figure>
                        <Figure id="fig">
                            <Row>
                                <Col xs={12}>
                                    <Figure.Image
                                        width={500}
                                        height={500}
                                        alt="figure"
                                        src={c2}
                                    />
                                </Col>
                                <Col xs={12} className="caption">
                                    <h3>What are the types of <code>API's</code> ?</h3>
                                </Col>
                                <Col xs={12} className="caption">
                                    <p>
                                        <ul>
                                            <li><code><code>Open API's</code></code>, also known as external or public APIs, are available to developers and other users with minimal restrictions</li><br />
                                            <li><code>Internal APIs</code> are designed to be hidden from external users. They are used within a company to share resources. They allow different teams or sections of a business to consume each other’s tools, data and programs</li><br />
                                            <li><code>Partner APIs</code> are technically similar to <code>Open API's</code>, but they feature restricted access, often controlled through a third-party API gateway.</li><br />
                                            <li><code>Composite APIs</code> allow developers to access several endpoints in one call. These could be different endpoints of a single API, or they could be multiple services or data sources. Composite APIs are especially useful in microservice architectures, where a user may need information from several services to perform a single task.</li><br />
                                        </ul>
                                    </p>
                                </Col>
                            </Row>
                        </Figure>
                        <Figure id="fig">
                            <Row>
                                <Col xs={12}>
                                    <Figure.Image
                                        width={500}
                                        height={500}
                                        alt="figure"
                                        src={c3}
                                    />
                                </Col>
                                <Col xs={12} className="caption">
                                    <h3>Types of <code>API</code> Architectures</h3>
                                </Col>
                                <Col xs={12} className="caption">
                                    <p>
                                        <ul>
                                            <li><strong>SOAP</strong> operates with the two basic functions – GET and POST. GET is used to retrieve data from the server, while POST is used to add or modify data.</li>  <br />
                                            <li>
                                                <strong>REST</strong>, in its turn, changes the state of the corresponding source by making a request to the URI (Uniform Resource Identifier).
                                    </li><br />
                                            <li>
                                                <strong>GraphQL</strong> leverages requests of two types – queries retrieving data from the server, and mutations changing the data.
                                    </li><br />
                                        </ul>
                                    </p>
                                </Col>
                                <Col xs={12} className="caption">
                                    <h3>When to Use SOAP, REST or GraphQL?</h3>
                                </Col>
                                <Col xs={12} className="caption">
                                    <p>
                                        <ul>
                                            <li><strong>SOAP</strong> can be used in enterprise solutions with formal contract-based exchange formats. Also, SOAP APIs perform best when there are acceleration mechanisms implemented on both sides.</li><br />
                                            <li>
                                                <strong>REST</strong> is very JavaScript-friendly, so it is a perfect choice for JavaScript-based applications. Besides, it can cope with higher loads and process data quicker than SOAP. Thus if your application is rather load-intensive, REST may be your API of choice.
                                    </li><br />
                                            <li>
                                                <strong>GraphQL</strong> can show the best performance when the number of queries needs to be reduced to the absolute minimum. With its single query addressing multiple resources, GraphQL can be a good match to this challenge. Also, considering the fact that in GraphQL data is defined on the client side, it can be a good solution for cases when there is no dependency between the client application and the server.
                                    </li><br />
                                        </ul>
                                    </p>
                                </Col>
                                <Figure id="fig">
                                    <Row>
                                        <Col xs={12}>
                                            <Figure.Image
                                                width={500}
                                                height={500}
                                                alt="figure"
                                                src={c4}
                                            />
                                        </Col>
                                        <Col xs={12} className="caption">
                                            <h3>Let's Discuss <code>Open API's</code> ?</h3>
                                        </Col>
                                        <Col xs={12} className="caption">
                                            <p><code>Open API's</code> can be used by businesses seeking to leverage the ever-growing community of freelancing developers who have the ability to create innovative applications that add value to their core business. <code>Open API's</code> are favoured in the business sphere as they simultaneously increase the production of new ideas without investing directly in development efforts.</p>
                                        </Col>
                                        <Col xs={12} className="caption">
                                            <p><p>
                                                With the rise in prominence of HTML5 and Web 2.0, the modern browsing experience has become interactive and dynamic and this has, in part, been accelerated through the use of <code>Open API's</code>. Some <code>Open API's</code> fetch data from the database behind a website and these are called Web APIs. For example, Google's YouTube API allows developers to integrate YouTube into their applications by providing the capability to search for videos, retrieve standard feeds, and see related content.
                                    </p></p><br />
                                        </Col>
                                        <Col xs={12} className="caption">
                                            <iframe src='https://www.youtube.com/embed/pRS9LRBgjYg'
                                            height="250" width="100%"
                                                frameborder='1'
                                                allow='autoplay; encrypted-media'
                                                allowfullscreen
                                                title='open api by IBM Cloud'
                                            />
                                        </Col>
                                        <Col xs={12} className="caption py-5">
                                            <Button style={{backgroundColor:"blueviolet"}}><NavLink style={{textDecoration:"none",color:"white"}} exact to="/category">Open API's <FiArrowRight size={20}/></NavLink></Button>
                                        </Col>
                                    </Row>
                                </Figure>
                            </Row>
                        </Figure>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
