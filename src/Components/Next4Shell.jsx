import React, { useState, useEffect } from 'react';
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

import { Search } from 'tabler-icons-react';
import { UserButton } from './UserButton';
import { LinksGroup } from './Universal/NavbarLinksGroup';
import LogoNoText from "./Universal/Images/MyNext4Icon.png"
import FooterLinks from "./Universal/FullFooter";
import LightDarkButton from "./LightDarkButton"
import footerLinkTree from "./FooterLinktree";
import navbarLinkTree from "./NavbarLinkTree";
import styleSheet from './StyleSheet';


function Next4Shell(props) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = styleSheet();
  const links = navbarLinkTree.map((item) => <LinksGroup {...item} key={item.label} />);
  
 
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar  hiddenBreakpoint="sm" hidden={!opened} height={820} width={{ sm: 230 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
                />
        
    </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>
  </Navbar>
      }
      
      footer={
        <FooterLinks data={footerLinkTree}/>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
           
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
           
           </MediaQuery>
           <div className="side-nav-logo"> 
            <Image width={40}  src={LogoNoText} />
            <Text weight="bold" > MyNext4 </Text>
            
            </div>
            <Code sx={{ fontWeight: 700 }}>v1.1.2</Code>
            <div className="search-lightdarkmode-container">
              {/* <Text> strators </Text>
              <Text> Log In </Text>  */}
            <Autocomplete
            className={classes.search}
            style={{marginLeft: 'auto', marginRight: '20px'}}
            placeholder="Search"
            icon={<Search size={16} />}
            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
          />
          
            <LightDarkButton />
           </div>
          </div>
        </Header>
        
      }
    >
      {props.page}
    </AppShell>
  );
}

export default Next4Shell;