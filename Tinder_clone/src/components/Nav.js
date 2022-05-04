import React from "react";
import whiteLogo from "../images/tinder_logo_white.png"
import colorLogo from "../images/color-logo-tinder.png"

export default function Nav({ minimal, setShowModal, showModal, setIsSignUp }) {

    function handleClick() {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo} />
            </div>
            {!authToken && !minimal && <button
                onClick={handleClick}
                className="nav-button"
                disabled={showModal}
            >Log In</button>}
        </nav>
    );
}