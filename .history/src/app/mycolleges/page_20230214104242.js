"use client"
import React, { useState } from "react";
import "../threecs.css";
import { SmallCollege, MediumCollege, LargeCollege } from "../college/page";

const MyColleges = ({ onSelectCollege }) => {
  const colleges = [
    { name: "College 1" },
    { name: "College 2" },
    { name: "College 3" },
    // ...
  ];

  return (
    <div className="mycolleges">
      <div className="mycolleges-header">
        <div className="mycolleges-header-text">My Colleges</div>
        <div className="mycolleges-header-filter">
          <i className="fa fa-filter" />
        </div>
      </div>
      <ul className="mycolleges-list">
        {colleges.map((college, index) => (
          <li
            key={index}
            className="mycolleges-list-item"
            onClick={() => onSelectCollege(college)}
          >
            <SmallCollege college={college} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const CollegeComputer = () => {
  return (
    <div className="collegecomputer">
      <div className="collegecomputer-header">College Computer</div>
      {/* Add your content here */}
    </div>
  );
};

const CollegeDataPage = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  return (
    <div className="collegedata">
      <MyColleges onSelectCollege={setSelectedCollege} />
      <div className="collegedata-main">
        {selectedCollege ? (
          <LargeCollege college={selectedCollege} /> 
        ) : (
          <div className="collegedata-main-placeholder">
            Select a college from the list on the left
          </div>
        )}
      </div>
      <CollegeComputer />
    </div>
  );
};

export default CollegeDataPage;



















 
































