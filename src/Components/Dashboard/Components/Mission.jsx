import React from "react";
import { QuestionMark } from "tabler-icons-react";

function Mission(props) {
    const styles={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const missionColor = props.missionColor;
    return (
        <div>
            <div style={styles}>
                <h1> {props.title} </h1>
                <div style={{width: '50px', height: '50px', backgroundColor: {missionColor}}}>
                     {props.icon}
                </div>
                <p> {props.description} </p>
            </div>
        </div>
    )
}

export default Mission;