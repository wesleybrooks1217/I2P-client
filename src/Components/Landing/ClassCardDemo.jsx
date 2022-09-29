import React from 'react';
import {FileX, Search, Star} from 'tabler-icons-react'
import { Card, Container, Avatar, Image, Text, Badge, Button, Group } from '@mantine/core';

import CourseComponentStepper from './CourseCardStepper';
function ClassCardDemo() {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs" sx={{display: 'flex', justifyContent: 'center'}}>
        <Text weight={500}>AP Calculus AB</Text>
        <Button sx={{width: 100 }}>  <Search /> </Button>
      
        <Badge color="green" variant="light">
          Current Classes
        </Badge>
      </Group>
     <Container sx={{marginLeft: 0, marginRight: '2px', marginBottom: '15px', display: 'flex'}}>
       <Avatar sx={{marginRight: '8px'}}src={null} alt="Vitaly Rtishchev" color="violet">JR</Avatar>
          <Avatar sx={{marginRight: '8px'}} color="blue" radius="xl">
  <Star size={24} />
  </Avatar>
  <Avatar src={null} alt="Vitaly Rtishchev" color="orange">4</Avatar>
</Container>
      <CourseComponentStepper />
      <Text size="sm" color="dimmed">
        Students also search for:
      </Text>
      <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>AP Calculus BC</Badge>
      <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Calculus I</Badge>
      <Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Calculus II</Badge>
      <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Algebra II</Badge>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        View Course Page
      </Button>
    </Card>
  );
}

export default ClassCardDemo;