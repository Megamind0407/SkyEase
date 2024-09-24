import React from 'react';
import { RiBookmark2Line, RiCalendar2Line, RiShieldCheckLine} from "@remixicon/react";
import './style.css'

function MemoriesSection() {
    return (
        <section className="memories">
            <div className="section__container memories__container">
                <div className="memories__header">
                    <h2 className="section__header">Journey to create lifelong memories worldwide</h2>
                </div>
                <div className="memories__grid">
                    <div className="memories__card">
                        <span><RiCalendar2Line size={44}/></span>
                        <h4>Book & relax</h4>
                        <p>
                            With "Book and Relax," you can sit back, unwind, and enjoy the journey while we take care of everything else.
                        </p>
                    </div>
                    <div className="memories__card">
                        <span><RiShieldCheckLine size={44}/></span>
                        <h4>Smart Checklist</h4>
                        <p>
                            Introducing Smart Checklist with us, the innovative solution revolutionizing the way you travel with our airline.
                        </p>
                    </div>
                    <div className="memories__card">
                        <span><RiBookmark2Line size={44}/></span>
                        <h4>Save More</h4>
                        <p>
                            From discounted ticket prices to exclusive promotions and deals, we prioritize affordability without compromising on quality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MemoriesSection;
