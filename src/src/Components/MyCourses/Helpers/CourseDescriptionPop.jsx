import React from 'react';
import { createStyles, Text, Title, Spoiler } from '@mantine/core';
import SidePicker from '../../../Pages/Careers/Components/SidePicker';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,



    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: theme.spacing.xl * 4,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  spoiler_pop: {
    marginTop: 20,
  },

  picker_pop: {
    marginTop: 20,
    
  }
}));

function CourseDescriptionPop(props) {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text weight={500} size="lg" mb={5}>
          What will I learn in {props.courseTitle}?
        </Text>
        <Spoiler
        maxHeight={24}
        showLabel = "Show More"
        hideLabel = "Show less"
        >
            {props.description}
        </Spoiler>

        <div
      >
            <SidePicker/>
        </div>
        

        
      </div>
      
    </div>
  );
};

export default CourseDescriptionPop;