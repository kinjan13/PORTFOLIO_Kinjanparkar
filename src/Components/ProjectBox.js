import React from 'react';
import {FaGithub} from "react-icons/fa";
// import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    HarshPortfolioDesc : "Harsh Kolambkar’s personal portfolio – highlighting education, work experience, full-stack projects, and career journey.",
    HarshPortfolioGithub : "https://github.com/kinjan13/HK_Portfolio",
    

    // RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    // RogFreeGithub : "https://github.com/DevanshSahni/Rog-Free",
    // RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    TravelDesc:"Travel All is a web application showcasing travel destinations, itineraries, or services. The interface is interactive, relying on JavaScript for dynamic content and user interaction.",
    TravelGithub:"https://github.com/kinjan13/Travel_Web",
    NewsletterWebsite:"https://travel-web-mu-five.vercel.app/",
    
   ChatbotWeatherDesc:"I’m excited about Agentic AI because it can autonomously optimize supply chains, reduce inefficiencies, and improve delivery reliability, making logistics smarter and more adaptive..",
    ChatbotWeatherGithub:"https://github.com/kinjan13/Kinjan-Parkar_Mastra",
    WigglesWebsite:"https://kinjan-parkar-mastra.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox