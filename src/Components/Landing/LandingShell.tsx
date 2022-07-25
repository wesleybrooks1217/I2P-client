import React, { useState, useEffect } from 'react';
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
import FooterGrid from "../Universal/FooterBtn"
import { Route, Routes } from 'react-router-dom';
import CounselorGrid from './Components/CounselorTools'
import Landing from "./Landing"
import SocialButtons from "../Universal/SocialButtons/SocialButtons"
import ActionsGrid from "./Components/ToolSelectorDemo"
import FeaturesGrid from "./Components/Features/FeaturesDemo"
import LightDarkButton from "../LightDarkButton"
import HeroBullets from "./Components/LandingBullets"
import "./LandingShell.css"
import BadgeCard from "./Components/CardDemo"
import FeaturesAsymmetrical from "./Components/ThreeStepDemo"
import FooterCentered from "../Universal/Footer"
import EmailBanner from "../Universal/EmailBanner/EmailBanner"
import BottomText from "../Universal/BottomFooter/BottomFooter"
import MNFLibrary from "../MNFLibrary/MNFLibrary"
import MNFComponents from "../MNFComponents/MNFComponents"
import Updates from "../Updates/Updates"
import Blog from "../Blog/Blog"
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
import SchoolSystems from "../SchoolSystems/SchoolSystems"
import WhyMyNext4 from "../WhyMyNext4/WhyMyNext4";
import Pricing from "../Pricing/Pricing";
import Privacy from "../Privacy/Privacy"
import AboutUs from "../AboutUs/AboutUs";
import FooterLinks from "../Universal/FullFooter"

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
    { label: "Blog", link: '/Blog' },
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
      { label: 'Why MyNext4?', link: './WhyMyNext4' },
      { label: 'About Us', link: '/AboutUs' },
      { label: 'MyNext4: Library', link: '/MNFLibrary' },
      { label: 'Pricing', link: './Pricing' },

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
      { label: "Blog", link: '/Blog' },
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
    justifyContent: 'center',
    [theme.fn.smallerThan('lg')]: {
      marginLeft: 0,
      paddingLeft: 0,
      justifyContent: 'space-around',
      flexDirection: 'column'
  },
  },

  cards: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    [theme.fn.smallerThan('md')]: {
        flexDirection: 'column',
  }
},

stepPlan: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
},
},





 
}));


export default function AppShellExample() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);
 
  const courseBadges = [
    { "emoji": "🪪", "label": "MySchedule" },
    { "emoji": "📒", "label": "MyNotebook" },
    { "emoji": "🎒", "label": "MyBackpack" },
    { "emoji": "🎒", "label": "MyTutoring" },


  ]
  
  const collegeBadges = [
    { "emoji": "🏫", "label": "MyNextEducation" },
    {"emoji": "📍", "label": "MyPins" },
    { "emoji": "🎓", "label": "MyCredits" },
    { "emoji": "🔮", "label": "MyAdmissions" },
    
 
  ]

  const careerBadges = [
    { "emoji": "📆 ", "label": "MyCareers" },
    { "emoji": "🍎", "label": "MyPath" },
    { "emoji": "👔", "label": "MyCommunity" },


  ]

  const counselorBadges = [
    { "emoji": "📆 ", "label": "MyMeetings" },
    { "emoji": "🍎", "label": "MyStudents" },
    { "emoji": "👔", "label": "Admin" },


  ]

  const achieveBadges = [
    { "emoji": "📆 ", "label": "MyExtracurriculars" },
    { "emoji": "🍎", "label": "MyProjects" },


  ]

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
        <Navbar  hiddenBreakpoint="sm" hidden={!opened} height={820} width={{ sm: 230 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
                />
        
    </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

    
    </Navbar>
      }
      
      footer={
        <FooterLinks data={mockdata2}/>
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
    
    
        <HeroBullets  />
        <Container className="products-text">
            <Title mt={70} className={classes.title}> Revolutionizing the college counseling process  </Title>
            <Text className="products-tag2"> Find open source resources for all academic inquiries through our public resource library. Upon school system's registery, students answer
            questions regarding academic preferences, post-school desires, and overall life goals to generate their personalized path to their dream school.</Text>
        </Container>

   
       

        <Container mt={110} className="products-text">
            
            <Title className={classes.title}> Academic tools for students and counselors alike  </Title>
            <Text className="products-tag2"> Find personalized resources, an academic class schedule, and recommended colleges and careers for all students upon a school system's registery.
           Our algorithm will build these personalized tools for each student based on individual preferences. Acessing and editing student information as a counselor has never been more convenient with our counselor made tools.
            </Text>
        </Container>
        <Container pl="120px" pt={70} className={classes.tools}>
            <ActionsGrid  />
            <Container  className="resourcebox"> </Container>
        
        </Container>

        <Container pl="120px" pt={70} className={classes.tools}>
            <CounselorGrid  />
            <Container  className="resourcebox"> </Container>
        
        </Container>
        <Container className="products-text">
            <Title mt={80} className={classes.title}> MyNext4+: Accessible academic tools personalized for school systems  </Title>
            <Text className="products-tag2"> Increase counselor convenience by having your student's academic information pre-generated on one platform. We'll take care of finding the individual student's academic path, while counselors monitor and handle their students.
            Now with enhanced convenience.
          
          </Text>
        </Container>
        <Container mb={30} className="products-text">
        <Text className="products-tag2">  We'll provide students unique class schedules, 
            college recommendations, and custom career maps to visualize the next step upon a school system's registry. All customized information is collected and handled by our library of core <b> student components </b> below.

          
          </Text>
          </Container>
        <Container  className={classes.cards}>
       
           <BadgeCard
      
            badges = { courseBadges
            }
            image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            title="MyCourses"
            country="MNF+ Component " 
            description="Prepare students effectivley with a personalized class scheduler, class base-resource compiler, and progress based achievment marks to gamify the process along the way."/>
           
        <BadgeCard 
               
            badges = { collegeBadges
            }
            image="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            title="MyColleges"
            country="MNF+ Component" 
            description="Make it easy for student's to find their Next4 with our personalized college tools. Student's can receieve recommended colleges from both MyNext4 and the school counselor.
          "/>
        <BadgeCard 
            
            badges = { careerBadges
            }
            image="https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
            title="MyCareers"
            country="MNF+ Component" 
            description="Accessing student information taken to new levels of convenience. Organize, filter, and customize the counselor dashboard to find desired information in seconds.
              " />


        

    
      </Container>
      <Container mt={30} mb={30} className="products-text">
        <Text className="products-tag2">  Find information on our individualized components and component tools through MyNext4's documentation or with a search. Find more information on our other components below.
          
          </Text>
          </Container>

          <Container  className={classes.cards}>
          <BadgeCard
      
      badges = {counselorBadges
      }
      image="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1532&q=80"
      title="MyStudents"
      country="Counselor Component " 
      description="Our counselor tools allow counselors to filter, compare, and inspect student profiles with full customization control. Send academic resources, recommended colleges or career paths, or request students to schedule a meeting with you all fast through our platform. "/>

<BadgeCard
      
      badges = { achieveBadges
      }
      image="https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80"
      title="MyAchievments"
      country="Student Component " 
      description="Complement academic growth with a students personal growth with extracurricular and personal project generators based on individual preferences. Student's creating a personal project 
       helps progress academic and personal growth, and we're here to help. "
      />


    </Container>
      <Container mt={110} className="products-text">
            
            <Title className={classes.title}> Open-sourced resources for every high school student </Title>
            <Text className="products-tag2">  Accessing MyNext4's library of academic resources is just one search away. Find detailed information on any class, college, or career path through our search feature. 
            </Text>
        </Container>
        <FeaturesGrid title="A complement to everyone's work." description="" />
       
        <Container mt={110} className="products-text">
            
            <Title className={classes.title}> Our mission </Title>
            <Text className="products-tag2"> Being recent high school student's from two seperate backgrounds, founders Drake Griffith and Wesley Brooks noticed the true disparity in resources throughout different school systems. Allowing student's to have access to the resources
            they need throughout their academic career provides equity for all, and also complements academic counselors work too.
            </Text>
        </Container>

        <Container mt={80}>
            <FooterGrid  />
            </Container>
            
      
            
      
    </AppShell>
  );
}