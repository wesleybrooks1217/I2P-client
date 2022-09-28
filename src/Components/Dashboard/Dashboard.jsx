import React, { useEffect, useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  Group,
  SimpleGrid,
  List,
  ThemeIcon,
  Code,
  ScrollArea,
  Button,
  Image,
  Container,
  Avatar,
  createStyles,
  Title,
  MediaQuery,
  Burger,
  Progress,
  useMantineTheme,
  Autocomplete
} from '@mantine/core';
import ControlState from "./Components/ControlState";
import AvatarBox from "./Components/AvatarBox"
import { Star} from 'tabler-icons-react';
import {  ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorageValue} from "@mantine/hooks"
import Next4Shell from "../Next4Shell";
import FooterCentered from "../Universal/Footer"
import LightDarkButton from "../LightDarkButton"
import MyMissions from "./Components/MyMissions"
import MyList from "./Components/CourseCollege"
import MyMap from "./Components/MyMap";
import TopTitle from './TopTitle';
import Box from './Components/Box';
import ColorShell from '../ColorShell';
import UserProfile from './Components/UserProfile';
import Notifications from './Components/Notifications';
import { render } from '@testing-library/react';

function Dashboard() {
  const [renderedState, setRenderedState] = useState('');
  useEffect(() => {
    
  }, [renderedState])

  function handleChange(name) {
   
    setRenderedState(name)
    console.log(renderedState)
  
  };



  return (
    <div className="App">
       <ColorShell innerContent={
        <Paper>
        <Next4Shell
          page= { 

      
          <div >
                <Container sx={{marginTop: '150px', width: 900, marginBottom: 0, display: 'flex', justifyContent: 'left', alignItems: 'baseline'}}>
            <h1> John Calvert </h1>
            <p style={{marginLeft: 10}}> Cannon Cougars </p> 
          
          </Container>
           
            
          
            <Container sx={{width: 900, marginLeft: 'auto', marginRight: 'auto',  marginBottom: 20, display: 'flex', alignItems: 'center'}}>
            <UserProfile />
               
                </Container>
             
                
              
  
      
          <Container sx={{width: 900, marginBottom: 0, display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
            <h1> MyDashboard </h1>
          
          </Container>
         
          <Container mt={0} sx={{width: '500px' ,justifyContent: 'center', display: 'flex'}}>
            <MyMissions handleChange={handleChange} />
  
            <Box nameBox={renderedState}
                  />
            </Container>
           
          <MyMap />

          </div>
         }
         />
       </Paper>
       } />
     
   </div>
  );
}

export default Dashboard;
