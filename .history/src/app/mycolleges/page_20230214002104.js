"use client"
import React, { useState } from "react";
import "../threecs.css";

const MyColleges = () => {
    const [selectedCollege, setSelectedCollege] = useState(null);
    const colleges = [
        { name: "College 1"},
        { name: "College 2"},
        { name: "College 3"},
        { name: "College 4"},
        { name: "College 5"},
        { name: "College 6"},
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
              className={`mycolleges-list-item ${
                selectedCollege === index ? "mycolleges-list-item-selected" : ""
              }`}
              onClick={() => setSelectedCollege(index)}
            >
              {college.name}
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
        <h1> Hellon</h1>
      </div>
    );
  };
  
  const CollegeDataPage = () => {
    return (
      <div className="collegedata">
        <MyColleges />
        <CollegeComputer />
      </div>
    );
  };
  
  export default CollegeDataPage;  
       
  