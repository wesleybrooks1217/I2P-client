import { useEffect } from "react";
import CourseCard from "../Cards/CourseCard";
import "./CourseCardList.css";
import { useState } from "react";

function CourseCardList(props) {

    const[image, setImage] = useState("Stem.jpeg");

    useEffect(() => {
        if (props.data.type === "course") {
            setImage("Stem.jpeg");
        } else if (props.data.type === "college") {
            setImage("https://research.collegeboard.org/media/2022-02/iStock_000021255451_Large-780x585.jpg");
        } else if (props.data.type === "career") {
            setImage("Workers.jpeg")
        }
    }, [props.data.type]);

    return (
        <div className="course_list_container">

            <div className="card_container">
                <CourseCard 
                name = {props.data.names[0]}
                description = {props.data.descriptions[0]}
                img = {image}
                type = {props.data.type}
                id = {props.data.ids[0]}/>
            </div>

            <div className="card_container">
                <CourseCard 
                name = {props.data.names[1]}
                description = {props.data.descriptions[1]}
                img = {image}
                type = {props.data.type}
                id = {props.data.ids[1]}/>
            </div>

            <div className="card_container">
                <CourseCard 
                name = {props.data.names[2]}
                description = {props.data.descriptions[2]}
                img = {image}
                type = {props.data.type}
                id = {props.data.ids[2]}/>
            </div>
            
        </div>
    );
};

export default CourseCardList;