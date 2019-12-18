import React from "react";
import Navbar from "../Components/Navbar/Nav";
import ProfileImage from "../images/profile.jpg";
import BackgroundImg from "../images/background1.jpg";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./Home.css";


function HomePage() {
    return (
        <div>
            <Navbar />
            <img className="background-image" src= {BackgroundImg} alt="cat"></img>
            <div className="main-content">
                <Row>
                    <Col className="image-container" xs={6} md={4}>
                        <Image className="main-image" src={ProfileImage} thumbnail />
                    </Col>
                    <Col className="main-body" xs={6} md={8}>
                        <h2 className="about-me">About Me</h2>
                        <p>Front-End Web Developer with a background in Photography and Design with a keen eye for detail. 
                            Recently received a certificate in Full Stack Development from the University of California Irvine in Javascript, CSS, React.js and responsive web design.
                            My aim is to bring a dynamic experience to each user accompanied by modern and compelling design. </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default HomePage;