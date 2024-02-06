import React from "react";
import Gmail from '../assets/Gmail.png';
import Linkedin from '../assets/Linkedin.png';
import Github from '../assets/Github.png';

export const Contact = () => {
  return (
    <footer id="contact" className="contain">
    <div className="text" >
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className="Social">
        <li className="Mail">
          <img src={Gmail} alt="Email icon" />
          <a href="mailto:omolaraadeola20@gmail.com">omolaraadeola20@gmail.com</a>
        </li>
        <li className="Mail">
          <img
            src={Linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/Adeniyi Motunrayo">linkedin.com/Adeniyi Motunrayo</a>
        </li>
        <li className="Mail">
          <img src={Github} alt="Github icon" />
          <a href="https://www.github.comMotunrayo-omolara">github.com/Motunrayo-omolara</a>
        </li>
      </ul>
    </footer>
  );
};