import { StatsGridIcons } from "../GroupedStats";
import React from "react";
function TuitionCost() {
  const TuitionCostData = [
    {
      title: "In-State",
      icon: "receipt",
      value: "$13,456",
      diff: 5,
    },
    {
      title: "Out of State",
      icon: "coin",
      value: "$44,145",
      diff: -8,
    },
    {
      title: "Average Scholarships Awarded",
      icon: "discount",
      value: "$2,500",
      diff: -10,
    },
  ];
  return (
    <div className=".tuition">
      <StatsGridIcons data={TuitionCostData}></StatsGridIcons>
    </div>
  );
}
export default TuitionCost;
