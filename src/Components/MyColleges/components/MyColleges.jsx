import { init_API_College_AI, API_College_AI } from "../../../API_College_AI"
import { Paper, Slider, MantineProvider} from '@mantine/core';
import React, { useEffect, useState, useRef} from "react";
import { SmallCollege, MediumCollege, LargeCollege, Button } from "../College";

export const MyColleges = ({ onSelectCollege }) => {
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
      <Paper className="college-container" shadow="lg" p="md" sx={{width: "25%" ,  marginLeft: '2.5%', marginRight: "5%"}}>
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
  

  export default MyColleges;