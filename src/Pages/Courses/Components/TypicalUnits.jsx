import {Timeline} from '@mantine/core';
import {Battery4} from 'tabler-icons-react';
import {useState} from 'react';

function TypicalUnits() {

    const [active, setActive] = useState(0);

    const unitNames = [
        "Atomic Structure and Properties",
        "Molecular and Ionic Compound Structure and Properties",
        "Intermolecular Forces and Properties",
        "Chemical Reactions",
        "Kinetics",
        "Thermodynamics",
        "Equilibrium",
        "Acids and Bases",
        "Applications of Thermodynamics"
    ];

    const unitDescriptions = [
        "You'll learn about the composition of atoms and ways scientists measure and categorize these molecular building blocks.",
        "You’ll discover the range of chemical bonds and how their structure can affect the properties of the molecules created.",
        "You’ll explore how atoms come together to create solids, liquids, and gases, and how subatomic forces govern the properties of everything around you.",
        "You’ll learn how to differentiate physical and chemical processes, and how to measure and express chemical reactions via chemical equations.",
        "You’ll explore various methods to observe the changes that occur during a chemical reaction and the effects of a series of reactions.",
        "You’ll learn about energy changes in chemical reactions and how a transfer of energy can change a substance’s physical qualities.",
        "You’ll chart how chemical reactions change over time, what causes substances to reach equilibrium, and how systems react when that equilibrium is disturbed.",
        "You’ll learn more about pH, the qualities and properties of acids and bases, and how they interact in chemical reactions.",
        "You’ll be introduced to the concept of “thermodynamic favorability” for reactions, meaning how likely they are to occur given energy changes and environmental factors."
    ];

    const changeActive = (num) => {
        setActive(num);
    }

    var namesIDs = [];
    for (var i = 0; i < unitNames.length; i++) {
        namesIDs.push(
            {
                "name": unitNames[i],
                "id": i
            }
        );
    };

    const mapped = namesIDs.map((unit) => {
        return <Timeline.Item 
                bullet = {<Battery4 size = {12}/>}
                title = {unit.name}
                onClick = {() => changeActive(unit.id)}/>
    });

    return (

        <div>
            <p style = {{
                fontSize: 24,
                fontWeight: 'bold'
            }}>Typical Units</p>

            <div style = {{
                marginTop: 100,
                marginRight: 500,
                display: 'flex',
                flexDirection: 'row'
            }}>

                <Timeline active={active}>
                    {mapped}
                </Timeline>

                <div style = {{
                    marginLeft: 350,
                }}>
                    <p style = {{fontSize: 18, width: 200, fontWeight: 'bold'}}>Unit Description</p>

                    <p style = {{
                        marginTop: 100,
                        fontSize: 18,
                        color: "darkblue"
                    }}>{unitDescriptions[active]}</p>
                </div>
            </div>
        </div>
    );
};


export default TypicalUnits;