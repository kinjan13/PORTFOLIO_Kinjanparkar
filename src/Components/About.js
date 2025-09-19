import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Avatar1 from '../images/Avatar1.png';
const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Kinjan Parkar</b> and I am from Mumbai India, India.
            I'm a <b>Web developer</b> and Completed my Graduation from Terna Engineering College. <b>BTech in CSE</b>. <br/><br/>
            I have done an internship as a <b>Web developer</b> at NPCIL which is a Government undertaking Company .
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
           
          </p>
        </div>

        <div>
  <Tilt>
      <img className='Avatar' src={Avatar1} alt="" />
  </Tilt>
</div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Html' />
        <Skills skill='CSS' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Canva' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About