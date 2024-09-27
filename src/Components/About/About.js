import React from 'react';
import header from "../../assets/about_head.jpg";
import "./About.css";

function About() {
    return (
        <div className='about_container'>
            <div className='about_header'>
                <div className='about_desc'>
                    <h1>About Us</h1>
                    <span>
                        We at <strong>SkyEase</strong>, are dedicated to making air travel less complicated. Our platform offers an innovative and user-friendly interface that allows you to <strong>book flights effortlessly. </strong>Whether you're booking a well-planned business trip or a last-minute vacation, our platform's cutting-edge and intuitive interface makes it simple to book flights.
                        <br /><br />
                        Driven by cutting-edge technology, SkyEase provides you with <strong>real-time flight comparisons</strong>, <strong>personalized recommendations</strong>, and <strong>dynamic pricing models</strong> to ensure you always get the best value for your journey.
                        <br />
                    </span>
                </div>
                <img src={header} alt='' />
            </div>
            <span className='footer_text'>Discover the world with us, where your journey begins.</span>
        </div>
    );
}

export default About;
