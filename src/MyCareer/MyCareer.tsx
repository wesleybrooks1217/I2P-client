import CollegeCard from "../GlobalComponents/CollegeCard";
import CareerDynamicBox from "./CareerDynamicBox";
import './MyCareer.css';
import RefreshCardSection from "../GlobalComponents/RefreshCardSection";
import CareerList from "./CareerList";
import CareerRecommendations from "./CareerRecommendations";


function MyCareer () {
    return (
        <div> 
            <div className="wrapper1MC">
                <div className="box1"> 
                    <CareerDynamicBox />
                </div>

                
                <div className="box2">
                    <CareerList />
                </div>

            </div>

            <div className="careerRecs">
                <CareerRecommendations />
            </div>

            
            
            
            
            
            
        </div>
    )
}

export default MyCareer;