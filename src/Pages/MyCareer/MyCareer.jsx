import React, { useEffect, useState } from "react";
import "./MyCareer.css";
import { SmallCareer, MediumCareer, LargeCareer } from "./careers";
import { API, init_api } from '../../API';
import Nav from '../../Components/Nav/Nav';
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";

const MyCareers = ({ onSelectCollege, colleges}) => {
  //const [colleges, setColleges] = useState([]);
  
  
  

  return (
    <div className="mycolleges">
      <div className="mycolleges-header">
        <div className="mycolleges-header-text">My Colleges</div>
        <div className="mycolleges-header-filter">
          <i className="fa fa-filter" />
        </div>
      </div>
      <ul className="mycolleges-list">
        {colleges.map((college, index) => (
          <li
            key={index}
            className="mycolleges-list-item"
            onClick={() => onSelectCollege(college)}
          >
            <SmallCareer college={college} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const CareerComputer = ({onSelectCollege}) => {

  const [careerFilteredList, setCareerFilteredList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  const [agricultureList, setAgricultureList] = useState([]);
  const [engineeringList, setEngineeringList] = useState([]);
  const [healthList, setHealthList] = useState([]);
  const [manufacturingList, setManufacturingList] = useState([]);
  const [hrList, setHRList] = useState([]);
  const [thirtyList, setThirtyList] = useState([]);
  const [fiftyList, setFiftyList] = useState([]);
  const [seventyFiveList, setSeventyFiveList] = useState([]);
  const [hundredList, setHundredList] = useState([]);
  const [hundredTwentyFiveList, setHundredTwentyFiveList] = useState([]);
  const [highSchoolList, setHighSchoolList] = useState([]);
  const [bachelorsList, setBachelorsList] = useState([]);
  const [mastersList, setMastersList] = useState([]);
  const [doctorateList, setDoctorateList] = useState([]);

  useEffect(() => {

    const getFiltered = async() => {
      init_api();
      API.get('/api/explore/career/')
      .then((response) => {
        setBusinessList(response.data.business);
        setAgricultureList(response.data.agriculture);
        setManufacturingList(response.data.manufacturing);
        setEngineeringList(response.data.engineering);
        setHealthList(response.data.health);
        setHRList(response.data.human_resources);
        setThirtyList(response.data.thirty_thousand);
        setFiftyList(response.data.fifty_thousand);
        setSeventyFiveList(response.data.seventyfive_thousand);
        setHundredList(response.data.onehundred_thousand);
        setHundredTwentyFiveList(response.data.onehundredtwentyfive_thousand);
        setHighSchoolList(response.data.high_school);
        setBachelorsList(response.data.bachelors);
        setMastersList(response.data.masters);
        setDoctorateList(response.data.doctorate);
      });
    };

    getFiltered();

  }, [])
  const filter = () => {
    var drop = document.getElementById("collegecomputer-filter-select");
    var value = drop.value;
    if (value == 1) {
      setCareerFilteredList(businessList);
    } else if (value == 2) {
      setCareerFilteredList(agricultureList);
    } else if (value == 3) {
      setCareerFilteredList(engineeringList);
    } else if (value == 4) {
      setCareerFilteredList(healthList);
    } else if (value == 5) {
      setCareerFilteredList(manufacturingList);
    } else if (value == 6) {
      setCareerFilteredList(hrList);
    } else if (value == 7) {
      setCareerFilteredList(thirtyList);
    } else if (value == 8) {
      setCareerFilteredList(fiftyList);
    } else if (value == 9) {
      setCareerFilteredList(seventyFiveList);
    } else if (value == 10) {
      setCareerFilteredList(hundredList);
    } else if (value == 11) {
      setCareerFilteredList(hundredTwentyFiveList);
    } else if (value == 12) {
      setCareerFilteredList(highSchoolList);
    } else if (value == 13) {
      setCareerFilteredList(bachelorsList);
    } else if (value == 14) {
      setCareerFilteredList(mastersList);
    } else if (value == 15) {
      setCareerFilteredList(doctorateList);
    } else {
      setCareerFilteredList([]);
    }
  }


  
  return (
    <div className="collegecomputer">
      
      <div className="collegecomputer-header">
        
        College Computer
        <div className="collegecomputer-filter">
          
          <select id="collegecomputer-filter-select" onChange={filter}>
            <option value = "0">Filter</option>
            <optgroup label="Industries">
                <option value = "1">Business</option>
                <option value = "2">Agriculture</option>
                <option value = "3">Engineering</option>
                <option value = "4">Health</option>
                <option value = "5">Manufacturing</option>
                <option value = "6">Human Resources</option>
            </optgroup>

            <optgroup label="Salary">
              <option value = "7"> 30,000</option>
              <option value = "8"> 50,000</option>
              <option value = "9"> 75,000</option>
              <option value = "10"> 100,000</option>
              <option value = "11"> 125,000</option>
            </optgroup>

            <optgroup label = "Education">
              <option value = "12">High School Diploma</option>
              <option value = "13">Bachelor's Degree</option>
              <option value = "14">Masters Degree</option>
              <option value = "15">Doctorate Degree</option>
            </optgroup>
          </select>
        </div>
      </div>
      
      <ul className="mycolleges-list">
        {careerFilteredList.map((name, id) => (
          <li
            key={id}
            className="mycolleges-list-item"
            onClick={() => onSelectCollege(name)}
          >
            <SmallCareer college={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const CareerDataPage = (props) => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedColleges, setSelectedColleges] = useState([]);
  const [view, setView] = useState("large");
  

  const [careerLikedList, setCareerLikedList] = useState([]);
  //onst userID = useSelector(state => state.user.user.id);
  const userID = useParams().userID;
  
  useEffect(() => {
    
    const getLikedList = async () => {
        
        init_api();
        API.get(`/api/users/careerlist/${userID}/`)
        .then((response) => {
            
            console.log(response.data.liked_list);
            setCareerLikedList(response.data.liked_list);
        });
    }
    
    getLikedList();
  }, []);
  
  const addCollege = (college) => {
    if (selectedColleges.length < 4) {
        setSelectedColleges([...selectedColleges, college]);
    }
  };

  const deleteCollege = (index) => {
    setSelectedColleges(
        selectedColleges.filter((_, i) =>  
            i !== index)
        );
  };

  const selectCollege = (college) => {
    if (view === "large") {
        setSelectedCollege(college);
    } else {
        setSelectedColleges([...selectedColleges, college]);
    }
  };

  const test = async() => {
    /*
    init_api();
        API.get(`/api/users/careerlist/${userID}/`)
        .then((response) => {
            setData(response.data);
            console.log(response.data)
        });
        */
       //console.log(data);
    
  }


  return (
    <div className="collegedata">
        <Nav />

        
      <MyCareers onSelectCollege={selectCollege} colleges = {careerLikedList}/>
      <div className="collegeMiddle">
        <div className="collegeMiddleHeader">
            <div className="collegeMiddleHeaderText"> Selected Colleges </div>
            <button onClick={() => setView(view === "large" ? "medium" : "large")}>
                {view === "large" ? "Switch to Medium" : "Switch to Large"}
                </button>
                </div>
            {view === "large" ? (
                <LargeCareer college={selectedCollege} /> 
              
            ) : (
                <div className="mediumColleges">
                    {selectedColleges.map((college, index) => (
                        index < 4 &&
                        <MediumCareer 
                            key={index}
                            college={college}
                            onDelete={() => deleteCollege(index)}
                            />
                    ))}
                </div>
            )}
            </div>
      <CareerComputer onSelectCollege={selectCollege}/>
      </div>
      );
};


export default CareerDataPage;


