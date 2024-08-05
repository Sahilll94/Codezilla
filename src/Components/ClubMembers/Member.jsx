import React, { useRef } from 'react'
import './Member.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import Ketaki from '../../assets/Ketaki.png'
import Arya from '../../assets/Arya.png'
import Sahil from '../../assets/Sahil.png'


const Member = () => {


    const slider = useRef();
    let tx = 0; //Translate x;

    const slideForward = () => {
        // Change karo isko jaise li badhe
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
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, vitae, amet corrupti officia mollitia dolore dignissimos, ratione porro eaque sit deserunt. Autem, cupiditate. Odit nesciunt quae natus perferendis enim non!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={Arya} alt="" />
                            <div>
                                <h3>Arya Deshmukh</h3>
                                <span>Club Co-Head</span>
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
                                <span>Technical Head</span>
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
                </li>
            </ul>
        </div>
    </div>
)
}

export default Member