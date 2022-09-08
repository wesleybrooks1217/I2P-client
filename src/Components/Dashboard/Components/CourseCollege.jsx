import React, {useState} from 'react';
import { Container, Text, Stack, Title, Grid, Button } from '@mantine/core';
import { nanoid } from 'nanoid';
import { ChevronDown } from 'tabler-icons-react'
function MyList(props) {

    return (
        <Container sx={{ margin: '0', height: '350px', display: 'flex'}}>
            
            
      

       
        <Container sx={{ width: '120px', backgroundColor: '#edf2f4', textAlign: 'center'}} > 
        <Title mt={20} sx={{}}order={3}> <b> MyClasses </b> </Title>
        <Stack mr={20} mt={35}  sx={{alignItems: 'center', justifyContent:'center'}}>
            {props.missions}
            <Button> College1 </Button>
            <Button> College2 </Button>
            <Button> College1 </Button>
            <Button> College2 </Button>
            <ChevronDown />
        </Stack>
        </Container>
        <Container  sx={{ backgroundColor: '#edf2f4'}} > 
        <Title mt={20} sx={{}} order={3}> <b> MyColleges </b> </Title>
        <Stack mr={20} mt={35} sx={{alignItems: 'center', justifyContent:'center'}}>
            {props.missions}
            <Button> College1 </Button>
            <Button> College2 </Button>
            <Button> College1 </Button>
            <Button> College2 </Button>
            <ChevronDown />
        </Stack>
        </Container>
        </Container>
        

    )
}

export default MyList;