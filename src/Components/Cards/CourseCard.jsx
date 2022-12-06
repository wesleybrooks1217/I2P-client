import { Card, Image, Text, Badge, Button, Group, Spoiler } from '@mantine/core';
import {useState} from 'react';
import {Navigate} from 'react-router';

function CourseCard(props) {

    const [leave, setLeave] = useState(false);

    const leavePage = () => {
        setLeave(true);
    }
    
    return (
        
            <div>
                {leave && 
                    <Navigate to={`/Colleges/${props.id}`} />
                }
            
                <Card shadow="sm" p="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image
                        src={props.img}
                        height={160}
                        alt="Norway"
                        />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{props.name}</Text>
                        
                    </Group>

                    <Badge color="pink" variant="light">
                        STEM
                    </Badge>

                    <Spoiler
                    maxHeight={36}
                    showLabel={"Show More"}
                    hideLabel={"Hide"}
                    style={{marginTop: "10px"}}>
                        {props.description}
                    </Spoiler>

                    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                    onClick={leavePage}>
                        View {props.type} Now
                    </Button>
                </Card>

            </div>
        
    );
};

export default CourseCard;