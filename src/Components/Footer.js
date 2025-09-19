import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";


const Footer = () => {
  return (
    <footer>
      <h4>Developed by Kinjan Parkar</h4>
      <h4>Copyright &copy; 2025 KAP</h4>
      <div className='footerLinks'>
        <a href="https://github.com/kinjan13" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/kinjan-parkar-kap13/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:kinjanap@gmail.com' target='_blank'><GrMail/></a>
        
      </div>
    </footer>
  )
}

export default Footer