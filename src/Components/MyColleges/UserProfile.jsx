import React from 'react'
import { Avatar, Badge, Text } from '@mantine/core';
import './myColleges.css'

function UserProfile() {
  return (
    <div className='username-container'>
    <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Freshman</Badge>
    <Avatar sx={{width: 70, height: 50}}src={null} alt="no image here" color="indigo" />
    <Text> drakegriffith8 </Text>
    </div>
  )
}

export default UserProfile;