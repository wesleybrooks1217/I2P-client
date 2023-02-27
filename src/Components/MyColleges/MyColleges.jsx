import React, { useEffect, useState } from "react";
import "./MyColleges.css";
import { SmallCollege, MediumCollege, LargeCollege } from "../College";
import { API, init_api } from "../../API/index"
import { init_API_College_AI, API_College_AI } from "../../API_College_AI"
import { Filter, HomeDot, Star } from "tabler-icons-react";

import { Paper } from '@mantine/core';

const MyColleges = ({onSelectCollege}) => {
  const [colleges, setColleges] = useState([]);
  const collegeIds = [134130, 110635, 139959, 139931, 139755];
  useEffect(() => {
    const fetchCollegeData = async () => {
      var colleges = [];
      for (var i = 0; i < collegeIds.length; i++) {
        init_API_College_AI(collegeIds[i], "info");
        await API_College_AI.get().then((response) => {
          colleges.push(response.data.colleges);
        });
      }
    setColleges(colleges)
    console.log(colleges)
    
    }
    fetchCollegeData();
    },[]);
 

  return (
    
    <Paper className="college-container" shadow="lg" p="md" sx={{width: "35%" , marginRight: "5%", marginTop: "2.5%"}}>
      <div className="mycolleges-header">
        <div className="mycolleges-header-text"><b>My Colleges</b></div>
          <HomeDot size={24} sx={{marginLeft: '15px'}} />
          <Star size={24}  sx={{marginLeft: '15px'}} />
      </div>

      <ul className="my-college-list">
      {colleges.map((college) => (
         <SmallCollege key={college[0].id} onClick={() => onSelectCollege(college)} college={college} />
   
           
      ))}
      
      </ul>
    </Paper>
  
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

const CollegeDataPage = (props) => {
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
    console.log("OK")
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



















 





















