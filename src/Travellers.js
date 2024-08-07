import React from 'react';
import traveller1 from './assets/traveller-1.jpg'
import traveller2 from './assets/traveller-2.jpg'
import traveller3 from './assets/traveller-3.jpg'
import traveller4 from './assets/traveller-4.jpg'
import client1 from './assets/client-1.jpg'
import client2 from './assets/client-2.jpg'
import client3 from './assets/client-3.jpg'
import client4 from './assets/client-4.jpg'
import './style.css'

function TravellersSection() {
    return (
        <section className="section__container travellers__container">
            <div className="travellers__header">
                <h2 className="section__header">Supporting All Travellers</h2>
            </div>
            <div className="travellers__grid">
                <div className="travellers__card">
                    <img src={traveller1} alt="travellers" />
                    <div class="travellers__card__content">
                        <img src={client1} alt="client" />
                        <h4>Emily Johnson</h4>
                        <p>Dubai</p>
                    </div>
                </div>
                <div className="travellers__card">
                    <img src={traveller2} alt="travellers" />
                    <div class="travellers__card__content">
                        <img src={client2} alt="client" />
                        <h4>Jerry Cole</h4>
                        <p>Paris</p>
                    </div>
                </div>
                <div className="travellers__card">
                    <img src={traveller3} alt="travellers" />
                    <div class="travellers__card__content">
                        <img src={client3} alt="client" />
                        <h4>Sofia Brown</h4>
                        <p>Singapore</p>
                    </div>
                </div>
                <div className="travellers__card">
                    <img src={traveller4} alt="travellers" />
                    <div class="travellers__card__content">
                        <img src={client4} alt="client" />
                        <h4>Ryan Taylor</h4>
                    <p>Malaysia</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TravellersSection;
