import React  from "react";
import { Avatar, Paper, Card, Container, Image, Text, Badge, Button, Group } from '@mantine/core';
import Mission from "./Mission";
import { Progress } from "@mantine/core";
function UserProfile(props) {
    return (
        <Paper shadow="md">
        <Container sx={{padding: '20px 10px', width: 880, display: 'flex'}}>
            <Container sx={{backgroundColor: 'lightblue', width: 180, marginRight: 'auto', marginLeft: 25}}>
                User Profile {props.profilePicture}
            </Container>
            <Container> 
                <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h4 style={{marginBottom: 10}}> {props.name} Name </h4>
                {props.mnfPro && <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>MyNext4 Pro</Badge>}
                
                </Container>
                <h4 style={{marginBottom: 10}}> Progress </h4>
            <Container sx={{display: 'flex', alignItems: 'center', margin: 0}}>
                <Progress sx={{width: '240px', height: '20px'}} value={65} label="65%" size="xl" radius="xl" />
           <Avatar sx={{marginLeft: '10px'}}color="blue" radius="xl">
                TX
            </Avatar>
            </Container>
            <hr style={{marginBottom: 0}} />
            <h4 style={{marginBottom: 10, marginTop: 15}}> MyMissions </h4>
                <Container sx={{display: 'flex', justifyContent: 'center'}}>
                <Mission 
                    icon="XD"
                    missionColor="blue" />
                      <Mission 
                    icon="XD"
                    missionColor="blue" />
                      <Mission 
                    icon="XD"
                    missionColor="blue" />
                         <Mission 
                    icon="+"
                    missionColor="blue" />
                </Container>
                
            </Container>
            <Container sx={{display: 'flex', flexDirection: 'column',  alignItems: 'center'}}>
                  <Button sx={{margin: 5, width: 160, height: 70}}> MyCourses</Button>
                  <Button sx={{margin: 5, width: 160, height: 70}}> MyColleges</Button>
                  <Button sx={{margin: 5, width: 160, height: 70}}> MyCareers</Button>
                </Container>
               
        </Container>
        </Paper>
            
           
              
              
        
    
                

          );
    }


export default UserProfile;