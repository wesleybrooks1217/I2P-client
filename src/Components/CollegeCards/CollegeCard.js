import TopNav from "../Nav/components/TopNav";
import SideBar from "../Nav/components/SideBar";
import {useState, useRef, useEffect} from 'react';
import {init_API_College_AI, API_College_AI} from '../../API_College_AI';
import {Button} from '@mantine/core';
import Nav from "../Nav/Nav";

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
        setData(response.data);
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
    <div style = {{marginTop: 200, marginLeft: 200}}>
        
      <Nav />

      <Button onClick={test}>Test</Button>





        
    </div>
  );
}

export default CollegeCard;
