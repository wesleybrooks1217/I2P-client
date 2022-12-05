import TopNav from "../Nav/components/TopNav";
import SideBar from "../Nav/components/SideBar";
import {useState, useRef, useEffect} from 'react';
import {init_API_College_AI, API_College_AI} from '../../API_College_AI';
import {Button} from '@mantine/core';
import Nav from "../Nav/Nav";
import SidePicker from "../../Pages/Careers/Components/SidePicker";
import Admission from "./Components/Admission";
import Cost from "./Components/Cost";
import CampusLife from "./Components/CampusLife";
import Rankings from "./Components/Rankings";
import CourseCardList from "../CardList/CourseCardList";

//https://ui.mantine.dev/category/stats
function CollegeCard() {
  let sideNav = useRef(null);
  let topNav = useRef(null);
  const [lightMode, setLightMode] = useState([true]);
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchCollegeData = async () => {
      init_API_College_AI(139755);
      await API_College_AI.get()
      .then((response) => {
        setData(response.data.colleges[0]);
      });

    };

    

    fetchCollegeData();

  }, [])
/*
  const ranks = [
    {
      "name": data.rankingsBestCollegeAcademics.name,
      "value": data.rankingsBestCollegeAcademics.value
    },

    {
      "name": data.rankingsBestCollegeAthletics.name,
      "value": data.rankingsBestCollegeAthletics.value
    },

    {
      "name": data.rankingsBestCollegeCampuses.name,
      "value": data.rankingsBestCollegeCampuses.value
    },

    {
      "name": data.rankingsBestCollegeFood.name,
      "value": data.rankingsBestCollegeFood.value
    },

    {
      "name": data.rankingsBestCollegeProfessors.name,
      "value": data.rankingsBestCollegeProfessors.value
    },

    {
      "name": data.rankingsBestColleges.name,
      "value": data.rankingsBestColleges.value
    },

    {
      "name": data.rankingsBestCollegesForArt.name,
      "value": data.rankingsBestCollegesForArt.value
    },

    {
      "name": data.rankingsBestCollegesForBiology.name,
      "value": data.rankingsBestCollegesForBiology.value
    },

    {
      "name": data.rankingsBestCollegesForBusiness.name,
      "value": data.rankingsBestCollegesForBusiness.value
    },

    {
      "name": data.rankingsBestCollegesForChemistry.name,
      "value": data.rankingsBestCollegesForChemistry.value
    },

    {
      "name": data.rankingsBestCollegesForCommunications.name,
      "value": data.rankingsBestCollegesForCommunications.value
    },

    {
      "name": data.rankingsBestCollegesForComputerScience.name,
      "value": data.rankingsBestCollegesForComputerScience.value
    },

    {
      "name": data.rankingsBestCollegesForDesign.name,
      "value": data.rankingsBestCollegesForDesign.value
    },

    {
      "name": data.rankingsBestCollegesForEconomics.name,
      "value": data.rankingsBestCollegesForEconomics.value
    },

    {
      "name": data.rankingsBestCollegesForEngineering.name,
      "value": data.rankingsBestCollegesForEngineering.value
    },

    {
      "name": data.rankingsBestCollegesForNursing.name,
      "value": data.rankingsBestCollegesForNursing.value
    },

    {
      "name": data.rankingsBestCollegesForPhysics.name,
      "value": data.rankingsBestCollegesForPhysics.value
    },

    {
      "name": data.rankingsBestGreekLifeColleges.name,
      "value": data.rankingsBestGreekLifeColleges.value
    },

    {
      "name": data.rankingsBestStudentLife.name,
      "value": data.rankingsBestStudentLife.value
    },

    {
      "name": data.rankingsBestValueColleges.name,
      "value": data.rankingsBestValueColleges.value
    },

    {
      "name": data.rankingsHardestToGetIn.name,
      "value": data.rankingsHardestToGetIn.value
    }
  ];

  
  const similarColleges = [
      data.similarColleges[0].name,
      data.similarColleges[1].name,
      data.similarColleges[2].name
  ];
  */

  const similarDescriptions = [
    "Description 1",
    "Description 2",
    "Description 3"
  ];

  
  const ACT = {
    "twentyFifth": data.actCumulativePercentile25,
    "median": data.actCumulativeMidpoint,
    "seventyFifth": data.actCumulativePercentile75
  };

  const SAT = {
    "twentyFifth": data.satCompositePercentile25,
    "median": data.satCompositeMidpoint,
    "seventyFifth": data.satCompositePercentile75
  }

  function switchModes() {
    setLightMode((prevState) => !prevState)
  };

  function test() {
    console.log(data);
  }


  return (
    <div style = {{marginTop: 200, marginLeft: 390}}>
        
      <Nav />

      <div>
          <h1>{data.name}</h1>
          <Button onClick={test}>Test</Button>
      </div>

      

      

      <div style = {{marginTop: 50}}>
        <SidePicker />
      </div>

      <div style = {{marginTop: 150}}>
        <Admission 
        acceptance_rate = {data.acceptanceRate}
        num_apps = {data.totalEnrolled}
        ACT = {ACT}
        SAT = {SAT}
        admin = {data.admissionsWebsite}
        app = {data.applicationWebsite}/>
      </div>

      <div style = {{
        marginTop: 150
      }}>
        <Cost />
      </div>

      <div style = {{
        marginTop: 150
      }}>
        <CampusLife />
      </div>

      {/*<div style = {{
        marginTop: 150
      }}>
        
        <Rankings 
        ranks = {ranks}/>
    </div>*/}

{/*
      <div style = {{
        marginTop: 150
      }}>
        <p style = {{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 50
        }}>Similar Colleges</p>
        <CourseCardList 
        type = "college"
        names = {similarColleges}
        descriptions = {similarDescriptions}/>
      </div>


      */}



        
    </div>
  );
}

export default CollegeCard;
