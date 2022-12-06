import { Bolt, Package } from 'tabler-icons-react';
import {Text, Card, Paper, Image, Avatar} from '@mantine/core';
import React from "react";

function Personalized() {
    return (
        <Card sx={{margin: '0 8em 0 auto',top: '20%', padding: 0, width: '24vw', height: '36em', backgroundImage: "url('https://images.unsplash.com/photo-1628965882741-570e75becd5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDB8MTM5NDczMnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')", backgroundSize: 'cover'}} withBorder shadow='lg' radius="md" >   

  <div style={{marginTop: '0%', position: 'relative', display: 'flex', flexDirection: 'column',  alignItems: 'center', justifyContent: 'center'}}>
  <Avatar mt={0} color="orange" style={{width: '100%', height: '14vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Bolt size={64} width={64} />
  </Avatar>
  <Paper shadow='md' style={{padding: '0 5px', marginTop: 10, width: '100%', height: '8.5vh', backgroundColor: 'white'}}>
  <h4 style={{ fontSize: '20px', textAlign: 'center', marginTop: 10, fontWeight: 400}}> Personalized picks to supplement student success.</h4>
  </Paper>
 
  </div>
 
 
       
      
 
    </Card>
      
    )
}


export default Personalized;