'use client'
import { Carousel } from "@mantine/carousel";
import { ActionIcon, Button, Center, Checkbox, Container, Grid, Image, List, Radio, Text, Title } from "@mantine/core";
import { DateInput, DateTimePicker, TimeInput } from "@mantine/dates";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

export default function NewCleaningRequest() {
    return <Container>
        <Grid>
            <Grid.Col span={12}>
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
            <Grid.Col span={12}>
                <Center><Title order={2}>Availability</Title></Center>
            </Grid.Col>
            <Grid.Col span={11}></Grid.Col>
            <Grid.Col span={1}>
                <ActionIcon variant="outline" aria-label="Add New" style={{margin: '1rem'}}>
                    <IconPlus style={{ width: '70%', height: '70%'}} stroke={1.5} />
                </ActionIcon>
            </Grid.Col>
            <Grid.Col span={12}>
                <List listStyleType='none'>
                    <List.Item key={1}>
                        <Grid>
                        <Grid.Col span={3}>
                                <Text>From</Text>
                                <DateInput
                                    // value={value}
                                    // onChange={setValue}
                                    label="From Date"
                                    placeholder="From Date"
                                />
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <Text>To</Text>
                                <DateInput
                                    // value={value}
                                    // onChange={setValue}
                                    label="To Date"
                                    placeholder="To Date"
                                />
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <Text>From</Text>
                                <TimeInput
                                    // value={value}
                                    // onChange={setValue}
                                    label="From Time"
                                    placeholder="From Time"
                                />
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <Text>To</Text>
                                <TimeInput
                                    // value={value}
                                    // onChange={setValue}
                                    label="From Time"
                                    placeholder="From Time"
                                />
                            </Grid.Col>
                        </Grid>
                    </List.Item>
                </List>
            </Grid.Col>
            <Grid.Col span={12}>
                <Center><Title order={2}>Condition</Title></Center>
            </Grid.Col>
            <List listStyleType="none">
                <Grid>
                    <Grid.Col span={6}>
                        <List.Item key={1}>
                            <Radio label="Needs Light Work"/>
                        </List.Item>
                        <List.Item key={2}>
                            <Radio label="Cleaning will require folding up the sleeves"/>
                        </List.Item>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <List.Item key={3}>
                            <Radio label="It's not going to be easy"/>
                        </List.Item>
                        <List.Item key={4}>
                            <Radio label="House is a mess"/>
                        </List.Item>
                    </Grid.Col>
                </Grid>
            </List>
            <Grid.Col span={12}>
                <Center><Title order={2}>Service Requests</Title></Center>
            </Grid.Col>
            <Grid.Col span={12}>
                <List listStyleType="none">
                    <Grid>
                        <Grid.Col span={6}>
                            <List.Item key={1}>
                                <Checkbox defaultChecked label="Standard Clean"/>
                            </List.Item>
                            <List.Item key={2}>
                                <Checkbox defaultChecked label="Deep Clean"/>
                            </List.Item>
                            <List.Item key={2}>
                                <Checkbox defaultChecked label="Inside Fridge"/>
                            </List.Item>
                            <List.Item key={2}>
                                <Checkbox defaultChecked label="Blinds Clean"/>
                            </List.Item>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <List.Item key={3}>
                                <Checkbox defaultChecked label="Renovation Clean"/>
                            </List.Item>
                            <List.Item key={4}>
                                <Checkbox defaultChecked label="Airbnb Listing"/>
                            </List.Item>
                            <List.Item key={4}>
                                <Checkbox defaultChecked label="Inside Oven"/>
                            </List.Item>
                            <List.Item key={4}>
                                <Checkbox defaultChecked label="Sanitization"/>
                            </List.Item>
                        </Grid.Col>
                    </Grid>
                </List>
            </Grid.Col>
            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}>
                <Link href="/orders/place" style={{textDecoration: 'none'}}>
                    <Button color="blue" fullWidth mt="md" radius="md">Confirm</Button>
                </Link>
            </Grid.Col>
            <Grid.Col span={4}></Grid.Col>
        </Grid>
    </Container>
}