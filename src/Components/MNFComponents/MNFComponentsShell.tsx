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
  Badge,
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
import ActionsGrid from "./ToolSelectorDemo"
import BadgeCard from "./CardDemo"
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
import FooterLinks from "../Universal/FullFooter"
import { UserButton } from './Helpers/UserButton';
import { LinksGroup } from '../Universal/NavbarLinksGroup';
import Logo  from '../Universal/Images/MyNext4Logo.png';
import LogoNoText from "../Universal/Images/MyNext4Icon.png"
import FooterCentered from "../Universal/Footer"
import LightDarkButton from "../LightDarkButton"
import HeroBullets from "./MNFComponentsBullets"

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
    paddingLeft:"80px",
    [theme.fn.smallerThan('lg')]: {
      flexDirection: 'column',
      paddingLeft:'0',
  },
  },

  line: {
    width:"1",
    size:"200",
    marginLeft: '6px',
    marginRight: '6px',
  },

  container: {
    padding: '0',
    margin: '0',
    backgroundColor: 'red',
  },

  btn: {
    [theme.fn.smallerThan('lg')]: {
      textAlign: 'center',
      margin: 0,
      marginTop: 30,
      
},
  },

  cards: {
    display: 'flex',
    flexDirection: 'row',
    [theme.fn.smallerThan('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        
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
  
  const courseBadges = [
    { "emoji": "🪪", "label": "MySchedule" },
    { "emoji": "📒", "label": "MyNotebook" },
    { "emoji": "🎒", "label": "MyBackpack" },

  ]
  
  const collegeBadges = [
    { "emoji": "🏫", "label": "MyNextEducation" },
    {"emoji": "📍", "label": "MyPins" },
    { "emoji": "🎓", "label": "MyCredits" },
    { "emoji": "🔮", "label": "MyAdmissions" },
 
  ]

  const counselorBadges = [
    { "emoji": "📆 ", "label": "MyMeetings" },
    { "emoji": "🍎", "label": "MyStudents" },
    { "emoji": "👔", "label": "Admin" },


  ]

  const careerBadges = [
    { "emoji": "🍎", "label": "MyNextCareer" },
    { "emoji": "📆 ", "label": "MyMap" },
    { "emoji": "👔", "label": "MyConnections" },
]

const growth = [
  { "emoji": "🍎", "label": "MyExtracurriculars" },
  { "emoji": "📆 ", "label": "MyProjects" },
  { "emoji": "👔", "label": "MyCommunity" },


]
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);


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
        <div className={classes.linksInner}>{links}</div>
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

      <HeroBullets />
       <Container className="products-text">
            <Title mt={70} className={classes.title}> Create a unique academic path for every student  </Title>
            <Text className="products-tag2"> Search through career paths, colleges, universities, and more through our search feature. Add items
            to your library, and find the best path that suits your unique vision. </Text>
        </Container>
        <Container className="products-text">
          <Text mt={30} className="products-tag2"> MyNext4+ currently includes <b> four </b> student component libraries each with customized tools for the student. We seperate 
          students Next4 journey into three core components: MyCourses, MyColleges, and MyCareer, that all combine to create the student's academic roadmap. MyAchievments 
          promotes personal growth with recommended extracurriclars, personal projects, and a community with other like-minded individuals to help learn. </Text>
        </Container>

    
      <SimpleGrid mt={80} m="xl" cols={2}>
        <Container p="md" sx={{backgroundColor: 'white', borderRadius: '5px'}}> 
        <Title mt={10} className={classes.title}> MyCourses </Title>
            <Text className="products-tag2"> Find student's detailed academic reports through a single search. Access, edit, and recommend academic supplements to students and more with our counselor tools.   </Text>
            <Title mt={10} mb={15} sx={{fontSize: '22px', fontWeight: 900}}> Includes </Title>
            <Container className="card-elems" >
            <Badge   sx={{margin: '5px',cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MySchedule"
              leftSection="🪪"
            >
              MySchedule
            </Badge>
            <Badge   sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyNotebook"
              leftSection="📒"
            >
              MyNotebook
            </Badge>
            <Badge   sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyBackpack"
              leftSection="🎒"
            >
              MyBackpack
            </Badge>
            </Container>
          </Container>
          <Container sx={{width: 400, backgroundColor: 'lightblue'}}> </Container>


          </SimpleGrid>
          <SimpleGrid mt={80} m="xl" cols={2}>
          <Container sx={{width: 400, backgroundColor: 'lightblue'}}> </Container>
        <Container p="md" sx={{backgroundColor: 'white', borderRadius: '5px'}}> 
        <Title mt={10} className={classes.title}> MyColleges </Title>
            <Text className="products-tag2"> Find student's detailed academic reports through a single search. Access, edit, and recommend academic supplements to students and more with our counselor tools.   </Text>
            <Title mt={10} mb={15} sx={{fontSize: '22px', fontWeight: 900}}> Includes </Title>
            <Container className="card-elems">
            <Badge   sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyNextEducation"
              leftSection="🏫"
            >
              MyNextEducation
            </Badge>
            <Badge   sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyPins"
              leftSection="📍"
            >
              MyPins
            </Badge>
            <Badge   sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyAdmissions"
              leftSection="🎓"
            >
              MyCredits
            </Badge>
            <Badge   sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyAdmissions"
              leftSection="🔮"
            >
              MyAdmissions
            </Badge>
            </Container>
           
          </Container>
       
          </SimpleGrid>

           
          <SimpleGrid mt={80} m="xl" cols={2}>
        <Container p="md" sx={{backgroundColor: 'white', borderRadius: '5px'}}> 
        <Title mt={10} className={classes.title}> MyCareers </Title>
            <Text className="products-tag2"> Find student's detailed academic reports through a single search. Access, edit, and recommend academic supplements to students and more with our counselor tools.   </Text>
            <Title mt={10} mb={15} sx={{fontSize: '22px', fontWeight: 900}}> Includes </Title>
            <Container className="card-elems" >
            <Badge
              sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyNextCareer"
              leftSection="🍎"
            >
              MyNextCareer
            </Badge>
            <Badge
              sx={{cursor: 'pointer', fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyMap"
              leftSection="📆"
            >
              MyMap
            </Badge>
            <Badge
              sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyConnections"
              leftSection="👔"
            >
              MyConnections
            </Badge>
            </Container>
          </Container>
          <Container sx={{width: 400, backgroundColor: 'lightblue'}}> </Container>


          </SimpleGrid>

       



        
 
     
  


   
       <Container className="products-text">
            <Title mt={100} className={classes.title}> Organize and manage student's effectivley with our counselor tools </Title>
            <Text className="products-tag2"> Find student's detailed academic reports through a single search. Access, edit, and recommend academic supplements to students and more with our counselor tools.   </Text>
        </Container>
        <Container className="products-text">
          <Text mt={30} className="products-tag2"> MyNext4+ gives counselors tools to <b> filter, compare, and inspect </b>student profiles with full customization control. Our MyStudent component library includes effective tools to send academic resources, recommended colleges or career paths, or request students to schedule a meeting with you all fast through our platform.
         </Text>
        </Container>
        <SimpleGrid mt={80} m="xl" cols={2}>
        <Container p="md" sx={{backgroundColor: 'white', borderRadius: '5px'}}> 
        <Title mt={10} className={classes.title}> MyStudents </Title>
            <Text className="products-tag2"> Find student's detailed academic reports through a single search. Access, edit, and recommend academic supplements to students and more with our counselor tools.   </Text>
            <Title mt={10} mb={15} sx={{fontSize: '22px', fontWeight: 900}}> Includes </Title>
            <Container className="card-elems" >
            <Badge
              sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyNextCareer"
              leftSection="🍎"
            >
              MyNextCareer
            </Badge>
            <Badge
              sx={{cursor: 'pointer', fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyMap"
              leftSection="📆"
            >
              MyMap
            </Badge>
            <Badge
              sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyConnections"
              leftSection="👔"
            >
              MyConnections
            </Badge>
            </Container>
          </Container>
          <Container sx={{width: 400, backgroundColor: 'lightblue'}}> </Container>


          </SimpleGrid>

          <SimpleGrid mt={80} m="xl" cols={2}>
        <Container p="md" sx={{backgroundColor: 'white', borderRadius: '5px'}}> 
        <Title mt={10} className={classes.title}> MyCareers </Title>
            <Text className="products-tag2"> Find student's detailed academic reports through a single search. Access, edit, and recommend academic supplements to students and more with our counselor tools.   </Text>
            <Title mt={10} mb={15} sx={{fontSize: '22px', fontWeight: 900}}> Includes </Title>
            <Container className="card-elems" >
            <Badge
              sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyNextCareer"
              leftSection="🍎"
            >
              MyNextCareer
            </Badge>
            <Badge
              sx={{cursor: 'pointer', fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyMap"
              leftSection="📆"
            >
              MyMap
            </Badge>
            <Badge
              sx={{cursor: 'pointer',fontSize: '12px', padding: '8px 16px'}}
              color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
              key="MyConnections"
              leftSection="👔"
            >
              MyConnections
            </Badge>
            </Container>
          </Container>
          <Container sx={{width: 400, backgroundColor: 'lightblue'}}> </Container>


          </SimpleGrid>
        
          
        <Container className="products-text">
            <Title mt={100} className={classes.title}> Demo MyNext4+ live on our website </Title>
            <Text className="products-tag2"> Experience the student and counselor view of MyNext4+ with our live demo. See and experience our modern component tools in action right now with a tool guide navigating your demo.   </Text>
        </Container>
       
            
    </AppShell>
  );
}