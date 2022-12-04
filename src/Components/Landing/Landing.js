import { useRef, useEffect, useState } from 'react'
import { Avatar } from '@mantine/core'
import {Beach, PencilMinus, Cash, FileCertificate, ArrowDownCircle, Search, Book, Plus, Book2,Stars, Scale, Target, BrandInstagram, BrandLinkedin, BrandTiktok, BrandTwitter, User, Car, ChartBar, ViewFinder,  Activity, Butterfly, BallBowling, Clipboard, Cookie, Database, Diamond, Flower, Chess,HandFinger, Home2, Leaf, ArrowUpRightCircle, Backpack,Atom, Star, School, StarHalf, ArrowBigRight, ChartCircles, MoodUnamused, CameraRotate ,Numbers, MathIntegrals, Globe,ArrowDown, BoxMultiple1, Certificate, BoxMultiple2, BoxMultiple3, CircleSquare, MoodSmileBeam, Books,  MathFunction, Flask2, Cell, Bong, Microscope, Language, MathMin, Anchor, Backhoe, Apple, Aperture, MathXPlusY, Plant2, Bug, ChefHat, DeviceDesktop, FileCode, Gavel, AlertTriangle, Apps} from 'tabler-icons-react'
import SideBar from '../Nav/components/SideBar';
import TopNav from '../Nav/components/TopNav';
import landingImage from './titleImage.png'
import { gsap } from "gsap"
import {TweenMax, Power3, TimelineLite} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import SectionThree from './sections/SectionThree'
import './Landing.css';
import { Paper, Text, Card, Image , Badge} from '@mantine/core';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import next4Logo from './icon.png';
import SectionTwo from './sections/SectionTwo'
import SectionFour from './sections/SectionFour'
import SectionFive from './sections/SectionFive'
import Footer from './Footer'

gsap.registerPlugin(ScrollTrigger)
export default function Landing() {
    const [lightMode, setLightMode] = useState([true])
    const cardContainer = useRef(null);
    const section3 = useRef(null);
    const section4 = useRef(null);
    let app = useRef(null)
    let sideNav = useRef(null)
    let topNav = useRef(null)
    let mainPage = useRef(null)
    let three = useRef(null)
    let iLabel = useRef(null)
    let tl = new TimelineLite()
  
    const { scrollYProgress } = useScroll();
    
    
    let block1 = document.getElementById('block-1');
    let block2 = document.getElementById('block-2');
    let block3 = document.getElementById('block-3');
    let block4 = document.getElementById('block-4');
    let block5 = document.getElementById('block-5');
    let block6 = document.getElementById('block-6');
    let block7 = document.getElementById('block-7');
    let block8 = document.getElementById('block-8');
    let block9 = document.getElementById('block-9');
    let block10 = document.getElementById('block-10');
    let block11 = document.getElementById('block-11');
    let block12 = document.getElementById('block-12');
    let block13 = document.getElementById('block-13');
  
 
  

    const scrollToSection = (elementRef) => {
      console.log('scrolled')
        window.scrollTo({
            top: elementRef.current.offsetTop, 
            behavior: 'smooth',
        })
    }
    const executeScroll = () => {
      cardContainer.current.scrollIntoView()
      console.log('hello')
    }

    function switchModes() {
      setLightMode((prevState) => !prevState)
    }
    
    return (
        <div className='landing-container'>

            <section ref={el => three = el}id='section1' style={{position: 'relative', width: '100%', height: '100vh'}}>
              <div style={{position: 'absolute', width: 700, borderRadius: '30% 0% 0% 50%', height: 300, top: -100,  right: -2, backgroundColor: '#1e6091'}}></div>
              <div style={{position:'relative',width: 500, zIndex: -1, borderRadius: '50% 0 0 0', top: 215, right: 100, height: 400, rotate: '90deg', backgroundColor: '#b5e48c'}}></div>
              <div style={{position:'relative',width: 450, zIndex: -1, top: 145, right: 100, height: 330, backgroundColor: '#b5e48c'}}></div>
         
            <Paper shadow='lg' sx={{borderRadius: 10,position: 'absolute', width: '400px', height: '230px', top: '19%', right: '5%'}}> 
            
            <Card sx={{margin: 0, padding: 0, width: '400px', height: '480px'}} radius="md" >
            <Card.Section sx={{height: '70px'}}>
               <Image width='100%' sx={{ position: 'absolute', width: '100%', backgroundSize: 'cover', width: 500}} height={80} src='https://images.unsplash.com/photo-1598058921517-81a452bc7cce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' />
            </Card.Section>
           
         
            <div style={{marginTop: 0,  marginBottom: 20, display: 'flex', alignItems: 'center'}}>
            <h3 style={{ marginBottom: 0,marginTop:30, marginLeft: 8, marginRight: 34, fontSize: '18px'}}> MyNext4 Academia </h3>
           
         
      </div>
            <Text sx={{textAlign: 'center', fontSize: '13.1px', marginTop: 10, marginBottom: 0}} size="xs" color="dimmed">
        At MyNext4, we plan to revotuionize college counseling by providing students with accessible, autonomic, and scholarly academic resources available to all for free. Subscribe to a money plan an access personalized plans for ensuring a successful high school career. If you're school is interested in partnering with us, please contact us through direct email after selecting the get started box. Let us help you complement the college counseling process.
      </Text>
      <Card.Section sx={{position: 'absolute', left: '41%',   borderRadius: '3px', marginTop: 40,marginRight: 10, width: '180px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}} >
      <div style={{display: 'flex', marginRight: 4, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto'}}>
      <Avatar mt={0} color="green" style={{width: '64px', height: '94px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Cash width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Affordable Rates </p>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', marginRight: 7,alignItems: 'center'}}>
      <Avatar mt={0} color="blue" style={{width: '64px', height: '94px',marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Globe width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Free Resources </p>
      </div>
      <div style={{display: 'flex', marginRight: 4, flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="orange" style={{width: '64px', height: '94px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Books width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> 5000+ Card Components </p>
      </div>
      <div style={{display: 'flex', marginRight: 4,flexDirection: 'column', alignItems: 'center'}}>
      <Avatar mt={0} color="violet" style={{width: '64px', height: '94px', marginLeft: 0, marginRight: '6px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Apps width={36} />
      </Avatar>
      <p style={{marginTop: 10}}> Custom Picks For You </p>
      </div>
        </Card.Section>
        </Card>
            </Paper>
              <img src={landingImage} style={{position: 'absolute', left: '58%', top: '65%', width: 220}} />
              <h4 style={{fontSize: '28px',  fontWeight: 400, position: 'absolute', left: '15%', top: '40%'}}>Access any academic resource</h4>
              <h4 style={{fontSize: '28px',  position: 'absolute', left: '15.8%', top: '44.5%', fontFamily: 800}}>automatically and affordably. </h4> 
              <button style={{position: 'absolute', left: '16.8%', top: '51.3%', fontFamily: 'inherit', border: 'none', padding: '15px 45px', borderRadius: '10px 10px 10px 10px', cursor: 'pointer', backgroundColor: '#99d98c'}}> Start now. </button>
              <button style={{position: 'absolute', left: '28.8%', top: '51.3%', fontFamily: 'inherit', border: 'none', padding: '15px 45px', color: '#FFFFFF', borderRadius: '10px 10px 10px 10px', cursor: 'pointer', backgroundColor: '#1e6091'}}> Learn more. </button>

          </section>
        
        
    
    <a href='#section-2'>
      <div className='scroll-down'>
        </div>
      </a>
   <div ref={cardContainer}>
   <SectionTwo />
   </div>
 
    <motion.div className='progress-bar' style={{ scaleX: scrollYProgress}} />
     
    <section style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100vh' }}>
    
    <div style={{position: 'absolute', top: '30%', left: '1%'}} ref={el => sideNav = el}>
      
      <SideBar switchStates={switchModes} lightMode={lightMode} />
      </div>
      <div style={{position: 'absolute', width: '100%'}} ref={el => topNav = el}>
      <TopNav />
      </div>
     

   
    </section>
    <SectionThree />
<SectionFour />
    <SectionFive />

<Footer />

    </div>
    )
    }

    