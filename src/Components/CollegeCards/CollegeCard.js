import React, { Component } from "react";
import collegepic from "./gtpic.png";
import "./CollegeCard.css";

//https://ui.mantine.dev/category/stats
function CollegeCard() {
  // const correctNumber = 0;
  // const piechartData = [
  //   {
  //     title: "Accepted",
  //     population: 24000,

  //   },
  // ];
  return (
  
              <div className="college-card">
                <div class="college-card_image">
                  <img src={collegepic}></img>
                </div>
                <div className="college-card_applicants">
                  {/* <Piechart></Piechart> */}
                </div>
                <container className="college-card_tuition">
                  <h1>Tuition Cost</h1>
                  {/* <TuitionCost></TuitionCost> */}
                </container>
                <div>{/* <Summary></Summary> */}</div>
                <div>{/* <AvgEarnings></AvgEarnings> */}</div>
                <div>{/* <Recommendations></Recommendations> */}</div>
              </div>
    
  );
}

export default CollegeCard;
