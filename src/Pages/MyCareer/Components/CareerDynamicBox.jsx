import './CareerDynamicBox.css';
import {
    CloudComputing,
    Propeller,
    ShieldCheck,
    ShieldX}
    from 'tabler-icons-react';

import {List} from '@mantine/core';
import {Progress} from '@mantine/core';
import RefreshCardSection from '../../../Components/CollegeCard';
import { useEffect, useState } from 'react';
import { API, init_api } from '../../../API';
import {useSelector} from 'react-redux';
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

    const careerID = useSelector(state => state.career.mainCareer);
    
    

    //const [res, setRes] = useState(null);
    let res;
    const [name, setName] = useState("");
    const [bullet_1, setBullet_1] = useState("");
    const [bullet_2, setBullet_2] = useState("");
    const [bullet_3, setBullet_3] = useState("");
    const [bullet_4, setBullet_4] = useState("");
    const [bullet_5, setBullet_5] = useState("");

    
    useEffect(() => {
        
        const fetchCareerData = async() => {
            init_api();
            const promise = API.get(`/api/career/${careerID}/`)
            promise.then((response) => {
                //setRes(response.data);
                res = response.data;
                setName(res.name);
                setBullet_1(res.bullet_1);
                setBullet_2(res.bullet_2);
                setBullet_3(res.bullet_3);
                setBullet_4(res.bullet_4);
                setBullet_5(res.bullet_5);
            });
        };

        


        fetchCareerData();

    });
    

    const test = () => {
        console.log(name);
    }
    
    //const name = res.name;
    
    return (
        <div className='root'> 
            
            <div className="title">
                <h1 data-testid = "CDB-Title"> {name} </h1>
                    <CloudComputing 
                    size={48}
                    strokeWidth={2}
                    color={'black'}
                    />
            </div>


            <div className= "progressAndText">
                <div className= "progressBar">
                    <Progress 
                    radius={"md"} 
                    size={"xl"} 
                    value = {50}></Progress>                
                </div>
                <p data-testid = "CBD-InterestScore"> 50% Interest Match! </p>
            </div>

            <div className="mainList">
                <List 
                size={"xl"}
                icon = {
                    <ShieldCheck 
                    size={48}
                    strokeWidth={2}
                    color={'green'}/>
                }
                data-testid = "CDB-List">
                    <List.Item> {bullet_1} </List.Item>
                    <List.Item> {bullet_2} </List.Item>
                    <List.Item> {bullet_3} </List.Item>
                    <List.Item icon ={
                        <ShieldX 
                        size={48}
                        strokeWidth={2}
                        color={'red'}/>
                        
                    }> {bullet_4} </List.Item>
                    <List.Item icon = {
                        <ShieldX 
                        size = {48}
                        strokeWidth = {2}
                        color = {'red'}/>
                    }> {bullet_5} </List.Item>
                </List>
            </div>


            <div className="refreshCollegeCards"> 

                    <h3 data-testid = "CDB-SideHead"> Our Personalized Picks: </h3>
            
                    <RefreshCardSection />

            </div>

            
                
            
           


           
            
           
        </div>

        
    );
};

export default CareerDynamicBox;

