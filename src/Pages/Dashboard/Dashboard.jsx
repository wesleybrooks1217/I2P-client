import React from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import Medal from "../../Components/Medal";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  {/*const user = useSelector((state) => state.user);
  if (!isAuthenticated) {
    return <div> Loading... </div>
  }*/}

  const user = { name: "John Doe", icon: "user.png", title: "Developer", experience: 75 };

  return (
    <div className='container'>
        <div className='left-side'>
        
        <div className="user-info">
           <div className='top-tab'>
            <div className="user-name">{user.name}</div>
            <div className="user-icon">
                <img src={user.icon} alt="T" />
            </div>
            </div>
            <div className='btm-tab'>
            <div className="experience-bar">
                <div className="experience-progress" style={{ width: `${user.experience}%` }}></div>
            </div>
            <div className="user-title">{user.title}</div>
            </div>
        </div>
        <div className="my-merits">
    <div className="my-merits-header">My Awards</div>
    <div className="my-merits-dropdown">
      <div className="my-merits-selected medal-container">
        <Medal title="College Companion" />
        <Medal title="True Trainee" />
        <Medal title="Fun Fiesta!" />
  
      </div>
      <button className="my-merits-button">View all awards</button>
    </div>
  </div>
  </div>
  <div className='middle'>

  <div className="user-content">
  <div className="user-course">
    <h2>Course</h2>
    <div className="user-course-carousel">
      
    </div>
    <Link to="/mycourses">Go to My Courses</Link>
  </div>
  <div className="user-college">
    <h2>College</h2>
    <div className="user-college-carousel">
      
    </div>
    <Link to="/mycolleges">Go to My Colleges</Link>
  </div>
  <div className="user-career">
    <h2>Career</h2>
    <div className="user-career-carousel">

    </div>
    <Link to="/mycareers">Go to My Careers</Link>
  </div>
</div>
</div>

</div>

  );
};

export default Dashboard;
