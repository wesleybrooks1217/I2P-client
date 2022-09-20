import React from 'react'
import {Card, Grid} from '@mantine/core';
import CollegeCard from '../../GlobalComponents/CollegeCard';
import './myColleges.css';

function FillerSection() {
    return (
        <Card className='colleges-container' shadow="sm" p="lg" radius="md" withBorder>
        <Grid>
        <Grid.Col span={4}>
            <CollegeCard name='Harlon'
            acceptanceRate='80%'
            id='4'/>
        </Grid.Col>
      <Grid.Col span={4}>
            <CollegeCard />
      </Grid.Col>
      <Grid.Col span={4}>
            <CollegeCard />
      </Grid.Col>
            </Grid>
            </Card>
    )
}

export default FillerSection;