import "../CollegeCard.css";
import { Salary } from "./Salary";
function AvgEarnings() {
  return (
    <div className="AvgEarnings">
      <h1>Average Earnings</h1>
      <h5>(After College)</h5>
      <h1>$74,500 per year</h1>
      <div>
        <h3>Comparison to other colleges</h3>
        <Salary></Salary>
      </div>
    </div>
  );
}
export default AvgEarnings;
