import React, { useEffect,useRef, useState } from 'react';
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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';  
import AcademicAdd from './Components/AcademicAdvising/AcademicAdd'
import Encyclopedia from './Components/Homeroom/BottomArea/Encyclopedia';
import Scrapbook from './Components/Homeroom/BottomArea/Scrapbook';
import Missions from './Components/Homeroom/BottomArea/Missions';
import Notebook from './Components/Homeroom/BottomArea/Notebook';
import Backpack from './Components/Homeroom/BottomArea/Backpack';
import Classes from './Components/AcademicAdvising/BottomArea/Classes'
import Colleges from './Components/AcademicAdvising/BottomArea/Colleges'
import Careers from './Components/AcademicAdvising/BottomArea/Careers'


function Dashboard() {
  const [areaOpened, setAreaOpened] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth',
    block: 'start',
    alignToTop: true})
    console.log(areaOpened)
  
  
}, [areaOpened])

  return (
    <div className="App">
       <ColorShell innerContent={
        <Paper>
        <Next4Shell
          page= { 
            <div className='outer-container'>
             
            <div>
          <Carousel>
            <Homeroom setArea={setAreaOpened} />
            <AcademicAdd setArea={setAreaOpened} />
          </Carousel>
          </div>
            
      </div>
     

        
         }
         />
       </Paper>
       } />
     
   </div>
  );
}

export default Dashboard;
