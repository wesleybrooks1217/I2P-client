import "../Styles/WhyMyNext4.css"
import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  Group,
  SimpleGrid,

  Code,
  ScrollArea,
  Button,
  Image,
  Container,
  createStyles,
  Title,
  MediaQuery,
  Burger,
  useMantineTheme,
  Autocomplete
} from '@mantine/core';
import WhyMyNext4Bullets from "../Components/WhyMyNext4/WhyMyNext4Bullets"

import {ColorScheme, ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorageValue} from "@mantine/hooks"
import Next4Shell from "../Components/Next4Shell";
import styleSheet from "../Components/StyleSheet";

const userTable = [
  {
      avatar: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        name: "Weslon Books",
        job: "Computer Science",
        email: "GOOD",
        phone: "Purdue, Georgia Tech",
        color: 'orange'
    
  },
  {
    avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Trey Parker",
    job: "Film & Photography",
    email: "GOOD",
    phone: "SCAD, Chapman",
    color: 'violet'
  },
  {
    avatar: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Christopher Simms Jr.",
    job: "Business Management",
    email: "CHECK-IN",
    phone: "Health Tech of Georgia",
    color: 'blue'
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Carlos Tellez II",
    job: "Culinary",
    email: "GOOD",
    phone: "U of Iowa, U of Wisconsin ",
    color: 'green'
  },
  {
    avatar: "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Christopher Griffin",
    job: "Human Services",
    email: "CHECK-IN",
    phone: "Kwikki U, Georgetown",
    color: 'yellow'
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    name: "Patrick Kungl",
    job: "Doctor",
    email: "GOOD",
    phone: "UNC Chapel Hill, Villanova",
    color: 'red'
  },

];
function WhyMyNext4() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = styleSheet();
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}}>
        <Paper>
        <Next4Shell page={
          <div>
           <WhyMyNext4Bullets />


           <Container className="products-text">
                <Title mt={70} className={classes.title}> A personalized path for every student story </Title>
                <Text className="products-tag2"> We believe that every student should be set up for academic success. We'll provide a personalized path that aligns with your
                future vision after answering a few questions upon registery. It only takes five minutes.   </Text>
            </Container>
            <Container mt={25} sx={{backgroundColor: 'lightblue', width: '800px', height: '200px', borderRadius: '5px'}}> Filled with Image of Individual Path Example </Container>
            <Container className="products-text">
                <Title mt={70} className={classes.title}> Access academic information with convenience   </Title>
                <Text className="products-tag2"> We have a variety of academic resource ready for use with or without an account. Search simply using keywords, phrases, or a course, college, and career title and find desired information freely.
                     </Text>
            </Container>
            <Container mt={25} sx={{backgroundColor: 'lightblue', width: '800px', height: '350px', borderRadius: '5px'}}> 3 Cards: Course, College, and Career </Container>
    
            <Container className="products-text">
                <Title mt={70} className={classes.title}> Boost school-wide productivity with modern academic tools   </Title>
                <Text className="products-tag2"> Our library currently contains X student tools, Y counselor tools, and 
                any course, college, and career information. Tools are customized based on counselor and student preference upon registering.</Text>
            </Container>
    
            <Container mt={25}  sx={{backgroundColor: 'lightblue', width: '1000px', height: '350px', borderRadius: '5px'}}> FULL PAGE WIDTH / Title, description of every student component all placed in the same sized box. Use the flip icon in the upper right to flip sides to counselor components.   </Container>
            
            
    
            <Container className="products-text">
                <Title mt={70} className={classes.title}> Bringing community to the college counseling process </Title>
                <Text className="products-tag2"> Students can find like-minded individuals through our student community. Discuss, ask for help, gain insight, and brainstorm with like minded individuals
                and find your next big passion. Counselors can discuss with other registered counselors similarly through our counselor component.
              </Text>
            </Container>
          
            <Container sx={{display: 'flex', justifyContent:'center'}} >
                      <Container mt={25}  sx={{backgroundColor: 'lightblue', width: '300px', height: '350px', borderRadius: '5px'}}>Discord 3D Image  </Container>
            <Container ml={30} mt={25}  sx={{backgroundColor: 'lightblue', width: '600px', height: '350px', borderRadius: '5px'}}>  Sign In link to Discord. Light purple background with white box surrounding sign in box.</Container>
        </Container>
      </div>
          
    
        } />
        </Paper>
      
      
    
      </MantineProvider >
      </ColorSchemeProvider>
    </div>
  );
}

export default WhyMyNext4;

