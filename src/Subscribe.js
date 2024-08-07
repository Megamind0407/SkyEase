import React from 'react';
import './style.css'
function SubscribeSection() {
    return (
        <section class="subscribe">
            <div class="section__container subscribe__container">
                <h2 class="section__header">Subscribe newsletter & get latest news</h2>
                <form class="subscribe__form">
                    <input type="text" placeholder="Enter your email here" />
                    <button class="btn">Subscribe</button>
                </form>
            </div>
        </section>
    );
}

export default SubscribeSection;
