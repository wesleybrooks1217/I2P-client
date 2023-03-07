import React from 'react';
import '../Nav.css'
import next4Logo from '../icon.png'
import ReactDOM from "react-dom/client";
import { Outlet, Link, Route, Routes, BrowserRouter} from "react-router-dom";
import Products from '../../Products/Products';
import About from '../../About/About';
import {useSelector} from 'react-redux';




function TopNav() {
  const auth = useSelector(state => state.user.isAuthenticated);
  const handleDemoClick = () => {
    window.location.href = '/Demo';
  };

  const handleProductsClick = () => {
    window.location.href = '/Products';
  };

  const handleStudentsClick = () => {
    window.location.href = '/Students';
  };

  const handleSchoolSystemsClick = () => {
    window.location.href = '/SchoolSystems';
  };

  const handleAboutClick = () => {
    window.location.href = '/About';
  };

  const handleSignInClick = () => {
    window.location.href = '/SignIn';
  };

  return (
    <div className='top-nav'>
      <li id='link-demo'>
          <div style={{textDecoration: 'none', color: 'white', fontWeight: 600}} onClick={handleDemoClick}>Demo</div>
        </li>
        <li id='link-products'>
          <div style={{textDecoration: 'none', color: 'white', fontWeight: 600}} onClick={handleProductsClick}>Products</div>
        </li>
        <li id='link-students'>
          <div style={{textDecoration: 'none', color: 'white', fontWeight: 600}} onClick={handleStudentsClick}>Students</div>
        </li>
        <li id="link-home">
          <div>
            <img src={next4Logo} alt='Next4 logo' id='logo-home' />
          </div>
        </li>
        <li id='link-schools'>
          <div style={{textDecoration: 'none', color: 'white', fontWeight: 600}} onClick={handleSchoolSystemsClick}>School Systems</div>
        </li>
        <li id='link-about'>
          <div style={{textDecoration: 'none', color: 'white', fontWeight: 600}} onClick={handleAboutClick}>About Us</div>
        </li>
        <li id='link-signin'>
          <div style={{textDecoration: 'none', color: 'white', fontWeight: 600}} onClick={handleSignInClick}>Sign In</div>
        </li>
      
    </div>
  );
}



/*
function TopNav() {

    
    

    return (
     
        <div className='top-nav'>
          <li id='link-demo'>
          <Link style={{cursor: 'pointer', textDecoration: 'none', color: 'white', fontWeight: 600}}to="/Demo">Demo</Link>
          </li>
    <li id='link-products'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}}to="/Products">Products</Link>
    </li>
    <li id='link-students'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/Students">Students</Link>
    </li>
    <li id='link-home' >
      <Link to='/'>
        <img src={next4Logo} id='logo-home' />
        </Link>
    </li>
    <li id='link-schools'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/SchoolSystems">Schools</Link>
    </li>
    <li id='link-about'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/About">About Us</Link>
    </li>
    <li id='link-signin'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 900}} to="/SignIn">Sign In</Link>
    </li>
  </div>

       
    )
}

*/

export default TopNav;