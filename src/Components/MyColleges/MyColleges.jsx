import React, { useState, useRef} from "react";
import "./MyColleges.css";
import { MediumCollege, LargeCollege } from "../College";
import { MyColleges } from "./components/MyColleges";
import { CollegeComputer } from "./components/CollegeComputer";

// MyCollege Template

const CollegeDataPage = ({setColleges, colleges}) => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [view, setView] = useState("large");
  const largeCollegeRef = useRef(null);

  const addCollege = (college) => {
    if (selectedColleges.length < 4) {
        setSelectedColleges([...selectedColleges, college]);
    }
  };
  
  const deleteCollege = (index) => {
    console.log("Hello")
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
 
  const handleLiked = (college) => {
    setColleges(...colleges, college)
  }

  const handleLarge = (college) => {
    setView("large");
    setSelectedCollege(college);
  };

  return (
    <div className="my-colleges-container">
      <div class="shape-container"></div>
    <div className="collegedata">
     
      <MyColleges onSelectCollege={selectCollege}  />
      <div className="collegeMiddle" >
        <div className="collegeMiddleHeader">
            <div className="collegeMiddleHeaderText"><b> College Comparator</b> </div>
            <button className="collegeMiddle-button" onClick={() => setView(view === "large" ? "medium" : "large")}>
                {view === "large" ? "Switch to Medium" : "Switch to Large"}
                </button>
                </div>
            {view === "large" ? (
                <LargeCollege ref={largeCollegeRef} college={selectedCollege} /> 
              
            ) : (
                <div className="mediumColleges" >
                    {selectedColleges.map((college, index) => (
                        index < 4 &&
                        <MediumCollege 
                            key={index}
                            largeCollegeRef={largeCollegeRef}
                            college={college}
                            onDelete={() => deleteCollege(index)}
                            onLargeClick={() => handleLarge(college)}
                            handleLiked={() => handleLiked(college)}
                            />
                    ))}
                </div>
            )}
            </div>
      <CollegeComputer />
      </div>
      </div>
      );
};


export default CollegeDataPage;



















 





















