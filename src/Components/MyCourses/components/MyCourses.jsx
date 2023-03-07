import { init_API_College_AI, API_College_AI } from "../../../API_College_AI"
import { Paper, Slider, MantineProvider} from '@mantine/core';
import React, { useEffect, useState, useRef} from "react";
import { SmallCourse, MediumCourse, LargeCourse, Button } from "../Course";

export const MyCourses = ({ onSelectCourse }) => {
    const [activeTab, setActiveTab] = useState('home');
    const listCourses = useSelector((state) => state.highSchoolCourses);
    const [data, setData] = useState(scheduleData);
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
    
    
  
    const handleFavoriteToggle = (courseUnitId, isFavorited) => {
      const updatedUserCourses = courseNums.map((courseArr) => {
        if (course.name === courseUnitId) {
          return [{ ...course, isFavorited}];
        }
        return courseArr;
      });
      setCourseItems(updatedUserCourses);
    };
  
    const favoriteCourses = courses.filter((courseArr) => {
      return courseArr.isFavorited;
    });
  
    function handleTabClick(tab) {
      setActiveTab(tab);
    }
  
    return (
      <Paper className="college-container" shadow="lg" p="md" sx={{width: "25%" ,  marginLeft: '2.5%', marginRight: "5%"}}>
        <div className="mycolleges-header">
          <div className="mycolleges-header-text"><b>My Courses</b></div>
          <button
         className={`tab-button ${activeTab === 'home' ? 'active' : ''}`}
         onClick={() => handleTabClick('home')}
       >
         Home
       </button>
       <button
         className={`tab-button ${
           activeTab === 'favorites' ? 'active' : ''
         }`}
         onClick={() => handleTabClick('favorites')}
       >
         Favorites
       </button>
        </div>
  
        {activeTab === 'home' && (
        
          <ul className="my-college-list">
             {courseItems.map((course) => (
          <SmallCourse key={course.name} onClick={() => onSelectCourse(course)} course={course} onFavoriteToggle={handleFavoriteToggle} />
             ))}
            </ul>
        )
      }
  
        {activeTab === 'favorites' && (
           <ul className="my-college-list">
          {favoriteCourses.map((courseArr => (
            <SmallCourse key={course.name} onClick={() => onSelectCourse(courseArr)} course={courseArr} onFavoriteToggle={handleFavoriteToggle} /> 
          )))}
          </ul>
  
        )}
      </Paper>
    
    );
  };
  

  export default MyCourses;