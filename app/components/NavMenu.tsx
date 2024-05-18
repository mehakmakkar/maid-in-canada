// 'use client'
import { AppShell, Menu, Text, rem } from "@mantine/core";
import { IconArrowsLeftRight, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconTrash } from "@tabler/icons-react";
import Link from 'next/link'

export function NavMenu() {

    return <AppShell.Navbar p="md">
        <Menu shadow="md">
            <Menu.Label>Booking</Menu.Label>
            <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />} >
                <Link href="/listings">Listings</Link>
            </Menu.Item>
            <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                <Link href="/messages">Messages</Link>
            </Menu.Item>
            <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                <Link href="/cleaning-requests">Cleaning Requests</Link>
            </Menu.Item>
            <Menu.Item leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}>
                <Link href="/order-history">Order History</Link>
            </Menu.Item>
        </Menu>

    </AppShell.Navbar>
}