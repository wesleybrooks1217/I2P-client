import { useEffect } from "react";
import CourseCard from "../../Cards/CourseCard";
import "../../CardList/CourseCardList.css";
import { useState } from "react";

function CourseList(props) {
  const [image, setImage] = useState("Stem.jpeg");

  useEffect(() => {
    if (props.data.type === "Course") {
      setImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bPqfc7gOK3JrndzlAc-i9AYCkJ6to65sVQ&usqp=CAU"
      );
    } else if (props.data.type === "college") {
      setImage(
        "https://research.collegeboard.org/media/2022-02/iStock_000021255451_Large-780x585.jpg"
      );
    } else if (props.data.type === "career") {
      setImage("Workers.jpeg");
    }
  }, [props.data.type]);

  return (
    <div className="course_list_container">
      <div className="card_container">
        <CourseCard
          name={props.data.name}
          description={props.data.description}
          img={image}
          type={props.data.type}
          id={props.data.id}
        />
      </div>
    </div>
  );
}

export default CourseList;
