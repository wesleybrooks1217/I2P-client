import React from 'react';
import TopNav from '../Nav/components/TopNav';
import './DashboardStyles.css';
import {Avatar} from '@mantine/core';
import {Book2, School, Package, IdBadge2, Helmet } from 'tabler-icons-react';
import CoreComponents from './components/CoreComponents';
import MissionsContainer from './components/MissionsContainer';
import ProfileContainer from './components/ProfileContainer';
import CardDisplayContainer from './components/CardDisplayContainer';
function Dashboard() {
  return (
    <div>
      <section>
      <div style={{position: 'absolute', width: '100%'}}>
        <TopNav />
      </div>
      <h2 id='dash-top-title'> Welcome, John </h2>
      <div id='dash-main-container'>
        <div style={{display: 'flex'}}>
          <h4 style={{fontSize: '20px', marginLeft: '4vw'}}> Core Components </h4> 
          <h4 style={{fontSize: '20px', marginLeft: '16vw'}}> My Missions </h4> 
        </div>
        <div style={{marginBottom: 20, display: 'flex'}}>
          <ProfileContainer />
          <MissionsContainer />
        </div>
        <div style={{display: 'flex'}}>
        <CoreComponents />
        <CardDisplayContainer />
        </div>
      </div>
      </section>
    </div>
    
            
  );
}

export default Dashboard;
