import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import ColorShell from "../../ColorShell";
import React, { useState } from "react";
import Next4Shell from "../../Next4Shell";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  Group,
  SimpleGrid,
  Card,
  Code,
  Grid,
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
import FooterLinks from "../../Universal/FullFooter";
import FeaturesGrid from "../../Pricing/Features/FeaturesDemo";
import FaqWithImage from "../../Pricing/FAQElement";
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
import { UserButton } from "../../UserButton";
import { LinksGroup } from "../../Universal/NavbarLinksGroup";
import Logo from "../Universal/Images/MyNext4Logo.png";
import LogoNoText from "../Universal/Images/MyNext4Icon.png";
import FooterCentered from "../../Universal/Footer";
import LightDarkButton from "../../LightDarkButton";
import PricingBullets from "../../Pricing/PricingBullets";
import styleSheet from "../../StyleSheet";
import ProductCards from "../../Pricing/ProductCards";
import DescriptionPop from "../../../Pages/Careers/Components/DescriptionPop";
import CourseDescriptionPop from "../Helpers/CourseDescriptionPop";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 550,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

interface HSCoursesProps {
  title: string;
  courseName?: string;
  description: string;
}

export default function HSCourses({
  title,
  courseName,
  description,
}: HSCoursesProps) {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const { classes } = useStyles();
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <ColorShell
      innerContent={
        <Paper>
          <Next4Shell
            page={
              <div>
                <div className="title-box">
                  <Title sx={{ textAlign: "center" }} className={classes.title}>
                    {title}
                  </Title>

                  <img className="logo-img" src="logo192.png" />
                </div>

                <Paper>
                  <div className="main-container-Careers">
                    <CourseDescriptionPop
                      courseTitle={title}
                      description={description}
                    />
                  </div>
                </Paper>
              </div>
            }
          ></Next4Shell>
        </Paper>
      }
    />
  );
}
