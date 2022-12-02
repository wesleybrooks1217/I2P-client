import CareerDynamicBox from "./Components/CareerDynamicBox";
import './MyCareer.css';
import CareerList from "./Components/CareerList";
import CareerRecommendations from "./Components/CareerRecommendations";
import ColorShell from "../../Components/ColorShell";
import { Paper } from "@mantine/core";
import Next4Shell from "../../Components/Next4Shell";
import CareerSurvey from "./Components/CareerSurvey";


function MyCareer () {

    

    return (
        <ColorShell innerContent = {
            <Paper>
            <Next4Shell
            page = {

                <div>
                    <div className="container1-my-career">
                        <div className="box1-my-career">
                            <CareerDynamicBox 
                            data-testid = "MC-CDB"/>
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
                
            }>

            </Next4Shell>
            </Paper>
        } />
        
        
        
        
    );
};

export default MyCareer;