import "../CollegeCard.css";
function Recommendations() {
  return (
    <div
      className="college-card_ourRecommendations"
      style={{ display: "inline", float: "left" }}
    >
      <h1>Major Recommendations</h1>
      <ol style={{ listStyle: "none" }}>
        <h2>Industrial Engineering</h2>
        <h2>Computer Science</h2>
        <h2>Areospace Engineering</h2>
      </ol>
    </div>
  );
}
export default Recommendations;
