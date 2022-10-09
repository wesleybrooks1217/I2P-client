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
import Homeroom from "./Components/Homeroom/Homeroom"
function Dashboard() {
  return (
    <div className="App">
       <ColorShell innerContent={
        <Paper>
        <Next4Shell
          page= { 
              <Homeroom />
          
            
  
     

        
         }
         />
       </Paper>
       } />
     
   </div>
  );
}

export default Dashboard;
