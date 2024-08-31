/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css'
function NavBar() {
    return (
        <nav>
            <div className="nav__logo">
                SkyEase
            </div>
            <ul className="nav__links">
                <li className="link"><a href="./">Home</a></li>
                <li className="link"><a href="/about">About</a></li>
                <li className="link"><a href="#">Offers</a></li>
                <li className="link"><a href="#">Seats</a></li>
                <li className="link"><a href="#">Destinations</a></li>
            </ul>
            <button className="btn">Contact Us</button>
        </nav>
    );
}

export default NavBar;
