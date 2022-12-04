import CareerDynamicBox from "./Components/CareerDynamicBox";
import './MyCareer.css';
import CareerList from "./Components/CareerList";
import CareerRecommendations from "./Components/CareerRecommendations";
import ColorShell from "../../Components/ColorShell";
import { Paper } from "@mantine/core";
import Next4Shell from "../../Components/Next4Shell";
import CareerSurvey from "./Components/CareerSurvey";
import TopNav from "../../Components/Nav/components/TopNav";
import SideBar from "../../Components/Nav/components/SideBar";
import {useState, useRef} from 'react';

function MyCareer () {

    let sideNav = useRef(null);
    let topNav = useRef(null);
    const [lightMode, setLightMode] = useState([true]);
    
    function switchModes() {
        setLightMode((prevState) => !prevState)
      };

    return (
        

                <div style = {{marginTop: 150, marginLeft: 100}}>
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

                    <section style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' }}>
    
    <div style={{position: 'absolute', top: '30%', left: '1%'}} ref={el => sideNav = el}>
    
        <SideBar switchStates={switchModes} lightMode={lightMode} />
    </div>

    <div style={{position: 'absolute', width: '100%'}} ref={el => topNav = el}>
        <TopNav />
    </div>



</section>

                </div>
                
            
        
        
        
        
    );
};

export default MyCareer;