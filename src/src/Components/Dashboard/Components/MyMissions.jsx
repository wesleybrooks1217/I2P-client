import React, {useState, useEffect} from 'react';
import { Paper, Card, Container, Text, Stack, Title, Grid, Button } from '@mantine/core';

import { nanoid } from 'nanoid';
import styleSheet from '../../StyleSheet';
import {Book2, School, BuildingCommunity } from 'tabler-icons-react';
import Mission from "./Mission"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "../dashboardstyles.css";
import MyCardBox from "./images/MyCards.png";


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
    const myCardsIMG = require('./images/MyCards.png');

    return (
        <Container sx={{marginRight: '0px',width: '600px', height: '360px'}}> 
            <Paper shadow="xs" p="md">
            <div className='top-shelf-container'>
                <button className="myCards-btn" style={{ backgroundColor: 'none', backgroundSize: 'cover', border: 'none'}} onClick={handleChange} name='myCards'>  </button>
                <button className="myComponents-btn" style={{ backgroundColor: 'none', backgroundSize: 'cover', border: 'none'}}onClick={handleChange} name='myComponents'></button>
            </div>
       
            <div className="carousel-container">
                <button style={{ backgroundColor: 'none', backgroundSize: 'cover', border: 'none'}} className="myMissions-btn" name='myMissions' onClick={handleChange}>
                  
                </button>
                <button style={{ backgroundColor: 'none', backgroundSize: 'cover', border: 'none'}} className="myMaterials-btn" name='myMaterials' onClick={handleChange}>
                
                </button>
                <button style={{ backgroundColor: 'none', backgroundSize: 'cover', border: 'none'}} className="myMerits-btn" name='myMerits' onClick={handleChange}>
                
                </button>
            </div>
         
        </Paper>
       
 
         
       
        
       

       
        </Container>
        

    )
}

export default MyMissions;