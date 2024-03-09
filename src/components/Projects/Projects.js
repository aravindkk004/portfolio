import React from "react";
import "./Projects.css";
import Project from "./Project.js";
import landing from './../../images/restaurant.png';
import simon from './../../images/simon.png';
import quiz from './../../images/quiz.png';
import tictactoe from './../../images/tictactoe.png';
import drum from './../../images/drum.png';

const Projects = () => {
  return (
    <section id="project">
      <h2>Projects</h2>
      <div className="projects">

        {/* landingpage */}
        <Project 
          description={"Indulge your senses with my captivating restaurant landing page, meticulously crafted with only HTML and CSS. Designed to tantalize taste buds and evoke culinary delights, this immersive platform offers a tantalizing glimpse into the world of gastronomy. With elegant layouts, mouth-watering imagery, and seamless navigation, my restaurant landing page invites visitors to savor the essence of fine dining from the comfort of their screens. Whether you're seeking a cozy bistro experience or a lavish dining affair, this HTML and CSS masterpiece sets the stage for an unforgettable culinary journey. Explore our menu, discover our ambiance, and prepare to embark on a gastronomic adventure like no other"}
          images={landing}
          live={"https://aravind-restaurant-landing-page.vercel.app/"}
          git={"https://github.com/aravindkk004/Restaurant-Landing-Page"}
        />

        {/* simon game */}
        <Project 
          description={"Experience the nostalgia and challenge of the classic Simon game brought to life in a modern web format! Developed entirely in JavaScript, my Simon game project offers an engaging and interactive experience that tests your memory and reflexes. With vibrant colors, captivating sounds, and intuitive gameplay, this rendition of Simon faithfully captures the essence of the original while adding a touch of contemporary flair. Challenge yourself to beat your high score as you strive to remember and replicate increasingly complex sequences of lights and sounds. Whether you're a seasoned Simon enthusiast or discovering the game for the first time, my JavaScript Simon game is sure to provide hours of fun and entertainment."}
          images={simon}
          live={"https://aravind-simon-game.vercel.app/"}
          git={" https://github.com/aravindkk004/Simon-Game "}
        />

        {/* quiz app */}
        <Project 
          description={"Dive into a world of quizzes with my simple yet engaging website, built entirely with JavaScript. Featuring a single topic, this straightforward platform offers quizzes designed to provide focused learning and entertainment. With its minimalist design and easy-to-use interface, navigating through the quiz is a breeze, allowing users to enjoy a seamless experience. Whether you're testing your knowledge or simply looking for some quick fun, my JavaScript quiz website offers a straightforward and enjoyable way to engage with your favorite topic."}
          images={quiz}
          live={"https://quiz-app-aravind-nine.vercel.app/"}
          git={"https://github.com/aravindkk004/Quiz-App"}
        />

        {/* tictactoe */}
        <Project 
          description={"Step into the world of strategic gameplay with my rendition of the timeless classic, Tic Tac Toe! Crafted entirely using JavaScript, my Tic Tac Toe game brings the beloved pastime to your fingertips in a sleek and intuitive web interface. Dive into thrilling matches against friends or AI opponents, testing your strategic prowess and tactical foresight with every move. With its clean design, responsive controls, and immersive gameplay experience, my JavaScript Tic Tac Toe game offers endless hours of fun for players of all ages. Whether you're seeking a quick brain teaser or a competitive showdown, challenge yourself to claim victory in this iconic game of Xs and Os"}
          images={tictactoe}
          live={" https://tic-tac-toe-one-liard.vercel.app/"}
          git={"https://github.com/aravindkk004/Tic-Tac-Toe "}
        />

        {/* drum  */}
        <Project 
          description={"Experience the rhythm of music with my interactive drum website, brought to life with JavaScript. This immersive platform offers a simple yet engaging drumming experience, allowing users to unleash their creativity and explore the world of percussion. With intuitive controls and responsive design, playing the drums has never been easier or more enjoyable. Whether you're a seasoned drummer or a novice exploring the beats for the first time, my JavaScript drum website provides a fun and accessible way to jam out to your favorite tunes. Get ready to tap into your musical talents and create captivating rhythms with just a click of a button!"}
          images={drum}
          live={"https://drum-kit-aravind.vercel.app/"}
          git={"https://github.com/aravindkk004/Drum-Kit"}
        />

      </div>
    </section>
  );
};

export default Projects;

   
// weather = https://github.com/aravindkk004/Weather-App
   
// talen = https://github.com/aravindkk004/TalenCrafter

