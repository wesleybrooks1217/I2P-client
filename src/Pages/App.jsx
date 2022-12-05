import "../Styles/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../Components/Landing/Landing";
import SchoolSystems from "../Components/SchoolSystems/SchoolSystems";
import Privacy from "../Components/Privacy/Privacy";
import MyCourses from "../Components/MyCourses/MyCourses";
import Dashboard from "../Components/Dashboard/Dashboard";
import MyCareer from "./MyCareer/MyCareer";
import About from "../Components/About/About";
import MyColleges2 from "../Components/MyCollege/MyColleges2";
import { Provider } from "react-redux";
import store from "../redux/store";
import Test from "./Test";
import CollegeCard from "../Components/CollegeCards/CollegeCard";
import Login from "./LogIn/Login";
import Careers from "./Careers/Careers";
import Products from "../Components/Products/Products";
import Students from "../Components/Students/Students";
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

/*
Testing push request
*/

function App() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/About" element={<About />} />
            <Route path="/MyCourses" element={<MyCourses />} />
            <Route path="/SchoolSystems" element={<SchoolSystems />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/CollegeCard" element={<CollegeCard />} />
            <Route path="/Students" element={<Students />} />
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
            <Route path="/APComputerScienceA" element={<APComputerScienceA />} />
            <Route path="/HonorsWorldHistory" element={<HonorsWorldHistory />} />
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


export default App;
