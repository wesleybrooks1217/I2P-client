import React from 'react';
import '../Nav.css'
import next4Logo from '../icon.png'
function TopNav() {
    return (
        <div className='top-nav'>
          
              <a href='/'> Products </a>
              <a style={{}}href='/'> Students </a>
              <img style={{width: 45}}src={next4Logo} />
              <a style={{color: 'white'}}href='/'> School Systems </a>
              <a style={{color: 'white'}} href='/'> About </a>
            
          
          
        
            </div>
    )
}

export default TopNav;