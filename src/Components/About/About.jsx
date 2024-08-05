import React from 'react'
import './About.css'
import about_img from '../../assets/AboutLeft.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setplaystate}) => {
return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=> {setplaystate(true)}} />

        </div>
        <div className="about-right">
            <h3>ABOUT OUR CLUB</h3>
            <h2>Building Together for a Better Tomorrow</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium illum natus minus molestiae, dolor consequuntur totam hic possimus doloribus quia id nostrum perferendis quos blanditiis earum sequi vero mollitia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facere. Id veniam provident iusto ut, voluptatum dicta deserunt. Sapiente recusandae quod amet maxime quae rerum nam, excepturi enim ullam porro?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nulla sequi? Facilis nulla id excepturi recusandae pariatur, repudiandae reiciendis, provident dolore praesentium ad sed dignissimos magnam explicabo ipsum rerum quia?</p>
        </div>
    </div>
)
}

export default About