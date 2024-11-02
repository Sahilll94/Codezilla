import React from 'react';
import './Events.css';
import EventPoster from '../../assets/UpEvent.png';
import EventIcon from '../../assets/program-icon-3.png';

const Events = () => {
    return (
        <div className='Events'>
            <div className="Event">
                <img src={EventPoster} alt="Event Poster" />
                <div className="caption">
                    {/* <img src={EventIcon} alt="Event Icon" /> */}
                    {/* <h1>Open Source Odyssey</h1> */}
                    <h1>Stay tuned!</h1>
                </div>
            </div>
            <br></br>
            <p><b>Exciting Times Ahead!</b></p>
            <p className='Desc'>Big things are on the way! Stay tuned for the incredible events we’re crafting just for you! Your next adventure awaits! 🚀 </p>
        </div>
    );
}

export default Events;
