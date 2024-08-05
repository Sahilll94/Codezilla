import React from 'react'
import './PEvent.css'
import PastEvent1 from '../../assets/PE1.png'
import PastEvent2 from '../../assets/PE2.png'
import PastEvent3 from '../../assets/PE3.png'

const PEvent = () => {
return (
    <div className='PEvent'>
        <div className="gallery">
            <img src={PastEvent1} alt="" />
            <img src={PastEvent2} alt="" />
            <img src={PastEvent3} alt="" />
            <img src={PastEvent3} alt="" />
        </div>
        <h3>Stay Tuned for More Event Updates!</h3>
    </div>
)
}

export default PEvent