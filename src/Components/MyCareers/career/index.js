import React from "react";
import "../MyColleges.css";

// Small College Component - C1(X)

export const SmallCareer= ({career}) => {
    return (
        <div className="smallcollege">
            <div className="smallcollege-name">{career.career_name}</div>
        </div>
    );
};

//Medium College Component - C1(Y)

export const MediumCareer = (props) => {
    const { career } = props;
    return career ? (
        <div className="mediumcollege">
            <div className="mediumcollege-name">{career.career_name}</div>
            <div className="mediumcollege-description">{career.description}</div>
            <button className="delete-button" onClick={() => props.onDelete(career)}>
            X
          </button>
        </div>
    ) : null;
};

//Large College Component - C1(Z)

export const LargeCareer = ({ career }) => {
    return career ? (
        <div className="largecollege">
            <div className="largecollege-name">{career.career_name}</div>
            <div className="largecollege-description">{career.description}</div>
            <div className="largecollege-details">{career.details}</div>
        </div>
    ) : null;
};