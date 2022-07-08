import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/about-me3.png";
import HeaderSocials from "./HeaderSocials";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{t("name")}</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <small>Tehran,Iran</small>
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
}

export default Header;
