import "./about.css";
import ME from "./../../assets/me-about.jpg";

import { RiAwardFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscLibrary className="about__icon" />
              <h5>Prjects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            asperiores optio veniam, fugit esse, consectetur eum deleniti natus
            voluptatem nemo in neque numquam iste aperiam cupiditate veritatis
            porro molestiae officia. Repellendus accusamus sint porro similique
            nesciunt asperiores consequuntur voluptate dicta.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
