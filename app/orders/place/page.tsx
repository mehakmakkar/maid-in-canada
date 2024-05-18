'use client'
import { Button, Center, Container, Grid, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
export default function PlaceOrderPage() {
    return <Container>
        <Grid>
            <Grid.Col span={12}><Center><Title>Order Summary</Title></Center></Grid.Col>

            <Grid.Col span={6}>
                Charges
            </Grid.Col>
            <Grid.Col span={3} />
            <Grid.Col span={3}>
                <Text>105</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                Promo (Referral)
            </Grid.Col>
            <Grid.Col span={3} />
            <Grid.Col span={3}>
                <Text>20</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                Subtotal
            </Grid.Col>
            <Grid.Col span={3} />
            <Grid.Col span={3}>
                <Text>85</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                Taxes and Service Charge
            </Grid.Col>
            <Grid.Col span={3} />
            <Grid.Col span={3}>
                <Text>35</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                Total
            </Grid.Col>
            <Grid.Col span={3} />
            <Grid.Col span={3}>
                <Text>120</Text>
            </Grid.Col>

            <Grid.Col span={4}></Grid.Col>
            <Grid.Col span={4}>
                <Link href="/orders/place" style={{textDecoration: 'none'}}>
                    <Button color="blue" fullWidth mt="md" radius="md">Place Order</Button>
                </Link>
            </Grid.Col>
            <Grid.Col span={4}></Grid.Col>

        </Grid>

    </Container>
}