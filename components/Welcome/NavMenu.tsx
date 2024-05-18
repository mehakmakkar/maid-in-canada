import { AppShell, Menu, Text, rem } from "@mantine/core";
import { IconArrowsLeftRight, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconTrash } from "@tabler/icons-react";

export function NavMenu() {
    return <AppShell.Navbar p="md">
        <Menu shadow="md">
            <Menu.Label>Booking</Menu.Label>
            <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                Listings
            </Menu.Item>
            <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                Messages
            </Menu.Item>
            <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                Cleaning Requests
            </Menu.Item>
            <Menu.Item leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}>
                Order History
            </Menu.Item>
        </Menu>

    </AppShell.Navbar>
}