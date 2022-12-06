import CourseList from "./CourseList";
import { Group } from "@mantine/core";

function NewCurrentCourseCards(props) {
  const rows = props.data.map((item) => {
    return (
      <CourseList
        data={{
          type: "Course",
          name: item.name,
          description: item.description,
          id: item.id,
        }}
      />
    );
  });

  return (
    <div>
      <div
        style={{
          position: "relative",
          top: 50,
        }}
      >
        <Group position={"center"}>{rows}</Group>
      </div>
    </div>
  );
}

export default NewCurrentCourseCards;
