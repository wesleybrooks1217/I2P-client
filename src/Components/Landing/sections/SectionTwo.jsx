import React from 'react'
import {Beach, Search, Book, Plus, Book2,Stars, Scale, Target, BrandInstagram, BrandLinkedin, BrandTiktok, BrandTwitter, User, Car, ChartBar, ViewFinder,  Activity, Butterfly, BallBowling, Clipboard, Cookie, Database, Diamond, Flower, Chess,HandFinger, Home2, Leaf, ArrowUpRightCircle, Backpack,Atom, Star, School, StarHalf, ArrowBigRight, ChartCircles, MoodUnamused, CameraRotate ,Numbers, MathIntegrals, Globe,ArrowDown, BoxMultiple1, Certificate, BoxMultiple2, BoxMultiple3, CircleSquare, MoodSmileBeam, Books,  MathFunction, Flask2, Cell, Bong, Microscope, Language, MathMin, Anchor, Backhoe, Apple, Aperture, MathXPlusY, Plant2, Bug, ChefHat, DeviceDesktop, FileCode, Gavel, AlertTriangle, Rotate} from 'tabler-icons-react'
import { Avatar } from '@mantine/core';
import CollegeCard from '../components/CollegeCard';
import CareerCard from '../components/CareerCard';
import CourseCard from '../components/CourseCard';
import backgroundBlob from '../backgroundBlob.png';
function SectionTwo() {
        return (
        <section id='section-2' >
                
        <h3 style={{fontSize: '20px', marginLeft: '50px', marginTop: '40px'}}> Add academic cards to your collection. </h3>
        <p style={{ fontSize: '14px',marginLeft: '50px', marginTop: '10px', marginBottom: '30px', color: 'gray'}}> Access any academic resource in an instant with our next-gen navigation. </p>
        <div className='card-container' style={{marginBottom: 10}} >
          <CourseCard /> 
          <CollegeCard />
          <CareerCard />
        </div>
        <div style={{position:'absolute',width: 400, zIndex: -1, borderRadius: '0% 0% 50% 0', top:  875, left: -50,marginLeft: 0,height: 600, backgroundColor: '#b5e48c'}}></div>
        <h2 style={{position: 'absolute', left: '36%', fontWeight: 400, fontSize: '22px'}}> Explore an <i>endless</i> amount of resources. </h2>
        <img src={backgroundBlob} style={{position: 'absolute',transform: 'rotate(60deg)',  left: '40%'}}width={240} />
        <p style={{position: 'relative',marginTop: 10, marginBottom: 10, top: 30, left: '36.7%', fontWeight: 400, fontSize: '14px', color: 'gray'}}> Check any course, college, or career information in an instant.  </p>
        <div style={{marginTop: 0,  width: '940px', margin: '0 auto', justifyContent: 'space-around'}}>
        <img src={backgroundBlob} style={{position: 'absolute', left: '60%'}}width={240} />

      
                
          <div className='core-cards-carousel' style={{display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: 55, marginRight: 'auto', marginLeft: 'auto',}}> 
          <img src={backgroundBlob} style={{position: 'absolute', transform: 'rotate(320deg)', left: '80%'}}width={240} />
        
          <Avatar color='orange' radius='md'>
                  <Flask2 style={{color: '#212529'}} width={40} />
                  </Avatar>
          <Avatar color='cyan' radius='md'>
                  <CircleSquare style={{color: '#212529'}} width={40} />
                  </Avatar>
                  <Avatar color='orange' radius='md'>
                  <MathFunction style={{color: '#212529'}} width={40} />
                  </Avatar>
                  <Avatar color='yellow' radius='md'>
                  <Cell style={{color: '#212529'}} width={40} />
                  </Avatar>
                  <Avatar color='blue' radius='md'>
                  <Butterfly style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='indigo' radius='md'>
                  <Beach style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='violet' radius='md'>
                  <Book style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='green' radius='md'>
                  <FileCode style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='violet' radius='md'>
                  <Activity style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='yellow' radius='md'>
                  <Bong style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='pink' radius='md'>
                  <Book2 style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='blue' radius='md'>
                  <Car style={{color: '#212529'}} width={40} />
                  </Avatar>
             
             
            
            </div>

             
          <div className='core-cards-carousel'  style={{ justifyContent: 'center', display: 'flex', alignItems: 'center',  marginTop: 25, marginRight: 'auto', marginLeft: 'auto'}}> 
          <Avatar color='blue' radius='md'>
            
          <h2 style={{fontSize: '16px'}}> UNC </h2>
                  </Avatar>
          <Avatar color='yellow' radius='md'>
          <h2 style={{ color: '#ffbe0b'}}> P </h2>
                  </Avatar>
                  <Avatar color='orange' radius='md'>
                  <h2> T </h2>
                  </Avatar>
                  <Avatar color='yellow' radius='md'>
                  <h2 style={{color: '#003049'}}> GT </h2>
                  </Avatar>
                  <Avatar color='orange' radius='md'>
                  <h2 > T </h2>
                  </Avatar>
             
                  <Avatar color='red' radius='md'>
                  <h2 > H </h2>
                  </Avatar>
             
                  <Avatar color='violet' radius='md'>
                  <h2 > F </h2>
                  </Avatar>
             
                  <Avatar color='green' radius='md'>
                  <h2 > Y </h2>
                  </Avatar>
             
                  <Avatar color='red' radius='md'>
                  <h2 > A </h2>
                  </Avatar>
             
                  <Avatar color='orange' radius='md'>
                  <h2 > P </h2>
                  </Avatar>
                  <Avatar color='red' radius='md'>
                  <h2 > S </h2>
                  </Avatar>
             
                  <Avatar color='green' radius='md'>
                  <h2 > T </h2>
                  </Avatar>
             
             
           
                
                  </div>
  
      
          <div className='core-cards-carousel' style={{justifyContent: 'center', marginTop: 25, marginRight: 'auto', marginLeft: 'auto', display: 'flex', alignItems: 'center'}}> 
          <Avatar sx={{width: 50}} color='red' radius='md'>
                  <ChefHat style={{color: '#212529'}} width={50} />
                  </Avatar>
          <Avatar color='blue' radius='md'>
                  <DeviceDesktop style={{color: '#212529'}} width={40} />
                  </Avatar>
                  <Avatar color='cyan' radius='md'>
                  <Gavel style={{color: '#212529'}} width={40} />
                  </Avatar>
                  <Avatar color='pink' radius='md'>
                  <Scale style={{color: '#212529'}} width={40} />
                  </Avatar>
                  <Avatar color='orange' radius='md'>
                  <Chess style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='indigo' radius='md'>
                  <Leaf style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='violet' radius='md'>
                  <Plant2 style={{color: '#212529'}} width={40} />
                  </Avatar>
                  <Avatar color='orange' radius='md'>
                  <Database style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='red' radius='md'>
                  <Clipboard style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='green' radius='md'>
                  <Diamond style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='red' radius='md'>
                  <Apple style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                  <Avatar color='violet' radius='md'>
                  <DeviceDesktop style={{color: '#212529'}} width={40} />
                  </Avatar>
             
                
            </div>
   </div>
           
</section>
        )

        }

export default SectionTwo;