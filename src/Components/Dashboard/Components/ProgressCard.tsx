import { createStyles, ThemeIcon, Progress, Text, Group, Badge, Paper, Container } from '@mantine/core';
import { Swimming } from 'tabler-icons-react';

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

export function StatsCard() {
  const { classes } = useStyles();

  return (
    <Paper radius="md"  className={classes.card} mt={ICON_SIZE / 3}>
       <Container sx={{position: 'absolute'}}> 
      <Group >
        <Text size="sm">Achievments</Text>
        <Badge size="sm">Freshman</Badge>
      </Group>
      </Container>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <Swimming size={34} />
      </ThemeIcon>
     
    
      <Text mb={5} align="center" weight={700} className={classes.title}>
        Name
      </Text>
      <Text mb={0} color="dimmed" align="center" size="sm">
        Rank
      </Text>

      <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Progress
        </Text>
        <Text size="sm" color="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      
    </Paper>
  );
}

export default StatsCard;