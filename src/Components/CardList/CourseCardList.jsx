import { useEffect } from "react";
import CourseCard from "../Cards/CourseCard";
import "./CourseCardList.css";
import { useState } from "react";

function CourseCardList(props) {

    const[image, setImage] = useState("Stem.jpeg");

    useEffect(() => {
        if (props.type === "course") {
            setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bPqfc7gOK3JrndzlAc-i9AYCkJ6to65sVQ&usqp=CAU");
        } else if (props.type === "college") {
            setImage("https://research.collegeboard.org/media/2022-02/iStock_000021255451_Large-780x585.jpg");
        } else if (props.type === "career") {
            setImage("https://www.incimages.com/uploaded_files/image/1920x1080/getty_160945425_970647970450083_44809.jpg")
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