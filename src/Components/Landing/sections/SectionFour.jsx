import {Beach, Search, Book, Plus, Book2,Stars, Scale, Target, BrandInstagram, BrandLinkedin, BrandTiktok, BrandTwitter, User, Car, ChartBar, ViewFinder,  Activity, Butterfly, BallBowling, Clipboard, Cookie, Database, Diamond, Flower, Chess,HandFinger, Home2, Leaf, ArrowUpRightCircle, Backpack,Atom, Star, School, StarHalf, ArrowBigRight, ChartCircles, MoodUnamused, CameraRotate ,Numbers, MathIntegrals, Globe,ArrowDown, BoxMultiple1, Certificate, BoxMultiple2, BoxMultiple3, CircleSquare,  Books,  MathFunction, Flask2, Cell, Bong, Microscope, Language, MathMin, Anchor, Backhoe, Apple, Aperture, MathXPlusY, Plant2, Bug, ChefHat, DeviceDesktop, FileCode, Gavel, AlertTriangle} from 'tabler-icons-react'
import { Avatar, Paper, Image, Card, Badge} from '@mantine/core';

function SectionFour() {
    return (
        <section className='section4' id='section-4' style={{marginBottom: '20px', height: '1100px', width: '100%'}}>
        <h3 style={{marginLeft: '50px', marginTop: '40px'}}> Receive personalized recommendations. </h3>
        <p style={{fontSize: '14px', marginLeft: '50px', marginTop: '10px', marginBottom: '80px', color: 'gray'}}> Access any academic resource in seconds upon completion of a single survey. </p>
          
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '0 auto' }}> 
        <Paper shadow='lg' sx={{height: '320px', width: '40%'}}>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{marginTop: '20px'}}>
            <BoxMultiple1 />
            </div>
        
            <h4 style={{marginTop: '20px', marginLeft: '10px'}}> Complete quick surveys </h4>
            </div>
            <Paper p='md' shadow='md' sx={{position: 'absolute', margin: '20px 0 0 30px', width: '200px', height: '80px'}}>
              <h4 style={{marginBottom: 6, fontSize: '11px'}}> How long does your homework take to complete? </h4>
              <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div style={{marginRight: '2px', width: '50px', height: '20px', border: '1px solid black', borderRadius: '10%'}}> <p>  1 hour </p> </div>
               
                <div style={{margin: '0 2px',width: '50px', height: '20px', border: '1px solid black', borderRadius: '10%'}}> <p>  2 hours </p> </div>
           
                <div style={{margin: '0 2px',width: '50px', height: '20px', border: '1px solid black', borderRadius: '10%'}}> <p>  4 hours </p> </div>
           
                <div style={{marginLeft: '2px',width: '50px', height: '20px', border: '1px solid black', borderRadius: '10%'}}> <p>  5 hours </p> </div>
              </div>
             
    
              </Paper>
              <Paper p='md' shadow='md' sx={{position: 'absolute', margin: '80px 0 0 60px', width: '200px', height: '80px'}}>
              <h4 style={{marginBottom: 6, fontSize: '11px'}}> What subject excites you the most? </h4>
              <div style={{display: 'flex', justifyContent:'space-between'}}>
                <div style={{marginRight: '2px', width: '50px', height: '20px', border: '1px solid black', borderRadius: '10%'}}> <p>  Art </p> </div>
               
                <div style={{margin: '0 2px',width: '50px', height: '20px', border: '1px solid black', borderRadius: '10%'}}> <p> Math </p> </div>
           
                <div style={{margin: '0 2px',width: '50px', height: '20px', border: '1px solid black', borderRadius: '10%'}}> <p> English </p> </div>
           
                <div style={{marginLeft: '2px',width: '50px', height: '20px', border: '1px solid black', borderRadius: '10%'}}> <p> History </p> </div>
              </div>
            </Paper>
            <p style={{textAlign: 'center', fontSize: '12px', marginLeft: '10px', marginRight: '10px', color: 'gray', marginTop: '190px'}}> Answer questions regarding classes, career interests, and personal preferences and receive your recommendations in <i> minutes </i>.  </p>
            </Paper>
            <Paper shadow='lg' sx={{marginLeft: '20px', marginRight: '20px',height: '320px', width: '40%'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div style={{marginTop: '20px'}}>
                <BoxMultiple2 />
              </div>
                <h4 style={{marginTop: '20px', marginLeft: '10px'}}> Receive personalized picks </h4>
                
             </div>
             <h4 style={{marginLeft: '20px', marginTop: '10px', fontSize: '14px'}}> <i>Picks for you, John </i></h4> 
             <div style={{width: '85%', display: 'flex', margin: '0 auto', justifyContent: 'space-between'}}>
             <Paper shadow='lg' sx={{marginTop: '10px', width: '80px', height: '110px'}}>
              <Card>
                <Card.Section sx={{height: '30px'}}>
               <Image sx={{height: '40px', backgroundSize: 'cover'}} height={30} src='https://images.unsplash.com/photo-1629119025473-4c52a0a31f1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80' />
              </Card.Section>
              <Card.Section sx={{}}>
                <h4 style={{marginBottom: 6, marginTop: '6px', textAlign: 'center', fontSize: '8px'}}> Duke University </h4>
                <div style={{ margin: '0 auto', width: '90%', justifyContent: 'space-between', display: 'flex'}}> 
                <Avatar size={20} sx={{width: '10px'}}color='green'  radius='md'>
                <Cookie size={12} />
                  </Avatar>
                  <Avatar size={20} sx={{width: '10px'}}color='yellow' radius='md'>
                <Books size={12} />
                  </Avatar>
                  <Avatar size={20} color='violet' radius='md'>
               <Certificate size={12} />
                  </Avatar>
                  </div>
                  <p style={{color: 'gray', marginTop: 6, fontSize: '5.5px', textAlign: 'center'}} ><i>One of the top universities in the country, Duke has always been a top spot for students.</i></p>
                </Card.Section>
              </Card>
  
              </Paper>
              <Paper shadow='lg' sx={{marginTop: '10px', width: '80px', height: '110px'}}>
              <Card>
                <Card.Section sx={{height: '30px'}}>
               <Image sx={{height: '40px', backgroundSize: 'cover'}} height={30} src='https://images.unsplash.com/photo-1657374825434-2677718cb784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' />
              </Card.Section>
              <Card.Section sx={{}}>
                <h4 style={{marginBottom: 6, marginTop: '6px', textAlign: 'center', fontSize: '8px'}}> University of Tampa </h4>
                <div style={{ margin: '0 auto', width: '90%', justifyContent: 'space-between', display: 'flex'}}> 
                <Avatar size={20} sx={{width: '10px'}}color='blue'  radius='md'>
                <Beach size={12} />
                  </Avatar>
                  <Avatar size={20} sx={{width: '10px'}}color='red' radius='md'>
                <Backpack size={12} />
                  </Avatar>
                  <Avatar size={20} color='orange' radius='md'>
               <CameraRotate size={12} />
                  </Avatar>
                  </div>
                  <p style={{color: 'gray', marginTop: 6, fontSize: '5.5px', textAlign: 'center'}} ><i>U Tampa continues to be one of the most beautiful campuses across America.</i></p>
                </Card.Section>
              </Card>
              </Paper>
              <Paper shadow='lg' sx={{marginTop: '10px', width: '80px', height: '110px'}}>
              <Card>
                <Card.Section sx={{height: '30px'}}>
               <Image sx={{height: '40px', backgroundSize: 'cover'}} height={30} src='https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1486&q=80' />
              </Card.Section>
              <Card.Section sx={{}}>
                <h4 style={{marginBottom: 6, marginTop: '6px', textAlign: 'center', fontSize: '8px'}}> All In Academy </h4>
                <div style={{ margin: '0 auto', width: '90%', justifyContent: 'space-between', display: 'flex'}}> 
                <Avatar size={20} sx={{width: '10px'}}color='red'  radius='md'>
                <Plant2 size={12} />
                  </Avatar>
                  <Avatar size={20} sx={{width: '10px'}}color='blue' radius='md'>
                <Anchor size={12} />
                  </Avatar>
                  <Avatar size={20} color='violet' radius='md'>
               <Certificate size={12} />
                  </Avatar>
                  </div>
                  <p style={{color: 'gray', marginTop: 6, fontSize: '5.5px', textAlign: 'center'}} ><i> Built in the beautiful area of Alabama, AIA has been home for over 20000 throughout twenty years. </i></p>
                </Card.Section>
              </Card>
              </Paper>
         
             </div>
             <p style={{textAlign: 'center', fontSize: '12px', marginLeft: '10px', marginRight: '10px', color: 'gray', marginTop: '28px'}}> Choose courses, colleges, and careers that fit your future desires with our recommendation engine. Add items to your liked list in seconds. </p>
             </Paper>
  
             <Paper shadow='lg' sx={{height: '320px', width: '40%'}}>
          
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <div style={{marginTop: '20px'}}>
                <BoxMultiple3 />
                </div>
  
                <h4 style={{marginTop: '20px',marginLeft: '10px'}}> Search for similar items.  </h4>
              </div>
              <div style={{marginTop: '15px', justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
                <Search size={18}/>
                <div style={{marginLeft: '10px', width: '60%', padding: '6px 0 0 0', border: '1px solid black', borderRadius: '10px', height: '30px'}}> <i> <span style={{ fontSize: '12px', marginLeft: '10px', color: 'gray'}}> search for something... </span> </i></div>
                </div>
                <div style={{ width: '90%', margin: '0 auto', marginTop: '16px', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                  <div style={{display: 'flex',  margin: '0 auto'}}>
             <Badge sx={{marginBottom: '10px'}}> Location </Badge>
             <Badge sx={{marginBottom: '10px'}} color='red'> Type </Badge>
             <Badge sx={{marginBottom: '10px'}} color='green'> STEM </Badge>
             <Badge sx={{marginBottom: '10px'}} color='pink'> Ivy </Badge>
             
             
             </div>
             <div style={{display: 'flex', margin: '0 auto'}}>
             <Badge sx={{marginBottom: '10px'}} color='green'> Major </Badge>
             <Badge sx={{marginBottom: '10px'}} color='yellow'> ED </Badge>
  
             <Badge sx={{marginBottom: '10px'}} color='indigo'> Liberal Arts </Badge>
             </div>
             <div style={{display: 'flex',  margin: '0 auto'}}>
             <Badge sx={{marginBottom: '10px'}} color='violet'> Acceptance Rate </Badge>
  
              <Badge sx={{marginBottom: '10px'}} color='orange'> Size </Badge>
              <Badge sx={{marginBottom: '10px'}} color='blue'> Climate </Badge>
              
              </div>
              <div style={{display: 'flex',  margin: '0 auto'}}>
              <Badge sx={{marginBottom: '10px'}} color='yellow'> Ranking </Badge>
              <Badge sx={{marginBottom: '10px'}} color='orange'> Degree </Badge>
              <Badge sx={{marginBottom: '10px'}} color='green'> Greek Life </Badge>
              </div>
              </div>
              <p style={{textAlign: 'center', fontSize: '12px', marginLeft: '10px', marginRight: '10px', color: 'gray', marginTop: '8px'}}> Specifiy your search with customizable filters to help find cards with convenience. Access resources has never been easier.  </p>
              </Paper> 
    
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 80, marginLeft: 'auto', marginRight: 'auto', width: '80%', height: 400, border: '1px solid black'}}>
          <div style={{width: 300,  border: '1px solid black'}}>
            Dashboard Description
            </div>
            <div style={{width: 300,  border: '1px solid black'}}>
              Dashboard
              </div>
          </div>
    </section>
    )
}

export default SectionFour