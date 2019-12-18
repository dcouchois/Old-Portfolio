import React from "react";
import Navbar from "../Components/Navbar/Nav";
import BackgroundImg from "../images/background1.jpg";
import "./Home.css";


function HomePage() {
    return (
        <div>
            <Navbar />
            <img className="background-image" src= {BackgroundImg} alt="cat"></img>
        </div>
    )
}

export default HomePage;