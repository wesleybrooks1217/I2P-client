import React from 'react';
import '../Nav.css'
import next4Logo from '../icon.png'
function TopNav() {
    return (
        <div className='top-nav'>
          
              <a href='/'> Products </a>
              <a style={{}}href='/'> Students </a>
              <img style={{width: 45}}src={next4Logo} />
              <a style={{}}href='/'> Schools </a>
              <a style={{}} href='/'> About Us </a>
            
          
          
        
            </div>
    )
}

export default TopNav;