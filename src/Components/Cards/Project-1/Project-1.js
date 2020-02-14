import React from "react";
import BTS from "../../../images/BTS-gif.gif"
import Row from 'react-bootstrap/Row';
import "./P1.css";


function P1Card() {
    return (
        <div>
            <div className="image-tile">
                <p className="bts-title">
                    BREACH THE SUMMIT
                </p>
                <a href="https://dcouchois.github.io/BreachTheSummit/" target="_blank" rel="noopener noreferrer"><img src={BTS} alt="cat" className="bts-image"></img></a>
            </div>
            <div className="bts-content">
                <Row className="description" xs={6} md={10}>
                    <p>
                        A simple and effective app for locating the top ten trails near you for hiking. 
                    </p>
                </Row>
                <Row className="tech">
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Materialize</li>
                        <li>Google Maps API</li>
                    </ul>
                </Row>
                <Row>
                    <p>
                        Click the image to navigate to project site.
                    </p>
                </Row>
            </div>
        </div>
    )
}

export default P1Card;