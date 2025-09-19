import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCamera} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>KINJAN PARKAR</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
        <p>
  I enjoy turning raw ideas into functional, user-friendly web products 
  that make a real impact. I want to take on challenges that push me 
  as a developer and let me build work I can be proud of.<br /><br />
  
  I am skilled in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>Python</b>, 
  and I have worked with frameworks like <b>React.js</b>, <b>jQuery</b>, and <b>Bootstrap</b>.<br />
  I’ve built projects like a <b>Travel Website</b> and an 
  <b>AI Weather Agent Chatbot</b>, and completed a <b>Web Development Internship at NPCIL</b>.<br /><br />
  
  Also, I love <b>Photography</b> <CiCamera style={{scale:"1.5", rotate:"15deg"}}/>  
</p>

        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home