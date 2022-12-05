import React from 'react';


import Homeroom from "./Components/Homeroom/Homeroom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  
import AcademicAdd from './Components/AcademicAdvising/AcademicAdd'

function Dashboard() {
  return (
    <div className="App">
          <Carousel>
            <Homeroom  />
            <AcademicAdd  />
          </Carousel>
          </div>
            
  );
}

export default Dashboard;
