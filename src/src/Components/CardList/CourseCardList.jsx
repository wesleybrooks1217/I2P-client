import { useEffect } from "react";
import CourseCard from "../Cards/CourseCard";
import "./CourseCardList.css";
import { useState } from "react";

function CourseCardList(props) {

    const[image, setImage] = useState("Stem.jpeg");

    useEffect(() => {
        if (props.type === "course") {
            setImage("Stem.jpeg");
        } else if (props.type === "college") {
            setImage("CollegePic.jpeg");
        } else if (props.type === "career") {
            setImage("Workers.jpeg")
        }
    }, [props.type]);

    return (
        <div className="course_list_container">

            <div className="card_container">
                <CourseCard 
                name = {props.names[0]}
                description = {props.descriptions[0]}
                img = {image}/>
            </div>

            <div className="card_container">
                <CourseCard 
                name = {props.names[1]}
                description = {props.descriptions[1]}
                img = {image}/>
            </div>

            <div className="card_container">
                <CourseCard 
                name = {props.names[2]}
                description = {props.descriptions[2]}
                img = {image}/>
            </div>
            
        </div>
    );
};

export default CourseCardList;