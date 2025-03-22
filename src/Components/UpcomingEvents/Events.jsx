import React from 'react';
import './Events.css';
import EventPoster from '../../assets/404.jpg';

const Events = () => {
    return (
        <div 
            className='Events' 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '20px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div 
                className="Event" 
                style={{
                    marginBottom: '20px',
                }}
            >
                <img 
                    src={EventPoster} 
                    alt="Event Poster" 
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        marginBottom: '20px',
                    }} 
                />
                <div 
                    className="caption" 
                    style={{
                        marginBottom: '20px',
                    }}
                >
                    <h1 style={{ fontSize: '2rem', color: '#ffffff' }}>Register Now!</h1>
                </div>
            </div>
            <br />
            <div 
                className="event-details" 
                style={{
                    maxWidth: '800px',
                    lineHeight: '1.6',
                    width: '100%',  // Add this
                    textAlign: 'center',  // Add this
                }}
            >
                <p style={{ fontWeight: 'bold', color: '#333' }}>Description:</p>
                <p 
                    className='Desc' 
                    style={{
                        color: '#555',
                        fontSize: '1rem',
                        margin: '10px auto',  // Change this
                        maxWidth: '600px',    // Add this
                        textAlign: 'center'
                    }}
                >
                    404 Logic Not Found is a unique coding event that blends fun, creativity, and logical problem-solving. Participants will tackle two innovative rounds—debugging hidden issues in a virtual bug hunt and assembling fragmented code like a puzzle—challenging their adaptability, teamwork, and coding skill.
                </p>

                <p style={{ fontWeight: 'bold', color: '#333', marginTop: '15px' }}>Rules:</p>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    <li style={{ margin: '5px 0' }}>Teams of 2-3 members.</li>
                    <li style={{ margin: '5px 0' }}>Strict time limits for each round.</li>
                </ul>

                <p style={{ fontWeight: 'bold', color: '#333', marginTop: '15px' }}>Contact Details:</p>
                <p>
                    <b>Student Coordinators:</b><br />
                    Ketaki Shinde - 7498133608<br />
                    Arya Deshmukh - 8291298878
                </p>
                <p>
                    <b>Faculty Coordinators:</b><br />
                    Dr. Vishnudarshini - 8870115862<br />
                    Dr. Aarthi. B - 9585052507
                </p>

                <p style={{ marginTop: '15px' }}><b>Venue:</b> MLCP LAB 1</p>
                <p><b>Date & Time:</b> March 28 at 09:30 AM</p>
                <p><b>Entry Fee:</b> ₹200</p>
                <p><b>Team Size:</b> 2 - 3</p>
            </div>
        </div>
    );
}

export default Events;
