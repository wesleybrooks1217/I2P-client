import React from "react";
import { CurrentCourseCard } from "./CurrentCourseCard";
import { Grid } from "@mantine/core";

const currentCourseData = [
    {
      id: 0,
      title: "AP Human Geography",
      description:
        "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
    },
    {
      id: 1,
      title: "AP World History",
      description:
        "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
    },
    {
      id: 2,
      title: "General Health",
      description:
        "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
    },
    {
      id: 3,
      title: "Introduction to Business Technology",
      description:
        "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
    },
    {
      id: 4,
      title: "Introduction to Digital Technology",
      description:
        "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
    },
    {
      id: 5,
      title: "AP French",
      description:
        "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
    },
  ];


export const CoursesCurrent = () => {
  return (
    <div>
      <Grid justify="center" align="stretch">
        <Grid.Col span={4} lg={4} md={6} sm={8} xs={8}>
          <CurrentCourseCard
            title={currentCourseData[0].title}
            description={currentCourseData[0].description}
          />
        </Grid.Col>
        <Grid.Col span={4} lg={4} md={6} sm={8} xs={8}>
          <CurrentCourseCard
            title={currentCourseData[1].title}
            description={currentCourseData[1].description}
          />
        </Grid.Col>
        <Grid.Col span={4} lg={4} md={6} sm={8} xs={8}>
          <CurrentCourseCard
            title={currentCourseData[2].title}
            description={currentCourseData[2].description}
          />
        </Grid.Col>
      </Grid>
      <Grid justify="center" align="stretch">
        <Grid.Col span={4} lg={4} md={6} sm={8} xs={8}>
          <CurrentCourseCard
            title={currentCourseData[3].title}
            description={currentCourseData[3].description}
          />
        </Grid.Col>
        <Grid.Col span={4} lg={4} md={6} sm={8} xs={8}>
          <CurrentCourseCard
            title={currentCourseData[4].title}
            description={currentCourseData[4].description}
          />
        </Grid.Col>
        <Grid.Col span={4} lg={4} md={6} sm={8} xs={8}>
          <CurrentCourseCard
            title={currentCourseData[5].title}
            description={currentCourseData[5].description}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};
