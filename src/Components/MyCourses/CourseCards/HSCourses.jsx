
import React from "react";

import {
  Paper,
  createStyles,
  Title,
} from "@mantine/core";

import CourseDescriptionPop from "../Helpers/CourseDescriptionPop";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
  },

  content: {
    maxWidth: 550,
  
  },

  title: {

    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,
  },

  control: {

  },

  image: {
    flex: 1,


  },

  highlight: {
    position: "relative",
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function HSCourses(props) {

  const { classes } = useStyles();
  return (
              <div>
                <div className="title-box">
                  <Title sx={{ textAlign: "center" }} className={classes.title}>
                    {props.title}
                  </Title>

                  <img className="logo-img" src="logo192.png" />
                </div>

                <Paper>
                  <div className="main-container-Careers">
                    <CourseDescriptionPop
                      courseTitle={props.title}
                      description={props.description}
                    />
                  </div>
                </Paper>
              </div>
        
    
  );
}
