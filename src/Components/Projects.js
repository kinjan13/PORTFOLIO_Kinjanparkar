import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import TindogImage from '../images/TindogImage.png';
import WigglesImage from '../images/WigglesImage.png';
import Portfolio from '../images/Portfolio.png';
import JaruratCare from '../images/JaruratCare.png';
import ShopifyWebDevelopment from '../images/ShopifyWebDevelopment.png';
import Stt from '../images/stt.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="ChatbotWeather" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Travel" />
        <ProjectBox projectPhoto={TindogImage} projectName="HarshPortfolio" />
        
        <ProjectBox projectPhoto={JaruratCare} projectName="JaruratCare" />
        <ProjectBox projectPhoto={ShopifyWebDevelopment} projectName="ShopifyWebDevelopment" />
        <ProjectBox projectPhoto={Portfolio} projectName="Portfolio" />
        <ProjectBox projectPhoto={Stt} projectName="Stt" />


      </div>

    </div>
  )
}

export default Projects