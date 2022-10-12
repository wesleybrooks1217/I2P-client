import React, { useState } from 'react';
import "./Homeroom.css"
import MissionMini from '../../../Universal/MissionMini';
import CollegeMini from '../../../Universal/CollegeMini';
import CareerMini from '../../../Universal/CareerMini';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  

function DeskSide(props) {
    function handleClick(event) {
        const id = event.target.id
        props.setArea(id)
        console.log("OK!")
    }
    return (
        <div className={props.isOpen ? "personal-side slide_in" : ""}>
        <div id='missions'  className={props.isOpen ? 'personal-missions' : ""}>
            {props.isOpen ?  
            <div>
                <h3> MyMissions </h3>
            <MissionMini name='Help!' description="Dummy Data Ex" />
            <MissionMini name='Help!' description="Dummy Data Ex" />
            <MissionMini name='Help!' description="Dummy Data Ex" /> 
            </div>: ''}
           
        </div>
        <div  id='notebook' className={props.isOpen ? 'personal-notebook' : ""}>
        {props.isOpen ?  
            <div>
                <h3> MyColleges </h3>
                <Carousel axis='vertical' autoPlay='true' autoFocus='true' infiniteLoop='true'>
                    <div>
            <CollegeMini name='Help!' description="Reach" />
            <CollegeMini name='Help!' description="Target" />
            <CollegeMini name='Help!' description="Target" /> 
            </div>
            <div>
            <CollegeMini name='Help!' description="Reach" />
            <CollegeMini name='Help!' description="Target" />
            <CollegeMini name='Help!' description="Target" /> 
            </div>
            <div>
            <CollegeMini name='Help!' description="Reach" />
            <CollegeMini name='Help!' description="Target" />
            <CollegeMini name='Help!' description="Target" /> 
             </div>



            </Carousel>
            </div>: ''}
        </div>
        <div  id='backpack' className={props.isOpen ? 'personal-backpack' : ""}>
        {props.isOpen ?  
            <div>
                <h3> MyCareers </h3>
                <Carousel axis='vertical' autoPlay='true' autoFocus='true' infiniteLoop='true'>
                    <div>
            <CareerMini name='Help!' description="$20000" />
            <CareerMini name='Help!' description="$45000" />
            <CareerMini name='Help!' description="$50000" /> 
            </div>
            <div> 
            <CareerMini name='Help!' description="$20000" />
            <CareerMini name='Help!' description="$45000" />
            <CareerMini name='Help!' description="$50000" /> 
                </div>
            <div>
            <CareerMini name='Help!' description="$20000" />
            <CareerMini name='Help!' description="$45000" />
            <CareerMini name='Help!' description="$50000" /> 
                </div>
                </Carousel>
            </div>: ''}
        </div>
         
        </div>
    )
}

export default DeskSide;