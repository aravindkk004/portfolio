import React from "react";
import "./Skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 630 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 630, min: 0 },
      items: 1,
    },
  };

  let color = "#fb297b"

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills">
        <Carousel responsive={responsive}>
          <div className="html">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${85 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-html5-plain colored"></i>
            </div>
            <div className="level">
              <p>85%</p>
            </div>
          </div>
          <div className="css">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${80 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-css3-plain colored"></i>
            </div>
            <div className="level">
              <p>80%</p>
            </div>
          </div>
          <div className="js">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${90 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-javascript-plain colored"></i>
            </div>
            <div className="level">
              <p>90%</p>
            </div>
          </div>
          <div className="node">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${80 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-nodejs-plain-wordmark colored"></i>
            </div>
            <div className="level">
              <p>80%</p>
            </div>
          </div>
          <div className="express">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${90 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-express-original"></i>
            </div>
            <div className="level">
              <p>90%</p>
            </div>
          </div>
          <div className="mongodb">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${70 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
            </div>
            <div className="level">
              <p>70%</p>
            </div>
          </div>
          <div className="postgres">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${90 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-postgresql-plain-wordmark colored"></i>
            </div>
            <div className="level">
              <p>90%</p>
            </div>
          </div>
          <div className="react">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${75 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-react-original-wordmark colored"></i>
            </div>
            <div className="level">
              <p>75%</p>
            </div>
          </div>
          <div className="python">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${70 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-python-plain-wordmark colored"></i>
            </div>
            <div className="level">
              <p>70%</p>
            </div>
          </div>
          <div className="java">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${70 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-java-plain-wordmark colored"></i>
            </div>
            <div className="level">
              <p>70%</p>
            </div>
          </div>
          <div className="c">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${90 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-c-line-wordmark"></i>
            </div>
            <div className="level">
              <p>90%</p>
            </div>
          </div>
          <div className="flask">
          <div className="circular-bar" style={{ background: `conic-gradient(${color} ${60 * 3.6}deg, #ededed 0deg)`}}>
              <i className="devicon-flask-original-wordmark"></i>
            </div>
            <div className="level">
              <p>60%</p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;
