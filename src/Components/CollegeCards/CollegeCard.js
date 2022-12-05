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
  const [ranks, setRanks] = useState([]);
  const [ACT, setACT] = useState({});
  const [SAT, setSAT] = useState({});
  const [similarColleges, setSimilarColleges] = useState([]);
  const [aid, setAid] = useState({});
  const [price, setPrice]= useState({});
  const [classes, setClasses] = useState({});

  useEffect(() => {
    
    const fetchCollegeData = async () => {
      init_API_College_AI(139755);
      await API_College_AI.get()
      .then((response) => {
        setData(response.data.colleges[0]);
      });

    };

    

    fetchCollegeData();


    

    

    

  }, []);

  useEffect(() => {

    if(Object.keys(data).length != 0) {

      const ranks_temp = [
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

      setRanks(ranks_temp);

      const similarColleges_temp = [
        data.similarColleges[0].name,
        data.similarColleges[1].name,
        data.similarColleges[2].name
    ];
    
  
    setSimilarColleges(similarColleges_temp);

    const ACT_temp = {
      "twentyFifth": data.actCumulativePercentile25,
      "median": data.actCumulativeMidpoint,
      "seventyFifth": data.actCumulativePercentile75
    };
  
    const SAT_temp = {
      "twentyFifth": data.satCompositePercentile25,
      "median": data.satCompositeMidpoint,
      "seventyFifth": data.satCompositePercentile75
    };

    setSAT(SAT_temp);
    setACT(ACT_temp);

    const aid_temp = {
      "low": data.averageAidAwardedLowIncome,
      "low_mid": data.averageAidAwardedLowerMiddleIncome,
      "mid": data.averageAidAwardedMiddleIncome,
      "up_mid": data.averageAidAwardedUpperMiddleIncome,
      "up": data.averageAidAwardedHighIncome
    };

    setAid(aid_temp);

    const price_temp = {
      "thirty": data.netPriceByIncomeLevel0To3000,
      "forty": data.netPriceByIncomeLevel30001To48000,
      "seventy": data.netPriceByIncomeLevel48001To75000,
      "hundred": data.netPriceByIncomeLevel75001To110000
    };

    setPrice(price_temp);

    const classes_temp = {
      "two": data.classSizeRange2To9,
      "ten": data.classSizeRange10To19,
      "twenty": data.classSizeRange20To29,
      "thirty": data.classSizeRange30To39,
      "forty": data.classSizeRange40To49,
      "fifty": data.classSizeRange50To99,
      "hundred": data.classSizeRangeOver100
    };

    setClasses(classes_temp);
      
  }
  }, [data]);

  
  
  

  const similarDescriptions = [
    "Description 1",
    "Description 2",
    "Description 3"
  ];

  
  

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
        num_apps = {data.totalApplicants}
        ACT = {ACT}
        SAT = {SAT}
        admin = {data.admissionsWebsite}
        app = {data.applicationWebsite}/>
      </div>

      <div style = {{
        marginTop: 150
      }}>
        <Cost 
        six_year = {data.typical6YearEarnings}
        ten_year = {data.typical10YearEarnings}
        in_state = {data.inStateTuition}
        out_state = {data.outOfStateTuition}
        fin_aid = {data.averageFinancialAid}
        cost = {data.avgCostOfAttendance}
        aid = {aid}
        price = {price}/>
      </div>

      <div style = {{
        marginTop: 150
      }}>
        <CampusLife 
        frat = {data.fraternitiesPercentParticipation}
        soror = {data.sororitiesPercentParticipation}
        num_women = {data.enrolledWomen}
        num_men = {data.enrolledMen} 
        class = {classes}/>
      </div>

      <div style = {{
        marginTop: 150
      }}>
        
        <Rankings 
        ranks = {ranks}/>
    </div>
    


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
       

      



        
    </div>
  );
}

export default CollegeCard;
