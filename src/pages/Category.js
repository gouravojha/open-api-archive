import React from 'react'
import NavBar from "../myComp/NavBar";
import "./Category.css"
import { category } from "../myComp/catogdata";
import { Container, Row, Col,  Card, Button,DropdownButton,Dropdown } from "react-bootstrap";
import { useState,useEffect } from "react";
function Category() {
    const [dat, setData] = useState([])
    const [cat,setCat] = useState('')
    useEffect(()=>{
        fetch(`https://api.publicapis.org/entries?category=${cat}&https=true`)
        .then(response => {
            return (response.json());
          }).then(data => {
            setData(data.entries)
            console.log(data["entries"])
          })
          .catch(err => {
            console.error(err);
          });
    },[cat]);
    return (
        <>
            <NavBar />
            <Container id="container">
                <Row>
                    <Col xs={12}>
                        <h3><code>Choose your Open API from a veriety of different Category</code></h3>
                    </Col>
                    <Col xs={12} id="container">
                        <DropdownButton id="dropdown-item-button" title="Category">
                            {
                                category.map((e) => {
                                    return (
                                        <Dropdown.Item as="button" onClick={() => { setCat(e) }}>{e}</Dropdown.Item>
                                    )
                                })
                            }
                        </DropdownButton>
                    </Col>
                    {
                        dat.map((d) => {
                            return (

                                <Col xs={12} id="card">
                                    <Card style={{ width: '20rem' }}>
                                        <Card.Body>
                                            <Card.Title style={{color:"coral"}}>API: {d.API}</Card.Title>
                                            <Card.Text>Category: {d.Category}</Card.Text>
                                            <Card.Text style={{color:"darkmagenta"}}>Description: {d.Description}</Card.Text>
                                            <Card.Text style={{color:"darkgreen"}}>HTTPS: {d.HTTPS.toString()}</Card.Text>
                                            <Button variant="outline-danger" href={d.Link}>URL</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </>
    )
}

export default Category
