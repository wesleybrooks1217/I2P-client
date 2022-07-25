import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1592930954854-7d00c87d0cf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  },

  container: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    textAlign: 'left',
    marginLeft: theme.spacing.lg * 4,
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      marginLeft: '0',
      paddingBottom: theme.spacing.xl * 10,
      textAlign: 'center',
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '50%',
      alignSelf: 'center',
    },
  },
}));

export default function HeroBullets() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}> Academic resources to supplement student growth
         </Title>
        <Text className={classes.description} size="xl" mt="xl">
       Search for classes, colleges, or careers and find accessible information with no account needed. Add resources to your personal collection with an individual or school account.

        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Sign up free 
        </Button>
      </Container>
    </div>
  );
}
