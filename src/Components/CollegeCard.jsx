import React from "react";

function CollegeCard(props) {
    return (
        <div> 
            <h1> {props.name} </h1>
            <p> {props.acceptanceRate} </p>

            </div>
    )
}

export default CollegeCard;