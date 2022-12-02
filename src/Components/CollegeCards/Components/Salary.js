import { CircularProgressbar } from "react-circular-progressbar";
import "../CollegeCard.css";

export function Salary() {
  const percentage = 66;
  return (
    <div className="college-card_salary">
      <CircularProgressbar value={percentage} text={`${percentage}th`} />;
    </div>
  );
}
