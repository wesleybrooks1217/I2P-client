import TopNav from "../Nav/components/TopNav";
import SideBar from "../Nav/components/SideBar";
import {useState, useRef, useEffect} from 'react';
import {init_API_College_AI, API_College_AI} from '../../API_College_AI';
import {Button} from '@mantine/core';
import Nav from "../Nav/Nav";
import SidePicker from "../../Pages/Careers/Components/SidePicker";
import Admission from "./Components/Admission";
import Cost from "./Components/Cost";

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
        <Admission />
      </div>

      <div style = {{
        marginTop: 150
      }}>
        <Cost />
      </div>






        
    </div>
  );
}

export default CollegeCard;
