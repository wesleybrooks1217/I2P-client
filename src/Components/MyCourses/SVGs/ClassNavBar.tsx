import { useState } from 'react';
import { Navbar, SegmentedControl, Text, createStyles } from '@mantine/core';
import {
  IconShoppingCart,
  IconCalendarStats,
  IconLicense,
  IconMessage2,
  IconBellRinging,
  IconMessages,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconUsers,
  IconFileAnalytics,
  IconDatabaseImport,
  IconReceipt2,
  IconReceiptRefund,
  IconLogout,
  IconSwitchHorizontal,
} from "../../../tabler-icons-react/icons-react";
import ScheduleButton from '../Helpers/ScheduleButton';

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
    { link: '/GeneralHealth', label: 'General Health', icon: IconLicense },
    { link: '/APChemistry', label: 'AP Chemistry', icon: IconReceipt2 },
    { link: '/AlgebraI', label: 'Algebra 1', icon: IconFingerprint },
    { link: '/Geometry', label: 'Geometry', icon: IconKey },
    { link: '/PhysicalEducation', label: 'Physical Education', icon: IconDatabaseImport },
    { link: '/APBiology', label: 'AP Biology', icon: Icon2fa },
    { link: '/HonorsEnglish', label: 'Honors English', icon: IconSettings },
  ],
  Future: [
    { link: '/APComputerScienceA', label: 'AP Computer Science A', icon: IconLicense },
    { link: '/HonorsBiology', label: 'Honors Biology', icon: IconKey },
    { link: '/HonorsWorldHistory', label: 'Honors World History', icon: IconMessage2 },
    { link: '/WeightTraining', label: 'Weight Training', icon: IconMessages },
    { link: '/Physics', label: 'Physics', icon: IconBellRinging },
    { link: '/AlgebraII', label: 'Algebra II', icon: IconReceiptRefund },
    { link: '/ForensicScience', label: 'Forensic Science', icon: IconFileAnalytics },
  ],
};


export function ClassNavBar() {
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
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar position={{ top: 0, right: 0 }} height={840} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section>
        <Text weight={500} size="sm" className={classes.title} color="dimmed" mb="xs">
          Course Schedule
        </Text>
        <SegmentedControl
          value={section}
          onChange={(value: 'Current' | 'Future') => setSection(value)}
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