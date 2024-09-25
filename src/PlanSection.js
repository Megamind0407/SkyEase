import React from 'react';
import plan1 from './assets/plane-1.jpg'
import plan2 from './assets/plane-2.jpg'
import plan3 from './assets/plane-3.jpg'
import './style.css'
function PlanSection() {
    return (
        <section className="section__container plan__container">
            <p className="subheader">TRAVEL SUPPORT</p>
            <h2 className="section__header">Prepare your trip with assurance.</h2>
            <p className="description">
                See what to expect on your trip and get assistance with bookings and travel arrangements.
            </p>
            <div className="plan__grid">
                <div className="plan__content">
                    <span className="number">01</span>
                    <h4>Travel Requirements</h4>
                    <p>
                        To ensure a hassle-free and seamless visit to this fascinating and lively city, be well-informed and organized for your trip by knowing the necessary travel needs.
                    </p>
                    <span className="number">02</span>
                    <h4>Travel insurance with several risks</h4>
                    <p>
                        Entire peace of mind protection, encompassing a variety of possible travel hazards and unforeseen circumstances.
                    </p>
                    <span className="number">03</span>
                    <h4>Destination-specific Travel Requirements</h4>
                    <p>
                        We offer the most recent information on travel needs unique to your targeted places, so stay informed and organize your trip with ease.
                    </p>
                </div>
                <div className="plan__image">
                    <img src={plan1} alt="plan" />
                    <img src={plan2}alt="plan" />
                    <img src={plan3} alt="plan" />
                </div>
            </div>
        </section>
    );
}

export default PlanSection;
