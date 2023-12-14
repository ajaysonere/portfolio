import about from '../assests/about.png';

const About = () => {
    return (
      <section id= "about"className='about'  style={{"background" : "#fff"}}>
        <div className="container about__container">
          <div className="about__left">
            <img src={about} alt="about"></img>
          </div>
          <div className="about__right">
            <h3 className='section__header'>ABOUT ME </h3>
            <h4>A dedicated Full-Stack Developer based in Indore, India 📍</h4>
            <p>
              As a Junior Full-Stack Developer , I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Nodejs , Express , Mongodb , Sql and Mysql. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </section>
    );
};

export default About;