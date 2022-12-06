import Nav from "../../Components/Nav/Nav";
import BasicInfo from "./Components/BasicInfo";
import CourseDescriptionPop from "../../Components/MyCourses/Helpers/CourseDescriptionPop";
import TypicalUnits from "./Components/TypicalUnits";
import Resources from "./Components/Resources";
import CourseCardList from "../../Components/CardList/CourseCardList";

function Courses() {

    return (
        <div>
            <Nav />

            <div style = {{
                marginTop: 150,
                marginLeft: 650
            }}>
                <h1 style = {{
                    fontSize: 48
                }}>AP Chemistry</h1>

                <div style = {{
                    position: 'relative',
                    right: 350,
                    marginTop: 100
                }}>
                    <CourseDescriptionPop />
                </div>

                <div style = {{
                    marginTop: 100,
                    position: 'relative',
                    right: 170
                }}>
                    <BasicInfo />
                </div>

                <div style = {{
                    marginTop: 100,
                    position: 'relative',
                    right: 340
                }}>
                    <TypicalUnits />
                </div>

                <div style = {{
                    marginTop: 200,
                    position: 'relative',
                    right: 340
                }}>
                    <Resources />
                </div>

                <div style = {{
                    marginTop: 200,
                    position: 'relative',
                    right: 340
                }}>
                    <p style = {{fontSize: 24, fontWeight: 'bold'}}>Similar Courses</p>

                    <CourseCardList 
                    data = {{
                        "names": ["AP Biology", "AP Physics 1", "Duel Enrollment Chemistry 2"],
                        "descriptions": ["Test 1", "Test 2", "Test 3"],
                        "type": "course",
                        "ids": [1,2,3]
                    }}/>
                    
                </div>

            </div>
        </div>
    );
};

export default Courses;