import CollegeCard from "../Components/GlobalComponents/CollegeCard";
import CareerDynamicBox from "./CareerDynamicBox";
import "./MyCareer.css";
import RefreshCardSection from "../Components/GlobalComponents/RefreshCardSection";
import CareerList from "./CareerList";
import CareerRecommendations from "./CareerRecommendations";
import ColorShell from "../Components/ColorShell";
import { Paper } from "@mantine/core";
import Next4Shell from "../Components/Next4Shell";
import CareerSurvey from "./CareerSurvey";

function MyCareer() {
  return (
    <ColorShell
      innerContent={
        <Paper>
          <Next4Shell
            page={
              <div>
                <div className="container1-my-career">
                  <div className="box1-my-career">
                    <CareerDynamicBox />
                  </div>

                  <div className="box2-my-career">
                    <CareerList />
                  </div>
                </div>

                <div className="box3-my-career">
                  <CareerRecommendations />
                </div>

                <div className="box4-my-career">
                  <CareerSurvey />
                </div>
              </div>
            }
          ></Next4Shell>
        </Paper>
      }
    />
  );
}

export default MyCareer;
