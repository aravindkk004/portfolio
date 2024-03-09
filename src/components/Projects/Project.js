import React from "react";
import "./Projects.css";
import { FaCode } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const Project = ({images, description, git, live}) => {
  return (
    <div className="project" style={{backgroundImage:`url(${images})`,  backgroundSize: 'cover', backgroundPosition: '50% 50%'}}>
      {/* <div className="imgs">
        <img src={images} alt="" />
      </div> */}
      <div className="details">
        <p>
          {description}
        </p>
        <div className="buttons">
          <button>
            <a href={git}><FaCode fontSize={"2.2rem"} color="black"/></a>
          </button>
          <button>
            <a href={live}><FaRegEye fontSize={"2.2rem"} color="black"/></a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
