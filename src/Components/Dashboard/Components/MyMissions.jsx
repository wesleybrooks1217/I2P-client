import React, {useState} from 'react';
import { Container, Text, Stack, Title, Grid, Button } from '@mantine/core';
import StatsCard from './ProgressCard';
import { nanoid } from 'nanoid';

function MyMissions(props) {

    return (
        <Container sx={{margin: '0', width: '400px', alignItems: 'center'}}>
       
 
         
       
        <Container size={400} sx={{ height: '150px', backgroundColor: '#edf2f4', display: 'flex', justifyContent: 'center'}} > 
        <Title mt={20} sx={{marginRight: 'auto' }}order={3}> <b> MyMissions </b> </Title>
        <Stack mr={20} mt={35}>
            {props.missions}
            <Text> Mission 1 </Text>
            <Text> Mission 2 </Text>
        </Stack>
        </Container>
        <Container  sx={{ height: '200px', backgroundColor: '#edf2f4'}} > 
        <Title sx={{textAlign: 'left'}} order={3}> <b> Liked List </b> </Title>
        <Grid mt={30} sx={{display: 'flex', justifyContent: 'space-around'}} > 
            <Button sx={{height: '100px'}}> MyClasses </Button>
            <Button sx={{height: '100px'}}> MyColleges </Button>
            <Button sx={{height: '100px'}}> MyCareers </Button>
            </Grid>
        </Container>
        </Container>
        

    )
}

export default MyMissions;