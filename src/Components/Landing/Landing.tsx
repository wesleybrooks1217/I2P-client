import "./Landing.css"
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
import Next4Shell from "../Next4Shell";
import ActionsGrid from "./Components/ToolSelectorDemo"
import FeaturesGrid from "./Components/Features/FeaturesDemo"
import ThreeGrid from "./Components/Features/ThreeSteps"
import HeroBullets from "./Components/LandingBullets"
import BadgeCard from "./Components/CardDemo"
import CounselorGridX from "./Components/CounselorDemo";
import styleSheet from "../StyleSheet";

const useStyles = createStyles((theme) => ({
  ...styleSheet,
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

subtitle: {
  display: 'flex',
  flexDirection: 'column',
  

}, 
}));


function Landing() {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
 
  const { classes } = useStyles();
  
 
  const courseBadges = [
    { "emoji": "🪪", "label": "MySchedule" },
    { "emoji": "📒", "label": "MyNotes" },
    { "emoji": "🎒", "label": "MyBackpack" }, 
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
            <HeroBullets  />
            <ThreeGrid title="Students: Align your academic desires with a personalized path to get there" description="Access course, college, and career component tools to complement your academic story. We'll provide personalized recommendations, resources, and readily accessible tools in minutes upon account registery. " />
            <Container  className="products-text">
                
                <Title sx={{marginBottom: '25px'}}className={classes.title}> School Systems: Complement the college counseling process with modern tools  </Title>
                <Text className="products-tag2"> Find over 25+ tools for students and counselor in our component library. Tools range from school scheduling for students to a meetings manager for counselors. We'll provide every student a personalized path to academic success through their provided preferences, and so much more.
                </Text>
            </Container>
            <Container pl="120px" pt={70} className={classes.tools}>
                <ActionsGrid  />
                <Container  className="resourcebox"> </Container>
            
            </Container>
            <Container pl="120px" pt={70} className={classes.tools}>
                <CounselorGridX  />
                <Container  className="resourcebox"> </Container>
            
            </Container>
          
            <Container mt={120} mb={20} className="resourcebox3"> FOI Container </Container>
          
          
            <Container className="products-text">
                <Title mt={80} className={classes.title}> Introducing MyNext4 U: Accessible academic tools personalized for students   </Title>
               
              
          
            </Container>
            <Container mb={30} className="products-text">
            <Text mt={20}sx={{fontSize: '16px'}}>  We'll provide students unique class schedules, 
                college recommendations, and custom career maps to visualize the next steps for their academic journey. All personalized information is collected and handled by our library of core <b> student components</b>.
          
              
              </Text>
              </Container>
            <Container  className={classes.cards}>
           
               <BadgeCard
          
                badges = { courseBadges
                }
                image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                title="MyCourses"
                country="MNF U Component " 
                description="Prepare students effectivley with a personalized class scheduler, class base-resource compiler, and progress based achievment marks to gamify the process along the way."/>
               
            <BadgeCard 
                   
                badges = { collegeBadges
                }
                image="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                title="MyColleges"
                country="MNF U Component" 
                description="Make it easy for student's to find their Next4 with our personalized college tools. Student's can receieve recommended colleges from both MyNext4 and the school counselor.
              "/>
            <BadgeCard 
                
                badges = { careerBadges
                }
                image="https://images.unsplash.com/photo-1459180129673-eefb56f79b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                title="MyCareers"
                country="MNF U Component" 
                description="Accessing student information taken to new levels of convenience. Organize, filter, and customize the counselor dashboard to find desired information in seconds.
                  " />
            </Container>
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
            <Image src="https://media3.giphy.com/media/KDYB0cH4HW8xc3VIAx/giphy.gif?cid=ecf05e47o3mmw4i0e0tp8cc2g3xb1xc88rwu7pkwihrotl6m&rid=giphy.gif&ct=g" width={600}/>
           
            
          
            </Container> 
            
            <FeaturesGrid title="A complement to everyone's work" description="" />
           
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
      
      
    
      </MantineProvider >
      </ColorSchemeProvider>
    </div>
  );
}

export default Landing;

