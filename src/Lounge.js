import React from 'react';
import lounge1 from './assets/lounge-1.jpg'
import lounge2 from './assets/lounge-2.jpg'
import './style.css'
function LoungeSection() {
    return (
        <section className="section__container lounge__container">
            <div className="lounge__image">
                <img src={lounge1} alt="lounge" />
                <img src={lounge2}alt="lounge" />
            </div>
            <div className="lounge__content">
                <h2 className="section__header">Unaccompanied Minor Lounge</h2>
                <div className="lounge__grid">
                    <div className="lounge__details">
                        <h4>Experience Tranquility</h4>
                        <p>
                            Serenity Haven offers a tranquil escape, featuring comfortable seating, calming ambiance, and attentive service.
                        </p>
                    </div>
                    <div className="lounge__details">
                        <h4>Elevate Your Experience</h4>
                        <p>
                            Designed for discerning travelers, this exclusive lounge offers premium amenities, assistance, and private workspaces.
                        </p>
                    </div>
                    <div className="lounge__details">
                        <h4>A Welcoming Space</h4>
                        <p>
                            The Family Oasis Lounge is thoughtfully designed with a vibrant play area, cozy seating, and child-friendly amenities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoungeSection;
