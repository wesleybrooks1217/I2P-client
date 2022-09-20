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
  createStyles,
  Title,
  MediaQuery,
  Burger,
  useMantineTheme,
  Autocomplete
} from '@mantine/core';
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

      
          <div>
            <Container mt={80} mb={0} sx={{justifyContent: 'center', width: '620px', height: '200px'}}>
          <TopTitle />
    
          </Container>
          <Container mt={0} sx={{justifyContent: 'center', display: 'flex'}}>
            <MyMissions handleChange={setBox} />
            <Box item={renderedState}
                 stateUpdate={boxState} />
            </Container>
          <MyMap />

          </div>
          
          
         
    
       
      
      
    
   
     
    </div>
  );
}

export default Dashboard;
