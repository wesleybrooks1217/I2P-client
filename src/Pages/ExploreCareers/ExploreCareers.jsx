import { useEffect } from 'react';
import { useState } from 'react';
import {init_api, API} from '../../API';
import CourseCardList from '../../Components/CardList/CourseCardList';
import Nav from '../../Components/Nav/Nav';
import "./ExploreCareers.css"
import { init_api_onet, API_ONET } from '../../API_ONET';

function ExploreCareers() {

    const [data, setData] = useState([]);

    const courseIDs = [1,2,3,4,5,6];

    const  test = async() => {
        init_api();
        await API.get('/api/career/')
        .then((response) => {
            console.log(response.data);
        })
        
    }

    useEffect(() => {

        const getCourseInfo = async() => {
            
            /*
            init_api();
            var namesTemp = [];
            var descriptionsTemp = [];
            var ids = [];
            var mapped = [];
            for (var i = 0; i < courseIDs.length; i++) {
                await API.get(`/api/career/${courseIDs[i]}/`)
                .then((response) => {
                    console.log(response.data);
                    namesTemp.push(response.data.name);
                    descriptionsTemp.push(response.data.description);
                    ids.push(courseIDs[i]);
                });

                if (namesTemp.length === 3) {
                    mapped.push({
                        "names": namesTemp,
                        "descriptions": descriptionsTemp,
                        "ids": ids
                    });

                    namesTemp = [];
                    descriptionsTemp = [];
                    ids = [];
                }
            }

            const tempData = mapped.map((courseList) => {
                return (
                    <CourseCardList 
                    data = {{
                        "type": "career",
                        "names": courseList.names,
                        "descriptions": courseList.descriptions,
                        "ids": courseList.ids
                    }}/>
                );
            });

            setData(tempData);
            */


        }

        getCourseInfo();
    } , []);

    return (
        <div className='explore_careers_container'>
            <Nav />
            <div style = {{
                marginTop: 200,
                marginLeft: 675
            }}>

                <h1>Explore Careers</h1>
                <div style = {{
                    position: 'relative',
                    right: 175,
                    top: 50
                }}>
                    {data}
                </div>




            </div>

            <button onClick={test}>Test button</button>
        </div>
    );
};

export default ExploreCareers;