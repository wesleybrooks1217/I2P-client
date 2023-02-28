import React, { useState, useEffect, useCallback } from "react";
import "./MyColleges/MyColleges.css";
import { Spacer, Tab, Tabs, Icon} from "tabler-react";
import { Col, Row} from "react-bootstrap"
import { Divider, Image } from "@mantine/core";
import { Star, StarFilled, HomeDot, Book2,  Eraser, ThumbUp, ArrowsMaximize, BallFootball, Award, Building, Meat, Confetti, Cardboards, ThumbDown, MoodWrrr, MoodUnamused, MoodAnnoyed2, MoodSmileBeam, MoodSmile } from "tabler-icons-react";
import StarImage from "../star.png"
import {motion, AnimatePresence} from 'framer-motion'
import { Paper, Progress, Tooltip, Slider } from "@mantine/core";
// Small College Component - C1(X)

const CollegeScore = ({ showSAT, satCompositeMidpoint, satCompositePercentile25, satCompositePercentile75, actCumulativeMidpoint, actCumulativePercentile25, actCumulativePercentile75 }) => {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);

  const values = [
    showSAT ? (satCompositePercentile25 / 1600) * 100 : (actCumulativePercentile25 / 36) * 100,
    showSAT ? ((satCompositeMidpoint / 1600) * 100) - (satCompositePercentile25 / 1600) * 100  : ((actCumulativeMidpoint / 36) * 100) - (actCumulativePercentile25 / 36) * 100,
    showSAT ? ((satCompositePercentile75 / 1600) * 100) - ((satCompositeMidpoint / 1600) * 100) : ((actCumulativePercentile75 / 36) * 100) - ((actCumulativeMidpoint / 36) * 100),
  ]
  return ( 
    <div>
    <Progress size="xl"  onMouseLeave={() => setHovered(-1)} sections={[
      { value: values[0], color: 'cyan', onMouseEnter: () => setHovered(satCompositePercentile25), onMouseLeave: reset,tooltip: `25% Percentile ${showSAT ? satCompositePercentile25 : actCumulativePercentile25}`  },
      { value: values[1], color: 'blue', onMouseEnter: () => setHovered(satCompositeMidpoint), onMouseLeave: reset, tooltip: `Midpoint ${showSAT ? satCompositeMidpoint : actCumulativeMidpoint}`},
      { value: values[2], color: 'indigo', onMouseEnter: () => setHovered(satCompositePercentile75), onMouseLeave: reset , tooltip: `75% Percentile ${showSAT ? satCompositePercentile75 : actCumulativePercentile75}` },
  ]} />
  <div className="test-score-section">
  <h4> 0 </h4>
  <h4> {showSAT ? 1600 : 36} </h4>
  </div>
  </div>
  );
};

export const AcceptanceRate = ({ acceptanceRate }) => {
  const [icon, setIcon] = useState(null);
  useEffect(() => {
    const number = Number(acceptanceRate);
    console.log(number)
    switch(true) {
      case number <= .10:
        setIcon(<MoodWrrr size={32} />);
        break;
      case number <= .25:
        setIcon(<MoodAnnoyed2 size={32} />);
        console.log("OK")
        break;  
      case number <= .40:
        setIcon(<MoodUnamused size={32}/>);
        break;
      case number <= .80:
        setIcon(<MoodSmileBeam size={32} />);
        break;
      default:
        setIcon(<MoodSmileBeam size={32} />);
    }
  }, [acceptanceRate])

  return (
    <div className="acceptance-rate-container">
    
      {icon}
      {acceptanceRate}
    </div>
  )
}

function StarIcon() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`star-icon${clicked ? ' clicked' : ''}`}
      onClick={handleClick}
    >
      {clicked ? (
        <img
          src={StarImage}
          alt="Star"
          className="star-icon__image"
        />
      ) : (
        <Star size={24} strokeWidth={2} color="black" />
      )}
    </div>
  );
}

export const SmallCollege = ({college, onClick, onFavoriteToggle }) => {
  const collegeName = exemptWords(college[0].name);
  const [isFavorited, setIsFavorited] = useState(college[0].isFavorited);
  
  const handleFavoriteClick = () => {
    const newIsFavorited = !isFavorited;
    setIsFavorited(newIsFavorited);
    console.log(college[0])
    onFavoriteToggle(college[0].collegeUnitId, newIsFavorited)
  }
  

  function exemptWords(text) {
      let newText = text.replace("University", "");
      newText = newText.replace("of", "");
      return newText.slice(0, 30) 
    }

  window.onload = function() {
    let starAnim = document.querySelector('.small-college-star');
    starAnim.addEventListener('click', function() {
      console.log('working');
      starAnim.classList.add('active');
  });
}

  
    return (

        <div className="small-college" onClick={onClick}>
            <div className="small-college-name">{collegeName}</div>
            <div onClick={handleFavoriteClick}>
            {isFavorited ? <Star style={{color: 'green'}} /> : <Star /> }
            </div>
        </div>
    );
};

//Medium College Component - C1(Y)

const MedallionAward = ({ endpoint, name, Icon, handleClick}) => {
    const [displayRank, setDisplayRank] = useState(false);
    const [color, setColor] = useState("");
    const [title, setTitle] = useState("");
    useEffect(() => {
        const count = Number(endpoint);
        switch (true) {
            case count  <= 25:
                setColor("green");
                break;
            case count <= 75:
              setColor("gold");
              break;
            case count <= 150:
              setColor("silver");
              break;
            case count <= 300:
              setColor("bronze");
              break;
            default:
              setColor("");
          }
    }, [endpoint]);

    
    function handleClick() {
      setDisplayRank(!displayRank);
      console.log('clicked')
    };

      return (
        <div className="medallion-award" onClick={handleClick}>
      {displayRank ? <motion.div
        className={`icon medallion-award ${color}`}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%"
        }}
       
      >
        <Icon />
      </motion.div>
      :
      <motion.div
      className={`icon medallion-award ${color}`}
      onClick={handleClick}
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{
        scale: 0.8,
        rotate: -90,
        borderRadius: "100%"
      }}
      >
        {endpoint}
      </motion.div>
}
      
    </div>
       

      );
};


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

const LikeButton = ({ children, onClick, college }) => {
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
const MaxButton = ({ children, onClick, college }) => {
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

function College({college, onUpdateEndpoints, size}) {
  
  if (!college) {
    return null;
  }
  
  const endpoints = [
    college[0].rankingsBestCollegeAcademics,
    college[0].rankingsBestCollegeAthletics,
    college[0].rankingsBestValueColleges,
    college[0].rankingsBestCollegeCampuses,
    college[0].rankingsBestCollegeFood,
    college[0].rankingsBestGreekLifeColleges,
];

  const updatedEndpoints = endpoints.map(endpoint => { 
    return {
      ...endpoint,
      name: endpoint.name
        .replace('Best ', '')
        .replace('College ', '')
  .     replace('Colleges', '')
}
});

return (
  <div shadow="lg" className={size == "medium" ? 'college-medium-medallions' : 'college-large-medallions'}>
      {updatedEndpoints.map((endpoint, index) => (
         <MedallionAward endpoint={endpoint.value} 
         name={endpoint.name} key={index} Icon={icons[index]} />
         ))}

  </div>
);

}
export const icons = [
Book2,
BallFootball,
Award,
Building,
Meat,
Confetti,
]

export const MediumCollege = ({college, onDelete, handleLiked, onLargeClick, setView, setSelectedCollege}) => {
    const [activeTab, setActiveTab] = useState("money");
    const [showSAT, setShowSAT] = useState(false);
    const [endpoints, setEndpoints] = useState([]);

    const handleUpdateEndpoints = (newEndpoints) => {
      setEndpoints(newEndpoints);
    };
  

    function handleClick() {
      setShowSAT(!showSAT);
      console.log("Click == " + showSAT)
    }
    
    

    function handleDelete() {
      onDelete()
    }
  
  
  
      return (
        <div className="college-medium-container">
          <div className="college-medium-top-shelf"> 
            <div className="college-medium-name"> {college[0].name} </div>
            <div className="college-medium-icons" >
              <DeleteButton onClick={onDelete}> <Eraser /> </DeleteButton>
              <LikeButton onClick={handleLiked}>  <ThumbUp /> </LikeButton>
              <MaxButton onClick={onLargeClick}> <ArrowsMaximize /></MaxButton>
            </div>
          </div>  
          <Divider />
          <div shadow="lg" className="college-medium-medallions">
          <College college={college} size={'medium'} onUpdateEndpoints={handleUpdateEndpoints} />
            
    
    
    

          </div>
          <Divider style={{marginTop: 20 }}/>
          <button onClick={handleClick} className="scores-btn"> {showSAT ? 'ACT' : 'SAT'}</button>
          <div className='medium-college-bottom-container'>
         
         <div className="scores-container">
          <CollegeScore showSAT={showSAT} satCompositeMidpoint={college[0].satCompositeMidpoint} satCompositePercentile25={college[0].satCompositePercentile25} satCompositePercentile75={college[0].satCompositePercentile75} actCumulativeMidpoint={college[0].actCumulativeMidpoint} actCumulativePercentile25={college[0].actCumulativePercentile25} actCumulativePercentile75={college[0].actCumulativePercentile75} />
          </div>
          <div className="rate-container">
          <AcceptanceRate acceptanceRate={college[0].acceptanceRate} />
          </div>
          </div>
        </div>
      );
    }
      
    


//Large College Component - C1(Z)

export const LargeCollege = ({ college, onDelete, handleLiked}) => {
  const [endpoints, setEndpoints] = useState([]);

  const handleUpdateEndpoints = (newEndpoints) => {
    setEndpoints(newEndpoints);
  };

    return college ? (
        <div className="large-college">
          <div className="large-college-top-container">
          {college[0].name}
          <div className="icon-area">
          <DeleteButton onClick={onDelete}> <Eraser /> </DeleteButton>
          <LikeButton onClick={handleLiked}>  <ThumbUp /> </LikeButton>
          </div>
        </div>

        
        <hr />
        <College college={college} onUpdateEndpoints={handleUpdateEndpoints} />
        </div>
    ) : null;
};