import React, { useState, useEffect } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  Group,
  SimpleGrid,
  Code,
  ScrollArea,
  Button,
  Image,
  Container,
  createStyles,
  Title,
  MediaQuery,
  Burger,
  useMantineTheme,
  Autocomplete,
} from "@mantine/core";

import FooterLinks from "../Universal/FullFooter";
import { Stack } from "@mantine/core";
import { Grid } from "@mantine/core";
import { TableReviews } from "./SVGs/CoursesTable";
import { TableSelection } from "./SVGs/CourseSchedule";
import { CurrentCourseCard } from "./SVGs/CurrentCourseCard";
import CoursesCurrent from "./SVGs/CoursesCurrent";

import {
  Notes,
  CalendarStats,
  Gauge,
  PresentationAnalytics,
  FileAnalytics,
  Adjustments,
  Lock,
  Search,
} from "tabler-icons-react";
import { UserButton } from "./Helpers/UserButton";
import { LinksGroup } from "../Universal/NavbarLinksGroup";
import Logo from "../Universal/Images/MyNext4Logo.png";
import LogoNoText from "../Universal/Images/MyNext4Icon.png";
import FooterCentered from "../Universal/Footer";
import LightDarkButton from "../LightDarkButton";

const mockdata = [
  {
    label: "Overview",
    icon: Notes,
    initiallyOpened: false,
    links: [
      { label: "Why MyNext4?", link: "/WhyMyNext4" },
      { label: "About Us", link: "/AboutUs" },
      { label: "MyNext4: Library", link: "/MNFLibrary" },
      { label: "Pricing", link: "/Pricing" },
    ],
  },
  {
    label: "School Systems",
    icon: Notes,
    initiallyOpened: false,
    links: [
      { label: "Using MyNext4+ ", link: "/SchoolSystems" },
      { label: "Component Library", link: "/MNFComponents" },
    ],
  },
  {
    label: "Further",
    icon: Notes,
    initiallyOpened: false,
    links: [
      { label: "Updates", link: "/Updates" },
      { label: "Privacy", link: "/Privacy" },
      { label: "MyCourses", link: "/MyCourses" },
      { label: "Support Us", link: "/" },
    ],
  },
  {
    label: "Docs",
    icon: Notes,
    initiallyOpened: false,
    links: [
      { label: "MyNext4: Library", link: "/" },
      { label: "MyNext4+", link: "/" },
    ],
  },
  { label: "Settings", icon: Adjustments },
];

const mockdata2 = [
  {
    title: "Products",
    links: [{ label: "MyNext4+", link: "/Updates" }],
  },
  {
    title: "Resources",
    links: [
      { label: "MyNext4 Library", link: "/Updates" },
      { label: "MyCourses", link: "/MyCourses" },
      { label: "Docs", link: "/" },
      { label: "Podcast", link: "/Privacy" },
      { label: "FAQ", link: "/Updates" },
    ],
  },

  {
    title: "Company",
    links: [
      { label: "About", link: "/Updates" },
      { label: "Vision", link: "/Updates" },
      { label: "Support us", link: "/Updates" },
      { label: "Contact us", link: "/Updates" },
    ],
  },
];

const scheduleData = [
  {
    id: "1",
    course: "Health 2",
    classPeriod: "First: 9:05-10:20",
    teacher: "Rob Wolf",
  },
  {
    id: "2",
    course: "AP Chemistry",
    classPeriod: "Second: 10:30-11:45",
    teacher: "Jerry Walters",
  },
  {
    id: "3",
    course: "Algebra 1",
    classPeriod: "Third: 12:00-1:15",
    teacher: "Henry Smith",
  },
  {
    id: "4",
    course: "Geometry",
    classPeriod: "Fourth: 1:30-2:45",
    teacher: "Susan Jones",
  },
  {
    id: "5",
    course: "Physical Education",
    classPeriod: "Fifth: 3:00-4:15",
    teacher: "Drake Griffith",
  },
];

const tableData = [
  {
    courseName: "AP Computer Science A",
    teacher: "Isaac Asimov",
    difficulty: "4/5",
    reviews: {
      positive: 2223,
      negative: 259,
    },
  },
  {
    courseName: "Honors Biology",
    teacher: "Mary Beans",
    difficulty: "3.2/5",
    reviews: {
      positive: 5677,
      negative: 1265,
    },
  },
  {
    courseName: "Honors English",
    teacher: "Stanislaw Lem",
    difficulty: "2.5/5",
    reviews: {
      positive: 3487,
      negative: 1845,
    },
  },
  {
    courseName: "AP Calculus",
    teacher: "Frank Herbert",
    difficulty: "4.5/5",
    reviews: {
      positive: 8576,
      negative: 663,
    },
  },
  {
    courseName: "Weight Training",
    teacher: "Ursula K. Le Guin",
    difficulty: "1.2/5",
    reviews: {
      positive: 6631,
      negative: 993,
    },
  },
  {
    courseName: "Physics",
    teacher: "Philip K Dick",
    difficulty: "3.9/5",
    reviews: {
      positive: 8124,
      negative: 1847,
    },
  },
];

const currentCourseData = [
  {
    id: 0,
    title: "AP Human Geography",
    description:
      "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
  },
  {
    id: 1,
    title: "AP World History",
    description:
      "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
  },
  {
    id: 2,
    title: "General Health",
    description:
      "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
  },
  {
    id: 3,
    title: "Introduction to Business Technology",
    description:
      "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
  },
  {
    id: 4,
    title: "Introduction to Digital Technology",
    description:
      "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
  },
  {
    id: 5,
    title: "AP French",
    description:
      "Class description goes here. Not enough time to implement everything I want to implement but I would divide page into 6 spots where all of the classes would be split up",
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
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

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "left",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  tools: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  container: {
    padding: "0",
    margin: "0",
    backgroundColor: "red",
  },

  teambox: {
    alignItems: "center",
    display: "grid",
    marginTop: "15px",
    gridTemplateRows: "140px 140px 140px 140px",
    gridTemplateColumns: "320px 320px 320px",
    justifyContent: "center",
    paddingLeft: "100px",
    [theme.fn.smallerThan("lg")]: {
      paddingLeft: "0px",
      marginLeft: "80px",
      gridTemplateColumns: "320px 320px",
    },
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  cards: {
    display: "flex",
    justifyContent: "space-around",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function AppShellExample() {
  // const [realData, setRealData] = useState();
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       return data;
  //     })
  //     .then(data => setRealData(data.highSchoolCourses))
  //     .catch((error) => console.log(error));
  // }, []);

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const links2 = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          height={820}
          width={{ sm: 230 }}
          p="md"
          className={classes.navbar}
        >
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
            <div className={classes.linksInner}>{links2}</div>
          </Navbar.Section>
        </Navbar>
      }
      footer={<FooterLinks data={mockdata2} />}
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <div className="side-nav-logo">
              <Image width={40} src={LogoNoText} />
              <Text weight="bold"> MyNext4 </Text>
            </div>
            <Code sx={{ fontWeight: 700 }}>v1.1.2</Code>
            <div className="search-lightdarkmode-container">
              <Autocomplete
                className={classes.search}
                style={{ marginLeft: "auto", marginRight: "20px" }}
                placeholder="Search"
                icon={<Search size={16} />}
                data={[
                  "React",
                  "Angular",
                  "Vue",
                  "Next.js",
                  "Riot.js",
                  "Svelte",
                  "Blitz.js",
                ]}
              />

              <LightDarkButton />
            </div>
          </div>
        </Header>
      }
    >
      <Container>
        <Title mt={70} className={classes.title}>
          {" "}
          MyCourses Page{" "}
        </Title>
        <Text mb={70} sx={{ textAlign: "left" }}>
          {" "}
          Welcome to the MyCourses Page!
        </Text>
        <Title mb={20} sx={{ textAlign: "center" }} className={classes.title}>
          {" "}
          Your Current Schedule - Fall 2022!
        </Title>
        <CoursesCurrent></CoursesCurrent>
        <Title
          mt={70}
          mb={20}
          sx={{ textAlign: "center" }}
          className={classes.title}
        >
          {" "}
          Our Recommeded Schedule - Spring 2023!
        </Title>
        {/* <TableSelection data={realData} /> */}
        <TableSelection data={scheduleData} />
        <Title
          mt={70}
          mb={20}
          sx={{ textAlign: "center" }}
          className={classes.title}
        >
          {" "}
          Additional Course Reccomendations!
        </Title>
        <TableReviews data={tableData} />
      </Container>
    </AppShell>
  );
}
