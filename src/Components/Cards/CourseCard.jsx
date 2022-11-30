import { Card, Image, Text, Badge, Button, Group, Spoiler } from '@mantine/core';


function CourseCard(props) {

    return (
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

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                View Course Now
            </Button>
        </Card>
    );
};

export default CourseCard;