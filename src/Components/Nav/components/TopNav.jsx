import React from 'react';
import '../Nav.css';
import next4Logo from '../icon.png';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useState} from 'react';

function TopNav() {

    const auth = useSelector(state => state.user.isAuthenticated);
    

    return (
      <div>
        <div className='top-nav'>
          
              <a href='/'> Products </a>
              <a style={{}}href='/'> Students </a>
              <a style={{color: 'black'}}href='/'> School Systems </a>
              <a style = {{color: 'black'}} href = '/'>About us</a>
              <img style={{width: 45}}src={next4Logo} />
              <a style = {{color: 'black'}} href = '/'>Careers</a>
              <a style = {{color: 'black'}} href = '/'>Colleges</a>
              <a style = {{color: 'black'}} href = '/'>Courses</a>
              
            
          
          
        
            </div>

            {
              auth &&
              <div className='bottom-nav' style={{marginTop: 100}}>
              <Link to = {"/Dashboard"}>MyDashboard</Link>
              <Link to={"/MyCareer"}>MyCareer</Link>
              <Link to={"/MyCourses"}>MyCourses</Link>
              <Link to = {"/MyColleges2"}>MyColleges</Link>
            </div>}

            
          </div>
    );
}

export default TopNav;