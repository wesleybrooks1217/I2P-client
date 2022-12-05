import React from "react";
import { ActionIcon  } from "@mantine/core";

import { CalendarStats } from "tabler-icons-react";

function ScheduleButton(props) {
 
 
  return (
    <div className="App">
      <ActionIcon
        variant="outline"
        onClick={props.clickHandler}
        title="Toggle color scheme"
      >
        <CalendarStats />
      </ActionIcon>
    </div>
  );
}

export default ScheduleButton;
