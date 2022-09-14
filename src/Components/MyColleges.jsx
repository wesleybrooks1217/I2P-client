import React, { useState } from "react";
import CollegeCard from "./CollegeCard";

function MyColleges(props) {
    const [colleges, setColleges] = useState([]);
    function addItem() {
        setColleges((prevColleges) => {
            return [...prevColleges, newColleges];
        })
    }
    return (
        <div>
            <h1> My Colleges </h1>
            {colleges.map((college) => {
                <CollegeCard 
                    name={college.name}
                    acceptanceRate={college.acceptanceRate}
                    addItem={addItem} />
            })};
        </div> 
    )
}