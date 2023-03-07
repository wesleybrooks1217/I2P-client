import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, createStyles, Title, List } from "@mantine/core";

import "./MyCoursesOLD.css";
import { TableSelection } from "./SVGs/CourseSchedule";
import ClassNavBar from "./SVGs/ClassNavBar";
import ScheduleButton from "./Helpers/ScheduleButton";
import { CourseStatsCombined } from "./CourseStatsCombined";
import TopNav from "../Nav/components/TopNav";
import Nav from "../Nav/Nav";
import { API, init_api } from "../../API";
import { changeMainCareer } from "../../redux/careers/careerActions";
import NewCurrentCourseCards from "./SVGs/NewCurrentCourseCards";

const scheduleData = [
  {
    id: "1",
    course: "Health 2",
    classPeriod: "First: 9:05-10:20",
    teacher: "Rob Wolf",
  },
  {
    id: "2",
    course: "AP Chemistry",
    classPeriod: "Second: 10:30-11:45",
    teacher: "Jerry Walters",
  },
  {
    id: "3",
    course: "Algebra 1",
    classPeriod: "Third: 12:00-1:15",
    teacher: "Henry Smith",
  },
  {
    id: "4",
    course: "Geometry",
    classPeriod: "Fourth: 1:30-2:45",
    teacher: "Susan Jones",
  },
  {
    id: "5",
    course: "Physical Education",
    classPeriod: "Fifth: 3:00-4:15",
    teacher: "Drake Griffith",
  },
];

const futureCourseData = [
  {
    id: 0,
    name: "AP Computer Science A",
    // type: "Computer Science",
    description: "Description for AP Computer Science A",
  },
  {
    id: 1,
    name: "Honors Biology",
    // type: "Science",
    description: "Description for Honors Biology",
  },
  {
    id: 2,
    name: "Honors World History",
    // type: "Social Studies",
    description: "Description for Honors World History",
  },
  {
    id: 3,
    name: "Weight Training",
    // type: "Wellness",
    description: "Description for Weight Training",
  },
  {
    id: 4,
    name: "Physics",
    // type: "Science",
    description: "Description for Physics",
  },
  {
    id: 5,
    name: "Algebra II",
    // type: "Math",
    description: "Description for Algebra II",
  },
  {
    id: 6,
    name: "Forensic Science",
    // type: "Science",
    description: "Description for Forensic Science",
  },
];

const currentCourseData = [
  {
    id: 0,
    name: "General Health",
    // type: "Wellness",
    description: "Description for General Health",
  },
  {
    id: 1,
    name: "AP Chemistry",
    // type: "course",
    description: "Description for AP Chemistry",
  },
  {
    id: 2,
    name: "Algebra 1",
    // type: "course",
    description: "Description for Algebra I",
  },
  {
    id: 3,
    name: "Geometry",
    // type: "course",
    description: "Description for Geometry",
  },
  {
    id: 4,
    name: "Physical Education",
    // type: "course",
    description: "Description for Physical Education",
  },
  {
    id: 5,
    name: "AP Biology",
    // type: "course",
    description: "Description for AP Biology",
  },
  {
    id: 6,
    name: "Honors English",
    // type: "course",
    description: "Description for Honors English",
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "left",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  tools: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  container: {
    padding: "0",
    margin: "0",
    backgroundColor: "red",
  },

  teambox: {
    alignItems: "center",
    display: "grid",
    marginTop: "15px",
    gridTemplateRows: "140px 140px 140px 140px",
    gridTemplateColumns: "320px 320px 320px",
    justifyContent: "center",
    paddingLeft: "100px",
    [theme.fn.smallerThan("lg")]: {
      paddingLeft: "0px",
      marginLeft: "80px",
      gridTemplateColumns: "320px 320px",
    },
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  cards: {
    display: "flex",
    justifyContent: "space-around",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function MyCourses() {
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

  useEffect(() => {
    console.log("Main career effect");

    dispatch(changeMainCareer(test));
  }, [test]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       return data;
  //     })
  //     .then((data) => setData(data.highSchoolCourses))
  //     .catch((error) => console.log(error));
  // }, []);

  const [showSidebar, setShowSidebar] = useState(false);
  const { classes } = useStyles();

  return (
    <div className='mycourses-container'>
      {/* <section
        id="section1"
        style={{ position: "relative", width: "100%", height: "100vh" }}
      > */}
      {/* <div
          style={{
            position: "absolute",
            width: 700,
            borderRadius: "30% 0% 0% 50%",
            height: 300,
            top: -100,
            right: -2,
            backgroundColor: "#b5e48c",
            zIndex: -1,
          }}
        ></div> */}
      {/* <div
          style={{
            position: "absolute",
            width: 500,
            zIndex: -1,
            borderRadius: "50% 80% 80% 30%",
            top: 215,
            right: 1200,
            height: 500,
            rotate: "90deg",
            backgroundColor: "#1e6091",
          }}
        ></div> */}
      {/* <div
          style={{
            position: "relative",
            width: 450,
            zIndex: -1,
            top: 145,
            right: 100,
            height: 330,
            backgroundColor: "#b5e48c",
          }}
        ></div> */}

      <Nav />

      {/* <ScheduleButton /> */}
      {/* <ScheduleButton clickHandler={() => setShowSidebar(!showSidebar)} />
      {showSidebar && <ClassNavBar />} */}
      <Container >
        <Title
          sx={{ textAlign: "center" }}
          mt={150}
          mb={30}
          className={classes.title}
        >
          {" "}
          MyCourses{" "}
        </Title>
        <Title sx={{ textAlign: "center" }} className={classes.header}>
          {" "}
          Your Current Schedule - Fall 2022!
        </Title>
        <NewCurrentCourseCards data={currentCourseData} />
        {/* <CourseStatsCombined data={currentCourseData} /> */}
        {/* <CoursesCurrent/> */}
        <Title mt={80} sx={{ textAlign: "center" }} className={classes.header}>
          {" "}
          Our Recommeded Schedule - Spring 2023!
        </Title>
        <NewCurrentCourseCards data={futureCourseData} />
        {/* <CourseStatsCombined data={futureCourseData} /> */}
        <Title
          mt={60}
          mb={20}
          sx={{ textAlign: "center" }}
          className={classes.header}
        >
          {" "}
          {/* Additional Course Recommendations! */}
        </Title>
        {/* <TableSelection data={data} />  */}
      </Container>
      {/* </section> */}
    </div>
  );
}

// const currentCourseData = [
//   {
//     id: 0,
//     course: "General Health",
//     courseType: "Wellness",
//     difficulty: 4.5,
//   },
//   {
//     id: 1,
//     course: "AP Chemistry",
//     courseType: "Science",
//     difficulty: 8.5,
//   },
//   {
//     id: 2,
//     course: "Algebra 1",
//     courseType: "Math",
//     difficulty: 7.5,
//   },
//   {
//     id: 3,
//     course: "Geometry",
//     courseType: "Math",
//     difficulty: 7.3,
//   },
//   {
//     id: 4,
//     course: "Physical Education",
//     courseType: "Wellness",
//     difficulty: 5.5,
//   },
//   {
//     id: 5,
//     course: "AP Biology",
//     courseType: "Science",
//     difficulty: 8.7,
//   },
//   {
//     id: 6,
//     course: "Honors English",
//     courseType: "English",
//     difficulty: 6.8,
//   },
// ];
