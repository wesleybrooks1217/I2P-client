import React, { Component } from "react";
import collegepic from "./gtpic.png";
import "./CollegeCard.css";
import Piechart from "./Components/Piechart";
import TuitionCost from "./Components/TuitionCost";
import Summary from "./Components/Summary";
import Recommendations from "./Components/Recommendations";
import AvgEarnings from "./Components/AvgEarnings";

//https://ui.mantine.dev/category/stats
function CollegeCard() {
  return (
    <div className="college-card">
      <div class="college-card_image">
        <img src={collegepic}></img>
      </div>
      <div className="college-card_applicants">
        <Piechart></Piechart>
      </div>
      <div>
        <Summary></Summary>
      </div>
      <div>
        <AvgEarnings></AvgEarnings>
      </div>
      <container className="college-card_tuition">
        <h1>Tuition Cost</h1>
        <TuitionCost></TuitionCost>
      </container>
      <div>
        <Recommendations></Recommendations>
      </div>
    </div>
  );
}

export default CollegeCard;
