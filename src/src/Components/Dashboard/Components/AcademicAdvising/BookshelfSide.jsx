import React, { useState } from 'react';
import "./AcademicAdvising.css"
import CourseMini from '../../../Universal/CourseMini';
import CollegeMini from '../../../Universal/CollegeMini';
import CareerMini from '../../../Universal/CareerMini';
function BookshelfSide(props) {
    function handleClick(event) {
        const id = event.target.id
        props.setArea(id)
    }
    return (
        <div className={props.isOpen ? "bookshelf-side slide_in" : ""}>
        <div onClick={handleClick} id='classes' className={props.isOpen ? 'bookshelf-classes' : ""}>
        {props.isOpen ?  
            <div>
                <h4> Course Recommendations </h4>
            <CourseMini name='Help!'  />
            <CourseMini name='Help!'  />
            <CourseMini name='Help!'  /> 
            <h4> Randomize Recs </h4>
            </div>: ''} </div>
        <div onClick={handleClick} id='colleges' className={props.isOpen ? 'bookshelf-colleges' : ""}>
        {props.isOpen ?  
            <div>
                <h4> College Recommendations </h4>
            <CollegeMini name='Help!' description="Dummy Data" />
            <CollegeMini name='Help!' description="Dummy Data" />
            <CollegeMini name='Help!' description="Dummy Data" /> 
            <h4> Randomize Recs  </h4>
            </div>: ''} </div>
        <div onClick={handleClick} id='careers' className={props.isOpen ? 'bookshelf-careers' : ""}>
        {props.isOpen ?  
            <div>
                <h4> Career Recommendations </h4>
            <CareerMini name='Help!' description="Dummy Data Ex" />
            <CareerMini name='Help!' description="Dummy Data Ex" />
            <CareerMini name='Help!' description="Dummy Data Ex" /> 
            <h4> Randomize Recs  </h4>
            </div>: ''} </div>
        </div>
    )
}

export default BookshelfSide;