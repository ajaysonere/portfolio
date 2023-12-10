import hand from '../assests/hand.png';
import hero from '../assests/hero.jpg';
import { VscGithubAlt } from "react-icons/vsc";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section>
            <div className="container hero__container">
                <div className="hero__left">
                    <h2> Full-Stack Javascript <br/> Developer </h2>
                     <img src={hand} alt='hello gesture'></img>
                    <p>
                        Hi, I'm Ajay Sonere . A passionate Full-Stack Javascript  Developer <br/> based in Indore, India . 📍
                    </p>
                    <div className='hero__socials'>
                        <Link to='https://linkedin.com/in/ajaysonere' target='_blank' rel='noreferrer' >
                            <LiaLinkedin className='hero__first-icon' />
                        </Link>
                         <Link to='https://github.com/ajaysonere' target='_blank' rel='noreferrer' >
                            <VscGithubAlt className='hero__second-icon' />
                        </Link>
                    </div>
                </div>
                <div className='hero__right'>
                    {/* <img src={hero} alt='developer'></img> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;