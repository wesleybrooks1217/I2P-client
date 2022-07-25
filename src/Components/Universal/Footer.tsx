import React from 'react';
import {Text,  Image, createStyles, Anchor, Group, ActionIcon } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';

import Logo from "./Images/BubbleInc.png"

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: 20,
    paddingBottom: 60,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    marginRight: '60px',
    marginTop: '.4px',
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },

  display: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    marginLeft: '240px',
  },
}));




interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export default function FooterCentered({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
      <div className={classes.display}> 
         
            <Text ml={10} sx={{color: 'gray',fontSize: '14px'}} >© Copyright 2022 Bubblegum Inc. All rights reserved. </Text>
            
            </div>

        <Group className={classes.links}>{items}</Group>

     

      </div>
    </div>
  );
}