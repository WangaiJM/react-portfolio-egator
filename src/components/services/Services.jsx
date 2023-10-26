import "./services.css";

import { BsCheck } from "react-icons/bs";

export const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>My Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum,lit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit ametelit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor si adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className=" services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet .</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
