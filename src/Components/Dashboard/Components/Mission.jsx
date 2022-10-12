import React from "react";
import { QuestionMark } from "tabler-icons-react";
import { Avatar } from '@mantine/core';

function Mission(props) {
    const missionColor = props.missionColor;
    return (
        <Avatar sx={{margin: 5}} color={missionColor} radius="xl">{props.icon}</Avatar>
    )
}

export default Mission;