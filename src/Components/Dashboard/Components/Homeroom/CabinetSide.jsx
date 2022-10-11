import React, { useState } from 'react';
import "./Homeroom.css"
import CourseMini from '../../../Universal/CourseMini';
function CabinetSide(props) {
    function handleClick(event) {
        const id = event.target.id
        props.setArea(id)
    }
    return (
        <div className={props.isOpen ? "cabinet-side slide_in" : ""}>
        <div className={props.isOpen ? 'cabinet-encyclopedia' : ""}></div>
        <div className={props.isOpen ? 'cabinet-bottom' : ""}>
            {props.isOpen ? 
            <div> 
                <h3> MyCourses </h3>
                <CourseMini name="Dummy" />
                <CourseMini name="Dummy" />
                <CourseMini name="Dummy" />
                <CourseMini name="Dummy" />
                <CourseMini name="Dummy" />
                <CourseMini name="Dummy" />
                <CourseMini name="Dummy" />
                </div> : ""}
        </div>
        
        </div>
    )
}

export default CabinetSide;