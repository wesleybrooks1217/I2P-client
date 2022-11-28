import React from "react";
import CourseStats from "../Helpers/CourseStats";
import { ScrollArea, createStyles } from "@mantine/core";

const followedColleges = [
  {
    id: "1",
    college: "Georgia",
    population: "Population: 200,000",
    progress: 25,
    cost: "Median Cost : $85,000",
    //color: getCollegepic(1),
    href: "CollegeCard",
    //pic: getCollegepic(1),
  },
  {
    id: "2",
    college: "Georgia Tech",
    population: "Population: 100,000",
    progress: 12,
    cost: "Median Cost : $90,000",
    //color: getCollegepic(2),
    href: "CollegeCard",
    //pic: getCollegepic(2),
  },
  {
    id: "3",
    college: "Georgia Southern",
    population: "Population: 10,000",
    progress: 45,
    cost: "Median Cost : $45,000",
    //color: getCollegepic(3),
    href: "CollegeCard",
    //pic: getCollegepic(3),
  },
  {
    id: "4",
    college: "Georgia State",
    population: "Population: 10,000",
    progress: 95,
    cost: "Median Cost : $5,000",
    //color: getCollegepic(4),
    href: "CollegeCard",
    //pic: getCollegepic(4),
  },
];
const useStyles = createStyles((theme) => ({
  track: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.blue[1],
  },
  mark: {
    width: 6,
    height: 6,
    borderRadius: 6,
    transform: "translateX(-3px) translateY(-2px)",
    borderColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.blue[1],
  },
  markFilled: {
    borderColor: theme.colors.blue[6],
  },
  markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: theme.white,
    borderWidth: 1,
    boxShadow: theme.shadows.sm,
  },
}));

const CourseStatsCombined = () => {
  const { classes } = useStyles();

  return (
    <div>
      <ScrollArea
        style={{ height: 500 }}
        offsetScrollbars
        scrollbarSize={2}
        // classNames={{
        //   track: classes.track,
        //   mark: classes.mark,
        //   markFilled: classes.markFilled,
        //   markLabel: classes.markLabel,
        //   thumb: classes.thumb,
        // }}
      >
        <CourseStats
          title={followedColleges[0].college}
          population={followedColleges[0].population}
          progress={followedColleges[0].progress}
          cost={followedColleges[0].cost}
          //color={followedColleges[0].color}
          href={followedColleges[0].href}
          //pic={followedColleges[0].pic}
        ></CourseStats>
        <CourseStats
          title={followedColleges[1].college}
          population={followedColleges[1].population}
          progress={followedColleges[1].progress}
          cost={followedColleges[1].cost}
          //color={followedColleges[0].color}
          href={followedColleges[1].href}
          //pic={followedColleges[0].pic}
        ></CourseStats>
        <CourseStats
          title={followedColleges[2].college}
          population={followedColleges[2].population}
          progress={followedColleges[2].progress}
          cost={followedColleges[2].cost}
          //color={followedColleges[0].color}
          href={followedColleges[2].href}
          //pic={followedColleges[0].pic}
        ></CourseStats>
        <CourseStats
          title={followedColleges[3].college}
          population={followedColleges[3].population}
          progress={followedColleges[3].progress}
          cost={followedColleges[3].cost}
          //color={followedColleges[0].color}
          href={followedColleges[3].href}
          //pic={followedColleges[0].pic}
        ></CourseStats>
      </ScrollArea>
    </div>
  );
};

export default CourseStatsCombined;
