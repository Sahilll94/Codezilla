import React, { useState, useEffect } from 'react';
import './Events.css';
import { motion, AnimatePresence } from 'framer-motion';
import UpEvent from '../../assets/OpenSourceOdyssey.jpg';

const UpcomingEvents = ({ darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formTouched, setFormTouched] = useState({});

  // Event details
  const eventData = {
    title: "Open Source Odyssey",
    tagline: "Showcase your coding skills",
    date: new Date('2025-05-28T11:00:00'),
    venue: "BMS LAB 1",
    description: "Join us for an exciting coding challenge where you'll solve real-world problems and compete with fellow coders. Win exciting prizes and gain recognition!",
    agenda: [
      { time: "10:00 AM", activity: "Registration & Welcome" },
      { time: "10:30 AM", activity: "Introduction to Challenges" },
      { time: "11:00 AM", activity: "Coding Competition Begins" },
      { time: "01:00 PM", activity: "Lunch Break" },
      { time: "02:00 PM", activity: "Resume Competition" },
      { time: "04:00 PM", activity: "Presentations" },
      { time: "05:00 PM", activity: "Awards & Closing" },
    ]
  };
  
  // Calculate time remaining until event
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = eventData.date - now;
    
    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }
    
    // Time calculations
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds, isExpired: false };
  };
  
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    else if (!validateEmail(email)) errors.email = "Invalid email address";
    if (!registrationNumber) errors.registrationNumber = "Registration number is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') setName(value);
    else if (id === 'email') setEmail(value);
    else if (id === 'registrationNumber') setRegistrationNumber(value);

    setFormTouched({...formTouched, [id]: true});
  };

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setRegistered(true);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
    }
  };

  const toggleNotification = () => {
    if (!notificationEnabled) {
      // Request notification permission
      if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            setNotificationEnabled(true);
            // Show a test notification
            new Notification('Notification Enabled!', {
              body: 'You will be notified before the event starts.',
              icon: '/images/codezilla-logo.png'
            });
          }
        });
      } else {
        setNotificationEnabled(true);
      }
    } else {
      setNotificationEnabled(false);
    }
  };

  const [activeTab, setActiveTab] = useState('details');

  return (
    <div className="events-container">
      <motion.div 
        className={`event-card ${darkMode ? 'dark' : 'light'}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: darkMode 
            ? '0 15px 30px rgba(0, 0, 0, 0.5)' 
            : '0 15px 30px rgba(0, 0, 0, 0.2)'
        }}
      >
        <div 
          className="event-image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img 
            src={UpEvent} 
            alt="404! Logic Not Found Event"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="event-overlay"
            animate={{ 
              background: isHovered 
                ? 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5))' 
                : 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))'
            }}
          >
            <motion.h3
              initial={{ y: 0 }}
              animate={{ y: isHovered ? -10 : 0 }}
              transition={{ duration: 0.3 }}
            >{eventData.title}</motion.h3>
            <motion.p
              initial={{ opacity: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0.8 }}
            >{eventData.tagline}</motion.p>
            
            {isHovered && (
              <motion.button 
                className="event-cta-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setShowDetails(true)}
              >
                Learn More
              </motion.button>
            )}
          </motion.div>
        </div>
        
        <div className="event-countdown">
          <div className="countdown-timer">
            {timeRemaining.isExpired ? (
              <div className="event-live">
                <span className="live-indicator"></span>
                {/* Event In Progress */}
                🎉 The Event Has Concluded!
                But don't worry — this is just the beginning! 🚀
              </div>
            ) : (
              <>
                <div className="countdown-item">
                  <motion.span 
                    className="count"
                    key={timeRemaining.days}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >{timeRemaining.days}</motion.span>
                  <span className="label">Days</span>
                </div>
                <div className="countdown-item">
                  <motion.span 
                    className="count"
                    key={timeRemaining.hours}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >{timeRemaining.hours}</motion.span>
                  <span className="label">Hours</span>
                </div>
                <div className="countdown-item">
                  <motion.span 
                    className="count"
                    key={timeRemaining.minutes}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >{timeRemaining.minutes}</motion.span>
                  <span className="label">Mins</span>
                </div>
                <div className="countdown-item">
                  <motion.span 
                    className="count"
                    key={timeRemaining.seconds}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >{timeRemaining.seconds}</motion.span>
                  <span className="label">Secs</span>
                </div>
              </>
            )}
          </div>
          
          <motion.button 
            className="expand-details-button"
            onClick={() => setShowDetails(!showDetails)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
            <span className={`arrow ${showDetails ? 'up' : 'down'}`}>
              {showDetails ? '▲' : '▼'}
            </span>
          </motion.button>
        </div>
        
        <AnimatePresence>
          {showDetails && (
            <motion.div 
              className="event-expanded-details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'details' ? 'active' : ''}`}
                  onClick={() => setActiveTab('details')}
                >
                  Details
                </button>
                <button 
                  className={`tab ${activeTab === 'agenda' ? 'active' : ''}`}
                  onClick={() => setActiveTab('agenda')}
                >
                  Agenda
                </button>
                <button 
                  className={`tab ${activeTab === 'register' ? 'active' : ''}`}
                  onClick={() => setActiveTab('register')}
                >
                  Register
                </button>
              </div>
              
              <div className="tab-content">
                {activeTab === 'details' && (
                  <motion.div 
                    className="details-tab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="event-info">
                      <div className="info-item">
                        <span className="info-icon">📅</span>
                        <div>
                          <strong>Date</strong>
                          <p>{eventData.date.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</p>
                        </div>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">⏰</span>
                        <div>
                          <strong>Time</strong>
                          <p>{eventData.date.toLocaleTimeString('en-US', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}</p>
                        </div>
                      </div>
                      <div className="info-item">
                        <span className="info-icon">📍</span>
                        <div>
                          <strong>Venue</strong>
                          <p>{eventData.venue}</p>
                        </div>
                      </div>
                    </div>
                    <p className="event-description">{eventData.description}</p>
                    
                    <div className="action-buttons">
                      <motion.button 
                        className="action-button share-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          if (navigator.share) {
                            navigator.share({
                              title: eventData.title,
                              text: eventData.description,
                              url: window.location.href,
                            });
                          } else {
                            // Fallback
                            alert('Share functionality not available');
                          }
                        }}
                      >
                        Share Event
                      </motion.button>
                      <motion.button 
                        className="action-button register-now-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveTab('register')}
                      >
                        Register Now
                      </motion.button>
                    </div>
                  </motion.div>
                )}
                
                {activeTab === 'agenda' && (
                  <motion.div 
                    className="agenda-tab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <ul className="agenda-list">
                      {eventData.agenda.map((item, index) => (
                        <motion.li 
                          key={index}
                          className="agenda-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="agenda-time">{item.time}</span>
                          <span className="agenda-activity">{item.activity}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                {activeTab === 'register' && (
                  <motion.div 
                    className="register-tab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {registered ? (
                      <div className="registration-success">
                        <motion.div 
                          className="success-icon"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 10 }}
                        >
                          ✓
                        </motion.div>
                        <h3>Registration Successful!</h3>
                        <p>Thank you for registering, {name}!</p>
                        <p>We've sent confirmation details to {email}</p>
                        <p className="reg-number-confirmation">Your registration ID: <strong>{registrationNumber}</strong></p>
                        
                        <motion.div 
                          className="confirmation-details"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4>What's Next?</h4>
                          <ul className="next-steps">
                            <li>Check your email for event details</li>
                            <li>Prepare for the coding challenges</li>
                            <li>Join us on the event day with your registration ID</li>
                          </ul>
                        </motion.div>
                        
                        <div className="notification-option">
                          <button 
                            className={`notification-toggle ${notificationEnabled ? 'enabled' : ''}`}
                            onClick={toggleNotification}
                          >
                            {notificationEnabled ? 'Notifications On' : 'Enable Notifications'}
                          </button>
                          <p className="notification-info">
                            Get reminded before the event starts
                          </p>
                        </div>
                      </div>
                    ) : (
                      <form className="registration-form" onSubmit={handleRegister}>                        <div className="form-group">
                          <label htmlFor="name"></label>
                          <input 
                            type="text" 
                            id="name" 
                            value={name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className={formTouched.name && formErrors.name ? "error" : ""}
                            autoComplete="name"
                            required
                          />
                          {formTouched.name && formErrors.name && (
                            <span className="error-message">{formErrors.name}</span>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="email"></label>
                          <input 
                            type="email" 
                            id="email"
                            value={email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            className={formTouched.email && formErrors.email ? "error" : ""}
                            autoComplete="email"
                            required
                          />
                          {formTouched.email && formErrors.email && (
                            <span className="error-message">{formErrors.email}</span>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="registrationNumber"></label>
                          <input 
                            type="text" 
                            id="registrationNumber"
                            value={registrationNumber}
                            onChange={handleInputChange}
                            placeholder="Enter registration number"
                            className={formTouched.registrationNumber && formErrors.registrationNumber ? "error" : ""}
                            required
                          />
                          {formTouched.registrationNumber && formErrors.registrationNumber && (
                            <span className="error-message">{formErrors.registrationNumber}</span>
                          )}
                        </div>
                        <motion.button 
                          type="submit"
                          className="register-button"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          Register Now
                        </motion.button>
                      </form>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {showConfirmation && (
            <motion.div 
              className="confirmation-toast"
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -20, x: "-50%" }}
            >
              Registration confirmed! Check your email for details.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default UpcomingEvents;
