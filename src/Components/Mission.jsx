import React from "react";
import "./Mission.css";

const Mission = ({ image, title, description, count, progress }) => {
  return (
    <div className="mission-container">
      <div className="mission-image-container">
        <img src={image} alt="Mission" className="mission-image" />
        <div className="mission-count">{count}</div>
        <div className="mission-progress">{progress}</div>
      </div>
      <div className="mission-text-container">
        <div className="mission-title">{title}</div>
        <div className="mission-description">{description}</div>
      </div>
    </div>
  );
};

export default Mission;
