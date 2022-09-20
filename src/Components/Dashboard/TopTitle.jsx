import React, { useState } from 'react';
import DropdownMenu from "../DropdownMenu"
import './dashboardstyles.css';
import AwardPin from './AwardPin';
import { Award } from 'tabler-icons-react';
import { setConstantValue } from 'typescript';

function TopTitle() {
   
    return (
    <div className='top-title-container'>
        <div className='top-title-profile'> 
            <h3> Grade Level</h3>
            <h2> Username </h2>
            <AwardPin color="red" icon='hello' />
            <AwardPin color="black" icon='hello' />
        </div>
        <div className='top-title-information'> 
            <div width='50px' style={{backgroundColor: 'gray', marginRight: '15px'}}> IMG</div>
            <DropdownMenu />
          </div>
        </div>
    )
}

export default TopTitle;