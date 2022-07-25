import React from 'react';
import { Heart } from 'tabler-icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  useMantineTheme,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  position: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.fn.smallerThan('md')]: {
      justifyContent: 'center',
  },
},

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  country: string;
  description: string;
  badges: {
    emoji: string;
    label: string;
  }[];
  extended: string;
}

export default function BadgeCard({ image, title, description, country, badges, extended }: BadgeCardProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const features = badges.map((badge) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" m={8} p="md" className={classes.card}>
    

      <Card.Section className={classes.section} mt="md">
        <Group className={classes.position} >
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{country}</Badge>
        </Group>
        <Text size="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Includes tools
        </Text>
        <Group sx={{display: 'flex', justifyContent:'center'}}spacing={7} mt={15}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          Details
        </Text>
        <Group sx={{display: 'flex', justifyContent:'center'}}spacing={7} mt={15}>
          <Text size="sm" > {extended} </Text>
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
            Learn more
        </Button>
      
      </Group>
    </Card>
  );
}
