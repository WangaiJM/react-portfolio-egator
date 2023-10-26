import { CTA } from "./CTA";
import { HeaderSocials } from "./HeaderSocials";

import ME from "./../../assets/me.png";

import "./header.css";

export const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Wangai Jackson</h1>
        <h2 className="text-light">Full Stack Developer</h2>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
