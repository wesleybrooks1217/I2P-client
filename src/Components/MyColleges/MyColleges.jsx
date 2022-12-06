import React from "react";
import "./MyColleges.css";
import { Avatar, Image, Paper } from "@mantine/core";

import TopNav from "../Nav/components/TopNav";
import { Planet, Trophy, Calculator, User, ArrowRight, Bold } from "tabler-icons-react";
import {init_API_College_AI, API_College_AI} from '../../API_College_AI';
import { useState } from "react";
import { useEffect } from "react";
import {Link} from 'react-router-dom';

function MyColleges() {

  const [data, setData] = useState({});
  const [selectedID, setSelectedID] = useState(139755);
  const [name, setName] = useState("");
  const [SAT, setSAT] = useState(0);
  const [ACT, setACT] = useState(0);
  const [inState, setInState] = useState(0);
  const [outState, setOutState] = useState(0);
  const [acceptance, setAcceptance] = useState(0);
  const [ranking1, setRanking1] = useState("");
  const [ranking2, setRanking2] = useState("");
  const [ranking3, setRanking3] = useState("");
  const [tenYearSalary, setTenYearSalary] = useState(0);
  const [admin, setAdmin] = useState("");
  const [aid, setAid] = useState(0);

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
    setSAT(data.satCompositeMidpoint);
    setACT(data.actCumulativeMidpoint);
    setInState(data.inStateTuition);
    setOutState(data.outOfStateTuition);
    setAcceptance(data.acceptanceRate);
    //setRanking1(data.rankingsBestCollegeAcademics.value);
    //setRanking2(data.rankingsBestCollegeAthletics.value);
    //setRanking3(data.rankingsBestCollegeCampuses.value);
    setTenYearSalary(data.typical10YearEarnings);
    setAdmin(data.admissionsWebsite)
    setAid(data.averageFinancialAid);

  }, [data]);

  

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
                  onClick={() => setSelectedID(198419)}
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
                  onClick={() => setSelectedID(147767)}
                >
                  <p style={{ fontSize: "20px" }}> NW</p>
                </Avatar>
                <h4 style={{ marginLeft: 10, margin: 0, color: "white" }}>
                  {" "}
                  Northwestern{" "}
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
                  onClick={() => setSelectedID(139755)}
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
                  onClick={() => setSelectedID(166027)}
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
                  onClick={() => setSelectedID(243744)}
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
                  onClick={() => setSelectedID(221999)}
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
            <Link to = {`Colleges/${selectedID}`}
            style = {{
              fontWeight: 'bold',
              fontSize: 30
            }}>{name}</Link>
            <div id="mycolleges-showcollege-attrs">
             {/* <Avatar
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
              </Avatar> */}
            </div>
          </Paper>
        </div>
        <div style={{ display: "flex" }}>
          {/*<div id="mycolleges-showcollege-img">college img</div>*/}
          <div id="mycolleges-showcollege-genstats">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ fontSize: "24px" }}> {Math.round(acceptance*100)}% </h4>
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
            <h4 style={{fontSize: '24px', marginTop: 10}}> Avg SAT: {SAT}</h4>
            <h4 style={{fontSize: '24px', marginTop: 10}}> Avg ACT: {ACT}</h4>
          </div>
          <div> 
            <h4 style={{fontSize: '24px', marginLeft: '20px', marginTop: 10}}> In state: ${inState}</h4>
            <h4 style={{fontSize: '24px', marginLeft: '20px', marginTop: 10}}> Out of state: ${outState}</h4>
          </div>
          </div> 
          <div id='arrow-icon'>
            <ArrowRight />
          </div>
          </div>
         
        </div>
        <div id='mycolleges-showcollege-rankings'>
            <p style = {{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 8
            }}>Average financial aid received</p>
            <p style = {{
              fontSize: 18,
              color: 'green',
              marginTop: 12
            }}>${aid}</p>
          </div>
          <div id='mycollege-showcollege-topmajors'>
            <a href = {admin}>Admissions Website</a>
          </div>
          <div id='mycollege-showcollege-recclasses'>
           <p style = {{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 8
           }}>Typical 10 year earnings</p>
           <p style = {{
            marginTop: 12,
            color: 'green',
            fontSize: 16
           }}>${tenYearSalary}</p>
          </div>
       
      </div>
    </div>
  );
}

export default MyColleges;
