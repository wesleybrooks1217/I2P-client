import { createStyles, Text, Title, TextInput, Button, Spoiler, Progress } from '@mantine/core';
import SidePicker from '../../../Pages/Careers/Components/SidePicker';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

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
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
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
        className={classes.spoiler_pop}
        >
            {props.description}
        </Spoiler>

        <div className={classes.picker_pop}
      >
            <SidePicker/>
        </div>

        <div style = {{
          marginTop: 25
        }}>
          <p style = {{
            fontSize: 18
          }}>Course difficulty</p>
          <Progress 
          radius={"xl"}
          size={"xl"}
          value = {props.score}
          style = {{
            position: 'relative',
            top: 5
          }}/>
          <p style = {{
            fontSize: 14,
            position: 'relative',
            top: 10
          }}>Difficulty ranking: {props.score} out of 100</p>
        </div>
        

        
      </div>
      
    </div>
  );
};

export default CourseDescriptionPop;