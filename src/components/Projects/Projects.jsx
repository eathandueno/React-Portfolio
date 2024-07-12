import React from "react";
import "./Carousel.css";
// import Slideshow from "./Slideshow";
import Carousel from "./Carousel";
const Projects = () => {
  return (
    <div id="Projects" className="project-container">
      <h3>
        Personal and <span className="little">Professional</span> Projects
      </h3>
      <Carousel />
    </div>
  );
};

export default Projects;