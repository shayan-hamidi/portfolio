import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/project6.png";
function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG6,
      title: "Snapp Simulator",
      github: "https://github.com/alireza-phy/snapp-market-react",
      // demo: "https://github.com",
    },
    {
      id: 2,
      image: IMG2,
      title: "Online Shop",
      github: "https://github.com/shayan-hamidi/onlineShopReact",
      demo: "https://shayan-hamidi.github.io/onlineShopReact/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Weather App",
      github: "https://github.com/shayan-hamidi/dashboard-nodin-soft",
      // demo: "https://github.com",
    },
    {
      id: 4,
      image: IMG4,
      title: "Videos Api",
      github: "https://github.com/shayan-hamidi/tamrin-UI-films",
      demo: "https://shayan-hamidi.github.io/tamrin-UI-films/",
    },
    {
      id: 5,
      image: IMG1,
      title: "Charts templates & infographics in Figma",
      // github: "https://github.com",
      demo: "http://panayadak.ir/",
    },
    {
      id: 6,
      image: IMG5,
      title: "Charts templates & infographics in Figma",
      github: "https://github.com/shayan-hamidi/todo-list-responsive",
      demo: "https://shayan-hamidi.github.io/todo-list-responsive/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github ? (
                  <a
                    href={github}
                    className="btn"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Github
                  </a>
                ) : null}
                {demo ? (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
