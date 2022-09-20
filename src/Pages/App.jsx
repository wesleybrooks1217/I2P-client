import "../Styles/App.css";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import SchoolSystems from "../Components/SchoolSystems/SchoolSystems";
import WhyMyNext4 from "./WhyMyNext4";
import Pricing from "../Components/Pricing/Pricing";
import AboutUs from "./AboutUs";
import MNFLibrary from "./MNFLibrary";
import MNFComponents from "../Components/MNFComponents/MNFComponents";
import Updates from "../Components/Updates/Updates";
import Privacy from "../Components/Privacy/Privacy";
import MyCourses from "../Components/MyCourses/Courses";
import Dashboard from "../Components/Dashboard/Dashboard";
import MyCareer from "../MyCareer/MyCareer";
import MyColleges from "../Components/MyColleges/MyColleges";
import CollegeCards from "../Components/CollegeCards/CollegeCard";
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
          <Route path = '/MyCareer' element={ <MyCareer />} /> 
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path = '/MyCareer' element={ <MyCareer />} /> 
          <Route path = '/MyColleges' element={ <MyColleges />} /> 
          <Route path="/" element={<Landing />} />
          <Route path="/MyCourses" element={<MyCourses />} />
          <Route path="/SchoolSystems" element={<SchoolSystems />} />
          <Route path="/WhyMyNext4" element={<WhyMyNext4 />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/MNFLibrary" element={<MNFLibrary />} />
          <Route path="/MNFComponents" element={<MNFComponents />} />
          <Route path="/Updates" element={<Updates />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/MyCareer" element={<MyCareer />} /> yar
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MyCareer" element={<MyCareer />} />
          <Route path="/MyColleges" element={<MyColleges />} />
          <Route path="/CollegeCard" element={<CollegeCards />} />
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
