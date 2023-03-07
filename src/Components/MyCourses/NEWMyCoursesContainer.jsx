import React, { useState, useRef} from "react";
import "./MyCourses.css";
import { MediumCourse, LargeCourse } from "./Course"
import MyCourses from "./MyCoursesContainer";
import { CollegeComputer } from "./components/CollegeComputer";
import TopNav from "../Nav/components/TopNav";
// MyCollege Template

const CourseDataPage = ({setCourses, courses}) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const listCourses = useSelector((state) => state.highSchoolCourses);
  //const [data, setData] = useState(scheduleData); no use of constant code
const [courseNums, setCourseNums] = useState([]);
const [courseItems, setCourseItems] = useState([]);
const [test, setTest] = useState(0);
const dispatch = useDispatch();
console.log(listCourses);
const changeMainCareerListElement = (id) => {
  console.log(id);
  setTest(id);
};
const ListItem = (props) => {
  return (
    <li onMouseDown={() => changeMainCareerListElement(props.val_id)}>
      {" "}
      {props.value}{" "}
    </li>
  );
};
useEffect(() => {
  const fetchCourseList = async () => {
    init_api();
    var tempData = [];
    for (var i = 0; i < listCourses.length; i++) {
      await API.get(`/api/career/${listCourses[i]}/`).then((response) => {
        tempData.push(response.data);
      });
    }
    setCourseNums(tempData);
    const tempItems = courseNums.map((data) => {
      return <ListItem key={data.id} val_id={data.id} value={data.name} />;
    });
    setCourseItems(tempItems);
  };
  fetchCourseList();
});
  
  
  const [view, setView] = useState("large");
  const largeCourseRef = useRef(null);

  const addCourse = (course) => {
    if (selectedCourses.length < 4) {
        setSelectedCourses([...selectedCourses, course]);
    }
  };
  
  const deleteCourse = (index) => {
    console.log("Hello")
    setSelectedCourse(
        selectedCourses.filter((_, i) =>  
            i !== index)
        );
  };
  
  const selectCourse = (course) => {
    if (view === "large") {
        setSelectedCourse(course);
    } else {
        setSelectedCourses([...selectedCourse, course]);
    }
  };
 
  const handleLiked = (course) => {
    setCourses(...courses, course)
  }

  const handleLarge = (course) => {
    setView("large");
    setSelectedCourse(course);
  };

  return (
    <div className="my-colleges-container">
         <div style={{ marginTop: 0, position: "absolute", width: "100%" }}>
   <TopNav />
 </div>
      <div class="shape-container"></div>
    <div className="collegedata">
     
      <MyCourses onSelectCourse={selectCourse}  />
      <div className="collegeMiddle" >
        <div className="collegeMiddleHeader">
            <div className="collegeMiddleHeaderText"><b> Course Comparator</b> </div>
            <button className="collegeMiddle-button" onClick={() => setView(view === "large" ? "medium" : "large")}>
                {view === "large" ? "Switch to Medium" : "Switch to Large"}
                </button>
                </div>
            {view === "large" ? (
                <LargeCourse ref={largeCourseRef} course={selectedCourse} /> 
              
            ) : (
                <div className="mediumColleges" >
                    {selectedCourses.map((course, index) => (
                        index < 4 &&
                        <MediumCourse 
                            key={index}
                            largeCourseRef={largeCourseRef}
                            course={course}
                            onDelete={() => deleteCourse(index)}
                            onLargeClick={() => handleLarge(course)}
                            handleLiked={() => handleLiked(course)}
                            />
                    ))}
                </div>
            )}
            </div>
      <CollegeComputer />
      </div>
      </div>
      );
};


export default CourseDataPage;



















 





















