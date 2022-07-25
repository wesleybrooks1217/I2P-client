import './App.css';

import {ColorScheme, ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorageValue} from "@mantine/hooks"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from "./Components/Landing/Landing"
import SchoolSystems from "./Components/SchoolSystems/SchoolSystems"
import WhyMyNext4 from "./Components/WhyMyNext4/WhyMyNext4";
import Pricing from "./Components/Pricing/Pricing";
import AboutUs from "./Components/AboutUs/AboutUs";
import MNFLibrary from "./Components/MNFLibrary/MNFLibrary"
import MNFComponents from "./Components/MNFComponents/MNFComponents"
import Updates from "./Components/Updates/Updates"
import Privacy from "./Components/Privacy/Privacy"
import Blog from "./Components/Blog/Blog"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
  
      
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Blog' element={<Blog />} />
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

