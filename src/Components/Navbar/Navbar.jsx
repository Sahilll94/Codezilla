import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/CodezillaFavicon.png'
import logo1 from '../../assets/CodezillaWhite.png'
import { Link } from 'react-scroll';
import MenuIcon from '../../assets/menu-icon.png'
import MenuIcon1 from '../../assets/menu.svg'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { motion } from 'framer-motion'


const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [sticky, setSticky] = useState(false);    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 700 ? setSticky(true) : setSticky(false);
        });
    }, []);
    
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
        // Prevent body scrolling when menu is open
        if (!mobileMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    const navVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
        }
    };

return (
    <motion.nav 
        className={`container ${sticky ? 'dark-nav' : ''} ${darkMode ? 'dark-mode-nav' : ''}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
    >
        <motion.img 
            src={darkMode ? logo1 : logo} 
            alt="Codezilla Logo" 
            className='logo'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        />
        
        {/* Mobile Menu Backdrop */}
        <div className={`menu-backdrop ${mobileMenu ? 'active' : ''}`} onClick={toggleMenu}></div>
        
        <ul className={mobileMenu ? 'mobile-menu-active' : 'hide-mobile-menu'}>
            <motion.li variants={itemVariants}>
                <Link to='hero container' smooth={true} offset={0} duration={500} onClick={toggleMenu}>Home</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to='Events' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Upcoming Event</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to='about' smooth={true} offset={-150} duration={500} onClick={toggleMenu}>About Our Club</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to='PEvent' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Past Events</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to='Members' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Club Members</Link>
            </motion.li>
            <motion.li variants={itemVariants}>
                <Link to='contact' smooth={true} offset={-260} duration={500} onClick={toggleMenu}>
                    <motion.button 
                        className='btn'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Us
                    </motion.button>
                </Link>
            </motion.li>
            <motion.li variants={itemVariants} className="theme-toggle-container">
                <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </motion.li>
        </ul>
        
        {/* Hamburger Menu Icon */}
        <div className={`menu-toggle-container ${mobileMenu ? 'menu-active' : ''}`} onClick={toggleMenu}>
            <div className="menu-bar menu-bar-1"></div>
            <div className="menu-bar menu-bar-2"></div>
            <div className="menu-bar menu-bar-3"></div>
        </div>
    </motion.nav>
)
}

export default Navbar