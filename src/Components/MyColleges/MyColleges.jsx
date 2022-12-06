import React from "react";
import "./MyColleges.css";
import { Avatar, Image, Paper } from "@mantine/core";

import TopNav from "../Nav/components/TopNav";
import { Planet, Trophy, Calculator, User, ArrowRight } from "tabler-icons-react";
import {init_API_College_AI, API_College_AI} from '../../API_College_AI';
import { useState } from "react";
import { useEffect } from "react";

function MyColleges() {

  const [data, setData] = useState({});
  const [selectedID, setSelectedID] = useState(139755);
  const [name, setName] = useState("");

  useEffect(() => {

    const getCollegeData = async() => {
      init_API_College_AI(selectedID, "info");
      await API_College_AI.get()
      .then((response) => {
        setData(response.data.colleges[0]);
      });
    };

    getCollegeData();
  }, [selectedID]);

  useEffect(() => {
    setName(data.name);

  }, [data])

  return (
    <div id="mycolleges-container">
      <div style={{ width: "100%", position: "absolute", top: 0 }}>
        <TopNav />
      </div>
      <div
        style={{
          position: "relative",
          top: "25%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          id="mycolleges-list-container"
          style={{ position: "relative", top: "25%", left: "10%" }}
        >
          <h4 style={{}}>MyColleges</h4>
          <Paper
            id="mycolleges-list-container-paper"
            shadow="md"
            radius="md"
            sx={{ width: "20vw", height: "650px", marginTop: "10px" }}
          >
            <div
              style={{
                marginTop: "20px",
                width: "inherit",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#293241",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "3px",
                  height: "90px",
                  margin: "15px 10px 5px 10px",
                }}
              >
               <Avatar
                  style={{ marginLeft: 15, marginRight: 15 }}
                  color="yellow"
                  radius="md"
                >
                  <p style={{ fontSize: "20px" }}> D</p>
                </Avatar>
                <h4 style={{ color: "white", marginLeft: 10, margin: 0 }}>
                  {" "}
                  Duke{" "}
                </h4>
              </div>
              <div
                style={{
                  backgroundColor: "#9b5de5",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "3px",
                  height: "90px",
                  margin: "5px 10px",
                }}
              >
                <Avatar
                  style={{ marginLeft: 15, marginRight: 15 }}
                  color="violet"
                  radius="md"
                >
                  <p style={{ fontSize: "20px" }}> NW</p>
                </Avatar>
                <h4 style={{ marginLeft: 10, margin: 0, color: "white" }}>
                  {" "}
                  Northwester{" "}
                </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#003566",
                  borderRadius: "3px",
                  height: "90px",
                  margin: "5px 10px",
                }}
              >
                <Avatar
                  style={{ marginLeft: 15, marginRight: 15 }}
                  color="yellow"
                  radius="md"
                >
                  <p style={{ fontSize: "20px" }}> GT</p>
                </Avatar>
                <h4 style={{ marginLeft: 10, margin: 0, color: "white" }}>
                  {" "}
                  Georgia Tech{" "}
                </h4>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#9b2226",
                  borderRadius: "3px",
                  height: "90px",
                  margin: "5px 10px 15px 10px",
                }}
              >
                <Avatar
                  style={{ marginLeft: 15, marginRight: 15 }}
                  color="red"
                  radius="md"
                >
                  <p style={{ fontSize: "20px" }}> H</p>
                </Avatar>
                <h4 style={{ marginLeft: 10, margin: 0, color: "white" }}>
                  {" "}
                  Harvard{" "}
                </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#4cc9f0",
                  borderRadius: "3px",
                  height: "90px",
                  margin: "5px 10px",
                }}
              >
                <Avatar
                  style={{ marginLeft: 15, marginRight: 15 }}
                  color="blue"
                  radius="md"
                >
                  <p style={{ fontSize: "20px" }}> S</p>
                </Avatar>
                <h4 style={{ marginLeft: 10, margin: 0 }}> Stanford </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#03244d",
                  borderRadius: "3px",
                  height: "90px",
                  margin: "5px 10px",
                }}
              >
                <Avatar
                  style={{ marginLeft: 15, marginRight: 15 }}
                  color="orange"
                  radius="md"
                >
                  <p style={{ fontSize: "20px" }}> V</p>
                </Avatar>
                <h4 style={{ marginLeft: 10, margin: 0, color: "white" }}>
                  {" "}
              Vanderbilt{" "}
              </h4>  
              </div> 
            </div>
          </Paper>
        </div>

        <div
          id="mycolleges-showcollege-container"
          style={{ position: "relative", left: "20%" }}
        >
          <h4 style={{}}>Display</h4>
          <Paper
            shadow="lg"
            sx={{ width: "45vw", height: "650px", marginTop: "20px" }}
          >
            <h2 id="mycolleges-showcollege-title">
              {" "}
              Georgia Institute of Technology{" "}
            </h2>
            <div id="mycolleges-showcollege-attrs">
              <Avatar
                style={{
                  width: "48px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="yellow"
                radius="md"
              >
                <Trophy />
              </Avatar>
              <Avatar
                style={{
                  width: "48px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="green"
                radius="md"
              >
                <Calculator />
              </Avatar>
              <Avatar
                style={{
                  width: "48px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="red"
                radius="md"
              >
                <p style={{ fontSize: "16px" }}>#3</p>
              </Avatar>
            </div>
          </Paper>
        </div>
        <div style={{ display: "flex" }}>
          <div id="mycolleges-showcollege-img">college img</div>
          <div id="mycolleges-showcollege-genstats">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ fontSize: "24px" }}> 17% </h4>
              <p style={{ marginLeft: 10, color: "gray", fontSize: "13px" }}>
                {" "}
                Out of every ten students, only <i>two</i> would receive an
                acceptance.
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="green"
                radius="md"
              >
                <User />
              </Avatar>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="green"
                radius="md"
              >
                <User />
              </Avatar>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="red"
                radius="md"
              >
                <User />
              </Avatar>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="red"
                radius="md"
              >
                <User />
              </Avatar>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="red"
                radius="md"
              >
                <User />
              </Avatar>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="red"
                radius="md"
              >
                <User />
              </Avatar>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="red"
                radius="md"
              >
                <User />
              </Avatar>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="red"
                radius="md"
              >
                <User />
              </Avatar>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="red"
                radius="md"
              >
                <User />
              </Avatar>
              <Avatar
                style={{
                  width: "40px",
                  height: "48px",
                  marginLeft: 5,
                  marginRight: 5,
                }}
                color="red"
                radius="md"
              >
                <User />
              </Avatar>
            </div>
               <div style={{display: 'flex', alignItems: 'center'}}>
            <div> 
            <h4 style={{fontSize: '24px', marginTop: 10}}> Avg SAT: 1540</h4>
            <h4 style={{fontSize: '24px', marginTop: 10}}> Avg ACT: 34</h4>
          </div>
          <div> 
            <h4 style={{fontSize: '24px', marginLeft: '20px', marginTop: 10}}> In state: $15000</h4>
            <h4 style={{fontSize: '24px', marginLeft: '20px', marginTop: 10}}> Out of state: $45000</h4>
          </div>
          </div> 
          <div id='arrow-icon'>
            <ArrowRight />
          </div>
          </div>
         
        </div>
        <div id='mycolleges-showcollege-rankings'>
            all rankings.. similar to niches grade section at the top of each college page
          </div>
          <div id='mycollege-showcollege-topmajors'>
            best majors / programs school has to offer
          </div>
          <div id='mycollege-showcollege-recclasses'>
           top careers and salaries associated with this school
          </div>
       
      </div>
    </div>
  );
}

export default MyColleges;
