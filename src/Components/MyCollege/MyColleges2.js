import React, { Component } from "react";
import ColorShell from "../ColorShell";
import { Paper } from "@mantine/core";
import Next4Shell from "../Next4Shell";
import { StatsCard } from "./CollegeList";
import { createStyles, Box, Text, Group } from "@mantine/core";
import "./myColleges.css";
const collegepics = [];
let responses = null;
const getCollegepic = (college) => {
  fetch(
    "https://api.collegeai.com/v1/api/college-list?api_key=0c08b0e6a7a1cf9e539e330ca7&filters=%7B%0A%22funding-type%22%3A%5B%22public%22%5D%2C%0A%22schoolSize%22%3A%5B%22large%22%5D%2C%0A%22zipCode%22%3A%2202111%22%2C%0A%22distanceFromHomeMiles%22%3A%5B0%2C500%5D%2C%0A%22satOverall%22%3A1200%2C%0A%22closeToMyScores%22%3Atrue%0A%7D&info_ids=website%2CshortDescription%2ClongDescription%2CcampusImage%2Ccity%2CstateAbbr%2Caliases%2Ccolors%2ClocationLong%2ClocationLat"
  )
    .then((r) => r.json())
    .then((response) => {
      for (let i = 0; i < response.colleges.length; i++) {
        if (i == college) {
          collegepics[0] = response.colleges[i].colors;
          // collegepics[1] = response.colleges[i].colors[0];
          console.log(collegepics[0][0]);
          return collegepics[0][0];
        }
      }
    });
  // return "green";
};

function MyColleges2() {
  const followedColleges = [
    {
      id: "1",
      college: "Georgia",
      population: "Population: 200,000",
      progress: 25,
      cost: "Median Cost : $85,000",
      color: getCollegepic(1),
      href: "CollegeCard",
      pic: getCollegepic(1),
    },
    {
      id: "2",
      college: "Georgia Tech",
      population: "Population: 100,000",
      progress: 12,
      cost: "Median Cost : $90,000",
      color: getCollegepic(2),
      href: "CollegeCard",
      pic: getCollegepic(2),
    },
    {
      id: "3",
      college: "Georgia Southern",
      population: "Population: 10,000",
      progress: 45,
      cost: "Median Cost : $45,000",
      color: getCollegepic(3),
      href: "CollegeCard",
      pic: getCollegepic(3),
    },
    {
      id: "4",
      college: "Georgia State",
      population: "Population: 10,000",
      progress: 95,
      cost: "Median Cost : $5,000",
      color: getCollegepic(4),
      href: "CollegeCard",
      pic: getCollegepic(4),
    },
  ];
  return (
    <ColorShell
      innerContent={
        <Paper>
          <Next4Shell
            page={
              <div className="collegeLikedList">
                <StatsCard
                  title={followedColleges[0].college}
                  population={followedColleges[0].population}
                  progress={followedColleges[0].progress}
                  cost={followedColleges[0].cost}
                  color={followedColleges[0].color}
                  href={followedColleges[0].href}
                  pic={followedColleges[0].pic}
                ></StatsCard>
                <StatsCard
                  title={followedColleges[1].college}
                  population={followedColleges[1].population}
                  progress={followedColleges[1].progress}
                  cost={followedColleges[1].cost}
                  color={followedColleges[1].color}
                  href={followedColleges[1].href}
                  pic={followedColleges[1].pic}
                ></StatsCard>
                <StatsCard
                  title={followedColleges[2].college}
                  population={followedColleges[2].population}
                  progress={followedColleges[2].progress}
                  cost={followedColleges[2].cost}
                  color={followedColleges[2].color}
                  href={followedColleges[2].href}
                  pic={followedColleges[2].pic}
                ></StatsCard>
                <StatsCard
                  title={followedColleges[3].college}
                  population={followedColleges[3].population}
                  progress={followedColleges[3].progress}
                  cost={followedColleges[3].cost}
                  color={followedColleges[3].color}
                  href={followedColleges[3].href}
                  pic={followedColleges[3].pic}
                ></StatsCard>
              </div>
            }
          ></Next4Shell>
        </Paper>
      }
    ></ColorShell>
  );
}

export default MyColleges2;
