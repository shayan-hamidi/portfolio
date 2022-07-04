import React from "react";
import "./experience.css";
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend"></div>
        <div className="backend"></div>
      </div>
    </section>
  );
}

export default Experience;
