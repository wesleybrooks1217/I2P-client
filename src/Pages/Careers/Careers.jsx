
import {Paper} from '@mantine/core';

import { useEffect, useState } from "react";
import "./Careers.css";
import { Spoiler, Modal, Button } from '@mantine/core';
import ListItem from "./Components/ListItems";
import DescriptionPop from "./Components/DescriptionPop";

import AccordionCustom from "./Components/AccordionCustom";
import CareersTraits from "./Components/CareerTraits";
import TechSkills from "./Components/TechSkills";
import CareerEducation from "./Components/CareerEducation";

function Careers() {

    const [modal1Opened, setModal1Opened] = useState(false);


    const tasks = [
        'Direct engineering activities, ensuring compliance with environmental, safety, or other governmental regulations.',
        'Manage and direct the construction, operations, or maintenance activities at project site.',
        'Inspect project sites to monitor progress and ensure conformance to design specifications and safety or sanitation standards.'
    ];

    const knowledge = [
        'design',
        'product and service development',
        'arithmetic, algebra, geometry, calculus, or statistics',
        'physics',
        'English language',
        'management'
    ];

    const skills = [
        'listening to others, not interrupting, and asking good questions',
        'reading work related information',
        'noticing a problem and figuring out the best way to solve it',
        'figuring out how a system should work and how changes in the future will affect it',
        'thinking about the pros and cons of different options and picking the best one'
    ];

    const abilities = [
        'communicate by speaking',
        'communicate by writing',
        'make general rules or come up with answers from lots of detailed information',
        'notice when problems happen',
        'choose the right type of math to solve a problem',
        'add, subtract, multiply, or divide',
        'quickly compare groups of letters, numbers, pictures, or other things'
    ];

    const characteristics = [
        'Integrity',
        'Dependability',
        'Analytical Thinking',
        'Attention to Detail',
        'Initative',
        'Self Control'
    ];

    const techSkills = [
        'Autodesk AutoCAD Civil 3D',
        'Autodesk Revit',
        'Microsoft Powerpoint',
        'Minitab',
        'The MathWorks MATLAB'
    ];

    const Item = (props) => {
        return (    
            <Spoiler
            maxHeight={18}
            showLabel="Show More"
            hideLabel="Hide label"
            className="tasks-Careers">
                {props.text}
            </Spoiler>
        );
            
    };

    

    const tempItems = tasks.map((data) => {
        return (<ListItem text = {data}></ListItem>);
    });

    const knowledgeMapped = knowledge.map((data) => {
        return <ListItem text = {data}></ListItem>
    });

    const skillsMapped = skills.map((data) => {
        return <ListItem text = {data}></ListItem>
    });

    const abilitiesMapped = abilities.map((data) => {
        return <ListItem text = {data} > </ListItem>
    })

    

    return (
    
                    <div>
                        <div className="title-box">
                            <h1> Electrical Engineering </h1>

                            <img 
                            className="logo-img"
                            src="logo192.png" />
                        </div>

                        <Paper>

                        
                            <div className="main-container-Careers">

                                <DescriptionPop />
                                

                            </div>

                        </Paper>

                        <div className="tasks_skills">

                            
                                <div className="tasks">

                                    <p>
                                        What about day to day tasks?
                                    </p>

                                    <Modal
                                    opened={modal1Opened}
                                    onClose={()=> setModal1Opened(false)}
                                    title={"Daily Tasks"}>
                                        {tempItems}
                                    </Modal>

                                    <Button onClick={() => setModal1Opened(true)}
                                    className="modal_btn">Tell me!</Button>

                                </div>
                            

                            

                                
                                <div className="tasks_skills_abils">
                                    <p>
                                        What do I need to be good at?
                                    </p>

                                    <AccordionCustom 
                                    knowledge={knowledgeMapped}
                                    skills={skillsMapped}
                                    abilities={abilitiesMapped}/>

                                </div>

                            

                        </div>

                        
                        <div className="chars">
                            <p>
                                Career Characteristics
                            </p>

                            <div>
                                <CareersTraits 
                                chars = {characteristics}/>
                            </div>

                            
                        </div>

                    

                        <div className="tech_skills_careers">
                            <p>
                                Technology Skills needed:
                            </p>

                            <div className="tech_careers">
                                <TechSkills 
                                values = {techSkills}/>
                            </div>

                            
                        </div>


                        <div className="education_careers">
                            <CareerEducation />
                        </div>

                        
                        
                    </div>

    );
};

export default Careers;