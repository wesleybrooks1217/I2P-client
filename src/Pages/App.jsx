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
import MyCareer from "../Pages/MyCareer/MyCareer";
import MyColleges2 from "../Components/MyCollege/MyColleges2";
import HSCourses from "../Components/MyCourses/CourseCards/HSCourses";
import GeneralHealth from "../Components/MyCourses/CourseCards/GeneralHealth";
import APChemistry from "../Components/MyCourses/CourseCards/APChemistry";
import AlgebraI from "../Components/MyCourses/CourseCards/AlgebraI";
import Geometry from "../Components/MyCourses/CourseCards/Geometry";
import PhysicalEducation from "../Components/MyCourses/CourseCards/PhysicalEducation";
import APBiology from "../Components/MyCourses/CourseCards/APBiology";
import HonorsBiology from "../Components/MyCourses/CourseCards/HonorsBiology";
import HonorsEnglish from "../Components/MyCourses/CourseCards/HonorsEnglish";
import APComputerScienceA from "../Components/MyCourses/CourseCards/APComputerScienceA";
import HonorsWorldHistory from "../Components/MyCourses/CourseCards/HonorsWorldHistory";
import WeightTraining from "../Components/MyCourses/CourseCards/WeightTraining";
import Physics from "../Components/MyCourses/CourseCards/Physics";
import AlgebraII from "../Components/MyCourses/CourseCards/AlgebraII";
import ForensicScience from "../Components/MyCourses/CourseCards/ForensicScience";
import { Provider } from "react-redux";
import store from "../redux/store";
import Test from "./Test";
import CollegeCard from "../Components/CollegeCards/CollegeCard";
import Login from "../Pages/LogIn/Login";
import Careers from "../Pages/Careers/Careers";

/*
Testing push request
*/

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/MyCourses" element={<MyCourses />} />
            <Route path="/SchoolSystems" element={<SchoolSystems />} />
            <Route path="/WhyMyNext4" element={<WhyMyNext4 />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/MNFLibrary" element={<MNFLibrary />} />
            <Route path="/MNFComponents" element={<MNFComponents />} />
            <Route path="/CollegeCard" element={<CollegeCard />} />
            <Route path="/Updates" element={<Updates />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/MyCareer" element={<MyCareer />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/MyCareer" element={<MyCareer />} />

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
            <Route path="/MyCareer" element={<MyCareer />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/MyCareer" element={<MyCareer />} />
            <Route path="/MyColleges2" element={<MyColleges2 />} />
            <Route path="/GeneralHealth" element={<GeneralHealth />} />
            <Route path="/APChemistry" element={<APChemistry />} />
            <Route path="/AlgebraI" element={<AlgebraI />} />
            <Route path="/Geometry" element={<Geometry />} />
            <Route path="/PhysicalEducation" element={<PhysicalEducation />} />
            <Route path="/APBiology" element={<APBiology />} />
            <Route path="/HonorsBiology" element={<HonorsBiology />} />
            <Route path="/HonorsEnglish" element={<HonorsEnglish />} />
            <Route
              path="/APComputerScienceA"
              element={<APComputerScienceA />}
            />
            <Route
              path="/HonorsWorldHistory"
              element={<HonorsWorldHistory />}
            />
            <Route path="/WeightTraining" element={<WeightTraining />} />
            <Route path="/Physics" element={<Physics />} />
            <Route path="/AlgebraII" element={<AlgebraII />} />
            <Route path="/ForensicScience" element={<ForensicScience />} />
            <Route path="/test" element={<Test />} />
            <Route path = "/login" element={<Login />} />
            <Route path = "/Careers" element = {<Careers />} />
          </Routes>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
