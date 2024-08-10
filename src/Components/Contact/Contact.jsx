import React from 'react'
import './Contact.css'
import EmailIcon from '../../assets/msg-icon.png'
import MailIcon from '../../assets/mail-icon.png'
import PhoneIcon from '../../assets/phone-icon.png'
import LocationIcon from '../../assets/location-icon.png'
import ArrowIcon from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");
    
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending The Message.....");
    const formData = new FormData(event.target);

    // Reminder to add API Key here and create .env file for the api key.
    formData.append("access_key", import.meta.env.VITE_API_KEY); 

    const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
    });

    const data = await response.json();

    if (data.success) {
    setResult("Your message has been submitted successfully! Please wait for a while, and we will be in touch with you soon.");
    event.target.reset();
    } else {
    console.log("Error", data);
    setResult(data.message);
    }
};

return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={EmailIcon} alt="" /></h3>
            <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to foster a vibrant tech community at our university.</p>
            <ul>
                <li><a href="mailto:codezillaclub@gmail.com" target='__blank'><img src={MailIcon} alt="" />codezillaclub@gmail.com</a></li>
                <li><a href='tel:+917498133608'><img src={PhoneIcon} alt="" />+91 74981 33608</a></li>
                <li><img src={LocationIcon} alt="" /><a href='https://maps.app.goo.gl/dKAB8a2sdxysjDxD7' target='__blank'>SRM University,<br /> Bharathi Salai, Ramapuram, Chennai, Tamil Nadu 600089</a></li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                {/* <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number'/> */}
                <label>Your Email</label>
                <textarea type="email" name="email" placeholder='Enter Your Email Address here' required></textarea>
                <label>Write Your Message Here</label>
                <textarea name="message" rows="6" placeholder='Enter Your Message here' required></textarea>
                <button type='submit' className='btn dark-btn'> Submit Now <img src={ArrowIcon} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
)
}

export default Contact