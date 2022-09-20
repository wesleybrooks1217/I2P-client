import React, {useState, useEffect} from 'react';
import { Container, Text, Stack, Title, Grid, Button } from '@mantine/core';

import { nanoid } from 'nanoid';
import styleSheet from '../../StyleSheet';
import {Book2, School, BuildingCommunity } from 'tabler-icons-react';
import Mission from "./Mission"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../dashboardstyles.css";

function MyMissions(props) {
    const [missions, setMissions] = useState([]);
    const { classes } = styleSheet();
    const [screenWidth, setScreenWidth] = useState(true);
    const [windowDimension, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })
    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }
    useEffect(() => {
        window.addEventListener('resize', detectSize)
        if (windowDimension.winWidth < '1000') {
            setScreenWidth(false);
        } else {
            setScreenWidth(true);
        }
        
        
        return() => {
            
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])
    
    function handleChange(event) {
        const { name } = event.target;
        props.handleChange(name);
    }


    return (
        <div className='cardboard-container'> 
            <div className='top-shelf-container'>
                <button  onClick={handleChange}name='myCs'> MyC's </button>
                <button  onClick={handleChange} name='myNext4U'> MyNext4 U </button>
            </div>
          <Carousel showThumbs={false} infiniteLoop='true' className="carousel">
            <div className="carousel-container">
                <button name='myMissions' onClick={handleChange}>
                    MyMissions
                </button>
                <button name='myBackpack' onClick={handleChange}>
                    MyBackpack
                </button>
                <button name='myNotebook' onClick={handleChange}>
                    MyNotebook
                </button>
            </div>
            <div className='carousel-container'> 
            <button name='myCourse' onClick={handleChange}>
                    MyCourse Box
                </button>
                <button name='myCollege' onClick={handleChange}>
                    MyCollege Box
                </button>
                <button name='myCareer' onClick={handleChange}>
                    MyCareer Box
                </button>
            </div>
        </Carousel>
       
 
         
       
        
       

       
        </div>
        

    )
}

export default MyMissions;