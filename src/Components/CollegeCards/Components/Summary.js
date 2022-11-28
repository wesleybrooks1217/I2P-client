import { AlignCenter } from "tabler-icons-react";
import "../CollegeCard.css";
function Summary() {
  const sentence =
    "Georgia Tech's wide variety of technologically-focused majors and minors consistently earn strong national rankings. Georgia Tech has six colleges and 28 schools focusing on Business, Computing, Design, Engineering, Liberal Arts, and Sciences.";
  return (
    <div className="college-card_summary">
      <div>
        <h1> Summary</h1>
      </div>
      <div>
        <p>{sentence}</p>
      </div>
    </div>
  );
}
export default Summary;
