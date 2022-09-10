import './App.css';

import {ColorScheme, ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorageValue} from "@mantine/hooks"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from "./Landing/Landing"
import SchoolSystems from "./SchoolSystems/SchoolSystems"
import WhyMyNext4 from "./WhyMyNext4/WhyMyNext4";
import Pricing from "./Pricing/Pricing";
import AboutUs from "./AboutUs/AboutUs";
import MNFLibrary from "./MNFLibrary/MNFLibrary"
import MNFComponents from "./MNFComponents/MNFComponents"
import Updates from "./Updates/Updates"
import Privacy from "./Privacy/Privacy"
import MyCourses from "./MyCourses/Courses"
/*
Testing push request
*/

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
  
      
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/MyCourses' element={<MyCourses />} />
          <Route path='/SchoolSystems' element={<SchoolSystems />} />
          <Route path='/WhyMyNext4' element={<WhyMyNext4 />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/MNFLibrary' element={<MNFLibrary />} />
          <Route path='/MNFComponents' element={<MNFComponents />} />
          <Route path='/Updates' element={<Updates />} />
          <Route path='/Privacy' element={<Privacy />} />
        </Routes>
      
      </React.Fragment>
    );
  }
}

export default App;

