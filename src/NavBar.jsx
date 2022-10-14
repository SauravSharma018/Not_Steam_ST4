import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from "react-router-dom";

import GamesHome from './GamesHome'
import About from "./About";
import Contact from "./Contact";

const NavBar = () => {
  
    return ( 
   
    <>
    <div>
       <Navbar bg="primary" variant="primary">
          <Container>
            <Navbar.Brand style={{color:"white"}} href="#home">Not_Steam</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link style={{color:"white"}} as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link style={{color:"white"}} as={Link} to={"/About"}>About</Nav.Link>
              <Nav.Link style={{color:"white"}} as={Link} to={"/Contact"}>Contact us</Nav.Link>
            </Nav>
              <h6 style={{color:"white"}}> Download more games </h6> 
          </Container>
        </Navbar>
      </div>
      
      <div className="bodyTo">
      <Routes>
        <Route exact path="/" element={<GamesHome/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
     </>
    
  
     
    );
  };
  
  export default NavBar;