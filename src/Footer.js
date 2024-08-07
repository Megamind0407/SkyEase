import React from 'react';
import './style.css'
import {RiFacebookCircleFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from '@remixicon/react';
function Footer() {
    return (
        <footer className="footer">
            <div class="section__container">
                <div class="footer_head">
                    <h3>SkyEase</h3>
                </div>
            </div>
            <div className='label'>Copyright &#169; 2024 Aryan Gaikwad. All rights are reserved</div>
            <div class="section__container footer__bar">
                <div class="socials">
                    <a href='./'><span><RiFacebookCircleFill/></span></a>
                    <a href='./'><span><RiTwitterFill/></span></a>
                    <a href='./'><span><RiInstagramLine/></span></a>
                    <a href='./'><span><RiLinkedinFill/></span></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
