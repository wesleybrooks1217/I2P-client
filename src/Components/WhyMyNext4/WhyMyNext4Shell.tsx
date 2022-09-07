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


import FooterLinks from "../Universal/FullFooter"
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
import WhyMyNext4Bullets from "./WhyMyNext4Bullets"

const mockdata2 = [

  {
    title: "Products",
    links: [
      { label: 'MyNext4+', link: '/Updates' },
   
    ],
  },
  {
  title: "Resources",
  links: [
    { label: 'MyNext4 Library', link: '/Updates' },
    { label: "MyCourses", link: '/MyCourses' },
    { label: "Docs", link: '/' },
    { label: 'Podcast', link: './Privacy' },
    { label: 'FAQ', link: '/Updates' },
  ],
},

{
  title: "Company",
  links: [
    { label: 'About', link: '/Updates' },
    { label: 'Vision', link: '/Updates' },
    { label: 'Support us', link: '/Updates' },
    { label: 'Contact us', link: '/Updates' },
  ],
},
];

const mockdata = [
  {
    label: 'Overview',
    icon: Notes,
    initiallyOpened: false,
    links: [
      { label: 'Why MyNext4?', link: '/WhyMyNext4' },
      { label: 'About Us', link: '/AboutUs' },
      { label: 'MyNext4: Library', link: '/MNFLibrary' },
      { label: 'Pricing', link: '/Pricing' },

    ],
  },
  {
    label: 'School Systems',
    icon: Notes,
    initiallyOpened: false,
    links: [
      { label: 'Using MyNext4+ ', link: '/SchoolSystems' },
      { label: 'Component Library', link: '/MNFComponents' },

    ],
  }, 
  {
    label: 'Further',
    icon: Notes,
    initiallyOpened: false,
    links: [
      { label: 'Updates', link: '/Updates' },
      { label: 'Privacy', link: './Privacy' },
      { label: "MyCourses", link: '/MyCourses' },
      { label: "Support Us", link: '/' },
    ],
  },
  {
    label: 'Docs',
    icon: Notes,
    initiallyOpened: false,
    links: [
      { label: 'MyNext4: Library', link: '/' },
      { label: 'MyNext4+', link: '/' },
    ],
  },
  { label: 'Settings', icon: Adjustments },

  
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  tools: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column'
  },
  },
  teambox: {
    alignItems: 'center',
    display: 'grid',
    marginTop: '15px',
    gridTemplateRows: '140px 140px 140px 140px',
    gridTemplateColumns: '320px 320px 320px',
    justifyContent: 'center',
    paddingLeft: '100px',
    [theme.fn.smallerThan('lg')]: {
      paddingLeft: '0px',
      marginLeft: '80px',
      gridTemplateColumns: '320px 320px',
    },
    [theme.fn.smallerThan('md')]: {
        display: 'none',

      
    },
  },

  container: {
    padding: '0',
    margin: '0',
    backgroundColor: 'red',
  },

  cards: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.fn.smallerThan('sm')]: {
        display: 'none'
  }
},
}));

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


export default function AppShellExample() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const links2 = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);


  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar hiddenBreakpoint="sm" hidden={!opened} height={820} width={{ sm: 230 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
                />
        
    </Group>
      </Navbar.Section>

      <Navbar.Section  grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links2}</div>
      </Navbar.Section>

    
    </Navbar>
      }
      
      footer={
        <FooterLinks  data={mockdata2}/>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
           
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
           
           </MediaQuery>
           <div className="side-nav-logo"> 
            <Image width={40}  src={LogoNoText} />
            <Text weight="bold" > MyNext4 </Text>
            
            </div>
            <Code sx={{ fontWeight: 700 }}>v1.1.2</Code>
            <div className="search-lightdarkmode-container">
            <Autocomplete
            className={classes.search}
            style={{marginLeft: 'auto', marginRight: '20px'}}
            placeholder="Search"
            icon={<Search size={16} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
          
            <LightDarkButton />
           </div>
          </div>
        </Header>
        
      }
    >

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

      

      
    

            
    </AppShell>
  );
}