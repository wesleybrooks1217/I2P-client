import React from 'react';
import '../Nav.css'
import next4Logo from '../icon.png'
import ReactDOM from "react-dom/client";
import { Outlet, Link, Route, Routes, BrowserRouter} from "react-router-dom";
import Products from '../../Products/Products';
import About from '../../About/About';

function TopNav() {
    return (
        <div className='top-nav'>
    <li id='link-products'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}}to="/products">Products</Link>
    </li>
    <li id='link-students'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/students">Students</Link>
    </li>
    <li id='link-home' >
        <img src={next4Logo} id='logo-home' />
    </li>
    <li id='link-schools'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/schools">Schools</Link>
    </li>
    <li id='link-about'>
      <Link style={{textDecoration: 'none', color: 'white', fontWeight: 600}} to="/about">About Us</Link>
    </li>
  </div>
       
    )
}

export default TopNav;