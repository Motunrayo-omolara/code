import React from "react";
import project from "../assets/project.png";

export const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  return (
    <div className="containerr">
      <img
        src={project.png}
        alt={`Image of ${title}`}
        className="image"
      />
      <h3 className="titlle">{title}</h3>
      <p className="ddescription">{description}</p>
      <ul className="skills">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="skkill">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="linkss">
        <a href={demo} className="linnk">
          Demo
        </a>
        <a href={source} className="linnk">
          Source
        </a>
      </div>
    </div>
  );
};