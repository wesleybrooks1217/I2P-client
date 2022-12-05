import { Paper } from '@mantine/core';
import React, { useRef, useEffect, useState } from 'react'
import Cabinet from './Cabinet';
import CabinetSide from './CabinetSide';
import Desk from "./Desk";
import DeskSide from './DeskSide';
import "./Homeroom.css"
import PageNavigation from '../PageNavigation';
import PersonalPage from '../PersonalPage';


function Homeroom(props) {
    const [cabinetState, setCabinetState] = useState(false)
    const [deskState, setDeskState] = useState(false)
    const [areaOpened, setAreaOpened] = useState('')

    useEffect(() => {
        props.setArea(areaOpened)
      
    }, [areaOpened])
    
    return (
  
       
        
        
        <div className='homeroom-container'>
              
              <h2 style={{position: 'absolute', marginRight: 'auto'}}> Homeroom</h2>
              
           
            <div className='top-container'>
            
            <PersonalPage />
            <PageNavigation />
            </div>
        <div className='classroom-container '>
            
           <Desk setDeskState={setDeskState} />
           <Cabinet setCabinetState={setCabinetState} />
        </div>
        <CabinetSide setArea={setAreaOpened} isOpen={cabinetState}/>
        <DeskSide setArea={setAreaOpened} isOpen={deskState} />
        </div>

 
      
        
      

       
        
    )
}

export default Homeroom;