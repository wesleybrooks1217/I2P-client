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
import MyColleges from "../Components/MyColleges/MyColleges";
import { Provider } from "react-redux";
import store from "../redux/store";
import Test from "./Test";
import CollegeCard from "../Components/CollegeCards/CollegeCard";
import Login from "./LogIn/Login";
import Careers from "./Careers/Careers";
import Products from "../Components/Products/Products";
import Students from "../Components/Students/Students";
import ExploreColleges from "./ExploreColleges/ExploreColleges";
import Courses from "./Courses/Courses";
import Demo from "../Components/Demo/Demo";
import ExploreCourses from "./ExploreCourses/ExploreCourses";
import ExploreCareers from "./ExploreCareers/ExploreCareers";
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
            <Route path="/Colleges/:id" element={<CollegeCard />} />
            <Route path="/Students" element={<Students />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/MyCareer" element={<MyCareer />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/MyCareer" element={<MyCareer />} />
            <Route path="/MyColleges" element={<MyColleges />} />
            <Route path='/Demo' element={<Demo /> } />

  
      
            <Route path="/test" element={<Test />} />
            <Route path = "/SignIn" element={<Login />} />
            <Route path = "/Careers/:id" element = {<Careers />} />
            <Route path = "/ExploreColleges" element = {<ExploreColleges />} />
            <Route path = "/Courses/:id" element = {<Courses />} />
            <Route path = "/ExploreCourses" element = {<ExploreCourses />} />
            <Route path = "/ExploreCareers" element = {<ExploreCareers />} />
          </Routes>
        </React.Fragment>
      </Provider>
    );
  }


export default App;
