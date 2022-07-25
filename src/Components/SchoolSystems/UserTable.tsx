import React from 'react';
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  Container,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { ZoomIn, Mail, Filter } from 'tabler-icons-react';

interface UsersTableProps {
  data: { color: string, avatar: string; name: string; job: string; email: string; phone: string }[];
}
export default function UsersTable({ data }: UsersTableProps) {


      
  const theme = useMantineTheme();
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge
          color={item.color}
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
        >
          {item.job}
        </Badge>
      </td>
      <td>
        <Anchor<'a'> size="sm"href="#" onClick={(event) => event.preventDefault()}>
          {item.phone}
        </Anchor>
      </td>
      <td>
        <Text size="sm" color="gray">
          {item.email}
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <ZoomIn size={16} />
          </ActionIcon>
          <ActionIcon color="gray">
            <Mail size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{marginLeft: 'auto', marginRight: 'auto',textAlign: 'center', minWidth: 500, maxWidth: 900 }} verticalSpacing="sm">
        <thead>
          <tr>
            <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <th >Students - AP Biology </th>
            <ActionIcon>
            <Filter size={16} />
            </ActionIcon>
                </Container>
            <th>Career Interest</th>
         
            <th>Top Colleges</th>
            <th>Status</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}