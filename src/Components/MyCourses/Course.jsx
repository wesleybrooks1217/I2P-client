import React, { useState, useEffect, useCallback } from "react";
import "./MyColleges.css";
import { Divider, Progress } from "@mantine/core";
import { Star, User, Book2,  Eraser, ThumbUp, ArrowsMaximize, BallFootball, Award, Building, Meat, Confetti,  MoodWrrr, MoodUnamused, MoodAnnoyed2, MoodSmileBeam, Trash } from "tabler-icons-react";
import { motion } from 'framer-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {shuffle} from "lodash"
import MyCollegeCards from './MyCollegeCards';
import { gsap } from "gsap";
import { Apple, School, StarsFilled } from 'tabler-icons-react';

// Small 

export const SmallCourse = ({course, onClick, onFavoriteToggle }) => {
  const courseName = course.name
  const [isFavorited, setIsFavorited] = useState(course.isFavorited);
  
  const handleFavoriteClick = () => {
    const newIsFavorited = !isFavorited;
    setIsFavorited(newIsFavorited);
    onFavoriteToggle(course.name, newIsFavorited)
  }
    
  window.onload = function() {
    let starAnim = document.querySelector('.small-course-star');
    starAnim.addEventListener('click', function() {
      console.log('working');
      starAnim.classList.add('active');
  });
}
    return (

        <div className="small-course" onClick={onClick}>
            <div className="small-course-name">{courseName}</div>
            <div className="small-course-star" onClick={handleFavoriteClick}>
            {isFavorited ? <Star size={24} style={{color: 'gold'}} /> : <Star size={24}/> }
            </div>
        </div>
    );
};

// Course Icon

function CourseIcons({ ap, dualEnrollment, honors }) {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      {ap && <Apple size={16} color="green" style={{ marginRight: '5px' }} />}
      {dualEnrollment && <School size={16} color="orange" style={{ marginRight: '5px' }} />}
      {honors && <StarsFilled size={16} color="blue" style={{ marginRight: '5px' }} />}
    </div>
  );
}


      
// Buttons

const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
    transition: { duration: 0.2 },
  },
};

const useButtonHandler = (handler) => {
  return useCallback(() => {
    handler();
  }, [handler]);
};

const DeleteButton = ({ children, onClick }) => {
  const handleDelete = useButtonHandler(onClick)
  return (
    <motion.button
      onClick={handleDelete}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className="button"
    >
      {children}
    </motion.button>
  );
};

const LikeButton = ({ children, onClick, course }) => {
  const handleLiked = useButtonHandler(onClick)
  return (
    <motion.button
      onClick={handleLiked}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className="button"
    >
      {children}
    </motion.button>
  );
};

const MaxButton = ({ children, onClick, course }) => {
  const onLargeClick = useButtonHandler(onClick);
  return (
    <motion.button
      onClick={onLargeClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      className="button"
    >
      {children}
    </motion.button>
  );
};

function RelatedCourses({ courses }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {courses.map((course) => (
        <div key={course.id} style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => {}}>
          {course.name}
        </div>
      ))}
    </div>
  );
}

// Medium 
export const MediumCourse = ({course, onDelete, onLargeClick, setView, setSelectedCourse}) => {
  function animate() {
    gsap.to(".college-medium-container", { x: 200, scale: 0, duration: 0.5, ease: "expo.out" });
    onDelete();
  }
  const [activeTab, setActiveTab] = useState("money");
    const [showSAT, setShowSAT] = useState(false);
    const [endpoints, setEndpoints] = useState([]);

    const handleUpdateEndpoints = (newEndpoints) => {
      setEndpoints(newEndpoints);
    };

    const handleMaximize = () => {
      onLargeClick();
      setView('large');
      setSelectedCourse(course);
    };
   


while (selectedCards.length < 3) {
  selectedCards.push({ title: '', description: '', icon: null });
}
function handleDelete() {
  animate();
};
return (
<div className="college-medium-container" >
  <div className="college-medium-top-shelf"> 
  <div className="college-medium-name"> <b>{course.name} </b></div>
  </div>
  <Divider style={{marginBottom: 5}} />
  <div style={{textAlign: 'center', fontSize: '13px', marginTop: 8, marginBottom: 0}}>Difficulty</div>
  <div class="horizontal-line">
  <span></span>
</div>

  <Divider style={{marginTop: 30 }}/>
  <div className="mediumCollege-bottom">
    <Trash onClick={handleDelete} size={32}  />
    <ThumbUp size={32} />
    <ArrowsMaximize onClick={handleMaximize}size={32} />
    </div>
          {/* SAVE 
          <button onClick={handleClick} className="scores-btn"> {showSAT ? 'ACT' : 'SAT'}</button>
          <div className='medium-college-bottom-container'>
         
         <div className="scores-container">
          <CollegeScore showSAT={showSAT} satCompositeMidpoint={college[0].satCompositeMidpoint} satCompositePercentile25={college[0].satCompositePercentile25} satCompositePercentile75={college[0].satCompositePercentile75} actCumulativeMidpoint={college[0].actCumulativeMidpoint} actCumulativePercentile25={college[0].actCumulativePercentile25} actCumulativePercentile75={college[0].actCumulativePercentile75} />
          </div>
          <div className="rate-container">
          <AcceptanceRate acceptanceRate={college[0].acceptanceRate} />
          </div>
          */}
          </div>

      );
    };
    
 // Large pre-reqs


 function SimilarResources({ resources }) {
   return (
     <div style={{ display: 'flex', alignItems: 'center' }}>
       {resources.map((resource) => (
         <div key={resource.id} style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => {}}>
           {resource.name}
         </div>
       ))}
     </div>
   );
 }
 


// Large 

export const LargeCourse = ({ course, onDelete, handleLiked}) => {
    return course ? (
        <div className="large-college">
           <CourseIcons ap={course.ap} dualEnrollment={course.dualEnrollment} honors={course.honors} />
          <div style={{fontWeight: 500}} className="large-college-top-container">
            {course.name}
          <div className="icon-area">
          <DeleteButton onClick={onDelete}> <Eraser /> </DeleteButton>
          <LikeButton onClick={handleLiked}>  <ThumbUp /> </LikeButton>
          </div>
        </div>
        <hr />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 15, marginBottom: 25}}>
          <div style={{fontWeight: 400, fontSize: '13px', marginBottom: 8, color: 'gray'}}> Description </div>
          {course.description}
        </div>
        <hr />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 15, marginBottom: 10}}>
        <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 3, color: 'gray'}}> Difficulty </div>
        </div>
        <div className="horizontal-line">
        <span className="tick-mark"></span>
      <span className="tick-mark"></span>
      <span className="tick-mark"></span>
      <span className="tick-mark"></span>
      <span className="tick-mark"></span>
      {courseDifficulty === 1 && <div className="cube cube-1"></div>}
        {courseDifficulty === 2 && <div className="cube cube-2"></div>}
        {courseDifficulty === 3 && <div className="cube cube-3"></div>}
        {courseDifficulty === 4 && <div className="cube cube-4"></div>}
        {courseDifficulty === 5 && <div className="cube cube-5"></div>}
      </div>
        <hr style={{marginTop: '10px', marginBottom: '18px'}} />
        <div style={{textAlign: 'center', fontSize: '14px', fontWeight: 400, marginTop: 15, marginBottom: 15}}>
          
        <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 3, color: 'gray'}}>Resources </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <SimilarResources resources={course.resources} />
        </div>
    <div style={{fontWeight: 400, marginTop: 0, fontSize: '13px', marginBottom: 3, color: 'gray'}}> Similar Classes </div>
    <RelatedCourses courses={course.similar_classes} />

      
      </div>
   
      
        </div>
    ) : null;
};
