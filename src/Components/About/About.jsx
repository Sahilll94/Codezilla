import React, { useEffect } from 'react'
import './About.css'
import about_img from '../../assets/AboutLeft.png'
import play_icon from '../../assets/play-icon.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = ({setplaystate}) => {
  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

return (
    <div className='about'>
        <motion.div 
          className="about-left"
          ref={leftRef}
          initial="hidden"
          animate={leftInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
            <div className="image-container">
              <motion.img 
                src={about_img} 
                alt="About Codezilla" 
                className='about-img'
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img 
                src={play_icon} 
                alt="Play Video" 
                className='play-icon' 
                onClick={()=> {setplaystate(true)}}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  boxShadow: ["0px 0px 0px rgba(255,255,255,0.5)", "0px 0px 20px rgba(255,255,255,0.8)", "0px 0px 0px rgba(255,255,255,0.5)"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              />
            </div>
        </motion.div>
        
        <motion.div 
          className="about-right"
          ref={rightRef}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
            <motion.h3
              variants={itemVariants}
              className="about-subtitle"
            >
              ABOUT OUR CLUB
            </motion.h3>
            
            <motion.h2
              variants={itemVariants}
              className="about-title"
            >
              Join Our Building Together Club!
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="about-intro"
            >
              Do you love creating, designing, and building? Whether you're into woodworking, DIY projects, coding, or crafting, our club is the perfect place for makers and innovators like you!
            </motion.p>
            
            <motion.h3
              variants={itemVariants}
              className="about-why-title"
            >
              Why Join Us?
            </motion.h3>
            
            <motion.div 
              className="about-features"
              variants={listVariants}
            >
              <motion.div className="feature-item" variants={itemVariants}>
                <h4>Collaborative Projects</h4>
                <p>Work on exciting projects with others who share your passion for building. From small DIY tasks to large-scale creations, there's always something to get your hands on!</p>
              </motion.div>
              
              <motion.div className="feature-item" variants={itemVariants}>
                <h4>Skill Sharing</h4>
                <p>Learn new techniques and share your knowledge with fellow builders. Whether you're a beginner or an expert, everyone has something valuable to contribute.</p>
              </motion.div>
              
              <motion.div className="feature-item" variants={itemVariants}>
                <h4>Tools & Resources</h4>
                <p>Gain access to tools, materials, and resources that can help bring your ideas to life.</p>
              </motion.div>
              
              <motion.div className="feature-item" variants={itemVariants}>
                <h4>Community Support</h4>
                <p>Be part of a community that supports and inspires each other. Together, we turn ideas into reality!</p>
              </motion.div>
            </motion.div>
        </motion.div>
    </div>
)
}

export default About