import React from 'react'
import AboutImg from "./../../images/undraw_About_me_re_82bv.png";
import './About.css'
import resume from "./../../images/Resume_Aravind.pdf";

const About = () => {
  return (
    <section id="about">
      <div className="about">
        <div className="leftabout">
          <img src={AboutImg} alt="my profile" />
        </div>
        <div className="rightabout">
        <h2>About</h2>
          <p>I'm a passionate and skilled web and app developer with expertise in both frontend and backend technologies. With a solid foundation in languages like JavaScript, HTML, and CSS, coupled with experience in frameworks like React and Node.js, I've successfully delivered projects that blend seamless user experiences with robust functionality. Whether it's crafting elegant user interfaces or architecting scalable backend systems, I thrive on turning ideas into reality. My dedication to continuous learning and problem-solving drives me to stay ahead in this ever-evolving field. Let's collaborate and build something amazing together.</p>
          <button><a href={resume} download style={{color:"black", textDecoration:"none"}}>Download Resume</a></button>
        </div>
      </div>
    </section>
  )
}

export default About
