import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import "./Dashboard.css";
import Mission from "../../Components/Mission"
import { motion } from "framer-motion";
import { BookUpload, Search, Trophy} from "tabler-icons-react";
import dummyMissions, { courses, Courses, colleges, Colleges, careers } from './DashboardDummy';
import TopNav from '../../Components/Nav/components/TopNav';
import AssignedSurveys from '../../AssignedSurveys';
import GrandGame from "../../grand_game.png";
import { missions } from "../../missions";

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

function MissionList() {
  function handleClick(event) {
    const missionId = Number(event.target.id);
    const circleNumber = missionId + 1;
    const circle = document.querySelector(`.image-container .circle-container .circle${circleNumber}`);
    console.log(circle)
   
    if (circle) {
      
      const variants = {
        expanded: { scale: 1.5 },
        collapsed: { scale: 1 },
      };
      const transition = { duration: 0.2 };
      return (
        <motion.div
        animate={ "expanded" }
      variants={variants}
      />
       
       
      );
    }
   
   
   
  }
  

  return (
    <div className="mission-list">
      <h2>My Missions</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {missions.map((mission) => (
          <li
            key={mission.id}
            style={{ fontSize: '20px', fontWeight: 'bold', margin: '10px 0', cursor: 'pointer' }}
            onClick={handleClick}
            data-circle={mission.id}
          >
            {mission.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

 
 
 
 









// Infinite scroll for college sections

const ITEMS_PER_COLUMN = 8;

function WaterFallContainer({ items }) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(ITEMS_PER_COLUMN);
  const [displayItems, setDisplayItems] = useState(items.slice(startIndex, endIndex));

  // Set up the spring animation
  const [props, set] = useSpring(() => ({
    y: 0,
    config: {
      tension: 120,
      friction: 26,
      mass: 1,
    },
  }));

  useEffect(() => {
    // Set up the scrolling effect
    const interval = setInterval(() => {
      set({
        y: -ITEMS_PER_COLUMN * 60,
        onRest: () => {
          if (endIndex >= items.length) {
            setStartIndex(0);
            setEndIndex(ITEMS_PER_COLUMN);
            setDisplayItems(items.slice(0, ITEMS_PER_COLUMN));
          } else {
            setStartIndex(startIndex + ITEMS_PER_COLUMN);
            setEndIndex(endIndex + ITEMS_PER_COLUMN);
            setDisplayItems(items.slice(startIndex + ITEMS_PER_COLUMN, endIndex + ITEMS_PER_COLUMN));
          }
          set({ y: 0 });
        },
      
      
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [startIndex, endIndex, items, set]);

  return (
    <div className="container">
      <animated.div style={{ transform: props.y.interpolate(y => `translateY(${y + 15}px)`) }}>
        {displayItems.map((item, index) => (
          <div key={index} className="item" style={{marginTop: 15}}>
            {/* Render your component here */}
            {item}
          </div>
        ))}
      </animated.div>
    </div>
  );
}

function Dashboard() {

  const handleCourseClick = () => {
    window.location.href = '/mycourses';
  };

  const handleCollegeClick = () => {
    window.location.href = '/mycolleges';
  };

  const handleCareerClick = () => {
    window.location.href = '/mycareer';
  };

  const [courseIndex, setCourseIndex] = useState(0);
  const [collegeIndex, setCollegeIndex] = useState(0);
  const [careerIndex, setCareerIndex] = useState(0);
  const handleClick = () => {
    // Code to run on click
  };

  const itemsPerContainer = 8;

  // Function to get a slice of the array based on the current index and number of items to display
  const getItems = (list, index) => {
    const startIndex = index % list.length;
    const endIndex = startIndex + itemsPerContainer;
    return list.slice(startIndex, endIndex);
  };

  return (
<div>
    <div style={{ marginTop: 0, position: "absolute", width: "100%" }}>
    <TopNav />
  </div>
    <div className="dashboard-container">
 
 
 
      <div className="dashboard-left-scn" style={{marginTop: 130}}>
      <div className="dashboard-profile">
        <ProfileSection name="Drake Grffith" email="drakegriffith8@gmail.com" pictureUrl="" />
        </div>
        <div className="dashboard-achievments">
         <h4 style={{position: 'absolute', top: 20, fontSize: '24px', fontFamily: 'Phudu', marginBottom: 0}}>My Next Mission </h4>
         <div style={{width: '85%'}}>
        {dummyMissions.map(mission => (
          <Mission key={mission.id} mission={mission} />
        ))}
        </div>
        </div>
        <div className="dashboard-achievments-see">
        <div style={{ textAlign: 'center', color: 'white', fontWeight: 800, fontSize: '24px', marginLeft: 15, marginBottom: 0}}>My Medallions </div>
      <motion.div
      className="dashboard-play"
whileHover={{ scale: 1.2 }}
whileTap={{
  scale: 0.8,
  borderRadius: "100%"
}}>
  
    <BookUpload style={{color: 'white'}} size={42} />
  </motion.div>
  </div>
        <div className="survey-section">
        <h4 style={{position: 'absolute', top:15, fontSize: '24px', fontFamily: 'Phudu', color: '#fff', marginBottom: 20}}>Assigned Surveys </h4>
        <AssignedSurveys />
        </div>
  <div className="my-mission-container"> 
  <MissionList />
  
  </div>
  
      
        </div>
    <div className="dashboard-main-area" style={{marginTop: 130}}>
      <div className="dashboard-courses">
      <div style={{textAlign: 'center', fontWeight: 700, fontSize: '28px', marginBottom: 0}}>MyCourses</div>
      <hr style={{width: '80%', textAlign: 'center', margin: '0 auto 0 auto'}} />
      
      <WaterFallContainer items={courses.map((course) => (
    <Courses key={course.id} course={course} />
  ))} />
  <div style={{padding: '25px', backgroundColor: 'white', marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto',marginLeft: 'auto', marginRight: 'auto', borderRadius: '4px', width: '20px', height: '20px'}}>
   <div onClick={handleCourseClick} style={{ textAlign: 'center',  cursor: 'pointer'}}> <Search size={32} /></div>
  </div>
  </div>
      <div className="dashboard-colleges"> 
      <div style={{textAlign: 'center', fontWeight: 700, fontSize: '28px', marginLeft: 15, marginBottom: 0}}>MyColleges</div>
      <hr style={{width: '80%', textAlign: 'center', margin: '0 auto 0 auto'}} />

      <WaterFallContainer items={colleges.map((college) => (
   <Colleges key={college.id} college={college} />
 ))} />
 <div style={{padding: '25px', backgroundColor: 'white', marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto',marginLeft: 'auto', marginRight: 'auto', borderRadius: '4px', width: '20px', height: '20px'}}>
       <div onClick={handleCollegeClick} style={{textAlign: 'center', cursor: 'pointer'}}> <Search size={32} /></div>
 </div>
 </div>

      <div className="dashboard-careers">
      <div style={{textAlign: 'center', fontWeight: 700, fontSize: '28px', marginLeft: 15, marginBottom: 0}}>MyCareers</div>
      <hr style={{width: '80%', textAlign: 'center', margin: '0 auto 0 auto'}} />
      <WaterFallContainer items={colleges.map((college) => (
  <Colleges key={college.id} college={college} />
))} />
<div style={{padding: '25px', backgroundColor: 'white', marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto',marginLeft: 'auto', marginRight: 'auto', borderRadius: '4px', width: '20px', height: '20px'}}>
      <div onClick={handleCareerClick} style={{textAlign: 'center',  cursor: 'pointer'}}> <Search size={32} /></div>
    </div>
    </div>
    <div className="dashboard-right">

        <div className='dashboard-miss-container'>
      <div className="dashboard-missions">
      <h4 className="animated-gradient-text h4Tag" style={{textAlign: 'center', fontWeight: 800, fontSize: '63px', marginLeft: 0, marginTop: 0, marginBottom: 0, fomtFamily: 'Phudu'}}> MyNext4 </h4>
      </div>
      </div>
      <div className="dashboard-missions-see">
      <div style={{color: '#FFF', textAlign: 'center', fontWeight: 800, fontSize: '21px', marginLeft: 15, marginBottom: 0}}>Continue Conquest </div>
      <motion.div
      className="dashboard-play"
whileHover={{ scale: 1.2 }}
whileTap={{
  scale: 0.8,
  borderRadius: "100%"
}}>
    <Trophy style={{color: 'white'}}size={42} />
  </motion.div>
      </div>
      </div>
    </div>
    </div>


    <div class="image-container">
   <img src={GrandGame} alt="Your Image" />
   <div className="animated-gradient-text my-mission-header"> I. Newcomer </div>
   <div class="circle-container">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
      <div class="circle circle5"></div>

     
    </div>
   <div style={{position: 'absolute', bottom: 5, fontWeight: 400}}> Complete this map to move on! </div>
 </div>
 </div>
  )
}

export default Dashboard;





























































