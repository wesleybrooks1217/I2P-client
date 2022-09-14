import React, { useState } from "react";
import CollegeCard from "./CollegeCard";

function MyColleges(props) {
    const [colleges, setColleges] = useState([]);
    function addItem() {
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
            <h1> My Colleges </h1>
            {colleges.map((college) => {
                <CollegeCard 
                    name={college.name}
                    acceptanceRate={college.acceptanceRate}
                    addCollege={addItem} 
                    />
            })};
            <p> Delete an Item </p>
            
        </div> 
    )
}