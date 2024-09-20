import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import UpcomingEvents from './Components/UpcomingEvents/Events'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import PEvent from './Components/PastEvents/PEvent'
import Member from './Components/ClubMembers/Member'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playstate, setplaystate] = useState(false);

  return (
    <div>

      <Navbar></Navbar>
      <Hero></Hero>
      
      <div className="container">
      <Title subTitle='UPCOMING EVENT' title='Oops! It Looks Like We Have No Upcoming Events!'></Title>
      <UpcomingEvents></UpcomingEvents> 
      <About setplaystate={setplaystate}></About>
      <Title subTitle='Past Events' title='Journey Through Our Past Events'></Title>
      <PEvent></PEvent> 
      <Title subTitle='Club Members' title='First, we will meet the club Heads, followed by the domain leads.'></Title>
      <Member></Member>
      <Title subTitle='CONTACT US' title='Connect, Collaborate, Create Together.'></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>

      <VideoPlayer playstate={playstate} setplaystate={setplaystate}></VideoPlayer>

    </div>
  )
}

export default App