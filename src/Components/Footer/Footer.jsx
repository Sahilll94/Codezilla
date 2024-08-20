import React from 'react';
import './Footer.css';
import igIcon from '../../assets/Instagram1.png';
import MozIcon from '../../assets/Mozilla1.png';
import LinkIcon from '../../assets/Linkedln1.png';
import GitIcon from '../../assets/Github1.png';
import XIcon from '../../assets/Twitter1.png';

const Footer = () => {
    return (
        <div className='footer'>
            <p>&copy; 2024 Codezilla SRMIST. All rights reserved</p>
            <p>Made with care by <a href="https://sahilportfolio.me/" target="_blank"><b>Sahil</b></a></p>

            <ul>
                <li>
                    <a href="https://www.instagram.com/codezillaclub/" target="_blank" rel="noopener noreferrer">
                        <img src={igIcon} alt="Instagram" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/CodezillaClub" target="_blank" rel="noopener noreferrer">
                        <img src={GitIcon} alt="GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://community.mozilla.org/de/groups/codezilla/" target="_blank" rel="noopener noreferrer">
                        <img src={MozIcon} alt="Mozilla" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/codezillaclub/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkIcon} alt="LinkedIn" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/CodezillaClub" target="_blank" rel="noopener noreferrer">
                        <img src={XIcon} alt="Twitter" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
