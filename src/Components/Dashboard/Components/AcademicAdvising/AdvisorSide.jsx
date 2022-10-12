import React, { useState } from 'react';
import "./AcademicAdvising.css"

function AdvisorSide(props) {
    function handleClick(event) {
        const id = event.target.id
        props.setArea(id)
    }
    return (
        <div className={props.isOpen ? "advisor-side slide_in" : ""}>
                {props.isOpen ? 
                <div>
                    <h4> Quick Search </h4>
                    </div> : ""}
        
        </div>
    )
}

export default AdvisorSide;