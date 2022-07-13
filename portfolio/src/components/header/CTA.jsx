import React from "react";
import { Trans } from "react-i18next";
import persianCV from "../../assets/persianCV.pdf";
function CTA() {
  return (
    <div className="cta">
      <a href={persianCV} download className="btn">
        <Trans i18nKey={"downloadCV"} />
      </a>
      <a href="#contact" className="btn btn-primary">
        <Trans i18nKey={"letsTalk"} />
      </a>
    </div>
  );
}

export default CTA;
