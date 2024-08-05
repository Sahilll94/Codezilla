import React from 'react'
import './Footer.css'
import InstaIcon from '../../assets/InstaIcon.svg'
import MozillaIcon from '../../assets/MozzilaIcon.png'
import LinkedlnIcon from '../../assets/LinkedlnIcon.svg'
import GithubIcon from '../../assets/GithubIcon.svg'
import TwitterIcon from '../../assets/TwitterIcon.svg'

const Footer = () => {
return (
    <div className='footer'>
        <p>© 2024 Codezilla SRMIST. All rights reserved</p>
        <ul>
            {/* Need to fix the width of all the icons to align */}
        <li><a href="https://www.instagram.com/codezillaclub/" target="_blank"><img src={InstaIcon} alt="" /></a></li>
        <li><a href="https://github.com/CodezillaClub" target="_blank"><img src={GithubIcon} alt="" /></a></li>
        <li><a href="https://community.mozilla.org/de/groups/codezilla/" target="_blank"><img src={MozillaIcon} alt="" /></a></li>
        <li><a href="https://www.linkedin.com/company/codezillaclub/" target="_blank"><img src={LinkedlnIcon} alt="" /></a></li>
        <li><a href="https://x.com/CodezillaClub" target="_blank"><img src={TwitterIcon} alt="" /></a></li>
        </ul>
    </div>
)
}

export default Footer