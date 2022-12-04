import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";
import {useState, useRef} from 'react';


function Nav() {

    let sideNav = useRef(null);
    let topNav = useRef(null);
    const [lightMode, setLightMode] = useState([true]);

    function switchModes() {
        setLightMode((prevState) => !prevState)
      };

    return (

        <section style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' }}>
    
    <div style={{position: 'absolute', top: '30%', left: '1%'}} ref={el => sideNav = el}>
    
        <SideBar switchStates={switchModes} lightMode={lightMode} />
    </div>

    <div style={{position: 'absolute', width: '100%'}} ref={el => topNav = el}>
        <TopNav />
    </div>



</section>
    );
};

export default Nav;