import firstProject from '../assests/firstProject.png';
import projectFour from '../assests/projectFour.png';
import { VscGithub } from "react-icons/vsc";
import { SiLivewire } from "react-icons/si";

const Project = () => {
    return (
      <section>
        <div className="container project__container">
          <div className="project-content">
            <h3 className="section__header">PORTFOLIO</h3>
            <h2>Each project is a unique piece of development 🧩</h2>
          </div>
          <div className="project__flex">
            <div className="project project-even ">
              <div className="project__left">
                <a href="htt" target="_blank" className="large-image-container">
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
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="stack">
                  <span>React</span>
                  <span>CSS </span>
                  {/* <span>Express</span>
                  <span>Mongodb</span> */}
                </div>
                <div className="links">
                  <a href="https:">
                    <VscGithub /> Code
                  </a>
                  <a href="htt" target="_blank">
                    <SiLivewire /> Live demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project project-reverse">
              <div className="project__right">
                <h3>Tour and Travel 🚗</h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="stack">
                  <span>React</span>
                  <span> CSS </span>
                  {/* <span>Express</span>
                  <span>Mongodb</span> */}
                </div>
                <div className="links">
                  <a href="https:">
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
                    src={projectFour}
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