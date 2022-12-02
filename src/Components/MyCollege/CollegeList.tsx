import {
  createStyles,
  ThemeIcon,
  Progress,
  Text,
  Group,
  Badge,
  Paper,
  Button,
} from "@mantine/core";
import { Swimming } from "tabler-icons-react";

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    padding: theme.spacing.sm,
    paddingTop: theme.spacing.sm * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: "absolute",
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

interface StatsCardProps {
  title: string;
  population: string;
  progress: number;
  cost: string;
  color?: string;
  href: string;
  pic?: string;
}

export function StatsCard(props: StatsCardProps) {
  const { classes } = useStyles();

  return (
    <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE} mt={6}>
        <Swimming></Swimming>
        {/* {props.pic} */}
      </ThemeIcon>

      <Text align="center" weight={700} className={classes.title} mt={12}>
        {props.title}
      </Text>
      <Text color="dimmed" align="center" size="sm">
        {props.population}
      </Text>

      <Group position="apart" mt="xs">
        <Text size="sm" color="dimmed">
          Acceptance Percentage
        </Text>
        <Text size="sm" color={props.color}>
          {props.progress}
        </Text>
      </Group>

      <Progress value={props.progress} mt={5} color={`#${props.color}`} />

      <Group position="apart" mt="md">
        <Text size="sm">{props.cost}</Text>
        <Button size="sm" component="a" href={props.href} variant="outline">
          More
        </Button>
      </Group>
    </Paper>
  );
}
export default StatsCard;
