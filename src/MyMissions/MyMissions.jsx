import React from 'react';
import "./MyMissions.css";
import dummyMissions from '../Pages/Dashboard/DashboardDummy';
import Mission from '../Components/Mission';
import TopNav from '../Components/Nav/components/TopNav';

const ProfileSection = ({ name, email, pictureUrl }) => {
    return (
      <div className="profile-section">
     
        <div className="profile-info">
          <h2>{name}</h2>
          <p><u>{email}</u></p>
          
        </div>
        <img src="" alt="Profile Info" className="profile-click-in" />
        <img src={pictureUrl} alt="Profile picture" className="profile-picture" />
        <img src={pictureUrl} alt="Profile school" className="profile-school" />
      </div>
    );
  };

function MyMissions() {
    return (

        <div className="missions-container">
            <div style={{position: 'absolute', top: 0, width: '100%'}}>
            <TopNav />
            </div>
            <div className='mission-left-scn'>
            <div className="mission-profile">
                <ProfileSection name="Drake Grffith" email="drakegriffith8@gmail.com" pictureUrl="" />
                <div className="mission-achievments">
    <h4 style={{fontSize: '24px', fontFamily: 'Phudu', color: 'gray'}}>MyMissions </h4>
   {dummyMissions.map(mission => (
     <Mission key={mission.id} mission={mission} />
   ))}
   </div>
   </div>
            </div>
            <div className="dashboard-main-area" style={{marginTop: 130}}>
                
            </div>
        </div>
    )
}

export default MyMissions;