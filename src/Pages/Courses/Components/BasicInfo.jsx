import {CircleCheck, CircleX} from 'tabler-icons-react';

function BasicInfo() {

    return (
        <div style = {{
            position: 'relative',
            right: 175
        }}>
            <p style = {{
                fontSize: 24,
                fontWeight: 'bold',
                
            }}>Basic Info</p>

            <div style = {{
                marginTop: 50,
                display: 'flex',
                flexDirection: 'row'
            }}>

                <div>
                    <p style = {{
                        fontSize: 18
                    }}>Is this an AP course?</p>

                    <CircleCheck 
                    size = {60}
                    strokeWidth = {2}
                    color = "green" 
                    style = {{
                        position: 'relative',
                        left: 35,
                        top: 25
                    }}/>
                </div>

                <div style={{
                    marginLeft: 75
                }}>
                    <p style = {{
                        fontSize: 18
                    }}>Is this an honors course?</p>

                    <CircleX 
                    size = {60}
                    strokeWidth = {2}
                    color = "red"
                    style = {{
                        position: 'relative',
                        left: 60,
                        top: 25
                    }}/>
                </div>

                <div style = {{
                    marginLeft: 75
                }}>
                    <p style = {{
                        fontSize: 18
                    }}>Is this a duel enrollment course?</p>

                    <CircleX 
                    size={60}
                    strokeWidth = {2}
                    color = "red"
                    style = {{
                        position: 'relative',
                        left: 80,
                        top: 25
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;