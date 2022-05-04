import React from "react";
import heroImage from "../images/photo-grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero-image" src={heroImage} />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </div>
    )
}