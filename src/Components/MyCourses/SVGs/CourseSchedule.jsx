import React, { useState } from "react";
import {
  createStyles,
  Table,
  Checkbox,
  ScrollArea,
  Group,
  Text,
} from "@mantine/core";
import Loading from "./Loading";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));


//avatar: string; - if you want to add url to add picture

export function TableSelection(props) {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["1"]);
  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
    if (!props.data) {
      return <Loading />;
    }

  const toggleAll = () =>
    setSelection((current) =>
      current.length === props.data.length ? [] : props.data.map((item) => item.id)
    );
  const rows = props.data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            {/* <Avatar size={26} src={item.avatar} radius={26} /> */}
            <Text size="sm" weight={500}>
              {item.course}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500}>
              {item.teacher}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500}>
              {item.classPeriod}
            </Text>
          </Group>
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === props.data.length}
                indeterminate={
                  selection.length > 0 && selection.length !== props.data.length
                }
                transitionDuration={0}
              />
            </th>
            <th>Course</th>
            <th>Teacher</th>
            <th>Class Period</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
