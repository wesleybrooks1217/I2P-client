import React from 'react';
import "./myColleges.css"
import { Card, Grid, Image, Text, Badge, Button, Group } from '@mantine/core';

function TopTab() {
  return (
    <Card className='card-container' shadow="sm" p="lg" radius="md" withBorder>
       <Grid>
      <Grid.Col span={6}>
      <Button sx={{height: '140px'}}variant="light" color="blue" fullWidth mt="md" radius="md">
        View MyLikedList
      </Button>
      </Grid.Col>
      <Grid.Col span={6}>
      <Button sx={{height: '140px'}} variant="light" color="blue" fullWidth mt="md" radius="md">
        MyCourses
      </Button>
      </Grid.Col>
      <Grid.Col span={6}>
      <Button sx={{height: '140px'}} variant="light" color="blue" fullWidth mt="md" radius="md">
        All Achievments
      </Button>
      </Grid.Col>
      <Grid.Col span={6}>
      <Button sx={{height: '140px'}} variant="light" color="blue" fullWidth mt="md" radius="md">
        MyCareers
      </Button>
      </Grid.Col>
    </Grid>

      
    </Card>
  );
}

export default TopTab;