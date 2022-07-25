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
import { Check } from 'tabler-icons-react';
import image from './studentsuccess.png';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 580,
   

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

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
      <Container sx={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title mb="lg" sx={{alignSelf: 'center', marginTop: '30px'}}className={classes.title}>
              Making college-prep resources accessible to <span className={classes.highlight}> every student </span> <br /> 
            </Title>
            <Text color="dimmed" mt="md">
              We're on a mission to provide every student with the class, college, or career resources they need to find their niche. Every student has unique gifts,
              and we're here to ensure it comes to life.
            
            </Text>
             </div>
       
        </div>
  
      </Container>
    </div>
  );
}