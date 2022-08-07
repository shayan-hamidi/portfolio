import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import option1 from "./option1";
function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={option1()}
    />
  );
}

export default Particle;
