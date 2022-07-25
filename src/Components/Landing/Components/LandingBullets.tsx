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
import image from '../SVGs/image.svg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

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
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Complement the college counseling process with <span className={classes.highlight}>modern</span> tools <br /> 
            </Title>
            <Text color="dimmed" mt="md">
            Generate student's academic information autonomously. MyNext4 includes academic tools for students and counselors alike
            to boost all around productivity.
            
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              className="checkmarks-list"
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

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                School Systems
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Individual
              </Button>
            </Group>
          </div>
          <Image src={image} className={classes.image} />
        </div>
  
      </Container>
    </div>
  );
}