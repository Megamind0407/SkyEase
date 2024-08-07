import React from 'react';
import header from './assets/header.jpg'
import './style.css'

function Header() {
    return (
        <header className="section__container header__container">
            <h1 className="section__header">Find And Book<br />A Great Experience</h1>
            <img src={header} alt="header" />
        </header>
    );
}

export default Header;
