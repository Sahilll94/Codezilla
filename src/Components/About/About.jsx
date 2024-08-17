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
            <h2>Join Our Building Together Club!</h2>
            <p>Do you love creating, designing, and building? Whether you're into woodworking, DIY projects, coding, or crafting, our club is the perfect place for makers and innovators like you!</p>
            <h3>Why Join Us?</h3>
            <br></br>
            <p><b>Collaborative Projects:</b> Work on exciting projects with others who share your passion for building. From small DIY tasks to large-scale creations, there’s always something to get your hands on!</p>
            <p><b>Skill Sharing:</b> Learn new techniques and share your knowledge with fellow builders. Whether you’re a beginner or an expert, everyone has something valuable to contribute.</p>
            <p><b>Tools & Resources:</b> Gain access to tools, materials, and resources that can help bring your ideas to life.</p>
            <p><b>Community Support:</b> Be part of a community that supports and inspires each other. Together, we turn ideas into reality!</p>
        </div>
    </div>
)
}

export default About