import { useState } from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";
import { CalendarStats } from "tabler-icons-react";

interface ScheduleButtonType {
    clickHandler: (...arg: any) => any;
}

function ScheduleButton({clickHandler}: ScheduleButtonType) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();  
  const [sideCourseBar, setSideCourseBar ] = useState();
  const dark = colorScheme === "dark";

  return (
    <div className="App">
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={clickHandler}
        title="Toggle color scheme"
      >
        <CalendarStats />
      </ActionIcon>
    </div>
  );
}

export default ScheduleButton;
import { useState } from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";
import { IconCalendarStats } from "../../../tabler-icons-react/icons-react";

interface ScheduleButtonType {
    clickHandler: (...arg: any) => any;
}

function ScheduleButton({clickHandler}: ScheduleButtonType) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();  
  const [sideCourseBar, setSideCourseBar ] = useState();
  const dark = colorScheme === "dark";

  return (
    <div className="App">
      <ActionIcon
        variant="outline"
        color={dark ? "yellow" : "blue"}
        onClick={clickHandler}
        title="Toggle color scheme"
      >
        <IconCalendarStats />
      </ActionIcon>
    </div>
  );
}

export default ScheduleButton;
