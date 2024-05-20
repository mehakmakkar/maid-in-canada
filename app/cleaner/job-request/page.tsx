'use client'

import { Carousel } from "@mantine/carousel";
import { Button, Center, Container, Divider, Grid, Image, Input, List, Paper, Radio, RingProgress, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";

export default function JobRequestPage() {
    return <Container>
        <Grid>
            <Grid.Col span={12}>
                <Center>
                    <Title order={2}>New Job Request</Title>
                </Center>
            </Grid.Col>

            <Grid.Col span={2}></Grid.Col>
            <Grid.Col span={8}>
                <Carousel withIndicators height={400} loop={true}>
                    <Carousel.Slide>
                        <Image radius="md" src="/images/room1.webp" height='100%'/>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image radius="md" src="/images/living-room.webp" height='100%' />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image radius="md" src="/images/main-bathroom.webp" height='100%' />
                    </Carousel.Slide>
                </Carousel>
            </Grid.Col>
            <Grid.Col span={2}></Grid.Col>
            <Grid.Col span={6}>
                <Text>Distance</Text>
            </Grid.Col>
            <Grid.Col span={1} />
            <Grid.Col span={5}>
                <Text>10 mins</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <Text>Time</Text>
            </Grid.Col>
            <Grid.Col span={1} />
            <Grid.Col span={5}>
                <Text>187 minutes</Text>
            </Grid.Col>


            <Grid.Col span={12}>
                <Center><Title order={3}>Pick Time</Title></Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Stack>
                    <List listStyleType="none">
                        <List.Item key={1}>
                            <Radio defaultChecked label="2024-01-01 12:15PM - 3:15PM"/>
                        </List.Item>
                        <List.Item key={1}>
                            <Radio label="2024-01-02 12:15PM - 3:15PM"/>
                        </List.Item>
                        <List.Item key={2}>
                            <Radio label="2024-01-03 12:15PM - 3:15PM"/>
                        </List.Item>
                        <List.Item key={3}>
                            <Radio label="2024-01-04 12:15PM - 3:15PM"/>
                        </List.Item>
                    </List>
                </Stack>
            </Grid.Col>


            <Grid.Col span={12}>
                <Center><Title order={3}>Special Requests</Title></Center>
            </Grid.Col>

            <Grid.Col span={12}>
                <Paper shadow="xs" p="xl">
                    <Text>Can you please take care of the dirty under the bed</Text>
                    <Text>
                        Also, we need deep vacumming inside the cabinets
                    </Text>
                </Paper>
            </Grid.Col>
            
            <Grid.Col span={12}>
                <Center><Title order={3}>Remaining Time</Title></Center>
            </Grid.Col>
            
            <Grid.Col span={12}>
                <Center>
                    <RingProgress
                        label={
                            <Text size="xs" ta="center">04:19</Text>
                        }
                        sections={[
                            { value: 30, color: 'red' },
                            // { value: 70, color: 'blue' },
                        ]}
                    />
                </Center>
            </Grid.Col>

            <Grid.Col span={5}>
                <Divider my="md"/>
            </Grid.Col>
            <Grid.Col span={2}>
                <Text style={{fontSize: '3rem'}}>$105</Text>
            </Grid.Col>
            <Grid.Col span={5}>
                <Divider my="md"/>
            </Grid.Col>

            <Grid.Col span={3}></Grid.Col>
            <Grid.Col span={3}>
                <Link href="/cleaners/job-request/confirm" style={{textDecoration: 'none'}}>
                    <Button color="blue" fullWidth mt="md" radius="md">Confirm</Button>
                </Link>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={3}>
                <Link href="/cleaners/job-request/confirm" style={{textDecoration: 'none'}}>
                    <Button color="blue" fullWidth mt="md" radius="md">Reject</Button>
                </Link>
            </Grid.Col>
        </Grid>
        

    </Container>;
}