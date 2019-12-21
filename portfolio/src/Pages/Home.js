import React from "react";
import ProfileImage from "../images/profile.jpg";
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import "./Home.css";


function HomePage() {
    return (
        <div>
            <div>
                <h1 className="lat-text">33.979600</h1>
                <h1 className="long-text">-117.727220</h1>
            </div>
            <div>
                <p className="main-name">DILLON COUCHOIS</p>
            </div>
            <div className="main-content">
                <Row className="justify-content-md-center">
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