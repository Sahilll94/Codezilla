import React, { useRef } from 'react'
import './Member.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import Ketaki from '../../assets/Ketaki.png'
import Arya from '../../assets/Arya.png'
import Sahil from '../../assets/Sahil.png'
import Animesh from '../../assets/Animesh.jpeg'
// import Github from '../../assets/Github1.png'


const Member = () => {


    const slider = useRef();
    let tx = 0; //Translate x;

    const slideForward = () => {
        // Change karo isko jaise list badhe
        if(tx > -50){
            tx -= 25;
        }

        slider.current.style.transform=`translateX(${tx}%)`;

    }

    const slideBackward = () => {
        if(tx < 0){
            tx += 25;
        }

        slider.current.style.transform=`translateX(${tx}%)`;
    }



return (
    <div className='Members'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                {/* li duplicates here */}
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Ketaki} alt="" />
                            <div>
                                <h3>Ketaki Shinde</h3>
                                <span>Club Head</span>
                                {/* <img src={Github} alt="GitHub" className="github-icon" /> */}
                                <br></br>
                                <a href='https://www.linkedin.com/in/ketaki-shinde-844b42255/' target='__onblank'><span><b>Linkedln</b></span></a>
                            </div>
                        </div>
                        <p>Dream it. Make it happen. With passion and focus, I try turning visions into reality, embracing every challenge as an opportunity to create and achieve.</p>    
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Arya} alt="" />
                            <div>
                                <h3>Arya Deshmukh</h3>
                                <span>Club Co-Head</span>
                                <br></br>
                                <a href='https://www.linkedin.com/in/arya-deshmukh-658594239/' target='__onblank'><span><b>Linkedln</b></span></a>
                            </div>
                        </div>
                        <p>I lead with a blend of strategic vision and creative ingenuity, turning challenges into opportunities for impactful achievements. I believe that with determination and the right mindset, anything is possible!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Sahil} alt="" />
                            <div>
                                <h3>Sahil</h3>
                                <span>Technical Head</span>
                                <br></br>
                                <a href='https://www.linkedin.com/in/sahilll94/' target='__onblank'><span><b>Linkedln</b></span></a>
                            </div>
                        </div>
                        <p>I believe in continuous learning and growth, focusing on acquiring new skills every day. I'm always eager to contribute to communities with my existing expertise and open to learning new things.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Animesh} alt="" />
                            <div>
                                <h3>Animesh Kumar Choudhary</h3>
                                <span>Management Head</span>
                                <br></br>
                                <a href='https://www.linkedin.com/in/animesh-kumar-choudhary-8a232719b/' target='__onblank'><span><b>Linkedln</b></span></a>
                            </div>
                        </div>
                        <p>I focus on creating a collaborative environment that fosters innovation and growth, leveraging my management skills and strategic thinking to help the club achieve its goals. I’m dedicated to making sure our projects succeed and that our team works together effectively.</p>
                    </div>
                </li>

                {/* <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Sahil} alt="" />
                            <div>
                                <h3>Sahil</h3>
                                <span>CSE-IOT III year B.Tech</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, vitae, amet corrupti officia mollitia dolore dignissimos, ratione porro eaque sit deserunt. Autem, cupiditate. Odit nesciunt quae natus perferendis enim non!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Sahil} alt="" />
                            <div>
                                <h3>Sahil</h3>
                                <span>CSE-IOT III year B.Tech</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, vitae, amet corrupti officia mollitia dolore dignissimos, ratione porro eaque sit deserunt. Autem, cupiditate. Odit nesciunt quae natus perferendis enim non!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Sahil} alt="" />
                            <div>
                                <h3>Sahil</h3>
                                <span>CSE-IOT III year B.Tech</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, vitae, amet corrupti officia mollitia dolore dignissimos, ratione porro eaque sit deserunt. Autem, cupiditate. Odit nesciunt quae natus perferendis enim non!</p>
                    </div>
                </li> */}
            </ul>
        </div>
    </div>
)
}

export default Member