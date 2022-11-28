import "./CareerDynamicBox.css";
import CollegeCard from "../Components/GlobalComponents/CollegeCard";
import {
  CloudComputing,
  Propeller,
  ShieldCheck,
  ShieldX,
} from "tabler-icons-react";

import { List } from "@mantine/core";
import { Progress } from "@mantine/core";
import RefreshCardSection from "../Components/GlobalComponents/RefreshCardSection";

/*
@returns:
@Value: root div-> the root div holding the entire component. Styled
by root in CSS file
@Value: title div -> div holding title and icon, with proper alignment
and spacing done by CSS
@Value progressBar div -> div holding progress bar. Necessary since the 
progress bar will take up the entire div, so width must be updated specifically for the progress bar
@Value mainList div -> div holding the list format of information
@Value refreshCollegeCards div -> holding h3 header element displaying text and RefreshCardSection custom component
*/
function CareerDynamicBox() {
  return (
    <div className="root">
      <div className="title">
        <h1> Software Engineering </h1>
        <CloudComputing size={48} strokeWidth={2} color={"black"} />
      </div>

      <div className="progressAndText">
        <div className="progressBar">
          <Progress radius={"md"} size={"xl"} value={50}></Progress>
        </div>
        <p> 50% Interest Match! </p>
      </div>

      <div className="mainList">
        <List
          size={"xl"}
          icon={<ShieldCheck size={48} strokeWidth={2} color={"green"} />}
        >
          <List.Item> Average anual salary of $89,086</List.Item>
          <List.Item>
            {" "}
            High demand career with a wide variety of career options
          </List.Item>
          <List.Item> High possibility for remote work and travel</List.Item>
          <List.Item icon={<ShieldX size={48} strokeWidth={2} color={"red"} />}>
            {" "}
            Constant demand to refresh current skills or learn new skills{" "}
          </List.Item>
          <List.Item icon={<ShieldX size={48} strokeWidth={2} color={"red"} />}>
            {" "}
            Juggling an overwhelming amount of project
          </List.Item>
        </List>
      </div>

      <div className="refreshCollegeCards">
        <h3> Our Personalized Picks: </h3>

        <RefreshCardSection />
      </div>
    </div>
  );
}

export default CareerDynamicBox;
