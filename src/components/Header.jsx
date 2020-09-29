import React from 'react'
import Lottie from "lottie-react";
import logo from '../assets/money.json';

const Header = () => {
    return (
        <div className="header">
            <div style={{width: "70px"}}><Lottie animationData={logo} /></div>
            <h1>Spendr</h1>
        </div>
    )
}

export default Header;
