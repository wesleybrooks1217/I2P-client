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
    maxWidth: 620,
   

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
            Revolutionizing the college process for  <span className={classes.highlight}> all students </span> <br /> 
            </Title>
            <Text color="dimmed" mt="md">
            We have a mission to maximize student oppourtunity for all by providing accessible resources to improve equity for all students nationwide.
            
            </Text>
             </div>
       
        </div>
  
      </Container>
    </div>
  );
}