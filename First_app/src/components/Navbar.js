import React from "react";
import reactlogo from "../images/airbnb-logo.png"


export default function Navbar() {
    return (
        <div>
            <nav>
                <img className="nav--logo" src={reactlogo} alt="reactlogo" />
            </nav>

        </div>
    )
}