import React from "react";
import "../threecs.css";

// Small College Component - C1(X)

export const SmallCollege = ({college}) => {
    return (
        <div className="smallcollege">
            <div className="smallcollege-name">{college.name}</div>
        </div>
    );
};

//Medium College Component - C1(Y)

export const MediumCollege = ({ college }) => {
    return college ? (
        <div className="mediumcollege">
            <div className="mediumcollege-name">{college.name}</div>
            <div className="mediumcollege-description">{college.description}</div>
        </div>
    ) : null;
};

//Large College Component - C1(Z)

export const LargeCollege = ({ college }) => {
    return college ? (
        <div className="largecollege">
            <div className="largecollege-name">{college.name}</div>
            <div className="largecollege-description">{college.description}</div>
            <div className="largecollege-details">{college.details}</div>
        </div>
    ) : null;
};