import aws from '../assests/aws.png';
import cplusplus from '../assests/cplusplus.png';
import express from '../assests/express.png';
import js from '../assests/js.png';
import mongodb from '../assests/mongodb-icon.png';
import mysql from '../assests/mysql.png';
import nodejs from '../assests/nodejs.png';
import react from "../assests/react.png";
import sql from '../assests/sql.png';


const Techstack = () => {
    return (
      <section>
        <div className="container techstack__container">
          <div className="tech__left">
            <h3> Tech Stack </h3>
          </div>
          <div className="tech__right">
            <img src={cplusplus} alt="react-icons" />
            <img src={js} alt="react-icons" />
            <img src={react} alt="react-icons" />
            <img src={nodejs} alt="react-icons" />
            <img src={express} alt="react-icons" />
            <img src={mongodb} alt="react-icons" />
            <img src={sql} alt="react-icons" />
            <img src={mysql} alt="react-icons" />
            <img src={aws} alt="react-icons" />
          </div>
        </div>
      </section>
    );
};

export default Techstack;