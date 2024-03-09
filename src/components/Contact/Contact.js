import React from "react";
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (<section id="contact">
    <div className = "leftcontact">
      <h3>Connect with me!</h3>

      <p className="desc">Thanks for visiting my portfolio! Let's connect! Whether you have questions, want to collaborate, or just want to say hello, feel free to reach out. I'm always open to new opportunities and conversations.</p>
      <address><MdOutlineMailOutline fontSize={"1.7rem"} style={{marginRight:"10px"}}/> aravind463kk30@gmail.com</address>
      <address><FaPhoneAlt fontSize={"1.7rem"} style={{marginRight:"10px"}}/>+919342610087</address>

      <p className="or">or Connect with Social Media</p>
      <a href="https://github.com/aravindkk004"><FaGithub className="github" fontSize={"2rem"} style={{marginRight:"10px", color:"white"}}/></a>
      <a href="https://www.linkedin.com/in/aravind-k-k-b1593024a/"><FaLinkedin className="linkedin" fontSize={"2rem"} style={{marginRight:"10px", color: "white"}}/></a>
    </div>

    <div className="rightcontact">
      <form action="">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" placeholder="Eg: ARAVIND K K" autoComplete="off" required/>

        <label htmlFor="email">Your Email</label>
        <input type="text" name="email" id="email" placeholder="Eg: aravind@gmail.com" autoComplete="off" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" placeholder="Enter your message here"></textarea>

        <button><IoIosSend fontSize={"2rem"} style={{marginRight:"10px"}}/>Send</button>
      </form>
    </div>
  </section>);
};

export default Contact;
