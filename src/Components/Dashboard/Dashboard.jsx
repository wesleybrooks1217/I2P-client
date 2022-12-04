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


import { Star} from 'tabler-icons-react';
import {  ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorageValue} from "@mantine/hooks"
import Next4Shell from "../Next4Shell";
import FooterCentered from "../Universal/Footer"
import LightDarkButton from "../LightDarkButton"
import MyMissions from "./Components/MyMissions"

import TopTitle from './TopTitle';

import ColorShell from '../ColorShell';


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
import TopNav from '../Nav/components/TopNav';
import SideBar from '../Nav/components/SideBar';

function Dashboard() {
  const [areaOpened, setAreaOpened] = useState('')
  const ref = useRef(null)
  let sideNav = useRef(null)
  let topNav = useRef(null)
  const [lightMode, setLightMode] = useState([true])

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth',
    block: 'start',
    alignToTop: true})
    console.log(areaOpened)
  
  
}, [areaOpened])

function switchModes() {
  setLightMode((prevState) => !prevState)
}

  return (
    <div style={{marginTop: 250}}>
       
            <div className='outer-container'>
             
            <div>
          <Carousel>
            <Homeroom setArea={setAreaOpened} />
            <AcademicAdd setArea={setAreaOpened} />
          </Carousel>
          </div>
            
      </div>
     

      <section style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' }}>
    
    <div style={{position: 'absolute', top: '30%', left: '1%'}} ref={el => sideNav = el}>
    
        <SideBar switchStates={switchModes} lightMode={lightMode} />
    </div>

    <div style={{position: 'absolute', width: '100%'}} ref={el => topNav = el}>
        <TopNav />
    </div>

    

    



</section>



        
        
     
   </div>
  );
}

export default Dashboard;
