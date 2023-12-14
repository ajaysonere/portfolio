import firstProject from '../assests/firstProject.png';
import projectFour from '../assests/projectFour.png';
import projectThree from '../assests/projectThree.png';
import projecTwo from '../assests/projectTwo.png';

import { VscGithub } from "react-icons/vsc";
import { SiLivewire } from "react-icons/si";

const Project = () => {
    return (
      <section id='projects'>
        <div className="container project__container">
          <div className="project-content">
            <h3 className="section__header">PORTFOLIO</h3>
            <h2>Each project is a unique piece of development 🧩</h2>
          </div>
          <div className="project__flex">
            <div className="project project-even ">
              <div className="project__left">
                <a
                  href="https://tour-and-travel-frontend.vercel.app/home"
                  target="_blank"
                  className="large-image-container"
                  rel="noreferrer"
                >
                  <img
                    className="large-image"
                    src={firstProject}
                    alt="first project"
                  ></img>
                </a>
              </div>
              <div className="project__right">
                <h3>Tour and Travel 🚗</h3>
                <p>
                  A Tour and Travel website where you can schedule you tickets
                  and enjoy the wonderfull views of nature and make your life
                  memoriable for your future life.
                </p>
                <div className="stack">
                  <span>React</span>
                  <span>NodeJs </span>
                  <span>ExpressJs</span>
                  <span>MongoDB</span>
                </div>
                <div className="links">
                  <a href="https://github.com/ajaysonere/ToursAndTravels">
                    <VscGithub /> Code
                  </a>
                  <a
                    href="https://tour-and-travel-frontend.vercel.app/home"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SiLivewire /> Live demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project project-reverse">
              <div className="project__right">
                <h3>GYM BUDDY 🏋️</h3>
                <p>
                  A gym website is a comprehensive resource for fitness
                  information, class schedules, membership options, and tools to
                  help users achieve their fitness goals.
                </p>
                <div className="stack">
                  <span>React</span>
                  <span> CSS </span>
                </div>
                <div className="links">
                  <a href="https://github.com/ajaysonere/Gym-webapp">
                    <VscGithub /> Code
                  </a>
                  <a href="htt" target="_blank">
                    <SiLivewire /> Live demo
                  </a>
                </div>
              </div>
              <div className="project__left">
                <a
                  href="https://gym-webapp-eta.vercel.app/"
                  target="_blank"
                  className="large-image-container"
                  rel="noreferrer"
                >
                  <img
                    className="large-image"
                    src={projectFour}
                    alt="first project"
                  ></img>
                </a>
              </div>
            </div>
            <div className="project project-even ">
              <div className="project__left">
                <a
                  href="https://ajaysonere.github.io/react-music-app/"
                  target="_blank"
                  className="large-image-container"
                  rel="noreferrer"
                >
                  <img
                    className="large-image"
                    src={projectThree}
                    alt="first project"
                  ></img>
                </a>
              </div>
              <div className="project__right">
                <h3>Music Web music 🎧 </h3>
                <p>
                  A music web app built using React and CSS. It has a library
                  component where all the libraries will be stored, and you can
                  navigate through the songs and play the song seamlessly
                </p>
                <div className="stack">
                  <span>React</span>
                  <span>CSS </span>
                  {/* <span>Express</span>
                  <span>Mongodb</span> */}
                </div>
                <div className="links">
                  <a href="https://github.com/ajaysonere/react-music-app">
                    <VscGithub /> Code
                  </a>
                  <a
                    href="https://ajaysonere.github.io/react-music-app/"
                    target="_blank" rel='noreferrer'
                  >
                    <SiLivewire /> Live demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project project-reverse project-last" >
              <div className="project__right" style={{height:"fit-content"}}>
                <h3>TASK MANAGER 🖋️</h3>
                <p>
                  A Full-stack web app that can acts as todo's for you. you can schedule your whole day on it . and it have filters for better accessibility.
                </p>
                <div className="stack">
                  <span>React</span>
                  <span>NodeJs </span>
                  <span>ExpressJs</span>
                  <span>MongoDB</span>
                </div>
                <div className="links">
                  <a href="https://github.com/ajaysonere/Task-Manager-App/tree/master">
                    <VscGithub /> Code
                  </a>
                  <a href="htt" target="_blank">
                    <SiLivewire /> Live demo
                  </a>
                </div>
              </div>
              <div className="project__left">
                <a href="htt" target="_blank" className="large-image-container">
                  <img
                    className="large-image"
                    src={projecTwo}
                    alt="first project"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Project;