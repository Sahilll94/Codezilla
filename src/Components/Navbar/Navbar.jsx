import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/CodezillaFavicon.png'
import logo1 from '../../assets/CodezillaWhite.png'
import { Link } from 'react-scroll';
import MenuIcon from '../../assets/menu-icon.png'
import MenuIcon1 from '../../assets/menu.svg'


const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 700 ? setSticky(true) : setSticky(false);
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
    
return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo1} alt="" className='logo'/>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero container' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='Events' smooth={true} offset={-260} duration={500}>Upcoming Event</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Our Club</Link></li>
            <li><Link to='PEvent' smooth={true} offset={-260} duration={500}>Past Events</Link></li>
            <li><Link to='Members' smooth={true} offset={-260} duration={500}>Club Members</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact Us</button></Link></li>
        </ul>
        <img src={MenuIcon1} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
)
}

export default Navbar