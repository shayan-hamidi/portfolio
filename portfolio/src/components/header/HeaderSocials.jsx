import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/shayan-hamidi-b2812a202/"
        target={"_blank"}
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/shayan-hamidi" target={"_blank"} rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100072877444506" target={"_blank"} rel="noreferrer">
        <AiFillFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
