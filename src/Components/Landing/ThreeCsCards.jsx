import React from "react";

import { FileX, Search, Star } from "tabler-icons-react";
import {
  Card,
  Container,
  Avatar,
  Image,
  Text,
  Badge,
  Button,
  Group,
} from "@mantine/core";

import ClassCardDemo from "./ClassCardDemo";
import CollegeCard from "../GlobalComponents/CollegeCard";
import CollegeCardDemo from "./CollegeCardDemo";
function ThreeCsCards() {
  return (
    <div>
      <ClassCardDemo />
      <CollegeCardDemo />
    </div>
  );
}

export default ThreeCsCards;
