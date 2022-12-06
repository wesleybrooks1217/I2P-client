import React, { Component, useState, useEffect } from "react";
import ColorShell from "../ColorShell";
import Next4Shell from "../Next4Shell";
import { StatsCard } from "./CollegeList";
import {
  createStyles,
  Box,
  Text,
  Group,
  Paper,
  ScrollArea,
  List,
  Grid,
  Skeleton,
  Container,
} from "@mantine/core";
import "./myColleges.css";
import Nav from "../Nav/Nav";
import { init_API_College_AI, API_College_AI } from "../../API_College_AI";

function MyColleges2() {
  const child = <Skeleton height={140} radius="md" animate={false} />;
  const collegeIds = [134130, 110635, 139959, 139931, 139755];
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCollegeData = async () => {
      var colleges = [];
      for (var i = 0; i < collegeIds.length; i++) {
        init_API_College_AI(collegeIds[i]);
        await API_College_AI.get().then((response) => {
          colleges.push(response.data.colleges);
        });
      }
      const tempItems = colleges.map((college) => {
        return (
          <List.Item>
            {
              <StatsCard
                title={college[0].name}
                population={college[0].totalEnrolled}
                progress={college[0].acceptanceRate}
                cost={college[0].avgCostOfAttendance}
                color={"blue"}
                // href={CollegeCard}
                // pic={}
              ></StatsCard>
            }
          </List.Item>
        );
      });
      setData(tempItems);
    };

    fetchCollegeData();
  }, []);

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
      padding: "50px 50px",
      backgroundColor: theme.colorScheme === "dark" ? "#404042" : "#fefefe",
      boxShadow: theme.shadows.sm,
      borderRadius: 5,
    },
  }));

  const { classes } = useStyles();

  return (
    <div>
      <Nav></Nav>
      <div></div>
      <div style={{ marginTop: 150, marginRight: 100, float: "right" }}>
        <ScrollArea
          style={{ height: 500, width: 500 }}
          offsetScrollbars
          scrollbarSize={2}
          classNames={{
            thumb: classes.thumb,
            root: classes.root,
          }}
        >
          <List size="xs" center>
            {" "}
            {data}{" "}
          </List>
        </ScrollArea>
      </div>
    </div>
  );
}

export default MyColleges2;
