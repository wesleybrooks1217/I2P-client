import React from "react";
import CourseStats from "./Helpers/CourseStats";
import { ScrollArea, createStyles } from "@mantine/core";
import Loading from "./SVGs/Loading";

const useStyles = createStyles((theme) => ({
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "transparent",
    borderWidth: 1,
    boxShadow: theme.shadows.sm,
  },
  root: {
    height: 42,
    padding: "20px 30px",
    backgroundColor: theme.colorScheme === "dark" ? "#404042" : "#fefefe",
    boxShadow: theme.shadows.sm,
    borderRadius: 5,
  },
}));

interface CourseStatsCombinedProps {
  data?: {
    id: number;
    course: string;
    courseType: string;
    difficulty: number;
    color?: string;
    href?: string;
    pic?: string;
  }[];
}

const CourseStatsCombined = ({ data }: CourseStatsCombinedProps) => {
  const { classes } = useStyles();

  if (!data) {
    return <Loading />;
  }

  const rows = data.map((item) => {
    return (
      <CourseStats
        id={item.id}
        course={item.course}
        courseType={item.courseType}
        difficulty={item.difficulty}
        color={item.color}
        href={item.href}
        pic={item.pic}
      ></CourseStats>
    );
  });

  return (
    <div>
      <ScrollArea
        style={{ height: 500 }}
        offsetScrollbars
        scrollbarSize={2}
        classNames={{
          thumb: classes.thumb,
          root: classes.root,
        }}
      >
        {rows}
      </ScrollArea>
    </div>
  );
};

export default CourseStatsCombined;
