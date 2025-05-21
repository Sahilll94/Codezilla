import React, { useState } from 'react'
import './Contact.css'
import EmailIcon from '../../assets/msg-icon.png'
import MailIcon from '../../assets/mail-icon.png'
import PhoneIcon from '../../assets/phone-icon.png'
import LocationIcon from '../../assets/location-icon.png'
import ArrowIcon from '../../assets/white-arrow.png'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
    const [result, setResult] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });    const [isFocused, setIsFocused] = useState({
        name: false,
        email: false,
        message: false
    });
    
    const [formSubmitted, setFormSubmitted] = useState(false);
    
    const [contactRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleFocus = (field) => {
        setIsFocused({
            ...isFocused,
            [field]: true
        });
    };
    
    const handleBlur = (field) => {
        setIsFocused({
            ...isFocused,
            [field]: false
        });
    };
      const onSubmit = async (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        
        if (!event.target.checkValidity()) {
            // Form has validation errors
            setResult("Please fill all required fields correctly.");
            return;
        }
        
        setResult("Sending The Message.....");
        const formDataObj = new FormData(event.target);

        // Reminder to add API Key here and create .env file for the api key.
        formDataObj.append("access_key", import.meta.env.VITE_API_KEY); 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataObj
            });

            const data = await response.json();

            if (data.success) {
                setResult("Your message has been submitted successfully! Please wait for a while, and we will be in touch with you soon.");
                setFormData({ name: '', email: '', message: '' });
                setFormSubmitted(false);
                event.target.reset();
            } else {
                console.log("Server Side Error!", data);
                setResult(data.message);
            }
        } catch (error) {
            setResult("There was an error sending your message. Please try again later.");
            console.error("Error submitting form:", error);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };
    
    const formItemVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className='contact' ref={contactRef}>
            <motion.div 
                className="contact-col"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <motion.h3 variants={itemVariants}>
                    Send us a Message 
                    <motion.img 
                        src={EmailIcon} 
                        alt="Email" 
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, -10, 0, 10, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 5 }}
                    />
                </motion.h3>
                
                <motion.p variants={itemVariants}>
                    Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to foster a vibrant tech community at our university.
                </motion.p>
                
                <motion.ul variants={containerVariants}>
                    <motion.li variants={itemVariants}>
                        <motion.a 
                            href="mailto:codezillaclub@gmail.com" 
                            target='__blank'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.img 
                                src={MailIcon} 
                                alt="Mail"
                                whileHover={{ rotate: 10 }}
                            />
                            codezillaclub@gmail.com
                        </motion.a>
                    </motion.li>
                    
                    <motion.li variants={itemVariants}>
                        <motion.a 
                            href='tel:+917498133608'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.img 
                                src={PhoneIcon} 
                                alt="Phone"
                                whileHover={{ rotate: 10 }}
                            />
                            +91 74981 33608
                        </motion.a>
                    </motion.li>
                    
                    <motion.li variants={itemVariants}>
                        <motion.img 
                            src={LocationIcon} 
                            alt="Location"
                            whileHover={{ rotate: 10 }}
                        />
                        <motion.a 
                            href='https://maps.app.goo.gl/dKAB8a2sdxysjDxD7' 
                            target='__blank'
                            whileHover={{ scale: 1.02 }}
                        >
                            SRM University,<br /> Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089
                        </motion.a>
                    </motion.li>
                </motion.ul>
            </motion.div>
            
            <motion.div 
                className="contact-col"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
            >                <motion.form 
                    onSubmit={onSubmit}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className={formSubmitted ? "submitted" : ""}
                    noValidate
                >
                    <motion.div className="form-group" variants={formItemVariants}>
                        <label className={isFocused.name || formData.name ? "label-active" : ""}>Your Name</label>
                        <input 
                            type="text" 
                            name='name' 
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={() => handleBlur('name')}
                            required
                        />
                    </motion.div>
                    
                    <motion.div className="form-group" variants={formItemVariants}>
                        <label className={isFocused.email || formData.email ? "label-active" : ""}>Your Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email')}
                            required
                        />
                    </motion.div>
                    
                    <motion.div className="form-group" variants={formItemVariants}>
                        <label className={isFocused.message || formData.message ? "label-active" : ""}>Write Your Message Here</label>
                        <textarea 
                            name="message" 
                            rows="6" 
                            value={formData.message}
                            onChange={handleInputChange}
                            onFocus={() => handleFocus('message')}
                            onBlur={() => handleBlur('message')}
                            required
                        ></textarea>
                    </motion.div>
                    
                    <motion.button 
                        type='submit' 
                        className='btn dark-btn'
                        whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(33, 46, 160, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        variants={formItemVariants}
                    > 
                        Submit Now 
                        <motion.img 
                            src={ArrowIcon} 
                            alt="Submit"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.button>
                </motion.form>
                
                <motion.div 
                    className={`form-message ${result ? "active" : ""}`}
                    animate={{ opacity: result ? 1 : 0, y: result ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {result}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact