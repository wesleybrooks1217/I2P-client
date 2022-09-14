import React, {useState, useEffect} from 'react';
import { Container, Text, Stack, Title, Grid, Button } from '@mantine/core';
import StatsCard from './ProgressCard';
import { nanoid } from 'nanoid';
import styleSheet from '../../StyleSheet';
import {Book2, School, BuildingCommunity } from 'tabler-icons-react';
import Mission from "./Mission"

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
        console.log(screenWidth)
        
        return() => {
            
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])



    return (
        <Container sx={{margin: '0', width: '400px', alignItems: 'center'}}>
       
 
         
       
        <Container size={400} sx={{ height: '150px', display: 'flex', justifyContent: 'center'}} > 
        <Title mt={20} sx={{marginRight: 'auto' }}order={3}> <b> MyMissions </b> </Title>
        <Stack mr={20} mt={35}>
            {missions.map((mission, index) => {
                return <Mission 
                            title={mission.title}
                            description={mission.description}
                            icon={mission.icon}
                            missionColor={mission.missionColor} />
            })}
        </Stack>
        </Container>
        <Container  sx={{ height: '200px', backgroundColor: '#edf2f4'}} > 
        <Title sx={{textAlign: 'left'}} order={3}> <b> Liked List </b> </Title>
        <Grid mt={30} sx={{display: 'flex', justifyContent: 'space-around'}} > 
            <Button className={classes.likedList} sx={{height: '100px'}}> {screenWidth ?  "MyClasses" :  <Book2 />} </Button>
            <Button className={classes.likedList}  sx={{height: '100px'}}>{screenWidth ?  "MyColleges" :  <School />} </Button>
            <Button className={classes.likedList} sx={{height: '100px'}}> {screenWidth ?  "MyCareers" :  <BuildingCommunity />}</Button>
            </Grid>
        </Container>
        </Container>
        

    )
}

export default MyMissions;