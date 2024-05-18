import { AppShell } from "@mantine/core";
import { NavMenu } from "./NavMenu";
import React, {ReactNode} from 'react';

export default function MicAppShell({children}: {children: ReactNode}) {
    return <AppShell
        header={{ height: 60 }}
        navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !true },
        }}
        padding="md"
    >
        <AppShell.Header>
        </AppShell.Header>

        <NavMenu />

        <AppShell.Main>
            {children}
        </AppShell.Main>
    </AppShell>;
}