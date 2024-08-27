import React from 'react';
import './Events.css';
import EventPoster from '../../assets/NoUpcomingEvent.png';
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
            <p className='Desc'>Big things are coming! Stay tuned for upcoming events that we're planning just for you. </p>
        </div>
    );
}

export default Events;
