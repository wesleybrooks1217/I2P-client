import React from "react";
import {Avatar} from '@mantine/core';
import {Book2, School, Package, IdBadge2, Helmet } from 'tabler-icons-react';
function MissionsContainer() {
    return (
        <div id='dash-main-missions'>
          <div style={{display: 'flex'}}>
          <div id='dash-main-missions-focus'>
            <div style={{display: 'flex', alignItems: 'flex-end'}}>
          <Avatar color="violet" radius="md" style={{height: 60, marginLeft: 15, width: '10vw', marginTop: 16, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Helmet style={{width: '35px', height: '35px'}} />
          </Avatar>
          <p style={{fontSize: '16px', marginLeft: 5}}> Motorcycle Maniac </p>
          </div>
          <div style={{width: '80%', border: '1px solid black', height: 20, margin: '15px auto 0 auto'}}>Progress bar</div>
          <p style={{marginTop: 10, textAlign: 'center', fontSize: '12px'}}> Complete ten motorcycle missions without any assistance at all.</p>
          </div>
         
          <div id='dash-main-missions-other'>
            <div style={{display: 'flex'}}>
              <h4> Completed  </h4>
              <h4 style={{marginLeft: 'auto', marginRight: 20}}> Upcoming </h4> 
              <h4 style={{marginLeft: 'auto', marginRight: 40}}> More </h4> 
            </div>
            <div style={{display: 'flex'}}>
              <div id='dash-main-missions-comp'>
                zx
              </div>
              <div id='dash-main-missions-upcoming'>
                zx
              </div>
              <div id='dash-main-missions-more'>
                zx
              </div>
            </div>
        </div>
        </div>
        </div>

    )
}

export default MissionsContainer;