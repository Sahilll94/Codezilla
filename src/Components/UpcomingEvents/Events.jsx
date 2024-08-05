import React from 'react';
import './Events.css';
import EventPoster from '../../assets/EventImage.png';
import EventIcon from '../../assets/program-icon-3.png';

const Events = () => {
    return (
        <div className='Events'>
            <div className="Event">
                <img src={EventPoster} alt="Event Poster" />
                <div className="caption">
                    {/* <img src={EventIcon} alt="Event Icon" /> */}
                    <p>Code Quest</p>
                </div>
            </div>
            <br></br>
            <p className='Desc'>🚀 Hover your cursor over the image, and with a simple click, you'll be seamlessly guided to register for the event. Enjoy an engaging experience! 💻✨</p>
        </div>
    );
}

export default Events;
