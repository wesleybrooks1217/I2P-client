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
          
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/MyCareer" element={<MyCareer />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/MyCareer" element={<MyCareer />} />
            <Route path="/MyColleges2" element={<MyColleges2 />} />
          
      
            <Route path="/test" element={<Test />} />
            <Route path = "/login" element={<Login />} />
            <Route path = "/Careers" element = {<Careers />} />
          </Routes>
        </React.Fragment>
      </Provider>
    );
  }


export default App;
