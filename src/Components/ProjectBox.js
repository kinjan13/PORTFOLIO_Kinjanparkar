import React from 'react';
import {FaGithub} from "react-icons/fa";
// import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    HarshPortfolioDesc : "Harsh Kolambkar’s personal portfolio – highlighting education, work experience, full-stack projects, and career journey.",
    HarshPortfolioGithub : "https://github.com/kinjan13/HK_Portfolio",

    TravelDesc:"Travel All is a web application showcasing travel destinations, itineraries, or services. The interface is interactive, relying on JavaScript for dynamic content and user interaction.",
    TravelGithub:"https://github.com/kinjan13/Travel_Web",
    
    ChatbotWeatherDesc:"I’m excited about Agentic AI because it can autonomously optimize supply chains, reduce inefficiencies, and improve delivery reliability, making logistics smarter and more adaptive.",
    ChatbotWeatherGithub:"https://github.com/kinjan13/Kinjan-Parkar_Mastra",
    
    PortfolioDesc:"Kinjan Parkar’s Personal Portfolio A React-powered portfolio website showcasing my educational journey, academic achievements, and key milestones. Clean, modern design with timeline layout and attention to UX.",
    PortfolioGithub:"https://github.com/kinjan13/PORTFOLIO_Kinjanparkar",
   
    JaruratCareDesc:"Patient Records Dashboard is a simple yet functional web application built with React to manage and display patient information for Jarurat Care. The project demonstrates proficiency in React, state management, json file, and responsive UI design.",
    JaruratCareGithub:"https://github.com/kinjan13/Jarurat-Care",

    ShopifyWebDevelopmentDesc:"This repository showcases a responsive e-commerce product page developed using HTML, CSS, and Vanilla JavaScript. It features an interactive image gallery, color swatches, size selection, and a persistent shopping cart utilizing localStorage. The project demonstrates proficiency in front-end development and user interface design.",
    ShopifyWebDevelopmentGithub:"https://github.com/kinjan13/Shopify-Web-Development-internship",



    
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