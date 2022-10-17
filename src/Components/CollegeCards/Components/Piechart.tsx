//import { PieChart, Pie, LabelList } from "recharts";
import React from "react";
import "../CollegeCard.css";
function Piechart() {
  const data = [
    { name: 1, students: 2000 },
    { name: 2, students: 7000 },
    { name: 3, students: 20000 },
    { name: 4, students: 10000 },
  ];
  var IneedNUM = 4;
  const RADIAN = Math.PI / 180;
  const array = ["DEFFERED", "ACCEPTED", "DENIED", "WAITLISTED"];
  function helper() {
    while (IneedNUM != -1) {
      if (IneedNUM == 0) {
        IneedNUM += 4;
      }
      IneedNUM -= 1;
      return array[IneedNUM];
    }
  }
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {helper() + " " + `${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="college-card_applicants">
      <h1 className="college-card_title">Our Applicants</h1>
      {/* <PieChart width={700} height={750}>
        <Pie
          data={data}
          dataKey="students"
          outerRadius={250}
          label={renderCustomizedLabel}
        ></Pie>
      </PieChart> */}
    </div>
  );
}
export default Piechart;
