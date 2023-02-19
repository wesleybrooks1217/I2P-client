
import { Paper } from "@mantine/core";
import "./Login.css";
import {TextInput, Button} from '@mantine/core';
import {useState} from 'react';
import {connect} from 'react-redux';
import {login} from '../../redux/users/userActions';
import store from '../../redux/store';
import {Navigate, useLocation} from 'react-router-dom';
import Nav from "../../Components/Nav/Nav";
import { init_api, API } from "../../API";
function Login({login}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false); 
    const [userID, setUserID] = useState({});

    const loginPressed = async() => {
        await login(email, password);

        if(store.getState().user.isAuthenticated) {
            //setAuth(true);
            // setUserID(store.getState().user.id); 
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
                    'Accept': 'application/json'
                }
            };

            init_api();
            await API.get('/auth/users/me/', config)
            .then((response) => {
                setUserID(response.data.id);
            });
            //console.log(store.getState().user.id);
            setAuth(true);
        }
    }

    const test = () => {
        console.log(store.getState().user.isAuthenticated);
    }

    return (
   
                    <div className="root-login">
                        <Nav />
                        {auth &&
                        <Navigate to = {`/MyCareer/${userID}`} />}
                        <h1>
                            Log in
                        </h1>

                        <div className="login-input-email">

                        
                            <TextInput
                            placeholder="email"
                            radius="lg"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.currentTarget.value)
                            }}
                            style={{
                                marginLeft: 100
                            }}/>
                    
                        </div>

                        <div className="login-input-password">

                            <TextInput
                            placeholder="password"
                            radius="lg"
                            value = {password}
                            onChange = {(event) => {
                                setPassword(event.currentTarget.value)
                            }}
                            style = {{marginLeft: 100}}/>

                        </div>

                        <div className="login-button">
                            <Button
                            variant="light"
                            onClick={loginPressed}
                            style = {{
                                marginRight: 90
                            }}>
                                Sign In
                            </Button>

                            
                        </div>


                    </div>
                
    );
};

export default connect(null, {login})(Login);