import { TfiLocationPin } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";

const Contact = () => {
    return (
      <section style={{ background: "#fff" }}>
        <div className="container contact__container">
          <div className="contact-content">
            <h3 className="section__header">CONTACT</h3>
            <h2>Don't be shy ! Hit me up ! 👇</h2>
          </div>
          <div className="contact-links">
            <div className="contact-link">
              <span className="contact-icons">
                <TfiLocationPin className="contact-ic"/>
              </span>
              <div className="contact-data">
                <h4>Location</h4>
                <p>Indore , India</p>
              </div>
            </div>
            <div className="contact-link">
              <span className="contact-icons">
                <CiMail className="contact-ic" />
              </span>
              <div className="contact-data">
                <h4> Email</h4>
                <a href="mailto:ajaysonere786@gmail.com">
                  ajaysonere786@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;