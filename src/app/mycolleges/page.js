"use client"
import React, { useEffect, useState } from "react";
import "../threecs.css";
import { SmallCollege, MediumCollege, LargeCollege } from "../college/page";
import { API, init_api } from '../../pages/api/index';

const MyColleges = ({ onSelectCollege }) => {
  const [colleges, setColleges] = useState([]);
  
  useEffect(() => {
    async function fetchColleges() {
      init_api();
      const promise = API.get(`/api/colleges/`)
      promise.then((response) => {
        setColleges(response.data);
      })
        
    };
    fetchColleges();
  }, [])

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
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [view, setView] = useState("large");
  
  const addCollege = (college) => {
    if (selectedColleges.length < 4) {
        setSelectedColleges([...selectedColleges, college]);
    }
  };

  const deleteCollege = (index) => {
    setSelectedColleges(
        selectedColleges.filter((_, i) =>  
            i !== index)
        );
  };

  const selectCollege = (college) => {
    if (view === "large") {
        setSelectedCollege(college);
    } else {
        setSelectedColleges([...selectedColleges, college]);
    }
  };


  return (
    <div className="collegedata">
      <MyColleges onSelectCollege={selectCollege} />
      <div className="collegeMiddle">
        <div className="collegeMiddleHeader">
            <div className="collegeMiddleHeaderText"> Selected Colleges </div>
            <button onClick={() => setView(view === "large" ? "medium" : "large")}>
                {view === "large" ? "Switch to Medium" : "Switch to Large"}
                </button>
                </div>
            {view === "large" ? (
                <LargeCollege college={selectedCollege} /> 
              
            ) : (
                <div className="mediumColleges">
                    {selectedColleges.map((college, index) => (
                        index < 4 &&
                        <MediumCollege 
                            key={index}
                            college={college}
                            onDelete={() => deleteCollege(index)}
                            />
                    ))}
                </div>
            )}
            </div>
      <CollegeComputer />
      </div>
      );
};


export default CollegeDataPage;



















 
































