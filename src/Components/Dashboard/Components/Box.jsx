import { render } from '@testing-library/react';
import React, {useEffect} from 'react';
import {Container, Paper, Card } from '@mantine/core'
import "../dashboardstyles.css"
import MyNext4UClick from './MyNext4UClick';
function Box(props) {

    useEffect(() => {
        renderComponent()
    }, [props.state])
    
    function renderComponent() {
        if (props.item === "myNext4U") {
            return <MyNext4UClick />
        }
    }
 
   
    return (
        <Container sx={{width: '340px'}}>
        <Paper shadow="xs" p="md">
         Search Renderer
         {renderComponent}
       
        </Paper>
        </Container>

    )
}

export default Box;