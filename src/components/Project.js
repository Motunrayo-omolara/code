import React from "react";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <section className="ccontainer" id="projects">
      <h2 className="ttitle">Projects</h2>
      <div className="projects">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};