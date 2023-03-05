import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import "./Dashboard.css";
import Mission from "../../Components/Mission"
import { motion } from "framer-motion";
import { BookUpload, Search, Trophy} from "tabler-icons-react";
import dummyMissions, { courses, Courses, colleges, Colleges, careers } from './DashboardDummy';

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
    }, 3000);

    return () => clearInterval(interval);
  }, [startIndex, endIndex, items, set]);

  return (
    <div className="container">
      <animated.div style={{ transform: props.y.interpolate(y => `translateY(${y + 10}px)`) }}>
        {displayItems.map((item, index) => (
          <div key={index} className="item">
            {/* Render your component here */}
            {item}
          </div>
        ))}
      </animated.div>
    </div>
  );
}

function Dashboard() {
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
    <div className="dashboard-container">
      <div className="dashboard-left-scn">
      <div className="dashboard-profile">
        <ProfileSection name="Drake Grffith" email="drakegriffith8@gmail.com" pictureUrl="" />
        </div>
        <div className="dashboard-achievments">
        {dummyMissions.map(mission => (
          <Mission key={mission.id} mission={mission} />
        ))}
        </div>
        <div className="dashboard-achievments-see">
        <div style={{textAlign: 'center', fontWeight: 800, fontSize: '21px', marginLeft: 15, marginBottom: 0}}>More Missions</div>
        <motion.div
        className="dashboard-play"
  whileHover={{ scale: 1.2 }}
  whileTap={{
    scale: 0.8,
    borderRadius: "100%"
  }}>
      <BookUpload size={42} />
    </motion.div>
  
        </div>
        </div>
    <div className="dashboard-main-area">
      <div className="dashboard-courses">
      <div style={{textAlign: 'center', fontWeight: 700, fontSize: '28px', marginLeft: 15, marginBottom: 0}}>MyCourses</div>
      
      <WaterFallContainer items={courses.map((course) => (
    <Courses key={course.id} course={course} />
  ))} />
   <div style={{marginTop: 10, textAlign: 'center', width: '180px', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer'}}> <Search size={32} /></div>
  </div>
  
      <div className="dashboard-colleges"> 
      <div style={{textAlign: 'center', fontWeight: 700, fontSize: '28px', marginLeft: 15, marginBottom: 0}}>MyColleges</div>

      <WaterFallContainer items={colleges.map((college) => (
   <Colleges key={college.id} college={college} />
 ))} />
       <div style={{marginTop: 10,textAlign: 'center', width: '180px', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer'}}> <Search size={32} /></div>
 </div>

      <div className="dashboard-careers">
      <div style={{textAlign: 'center', fontWeight: 700, fontSize: '28px', marginLeft: 15, marginBottom: 0}}>MyCareers</div>
      <WaterFallContainer items={colleges.map((college) => (
  <Colleges key={college.id} college={college} />
))} />
      <div style={{marginTop: 10,textAlign: 'center', width: '180px', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer'}}> <Search size={32} /></div>
    </div>
    <div className="dashboard-right">

        <div className='dashboard-miss-container'>
      <div className="dashboard-missions">
      <h4 className="animated-gradient-text h4Tag" style={{textAlign: 'center', fontWeight: 800, fontSize: '63px', marginLeft: 0, marginTop: 5, marginBottom: 0, fomtFamily: 'Phudu'}}> MyNext4 </h4>
      </div>
      </div>
      <div className="dashboard-missions-see">
      <div style={{textAlign: 'center', fontWeight: 800, fontSize: '21px', marginLeft: 15, marginBottom: 0}}>Continue Conquest </div>
      <motion.div
      className="dashboard-play"
whileHover={{ scale: 1.2 }}
whileTap={{
  scale: 0.8,
  borderRadius: "100%"
}}>
    <Trophy size={42} />
  </motion.div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard;





























































