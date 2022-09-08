import {
    AppShell,
    Navbar,
    Header,
    Text,
    Group,
    Code,
    ScrollArea,
    Image,
    createStyles,
    MediaQuery,
    Burger,
    useMantineTheme,
    Autocomplete
  } from '@mantine/core';
const useStyles = createStyles((theme) => ({
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      paddingBottom: 0,
    },
  
    header: {
      padding: theme.spacing.md,
      paddingTop: 0,
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: 28,
        textAlign: 'left',
      },
    },
  
    links: {
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
    },
  
    search: {
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },
  
    linksInner: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
  }));

  export default useStyles;