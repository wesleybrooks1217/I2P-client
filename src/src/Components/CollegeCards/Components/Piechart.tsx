import { PieChart, Pie, LabelList } from "recharts";
import React from "react";
import "../CollegeCard.css";
const RADIAN = Math.PI / 180;
const array = ["DEFFERED", "ACCEPTED", "DENIED", "WAITLISTED"];
function helper() {
  var IneedNUM = 4;
  while (IneedNUM != -1) {
    if (IneedNUM == 0) {
      IneedNUM += 4;
    }
    IneedNUM -= 1;
    return array[IneedNUM];
  }
}
function Piechart() {
  const data = [
    { name: 1, students: 2000 },
    { name: 2, students: 7000 },
    { name: 3, students: 20000 },
    { name: 4, students: 10000 },
  ];
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
        fontSize="13"
      >
        {helper() + " " + `${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="college-card_applicants">
      <h1 className="college-card_title">Our Applicants</h1>
      <PieChart width={400} height={650}>
        <Pie
          data={data}
          dataKey="students"
          outerRadius={200}
          label={renderCustomizedLabel}
        ></Pie>
      </PieChart>
    </div>
  );
}
export default Piechart;
