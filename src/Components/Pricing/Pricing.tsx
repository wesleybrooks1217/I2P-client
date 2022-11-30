import "./PricingShell.css"
import {ColorScheme, ColorSchemeProvider, MantineProvider, Paper} from "@mantine/core"
import {useHotkeys, useLocalStorage} from "@mantine/hooks"
import React, { useState } from 'react';
import Next4Shell from "../Next4Shell";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  Group,
  SimpleGrid,
  Card,
  Code,
  Grid,
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
import FooterLinks from "../Universal/FullFooter"
import FeaturesGrid from "./Features/FeaturesDemo"
import './PricingShell.css'
import FaqWithImage from "./FAQElement"
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
import { UserButton } from './Helpers/UserButton';
import { LinksGroup } from '../Universal/NavbarLinksGroup';
import Logo  from '../Universal/Images/MyNext4Logo.png';
import LogoNoText from "../Universal/Images/MyNext4Icon.png"
import FooterCentered from "../Universal/Footer"
import LightDarkButton from "../LightDarkButton"
import PricingBullets from "./PricingBullets"
import styleSheet from "../StyleSheet";
import ProductCards from "./ProductCards";
function Pricing() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
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
        <Next4Shell page={<div> 
          

      <PricingBullets />
      <div className='products-container' >
      <ProductCards
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        title="Starter Plan "
        price="Free For All"
        description="Have all your academic resources compiled onto one platform, for free, forever. 
        Access any academic resource and store your input onto an account after registry. " />
         <ProductCards
        src="https://images.unsplash.com/photo-1628160634750-a81a2a780805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        title="Individual Plan "
        price="6$ per Month"
        description="Access personalized academic resources all made for you. MyNext4 U provides students with the proper resources
        they need through recommended resources and accessible tools.  " />
         <ProductCards
        src="https://images.unsplash.com/flagged/photo-1579268351234-073f85929562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
        title="School Systems "
        price="Contact Us"
        description="Effectivley pinpoint your students progression with our counselor-created tools. MyNext4 X works to add accessibly to the academic counselor and student lives." />
        </div>
        <div>
        <Grid className='products-grid' justify="center" align="flex-end">
      <Grid.Col span={3} style={{ minHeight: 500 }}>Starter</Grid.Col>
      <Grid.Col span={3} style={{ minHeight: 500 }}>Individual</Grid.Col>
      <Grid.Col span={3} style={{ minHeight: 500 }}>School Systems</Grid.Col>
    </Grid>
          </div>
      
        

      
         </div> } />
        </Paper>
      
      
    
      </MantineProvider >
      </ColorSchemeProvider>
    </div>
  );
}

export default Pricing;

