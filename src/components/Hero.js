import React from "react";
import cartoon from '../assets/cartoon.png'

export const Hero = () => {
  return (
    <section className="container">
      <div className="context">
        <h1 className="mine">Hi, I'm Omolara</h1>
        <p className="paragraph">
          I'm a full-stack developer with little experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="omolaraadeola20@email.com" className="contactBtn">
          Contact Me
        </a>
      </div>
      <img
        src={cartoon}
        alt="cat"
        className="cartoon"
      />
      <div className="eclipse1"></div>
      <div className="eclipes2"></div>
    </section>
  );
};