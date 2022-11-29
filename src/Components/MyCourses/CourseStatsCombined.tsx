import React from "react";
import CourseStats from "./Helpers/CourseStats";
import { ScrollArea, createStyles } from "@mantine/core";
import Loading from "./SVGs/Loading";

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

// return (
//   <div>
//     <ScrollArea
//       style={{ height: 500 }}
//       offsetScrollbars
//       scrollbarSize={2}
//       classNames={{
//         thumb: classes.thumb,
//         root: classes.root,
//       }}
//     >
//       <CourseStats
//         title={followedColleges[0].college}
//         population={followedColleges[0].population}
//         progress={followedColleges[0].progress}
//         cost={followedColleges[0].cost}
//         //color={followedColleges[0].color}
//         href={followedColleges[0].href}
//         //pic={followedColleges[0].pic}
//       ></CourseStats>
//       <CourseStats
//         title={followedColleges[1].college}
//         population={followedColleges[1].population}
//         progress={followedColleges[1].progress}
//         cost={followedColleges[1].cost}
//         //color={followedColleges[0].color}
//         href={followedColleges[1].href}
//         //pic={followedColleges[0].pic}
//       ></CourseStats>
//       <CourseStats
//         title={followedColleges[2].college}
//         population={followedColleges[2].population}
//         progress={followedColleges[2].progress}
//         cost={followedColleges[2].cost}
//         //color={followedColleges[0].color}
//         href={followedColleges[2].href}
//         //pic={followedColleges[0].pic}
//       ></CourseStats>
//       <CourseStats
//         title={followedColleges[3].college}
//         population={followedColleges[3].population}
//         progress={followedColleges[3].progress}
//         cost={followedColleges[3].cost}
//         //color={followedColleges[0].color}
//         href={followedColleges[3].href}
//         //pic={followedColleges[0].pic}
//       ></CourseStats>
//     </ScrollArea>
//   </div>
// );
