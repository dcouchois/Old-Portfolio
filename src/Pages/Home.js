import React from "react";
import dcResume from "../images/resume.pdf";
import ProfileImage from "../images/headshot.jpg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Mailto from "react-protected-mailto";
import "./Home.css";


function HomePage() {
    return (
        <div className="all-content">
            <div>
                <h1 className="lat-text">33.979600</h1>
                <h1 className="long-text">-117.727220</h1>
            </div>
            <div>
                <img src={ProfileImage} alt="cat" className="main-image"></img>
            </div>
            <div className="main-content">
                <Row className="justify-content-md-center">
                    <p className="main-name">DILLON COUCHOIS</p>
                    <Col className="main-body" xs={6} md={10}>
                        <p>Front-End Web Developer with a background in Photography and Design with a keen eye for detail.
                            Recently received a certificate in Full Stack Development from the University of California Irvine in Javascript, CSS, React.js and responsive web design.
                            My aim is to bring a dynamic experience to each user accompanied by modern and compelling design. </p>
                        <p className="contact-title"> CONTACT </p>
                            <a href={dcResume} target="_blank" rel="noopener noreferrer" className="c-btn"> Resume </a>
                             | | 
                            <a href="https://www.linkedin.com/in/dillon-couchois-45b2bb163/" target="_blank" rel="noopener noreferrer" className="c-btn"> LinkedIn </a>
                             | | 
                            <a href="https://github.com/dcouchois" target="_blank" rel="noopener noreferrer" className="c-btn"> Github </a>
                             | |
                            <p>
                                Email: <Mailto className="c-btn"
                                email = "dcouchois@gmail.com"
                                headers = {
                                    {subject: "No Subject"}
                                }/>  
                            </p> 
                    </Col>
                </Row>
            </div>
            <div className="color-block"></div>
        </div>
    )
}

export default HomePage;