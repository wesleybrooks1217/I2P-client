import React, { useState } from "react";
import CollegeCard from "../CollegeCard";
import TopTab from './TopTab'
import FillerSection from "./FillerSection";
import DropSelector from "./DropSelector";
import UserProfile from "./UserProfile";

function MyColleges(props) {
    const [colleges, setColleges] = useState([]);
    function addItem(newColleges) {
        setColleges((prevColleges) => {
            return [...prevColleges, newColleges];
        })
    }
    function deleteCollege(id) {
        setColleges((prevColleges) => {
            return prevColleges.filter((college, index) => {
                return id !== index;
            });
        });
    }
    return (
        <div>
            <h2 className='header'>MyColleges</h2> 
            <div className='top-colleges-container'>
            <UserProfile />
            <TopTab />
            </div>
            {colleges.map((college) => {
                <CollegeCard 
                    name={college.name}
                    acceptanceRate={college.acceptanceRate}
                    addCollege={addItem} 
                    />
            })}
            <DropSelector />
            <FillerSection />
          
            
        </div> 
    )
}

export default MyColleges;