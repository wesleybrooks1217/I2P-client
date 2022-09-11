import React, { useState } from 'react';
import "../Styles/MNFLibrary.css"
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
import {ColorScheme, ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorageValue} from "@mantine/hooks"

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
import HeroBullets from "../Components/MNFLibrary/MNFLibraryBullets"
import FooterLinks from "../Components/Universal/FullFooter"

import Next4Shell from "../Components/Next4Shell";
import styleSheet from "../Components/StyleSheet";


function MNFLibrary() {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
 
  const { classes } = styleSheet();
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className="App">
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}}>
        <Paper>
        <Next4Shell
          page= { <div>
            <HeroBullets />
       <Container className="products-text">
            <Title mt={70} className={classes.title}> MyNext4's Library: Accessible resources for all </Title>
            <Text className="products-tag2"> Our platform includes over X courses, Y colleges, and Z careers all available for free. Explore these options in deeper detail than ever before with our customizable resource cards. </Text>
        </Container>
      
       <Container className="products-text">
            <Title mt={70} className={classes.title}> Explore more than ever before with MyNext4 </Title>
            <Text className="products-tag2">  We're here to ensure every student has access to the academic resoures they need. Explore MyNext4's seemlessly endless library for free, for all.  </Text>
        </Container>

        <Container sx={{display: 'flex', justifyContent:'space-around'}} >
                  <Container mt={25} mr={30} sx={{backgroundColor: 'lightblue', width: '300px', height: '350px', borderRadius: '5px'}}> 3 steps up to down. 1. Search using search bar + img. 2. Explore academic resources (card ex) 3. Add them to your library of liked resources </Container>
        <Container mt={25} mb={50} ml={0}  sx={{backgroundColor: 'lightblue', width: '400px', height: '350px', borderRadius: '5px'}}> IMG of each 3 steps </Container>
    </Container>
                </div>
          }
          />
        </Paper>
      </MantineProvider >
      </ColorSchemeProvider>
    </div>
  );
}

export default MNFLibrary;


