import "../Styles/Landing.css"
import {
  Text,
  Image,
  Container,
  createStyles,
  Title,
  useMantineTheme,
} from '@mantine/core';
import {ColorScheme, ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorageValue} from "@mantine/hooks"
import Next4Shell from "../Components/Next4Shell";
import FeaturesTemplate from "../Components/FeaturesTemplate"
import HeroBullets from "../Components/Landing/LandingBullets"
import styleSheet from "../Components/StyleSheet";
import ComponentCards from "../Components/Landing/ComponentCards";
import ComponentShowcase from "../Components/Landing/ComponentShowcase";
import { next4Steps } from '../Components/Landing/Constants/next4Steps';
import { next4Benefits } from "../Components/Landing/Constants/next4Benefits";
import ColorShell from "../Components/ColorShell";

import ThreeCsCards from "../Components/Landing/ThreeCsCards";
function Landing() {
 
 
  const { classes } = styleSheet();
  

  return (
    <div className="App">
        <ColorShell innerContent={
        <Paper>
        <Next4Shell
          page= { <div>
            <HeroBullets  />
            <FeaturesTemplate title="Students: Align your academic desires with a personalized path to get there" description="Access course, college, and career component tools to complement your academic story. We'll provide personalized recommendations, resources, and readily accessible tools in minutes upon account registery. " 
                       data={next4Steps} />
            <Container  className="products-text">
                
                <Title sx={{marginBottom: '25px'}}className={classes.title}> School Systems: Complement the college counseling process with modern tools  </Title>
                <Text className="products-tag2"> Find over 25+ tools for students and counselor in our component library. Tools range from school scheduling for students to a meetings manager for counselors. We'll provide every student a personalized path to academic success through their provided preferences, and so much more.
                </Text>
            </Container>
            <ComponentShowcase />
          
            <Container mt={120} mb={20} className="resourcebox3"> FOI Container </Container>
          
          
            <Container className="products-text">
                <Title mt={80} className={classes.title}> Introducing MyNext4 U: Accessible academic tools personalized for students   </Title>
               
              
          
            </Container>
            <Container mb={30} className="products-text">
            <Text mt={20}sx={{fontSize: '16px'}}>  We'll provide students unique class schedules, 
                college recommendations, and custom career maps to visualize the next steps for their academic journey. All personalized information is collected and handled by our library of core <b> student components</b>.
          
              
              </Text>
              </Container>
            <ComponentCards />
          <Container mt={30} mb={30} className="products-text">
            <Text className="products-tag2">  Find information on our individualized components and component tools through MyNext4's documentation or with a search. Find more information on our other components below.
              
              </Text>
              </Container>
          
          <Container mt={80} className="products-text">
                
                <Title mb={30} className={classes.title}> Open-sourced academic resources for every student  </Title>
                <Text className="products-tag2">  Accessing MyNext4's library of academic resources is just one search away. Find detailed information on any class, college, or career path through our search feature. We're here for you!
                </Text>
            </Container>
            <Container mt={40} sx={{display: 'flex', justifyContent: 'center'}}>
            <Container mr={30} sx={{ borderRadius: '5px', backgroundColor: 'dodgerblue', width: '400px'}}> </Container>
            <ThreeCsCards />
           </Container> 
            
            <FeaturesTemplate title="A complement to everyone's work" description="" data={next4Benefits} />
           
            <Container mt={70} className="products-text">
                
                <Title mb={25}className={classes.title}> Our mission </Title>
                <Text className="products-tag2"> MyNext4 wants to maximize student oppourtunity for all by ensuring every student has access to the academic resoures they need to succeed. We're here to revolutionize the college counseling process,
                providing accessible resources to improve equity for all students nationwide.
                </Text>
            </Container>
         
            <Container mt={25} className="resourcebox3"> Roadmap Editor </Container>
          
            <Container mt={80}>
               
                </Container>
                </div>
          }
          />
        </Paper>
        } />
      
    </div>
  );
}

export default Landing;

