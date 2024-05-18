import { useState } from 'react';
import {Container, Title, Text, Image, Badge, Group, Card, Button, ActionIcon, Grid, List } from '@mantine/core';
import { createStyles, Global } from '@mantine/emotion';
import { IconSearch, IconLayoutGrid, IconPlus, IconEdit } from '@tabler/icons-react';
import { css } from '@emotion/react';

const useStyles = createStyles((theme) => ({
    listItem: {
        '& > div': {
            display: 'flex',
        },
        '& > div > span': {
            width: '80%'
        }
    },
}));

export default function ListingsPage() {
  const { classes } = useStyles();
  const [listings, setListings] = useState([
    {
      id: 1,
      title: 'Double suite - single room with small bed',
      location: 'Mission, BC',
      image: '/images/room1.webp',
    },
    {
      id: 2,
      title: 'Full Home with all the rooms',
      location: 'Mission, BC',
      image: '/images/room2.webp',
    },
  ]);

  return (
    <Container>
        <Grid>
            <Grid.Col span={6}>
                <Title>Your Listings</Title>
            </Grid.Col>
            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={3}>
            <ActionIcon variant="filled" aria-label="Search" style={{margin: '1rem'}}>
                <IconSearch style={{ width: '70%', height: '70%'}} stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="filled" aria-label="Add New" style={{margin: '1rem'}}>
                <IconPlus style={{ width: '70%', height: '70%'}} stroke={1.5} />
            </ActionIcon>
            </Grid.Col>
        </Grid>
        <List listStyleType='none'>
            {listings.map((listing) =>
                <List.Item key={listing.id} style={{margin: '1rem 0rem'}} className={classes.listItem}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                            src={listing.image}
                            height={160}
                            alt={listing.title}
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>{listing.title}</Text>
                            <ActionIcon variant="outline" aria-label="Add New" style={{margin: '1rem'}}>
                                <IconEdit style={{ width: '70%', height: '70%'}} stroke={1.5} />
                            </ActionIcon>
                        </Group>

                        <Button color="blue" fullWidth mt="md" radius="md">
                            Book Cleaning
                        </Button>
                        </Card>
                </List.Item>
            )}
        </List>
    </Container>
    // <Container size="md" style={{justify:"center"}}>
    //   <header className={classes.header}>
    //     <Title order={2}>Your listings</Title>
    //     <Group className={classes.iconButtons}>
    //       <ActionIcon size="lg">
    //         <IconSearch size={20} />
    //       </ActionIcon>
    //       <ActionIcon size="lg">
    //         <IconLayoutGrid size={20} />
    //       </ActionIcon>
    //       <ActionIcon size="lg">
    //         <IconPlus size={20} />
    //       </ActionIcon>
    //     </Group>
    //   </header>
    //   <Grid>
    //     {listings.map((listing) => (
    //       <Grid.Col key={listing.id} span={{base: 8}} style={{justify: "center", align: "center"}}>
    //         <Card shadow="sm" padding="lg" className={classes.card}>
    //           <Card.Section>
    //             <Image src={listing.image} height={160} className={classes.image} alt={listing.title} />
    //           </Card.Section>
    //           <Text  mt="md">{listing.title}</Text>
    //           <Text size="sm" color="dimmed">{listing.location}</Text>
    //         </Card>
    //       </Grid.Col>
    //     ))}
    //   </Grid>
    // </Container>
  );
}
