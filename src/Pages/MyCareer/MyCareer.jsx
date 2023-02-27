import CareerDynamicBox from "./Components/CareerDynamicBox";
import './MyCareer.css';
import CareerList from "./Components/CareerList";
import CareerRecommendations from "./Components/CareerRecommendations";
import CareerSurvey from "./Components/CareerSurvey";
import Nav from "../../Components/Nav/Nav";
import {Paper} from '@mantine/core';

function MyCareer () {
    return (
        

                <div>
                    <Nav />
                    <div className="container1-my-career">
                        <div className="box1-my-career">
                            <Paper shadow = {"md"} sx = {{
                                height: "625px"
                            }}>
                            <CareerDynamicBox 
                            data-testid = "MC-CDB"/>
                            </Paper>
                        </div>

                        <div className="box2-my-career">
                            
                            <CareerList />
                            

            

                                
                            
                        </div>
                    </div>

                    { /*<div className="box3-my-career">
                        <CareerRecommendations />
                    </div>

                    <div className="box4-my-career">
                        <CareerSurvey />
    </div> */}


                </div>   
    );
};

export default MyCareer;