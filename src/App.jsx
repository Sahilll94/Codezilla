import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import UpcomingEvents from './Components/UpcomingEvents/Events'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import PEvent from './Components/PastEvents/PEvent'
import Member from './Components/ClubMembers/Member'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import ThemeToggle from './Components/ThemeToggle/ThemeToggle'
import { motion } from 'framer-motion'

const App = () => {

  const [playstate, setplaystate] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Check if user previously selected a theme, default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // Only set dark mode if explicitly saved as dark
    if (savedTheme === 'dark') {
      setDarkMode(true);
    } else {
      // Ensure light mode is default by removing any dark mode classes
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Track scroll position for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={darkMode ? 'dark-theme' : 'light-theme'}>

      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}></Navbar>
      <Hero></Hero>
      
      <div className="container">
      <Title subTitle='UPCOMING EVENT' title='Hey, register for the upcoming event 404! Logic Not Found and showcase your coding skills.'></Title>
      <UpcomingEvents darkMode={darkMode}></UpcomingEvents> 
      <About setplaystate={setplaystate}></About>
      <Title subTitle='Past Events' title='Journey Through Our Past Events'></Title>
      <PEvent></PEvent> 
      <Title subTitle='Club Members' title='First, we will meet the club Heads, followed by the domain leads.'></Title>
      <Member></Member>
      <Title subTitle='CONTACT US' title='Connect, Collaborate, Create Together.'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>

      <VideoPlayer playstate={playstate} setplaystate={setplaystate}></VideoPlayer>
      
      {showScrollTop && (
        <motion.button 
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      )}

    </div>
  )
}

// updated the event
export default App