import React from 'react';
import lounge1 from './assets/lounge-1.jpg'
import lounge2 from './assets/lounge-2.jpg'
import './style.css'
function LoungeSection() {
    return (
        <section className="section__container lounge__container">
            <div className="lounge__image">
                <img src={lounge2}alt="lounge" />
                <img src={lounge1} alt="lounge" />
            </div>
            <div className="lounge__content">
                <h2 className="section__header">Premium Lounge Experience</h2>
                <div className="lounge__grid">
                    <div className="lounge__details">
                        <h4>Experience Tranquility</h4>
                        <p>
                            Serenity Haven is a peaceful haven with cozy seating, a soothing atmosphere, and attentive service.
                        </p>
                    </div>
                    <div className="lounge__details">
                        <h4>Enhance Your Engagement</h4>
                        <p>
                            This exclusive lounge provides private workstations, premium facilities, and support, catering to discerning guests.
                        </p>
                    </div>
                    <div className="lounge__details">
                        <h4>A Pleasant Environment</h4>
                        <p>
                            With its colorful play area, comfortable seats, and kid-friendly features, the Family Oasis Lounge is a thoughtfully planned space.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoungeSection;
