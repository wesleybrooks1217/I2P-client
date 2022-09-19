import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import React from 'react';


function ProductCards(props) {
  return (
    <Card sx={{maxWidth: '480px'}}shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src={props.src}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{props.title} </Text>
        <Badge color="pink" variant="light">
          {props.price}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {props.description}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Choose Plan
      </Button>
    </Card>
  );
}

export default ProductCards;
