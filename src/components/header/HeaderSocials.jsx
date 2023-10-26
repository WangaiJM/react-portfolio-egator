import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="github.com" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="dribbble.com" target="_blank">
        <FaDribbbleSquare />
      </a>
    </div>
  );
};
