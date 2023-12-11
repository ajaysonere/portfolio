import { VscGithubAlt } from "react-icons/vsc";
import { LiaLinkedin } from "react-icons/lia";


const Footer = () => {
  return (
    <footer style={{background:"#2D2E32" , color:"#fff"}}>
      <div className="container  footer__container">
          <div className="footer-content">
            <h3>Copyright © 2023. All rights are reserved</h3>
          </div>
          <div className="footer-icons">
             <a href="https://github.com/ajaysonere" className="github-icon">
                <VscGithubAlt className="footer-icons" />
             </a>
             <a href="https://linkedin.com/in/ajaysonere" className="linkedin-icon">
                <LiaLinkedin className="footer-icons" />
             </a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
