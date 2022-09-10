import "../Styles/AboutUs.css"
import {ColorScheme, ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorageValue} from "@mantine/hooks"
import Next4Shell from "../Components/Next4Shell";
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
  List,
  ThemeIcon,
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
import styleSheet from "../Components/StyleSheet";
import FooterLinks from "../Components/Universal/FullFooter"
import { Check } from 'tabler-icons-react';
import FeaturesAsymmetrical from "../Components/AboutUs/SupportUsSteps"
import UserInfoIcons from "../Components/UserButtonLabel"
import {
  Notes,
  CalendarStats,
  Gauge,
  PresentationAnalytics,
  FileAnalytics,
  Adjustments,
  Lock,
  Search
} from 'tabler-icons-react';
import { UserButton } from '../Components/UserButton';
import { LinksGroup } from '../Components/Universal/NavbarLinksGroup';
import Logo  from '../Universal/Images/MyNext4Logo.png';
import LogoNoText from "../Universal/Images/MyNext4Icon.png"
import FooterCentered from "../Components/Universal/Footer"
import LightDarkButton from "../Components/LightDarkButton"
import AboutUsBullets from "../Components/AboutUs/AboutUsBullets"
function AboutUs() {
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
        <Next4Shell
          page= {  <div>
            <AboutUsBullets />
    
          <Container className="products-text">
                  <Title mt={70} className={classes.title}> Our ultimate goal </Title>
                  <Text className="products-tag2">  
                  The gap of student oppourtunity nationwide is nothing new, and it's time for a change. MyNext4 has a mission to maximize student oppourtunity for all by providing accessible academic resources, personalized student supplementals, and connecting course, college, and career information conveniently all through a single platform. We want to revolutionize the college process to improve equity for all students nationwide.
                       </Text>
              </Container>
      
          <Container sx={{display: 'flex', justifyContent: 'center',textAlign: 'left'}}> 
              <List
                    mt={30}
                    spacing="sm"
                    size="sm"
                    icon={
                      <ThemeIcon size={20} radius="xl">
                        <Check size={12}  />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      <b>Accessibility.</b> We ensure every student has access the academic resources they need.
                    </List.Item>
                    <List.Item>
                      <b>Convenience.</b> Find any academic resource and so much more on one single platform.
                    </List.Item>
                    <List.Item>
                      <b>Correlation. </b> We highlight the close connection between courses, colleges, and careers.
                    </List.Item>
                    <List.Item>
                      <b>Oppourtunity. </b> No student will ever miss oppourtunity due to lack of awareness again.
                    </List.Item>
                    <List.Item>
                      <b> Enjoyableness. </b> We add liveliness to the college process by gamifying our platform for users.
                    </List.Item>
                  </List>
      
                  <Container sx={{borderRadius: '5px', height: '200px', width: '200px' ,backgroundColor: 'lightblue'}}> Statbox, awards, achievments, how many schools are using us, individuals?  </Container>
                  </Container>
      
      
              <Container className="products-text">
                  <Title mt={70} className={classes.title}> Company </Title>
                  <Text className="products-tag2"> MyNext4 is maintained by a group of core contributors who've all created this during college. We also recognize our community contributors who have helped us along the way. MyNext4 would not exist without a single one of these team-members. </Text>
              </Container>
      
              <Title mt={10} mb={20}sx={{fontSize: '28px'}}className={classes.title} > <u> Core Contributors </u> </Title>
      
              <Container mt={0} mb={70} className={classes.teambox}> 
                  <UserInfoIcons
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                    title="Co-Founder"
                    name="Wesley Brooks"
                    email="wesleybrooks"
                    phone="wesleybrooks1"
                    />
                    <UserInfoIcons 
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                    title="Co-Founder"
                    name="Drake Griffith"
                    email="drakegriffith8"
                    phone="drakegriffith8"
                    />
                    <UserInfoIcons
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                    title="Co-Founder"
                    name="Seth Fagin"
                    email="harrison.powe"
                    phone="harrisonpowe5"
                    />
                      <UserInfoIcons
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                    title="Co-Founder"
                    name="Blake Rodgers"
                    email="harrison.powe"
                    phone="harrisonpowe5"
                    />
                      <UserInfoIcons
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                    title="Co-Founder"
                    name="Brady Coogan"
                    email="harrison.powe"
                    phone="harrisonpowe5"
                    />
                      <UserInfoIcons
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                    title="Co-Founder"
                    name="Harrison Powe"
                    email="harrison.powe"
                    phone="harrisonpowe5"
                    />
                     
                    </Container>
      
                <Title mt={10} mb={50}sx={{fontSize: '28px'}}className={classes.title} > <u> Community Contributors </u> </Title>
                <Container mb={100} sx={{borderRadius: '5px',backgroundColor: 'lightblue', height: '300px', width: '700px'}}> Other people who have helped contribute</Container>
                <Container mb={60}>
                  <Title mt={10} className={classes.title}> How can you support us? </Title>
                  <Text className="products-tag2"> MyNext4 runs free for all always. However, if you desire to, here are some ways in which we could use your support. We appreciate any of the bottom <b> three </b> methods of support.
                </Text>
              </Container>
      
              <FeaturesAsymmetrical />
              </div>
          }
          />
        </Paper>
      </MantineProvider >
      </ColorSchemeProvider>
    </div>
  );
}

export default AboutUs;

