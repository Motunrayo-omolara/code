import React from "react";
import code from '../data/code.json';
import state from '../data/state.json';
import { getImageUrl } from "../image";

export const Experience = () => {
  return (
    <sections  id="experience" className="coontainer">
      <h2 className="titlee">Experience</h2>
      <div className="contennt">
        <div className="codes">
          {code.map((code, id) => {
            return (
              <div key={id} className="code">
                <div className="skillImageContainer">
                  <img src={getImageUrl(code.imageSrc)} alt={code.title} />
                  
                </div>
                <p>{code.title}</p>
              </div>
            );
          })};
        </div>
        <ul className="history">
          {state.map((stateItem, id) => {
            return (
              <li key={id} className="stateItem">
                <img
                  src={getImageUrl(stateItem.imageSrc)}
                  alt={`${stateItem.organisation} Logo`}
                />
                <div className="stateItemDetails">
                  <h3>{`${stateItem.role}, ${stateItem.organisation}`}</h3>
                  <p>{`${stateItem.startDate} - ${stateItem.endDate}`}</p>
                  <ul>
                    {stateItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        </div>
    </sections>
  );
};