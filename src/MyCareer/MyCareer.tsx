import CollegeCard from "../GlobalComponents/CollegeCard";
import CareerDynamicBox from "./CareerDynamicBox";
import './MyCareer.css';
import RefreshCardSection from "../GlobalComponents/RefreshCardSection";
import CareerList from "./CareerList";
import CareerRecommendations from "./CareerRecommendations";
import ColorShell from "../Components/ColorShell";
import { Paper } from "@mantine/core";
import Next4Shell from "../Components/Next4Shell";


function MyCareer () {
    return (
        <ColorShell innerContent = {
            <Paper>
            <Next4Shell
            page = {
                <div>
                    <CareerDynamicBox />
                </div>
            }>

            </Next4Shell>
            </Paper>
        } />
        
        
        
        
    );
};

export default MyCareer;