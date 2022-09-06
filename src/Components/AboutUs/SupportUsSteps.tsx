import React from 'react';
import { createStyles, Text, SimpleGrid, Container } from '@mantine/core';
import { Users, MessageCircle2, Coin } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  feature: {
    position: 'relative',
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  overlay: {
    position: 'absolute',
    height: 70,
    width: 70,
    top: 7,
    borderRadius: 5,
    left: 113,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
    zIndex: 1,
  },

  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<React.ComponentProps<typeof Users>>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} />
        <Text weight={700} size="lg" mb={5} mt={25} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon:  MessageCircle2,
    title: 'Give feedback',
    description:
      'Feel free to provide us feedback at any time! Your remarks help us grow as a company, and are always used when updating our product.',
  },
  {
    icon: Users,
    title: 'Join the community',
    description:
      'MyNext4 has a community of connected students accessible to anybody for free. Join our Discord today and help us continue to grow.',
  },
  {
    icon: Coin,
    title: 'Support us financially',
    description:
      'Although never expected, financial support is always appreciated. Become a Sponsor, or simply donate through OpenCollective.  ',
  },
];

export default function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={20} mb={100} size="md">
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={70}>
        {items}
      </SimpleGrid>
    </Container>
  );
}