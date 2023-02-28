import React, { useEffect, useState } from "react";
import "./MyColleges.css";
import { SmallCollege, MediumCollege, LargeCollege, Button } from "../College";
import { API, init_api } from "../../API/index"
import { init_API_College_AI, API_College_AI } from "../../API_College_AI"
import { Filter, HomeDot, Star } from "tabler-icons-react";

import { Paper, Slider, MantineProvider} from '@mantine/core';


const MyColleges = ({ onSelectCollege }) => {
  const [activeTab, setActiveTab] = useState('home');

  const [colleges, setColleges] = useState([]);
  const collegeIds = [134130, 110635, 139959, 139931, 139755];

  useEffect(() => {
    const fetchCollegeData = async () => {
      const fetchedColleges = [];
      for (let i = 0; i < collegeIds.length; i++) {
        init_API_College_AI(collegeIds[i], 'info');
        await API_College_AI.get().then((response) => {
          console.log(response.data.colleges[0])
          const college = {
            ...response.data.colleges[0],
            isFavorited: false, // add isFavorited property to college object
          };
          fetchedColleges.push([college]);
        });
      }
     
      setColleges(fetchedColleges);
     
    };
    fetchCollegeData();
  }, []);

  const handleFavoriteToggle = (collegeUnitId, isFavorited) => {
    const updatedUserColleges = colleges.map((collegeArr) => {
      const college = collegeArr[0];
      if (college.collegeUnitId === collegeUnitId) {
        return [{ ...college, isFavorited}];
      }
      return collegeArr;
    });
    setColleges(updatedUserColleges);
  };

  const favoriteColleges = colleges.filter((collegeArr) => {
    const college = collegeArr[0];
    return college.isFavorited;
  });

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    
    <Paper className="college-container" shadow="lg" p="md" sx={{width: "35%" , marginRight: "5%", marginTop: "2.5%"}}>
      <div className="mycolleges-header">
        <div className="mycolleges-header-text"><b>My Colleges</b></div>
        <button
       className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
       onClick={() => handleTabClick('home')}
     >
       Home
     </button>
     <button
       className={`tab-button ${
         activeTab === 'favorites' ? 'active' : ''
       }`}
       onClick={() => handleTabClick('favorites')}
     >
       Favorites
     </button>
      </div>

      {activeTab === 'home' && (
      
        <ul className="my-college-list">
           {colleges.map((college) => (
        <SmallCollege key={college[0].collegeUnitId} onClick={() => onSelectCollege(college)} college={college} onFavoriteToggle={handleFavoriteToggle} />
           ))}
          </ul>
      )
    }

      {activeTab === 'favorites' && (
         <ul className="my-college-list">
        {favoriteColleges.map((collegeArr => (
          <SmallCollege key={collegeArr[0].collegeUnitId} onClick={() => onSelectCollege(collegeArr)} college={collegeArr} onFavoriteToggle={handleFavoriteToggle} /> 
        )))}
        </ul>

      )}
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

const CollegeDataPage = ({setColleges, colleges}) => {
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [view, setView] = useState("large");
  
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

    <div className="collegedata">
     
      <MyColleges onSelectCollege={selectCollege}  />
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
                            onLargeClick={() => handleLarge(college)}
                            handleLiked={() => handleLiked(college)}
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



















 





















