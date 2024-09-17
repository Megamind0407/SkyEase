import React from 'react';
import header from './assets/header.jpg'
import './style.css'

function Header() {
    return (
        <header className="header__container" >
            <img src={header} alt="header"/>
            <h1 className="header_text">Find And Book<br />A Great Experience</h1>
        </header>
    );
}

export default Header;
