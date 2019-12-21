import React from "react";
import BackgroundImg from "../images/background1.jpg";
import "./Resume.css";


function Resume() {
    return (
        <div>
            <img className="resume-image" src= {BackgroundImg} alt="cat"></img>
        </div>
    )
}

export default Resume;