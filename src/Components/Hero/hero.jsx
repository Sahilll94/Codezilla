import React, { useState, useEffect } from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const hero = () => {
  // Text typing effect for the hero heading
  const [displayText, setDisplayText] = useState("");
  const fullText = "CODEZILLA || MOZILLA COMMUNITY || OPEN SOURCE || SRM IST CLUB";
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 80); // Adjust typing speed
      
      return () => clearTimeout(timeout);
    }
  }, [index]);
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className='hero container'>
      <motion.div 
        className='hero-text'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="typing-text">
          {displayText}
          <span className={`cursor ${showCursor ? 'cursor-visible' : 'cursor-hidden'}`}>|</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Codezilla is a Mozilla Campus Community in SRMIST, Ramapuram to provide the Youth, in and around the campus, an open source platform, where they can develop their technical knowledge and skill set for a better career. We organize technical events and hands-on sessions to scale up their experties. It provides a good environment to engage the students in different activities and develop their projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <a href='https://www.texus.io/event/2511' target='__onblank'>
            <motion.button 
              className='btn'
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <b>🚀 Open Source Odyssey : Prove your brilliance— Register Now!</b>
              <img src={arrow} alt="" />
            </motion.button>
          </a>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 3, duration: 1.5, repeat: Infinity }}
        >
          <Link to="Events" smooth={true} offset={-260} duration={500}>
            {/* <span>Scroll Down</span> */}
            {/* <div className="scroll-arrow">↓</div> */}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

// export default hero


export default hero