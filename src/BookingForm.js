import { RiCalendar2Fill,RiCalendarFill, RiMapPin2Fill,RiSearchLine, RiUser3Fill } from '@remixicon/react';
import React from 'react';

function BookingForm() {
    return (
        <section className="section__container booking__container">
            <div className="booking__nav">
                <span>Economy Class</span>
                <span>Business Class</span>
                <span>First Class</span>
            </div>
            <form>
                <div className="form__group">
                    <span><RiMapPin2Fill/></span>
                    <div className="input__content">
                        <div className="input__group">
                            <input type="text" />
                            <label>Location</label>
                        </div>
                        <p>Where are you going?</p>
                    </div>
                </div>
                <div className="form__group">
                    <span><RiUser3Fill/></span>
                    <div className="input__content">
                        <div className="input__group">
                            <input type="number" />
                            <label>Travellers</label>
                        </div>
                        <p>Add guests</p>
                    </div>
                </div>
                <div className="form__group">
                    <span><RiCalendarFill/></span>
                    <div className="input__content">
                        <div className="input__group">
                            <input type="text" />
                            <label>Departure</label>
                        </div>
                        <p>Add date</p>
                    </div>
                </div>
                <div className="form__group">
                    <span><RiCalendar2Fill/></span>
                    <div className="input__content">
                        <div className="input__group">
                            <input type="text" />
                            <label>Return</label>
                        </div>
                        <p>Add date</p>
                    </div>
                </div>
                <button className="btn"><RiSearchLine/></button>
            </form>
        </section>
    );
}

export default BookingForm;
