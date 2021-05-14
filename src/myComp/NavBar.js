import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <>
          <Navbar expand="lg" className="px-4 header sticky-top">
                <Navbar.Brand id="logo" href="#home">OpenArchive</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="toggle" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="mr-auto">
                        <Nav.Link><NavLink id="home" exact to="/home">Home</NavLink></Nav.Link>
                        <Nav.Link><NavLink id="home" exact to="/category">Category</NavLink></Nav.Link>
                        <Nav.Link><NavLink id="home" exact to="/about">About</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>  
        </>
    )
}

export default NavBar
