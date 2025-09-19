import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiPostman, SiVercel, SiCanva } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus />,
    'Postman': <SiPostman />,
    'React': <FaReact />,
    'Javascript': <DiJavascript1 />,
    'Node': <DiNodejs />,
    'Git': <FaGitAlt />,
    'Github': <FaGithub />,
    'Npm': <FaNpm />,
    'Figma': <FaFigma />,
    'Python': <FaPython />,
    'Bootstrap': <FaBootstrap />,
    'Vercel': <SiVercel />,
    'HTML': <FaHtml5  />,   // 🔥 HTML icon with orange color
    'CSS': <FaCss3Alt  />, // 🔥 CSS icon with blue color
    'Canva': <SiCanva  />  // Canva teal color
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill] || <span>{skill}</span>} {/* fallback in case of mismatch */}
    </div>
  );
};

export default Skills;
