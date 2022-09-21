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
import UserProfile from '../UserProfile';
import Notifications from './Components/Notifications';
function Dashboard() {
  const [boxState, setBoxState] = useState({
    myCs: false,
    myNext4U: false,
    myMissions: false,
    myBackpack: false,
    myNotebook: false,
    myCollege: false,
    myCareer: false,
    myCourse: false,

  })
  const [renderedState, setRenderedState] = useState('myNext4U');
  
 
  
  
 
  function setBox(name) {
   
   
    setBoxState((prevBoxes) => {
      return {
        ...prevBoxes,
        [name]: true,
      };
    });
   
    if (name !== 'myCs') {
      setBoxState((prevState) => {
        return {
        ...prevState,
        myCs: false,
      };
    })};
    if (name !== 'myBackpack') {
      setBoxState((prevState) => {
        return {
        ...prevState,
        myBackpack: false,
      };
    })};
    if (name !== 'myCareer') {
      setBoxState((prevState) => {
        return {
        ...prevState,
        myCareer: false,
      };
    })};
    if (name !== 'myCourse') {
      setBoxState((prevState) => {
        return {
        ...prevState,
        myCourse: false,
      };
    })};
    if (name !== 'myCollege') {
      setBoxState((prevState) => {
        return {
        ...prevState,
        myCollege: false,
      };
    })};
    if (name !== 'myMissions') {
      setBoxState((prevState) => {
        return {
        ...prevState,
        myMissions: false,
      };
    })};
    if (name !== 'myNext4U') {
      setBoxState((prevState) => {
        return {
        ...prevState,
        myNext4U: false,
      };
    })};
    if (name !== 'myNotebook') {
      setBoxState((prevState) => {
        return {
        ...prevState,
        myNotebook: false,
      };
    })};
    searchState()
    console.log(name)
    console.log(boxState)
  
  };


  
  function searchState() {
    console.log("OK")
    console.log(boxState.myNext4U);
    if (boxState.myNext4U === true) {
      setRenderedState('myNext4U');
      console.log(renderedState)

    } else if (boxState.myBackpack === true) {
      setRenderedState('myBackpack');
    } else if (boxState.myCareer === true) {
      setRenderedState('myCareer');
    } else if (boxState.myCollege === true) {
      setRenderedState('myCollege');
    } else if (boxState.myCourse === true) {
      setRenderedState('myCourse')
    } else if (boxState.myCs === true) {
      setRenderedState('myCs')
    } else if (boxState.myMissions === true) {
      setRenderedState('myMissions')
    } else if (boxState.myNotebook === true) {
      setRenderedState('myNotebook')
    }
    console.log(renderedState)
    
  }


  return (
    <div className="App">
       <ColorShell innerContent={
        <Paper>
        <Next4Shell
          page= { 

      
          <div >

          <Container sx={{padding: '20px',backgroundColor: '#FFFFFF', borderRadius: '5px', padding: 10, marginTop: '150px', width: 800, display: 'flex', justifyContent: 'left', alignItems: 'center'}} >
            
                <AvatarBox
                name="Herman" 
                title="Software Analyse"
                phone="99999999"/>
                <div style={{marginLeft: '70px'}}>
                <ControlState  />
                </div>
              
          </Container>
      
          <Container sx={{width: 1000, marginBottom: 0, display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
            <h1> MyDashboard </h1>
           <Progress sx={{marginLeft: '15px',width: '300px', height: '20px'}}value={65} label="65%" size="xl" radius="xl" />
           <Avatar sx={{marginLeft: '10px'}}color="blue" radius="xl">
        <Star size={24} />
      </Avatar>
          </Container>
          <Container mt={0} sx={{maxWidth: '100%',justifyContent: 'center', display: 'flex'}}>
            <MyMissions handleChange={setBox} />
            <Box item={renderedState}
                 stateUpdate={boxState} />
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
