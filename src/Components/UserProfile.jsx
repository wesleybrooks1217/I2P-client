import React from 'react'
import { Avatar, Badge, Text } from '@mantine/core';
import './UserProfile.css'
import { Blockquote } from '@mantine/core';

function UserProfile() {
  return (
    <div className='username-container'>
      <div className='username-pfp'>
         <Avatar sx={{marginBottom: 5, width: 110, height: 60}}src={null} alt="no image here" color="indigo" />
          <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Freshman</Badge>
      </div>
    <Text> drakegriffith8 </Text>
   

    </div>
  )
}

export default UserProfile;