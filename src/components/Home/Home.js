import React from "react";
import "./Home.css";
import { useTypewriter } from "react-simple-typewriter";
import profile from "./../../images/profile.jpg";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Web Developer", "App Developer"],
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 100,
  });
  return (
    <section id="home">
      <div className="lefthome">
        <h3>Hello, It's Me</h3>
        <h1>Aravind K K</h1>
        <h3>
          And I'm a <span>{typeEffect}</span>
        </h3>
        <p>
        I'm a passionate web developer and skilled in React-Native app development, dedicated to crafting captivating, error-free solutions.
        </p>
        <button>Hire Me</button>
      </div>
      <div className="righthome">
        <img src={profile} alt="my profile" />
      </div>
    </section>
  );
};

export default Home;
