import React, { useState, useEffect } from "react";
import { Container, createStyles, Title } from "@mantine/core";

import "./MyCourses.css";
import { TableSelection } from "./SVGs/CourseSchedule";
import ClassNavBar from "./SVGs/ClassNavBar";
import ScheduleButton from "./Helpers/ScheduleButton";
import { CourseStatsCombined } from "./CourseStatsCombined";
import TopNav from "../Nav/components/TopNav";
import {API, init_api} from "../../API";

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
    course: "AP Computer Science A",
    courseType: "Computer Science",
    difficulty: 8.9,
  },
  {
    id: 1,
    course: "Honors Biology",
    courseType: "Science",
    difficulty: 8,
  },
  {
    id: 2,
    course: "Honors World History",
    courseType: "Social Studies",
    difficulty: 7.5,
  },
  {
    id: 3,
    course: "Weight Training",
    courseType: "Wellness",
    difficulty: 4.9,
  },
  {
    id: 4,
    course: "Physics",
    courseType: "Science",
    difficulty: 8.5,
  },
  {
    id: 5,
    course: "Algebra II",
    courseType: "Math",
    difficulty: 9,
  },
  {
    id: 6,
    course: "Forensic Science",
    courseType: "Science",
    difficulty: 6.7,
  },
];

const currentCourseData = [
  {
    id: 0,
    course: "General Health",
    courseType: "Wellness",
    difficulty: 4.5,
  },
  {
    id: 1,
    course: "AP Chemistry",
    courseType: "Science",
    difficulty: 8.5,
  },
  {
    id: 2,
    course: "Algebra 1",
    courseType: "Math",
    difficulty: 7.5,
  },
  {
    id: 3,
    course: "Geometry",
    courseType: "Math",
    difficulty: 7.3,
  },
  {
    id: 4,
    course: "Physical Education",
    courseType: "Wellness",
    difficulty: 5.5,
  },
  {
    id: 5,
    course: "AP Biology",
    courseType: "Science",
    difficulty: 8.7,
  },
  {
    id: 6,
    course: "Honors English",
    courseType: "English",
    difficulty: 6.8,
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
  const [data, setData] = useState(scheduleData);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .then(data => setData(data.highSchoolCourses))
      .catch((error) => console.log(error));
  }, []);


  const [showSidebar, setShowSidebar] = useState(false);
  const { classes } = useStyles();

  return (
    <div>
      <div
        style={{ position: "absolute", width: "100%" }}
      >
        <TopNav />
      </div>
      <ScheduleButton clickHandler={() => setShowSidebar(!showSidebar)} />
      {showSidebar && <ClassNavBar />}
      <Container>
        <Title
          sx={{ textAlign: "center" }}
          mt={80}
          mb={30}
          className={classes.title}
        >
          {" "}
          MyCourses{" "}
        </Title>
        <Title mb={20} sx={{ textAlign: "center" }} className={classes.header}>
          {" "}
          Your Current Schedule - Fall 2022!
        </Title>
        <CourseStatsCombined data={currentCourseData} />
        {/* <CoursesCurrent/> */}
        <Title
          mt={70}
          mb={20}
          sx={{ textAlign: "center" }}
          className={classes.header}
        >
          {" "}
          Our Recommeded Schedule - Spring 2023!
        </Title>
        <CourseStatsCombined data={futureCourseData} />
        <Title
          mt={70}
          mb={20}
          sx={{ textAlign: "center" }}
          className={classes.header}
        >
          {" "}
          Additional Course Recommendations!
        </Title>
        <TableSelection data={data} />
      </Container>
    </div>
  );
}
