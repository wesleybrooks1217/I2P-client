import ColorShell from "../../Components/ColorShell";
import {Paper} from '@mantine/core';
import Next4Shell from "../../Components/Next4Shell";
import { useEffect, useState, useRef } from "react";
import "./Careers.css";
import { Spoiler, Modal, Button, Avatar } from '@mantine/core';
import ListItem from "./Components/ListItems";
import DescriptionPop from "./Components/DescriptionPop";
import SidePicker from "./Components/SidePicker";
import AccordionCustom from "./Components/AccordionCustom";
import CareersTraits from "./Components/CareerTraits";
import TechSkills from "./Components/TechSkills";
import CareerEducation from "./Components/CareerEducation";
import SalaryCharts from "./Components/SalaryCharts";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import CareerOutlook from "./Components/CareerOutlook";
import CourseCardList from "../../Components/CardList/CourseCardList";
import {init_api} from "../../API";
import {API} from "../../API";
import { useSelector } from "react-redux";
import { setAutoFreeze } from "immer";
import { useParams } from "react-router-dom";
import TopNav from "../../Components/Nav/components/TopNav";
import SideBar from "../../Components/Nav/components/SideBar";

function Careers() {

    const [data, setData] = useState("");
    const [stateNames, setStateNames] = useState([]);
    let sideNav = useRef(null)
    let topNav = useRef(null)
    const [lightMode, setLightMode] = useState([true])


    const id = useParams();

    useEffect(() => {

        const fetchData = async () => {
            init_api();
            await API.get(`/api/career/${id.id}/`)
            .then((response) => {
                setData(response.data);
            });
        };

        const fetchStates = async() => {
            init_api();
            const stateListIDs = data.above_avg_states;
            const stateListNamesTemp = []
            for (var i = 0; i < stateListIDs.length; i++) {
                await API.get(`/api/states/${stateListIDs[i]}/`)
                .then((response) => {
                    stateListNamesTemp.push(response.data.name);
                });
            }
            setStateNames(stateListNamesTemp);
        };
        fetchData();
        fetchStates();

    }, [])
    
    const [modal1Opened, setModal1Opened] = useState(false);

    const tasks = [
        data.task_1,
        data.task_2,
        data.task_3
    ];


    const knowledge = [
        data.knowledge_1,
        data.knowledge_2,
        data.knowledge_3,
        data.knowledge_4,
        data.knowledge_5,
        data.knowledge_6,
    ];


    const skills = [
        data.skills_1,
        data.skills_2,
        data.skills_3,
        data.skills_4,
        data.skills_5, 
    ];


    const abilities = [
        data.abilities_1,
        data.abilities_2,
        data.abilities_3,
        data.abilities_4,
        data.abilities_5,
        data.abilities_6,
        data.abilities_7,
    ];


    const characteristics = [
        data.char_1,
        data.char_2,
        data.char_3,
        data.char_4,
        data.char_5,
        data.char_6
    ];


    const techSkills = [
        data.tech_1,
        data.tech_2,
        data.tech_3,
        data.tech_4,
        data.tech_5
    ];
    

    const industryData = [
        {
            "name": data.industry_1_name,
            "percentage": data.industry_1_percent
        },

        {
            "name": data.industry_2_name,
            "percentage": data.industry_2_percent
        },

        {
            "name": data.industry_3_name,
            "percentage": data.industry_3_percent
        }
    ];


    const statePercentages = [
        {
            "name": "Above average specializiation",
            "percentage": data.num_states_above
        }, 

        {
            "name": "Average Specialization",
            "percentage": data.num_states_avg
        },

        {
            "name": "Below average specialization",
            "percentage": data.num_states_below
        }
    ];

    const exploreMoreNames = [
        "Civil Engineering Technologists & Technicians",
        "Construction & Building Inspectors",
        "Construction Managers"
    ];

    const exploreMoreDescriptions = [
        "Civil engineering technologists and technicians help civil engineers plan, design, and build highways, bridges, utilities, and other infrastructure projects. They also help to plan, design, and build commercial, industrial, residential, and land development projects.",
        "Performs limited professional trade and/or certification inspections of new, existing, and damaged residential and commercial structures for conformance to codes, amendments, ordinances, regulations, specifications, and standards.",
        "Construction managers, often called general contractors or project managers, coordinate and supervise a variety of projects, including building public, residential, commercial, and industrial structures as well as roads and bridges."
    ]

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

    
    const test = () => {
        console.log(data);
    }

    function switchModes() {
        setLightMode((prevState) => !prevState)
      }

    return (
        
                    <div style={{marginTop: 250, marginLeft: 125}}>

<section style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh' }}>
    
    <div style={{position: 'absolute', top: '30%', left: '1%'}} ref={el => sideNav = el}>
    
        <SideBar switchStates={switchModes} lightMode={lightMode} />
    </div>

    <div style={{position: 'absolute', width: '100%'}} ref={el => topNav = el}>
        <TopNav />
    </div>



</section>

                        
                        <div className="title-box">
                            <h1> {data.name} </h1>
                            
                        </div>

                        <Paper>

                        
                            <div className="main-container-Careers">

                                <DescriptionPop 
                                name = {data.name}
                                description = {data.what_they_do}/>
                                

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

                        <div className="salary_charts_career">
                        <SalaryCharts 
                            anually = {{
                                tenth: data.annual_10th,
                                median: data.annual_median,
                                ninetyith: data.annual_90th
                            }}
                            hourly = {{
                                tenth: data.hourly_10th,
                                median: data.hourly_median,
                                ninetyith: data.hourly_90th
                            }}/>
                        </div>

                        <div className="industries_career">

                            <div className="industry_chart_career">
                                <p>
                                    What industries do they work in?
                                </p>
                                <BarChart width={500} height={600} data={industryData}>
                                    <CartesianGrid strokeDasharray={"3 3"} />
                                    <XAxis dataKey={"name"} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey={"percentage"} fill="#8884d8" />
                                </BarChart>


                            </div>

                            <div className="outlook_careers">
                                <p>Which states specialize in this Career?</p>
                                <CareerOutlook 
                                data={statePercentages}
                                states = {stateNames}/>
                            </div>

                        </div>

                        <div className="explore_more">
                            <p>Explore similar careers</p>
                            <CourseCardList 
                            names = {exploreMoreNames}
                            descriptions = {exploreMoreDescriptions}
                            type = {"career"}/>
                        </div>

                        
                        

                        
                        
                    </div>
               
        
    );
};

export default Careers;