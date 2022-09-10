import React from 'react';
import {
  useMantineTheme,
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import image2 from "./mynext42.gif";

const useStyles = createStyles((theme) => ({
  inner: {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing.xl * 5,
    paddingBottom: theme.spacing.xl * 4.2,
    [theme.fn.smallerThan('md')]: {
      paddingTop: theme.spacing.xl * 2.85,
      paddingBottom: theme.spacing.xl * 2,
      
  },
},

  content: {
    maxWidth: 460, 
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    width: 500,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('lg')]: {
     
    },
    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
      width: 650,
 
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 38,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan('lg')]: {
      display: 'none',
    },


    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  

  list: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function HeroBullets() {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];
  const { classes } = useStyles();
  

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Pairing student's academic path with <span className={classes.highlight}>modern</span> tools <br /> 
            </Title>
            <Text color="dimmed" mt="40px">
            Connect your student story with course, college, and career recommendations based on individual preferences to paint your picture. MyNext4 includes academic tools for students and counselors alike
            to boost all around productivity.
            
            </Text>
            <Group sx={{display: 'flex', justifyContent: 'center' }} mt={40}>
              <Button radius="xl" size="md" className={classes.control}>
                School Systems
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Individual
              </Button>
</Group>
</div>
      <Image className={classes.image} sx={{alignItems: 'center'}} src={image2} width={600} />
      
    
      
        </div>
  
      </Container>
    </div>
  );
}


/*
<List
              sx={{display: 'flex', alignItems: 'center'}}
              mt={30}
              spacing="sm"
              size="sm"
              className={classes.list}
              icon={
                <ThemeIcon size={20} mt={3} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item mt="sm" mb="sm">
              <b>Improving Accessibility</b> – The resources you need are now all compiled onto a single platform. Find and access them with ease.
              
              </List.Item>
              <List.Item mb="sm">
                <b>Counselor Convenience</b> – Supplement your academic counseling with our counselor-made tools. We'll build unique academic profiles for every student, and so much more.
              </List.Item>
              <List.Item mb="md">
                <b>Promoting Student Oppourtunity</b> – We want every student to have an equal chance at success. Access desired information on courses, colleges, or career paths all through our search bar.
              </List.Item>
            </List>
            */