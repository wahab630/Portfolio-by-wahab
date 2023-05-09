import React from "react";
import ProjectOne from "../components/elements/ProjectOne";

import ProjectTwo from "../components/elements/ProjectTwo";
import Project3 from "../components/elements/Project3";
import ProjectFour from "../components/elements/ProjectFour";
import ProjectSix from "../components/elements/ProjectSix";
import ProjectFive from "../components/elements/ProjectFive";
import ProjectSeven from "../components/elements/ProjectSeven";

const Portfolio = () => {
  return (
    <>
      <div className="project1">
        <ProjectOne />
      </div>
      <ProjectTwo />
      <Project3 />
      <ProjectFour />
      <ProjectFive />
      <ProjectSix />
      <ProjectSeven />
    </>
  );
};

export default Portfolio;
