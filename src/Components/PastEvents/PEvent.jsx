import React from 'react'
import './PEvent.css'
import PastEvent2 from '../../assets/PE1.png'
import PastEvent3 from '../../assets/PE2.png'
import PastEvent4 from '../../assets/PE3.png'
import PastEvent1 from '../../assets/OpenSourceOdyssey.jpg'

const PEvent = () => {
return (
    <div className='PEvent'>
        <div className="gallery">
            <img src={PastEvent1} alt="" />
            <img src={PastEvent2} alt="" />
            <img src={PastEvent3} alt="" />
            <img src={PastEvent4} alt="" />
        </div>
        <h3>Stay Tuned for More Event Updates!</h3>
    </div>
)
}

export default PEvent