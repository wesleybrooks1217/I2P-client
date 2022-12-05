import React, { useState } from 'react';
import { Navbar, SegmentedControl, Text, createStyles } from '@mantine/core';
import {
  License,
  Message2,
  BellRinging,
  Messages,
  Fingerprint,
  Key,
  Settings,
  DatabaseImport,
  Receipt2,
  ReceiptRefund,
  FileAnalytics,
} from "tabler-icons-react";
import { UserButton } from '../../Universal/UserButton';
import { Group } from "@mantine/core";



const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');

  return {
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
      textTransform: 'uppercase',
      letterSpacing: -0.25,
    },

    header: {
      padding: theme.spacing.md,
      paddingTop: 0,
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
      },
    },

    footer: {
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      paddingTop: theme.spacing.md,
    },
  };
});

const tabs = {
  Current: [
    { link: '/GeneralHealth', label: 'General Health', icon: License },
    { link: '/APChemistry', label: 'AP Chemistry', icon: Receipt2 },
    { link: '/AlgebraI', label: 'Algebra 1', icon: Fingerprint },
    { link: '/Geometry', label: 'Geometry', icon: Key },
    { link: '/PhysicalEducation', label: 'Physical Education', icon: DatabaseImport },
    { link: '/APBiology', label: 'AP Biology', icon: Key },
    { link: '/HonorsEnglish', label: 'Honors English', icon: Settings },
  ],
  Future: [
    { link: '/APComputerScienceA', label: 'AP Computer Science A', icon: License },
    { link: '/HonorsBiology', label: 'Honors Biology', icon: Key },
    { link: '/HonorsWorldHistory', label: 'Honors World History', icon: Message2 },
    { link: '/WeightTraining', label: 'Weight Training', icon: Messages },
    { link: '/Physics', label: 'Physics', icon: BellRinging },
    { link: '/AlgebraII', label: 'Algebra II', icon: ReceiptRefund },
    { link: '/ForensicScience', label: 'Forensic Science', icon: FileAnalytics },
  ],
};


function ClassNavBar() {
  const { classes, cx } = useStyles();
  const [section, setSection] = useState<'Current' | 'Future'>('Current');
  const [active, setActive] = useState('Billing');

  const links = tabs[section].map((item) => (
    <a
      className={cx(classes.link, { [classes.linkActive]: item.label === active })}
      href={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon}/>
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar position={{ top: 0, left: 0 }} height={840} width={{ sm: 400 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
            <Group position="apart">
              <UserButton
                image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                name="Ann Nullpointer"
                email="anullpointer@yahoo.com"
              />
            </Group>
          </Navbar.Section>
      <Navbar.Section>
        <Text weight={500} size="sm" mt={15} className={classes.title} color="dimmed" mb="xs">
          Course Schedule
        </Text>
        <SegmentedControl
          value={section}
          onChange={(value) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: 'Current', value: 'Current' },
            { label: 'Future', value: 'Future' },
          ]}
        />
      </Navbar.Section>

      <Navbar.Section grow mt="xl">
        {links}
      </Navbar.Section>
    </Navbar>
  );
}

export default ClassNavBar;