import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'

const hero = () => {
return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>CODEZILLA || MOZILLA COMMUNITY || OPEN SOURCE || SRM IST CLUB</h1>
            <p>Codezilla is a Mozilla Campus Community in SRMIST, Ramapuram to provide the Youth, in and around the campus, an open source platform, where they can develop their technical knowledge and skill set for a better career. We organize technical events and hands-on sessions to scale up their experties. It provides a good environment to engage the students in different activities and develop their projects.</p>
            <a href='http://codezilla-one.vercel.app' target='__onblank'><button className='btn'><b>Register for Open Source Odyssey</b><img src={arrow} alt="" /></button></a>
        </div>
    </div>
)
}

export default hero