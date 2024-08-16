import React from 'react';
import './Events.css';
import EventPoster from '../../assets/OpenSourceOdyssey.jpg';
import EventIcon from '../../assets/program-icon-3.png';

const Events = () => {
    return (
        <div className='Events'>
            <div className="Event">
                <a href='http://codezilla-one.vercel.app' target='__onblank'>
                <img src={EventPoster} alt="Event Poster" />
                <div className="caption">
                    {/* <img src={EventIcon} alt="Event Icon" /> */}
                    {/* <h1>Open Source Odyssey</h1> */}
                    <h1>Click on me!</h1>
                </div></a>
            </div>
            <br></br>
            <h1 className='Desc'>🚀 Are you ready for an epic journey into open source?</h1>
            <h1 className='Desc'>🌍💻 Click the image to register for the event!</h1>
            <br></br>
            <p className='Desc'>Join Codezilla’s Open Source Odyssey on <b>24th August 2024</b> at <b>09:30 AM</b>, <b>4th Floor Lab</b>, <b>BMS Block.</b> Learn, collaborate, and enjoy free Hero Chai coupons! <a href='http://codezilla-one.vercel.app' target='__onblank'> <b>Register now!</b> </a> </p>
        </div>
    );
}

export default Events;
