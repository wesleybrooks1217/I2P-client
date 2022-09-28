import { render } from '@testing-library/react';
import React, {useEffect} from 'react';
import {Container, Paper, Card } from '@mantine/core'
import "../dashboardstyles.css"
import MyCardsContainer from './MyCardsContainer';
import MyMissionsContainer from './MyMissionsContainer';
import MyComponentsContainer from './MyComponentsContainer';
import MyMeritsContainer from './MyMeritsContainer';
import MyMaterialsContainer from './MyMaterialsContainer';
function Box(props) {

    useEffect(() => {
       
    }, [props.nameBox])
    
    return (
        <Container sx={{width: '300px'}}>
        <Paper shadow="xs" p="md">
                
         {props.nameBox == "myComponents" ? <MyComponentsContainer /> :
          props.nameBox == "myMissions" ? <MyMissionsContainer /> :
          props.nameBox == "myCards" ? <MyCardsContainer /> : 
          props.nameBox == "myMerits" ? <MyMeritsContainer /> :
          props.nameBox == "myMaterials" ? <MyMaterialsContainer /> : <MyCardsContainer />}
       
        </Paper>
        </Container>

    )
}


export default Box;