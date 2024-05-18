"use client"

import { Welcome } from '../components/Welcome/Welcome';
import ListingsPage from '../components/Welcome/Listings';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { MantineEmotionProvider } from '@mantine/emotion';
import { AppShell, Burger, Center, MantineProvider, Text, Title } from '@mantine/core';
import { NavMenu } from '@/components/Welcome/NavMenu';

export default function HomePage() {
  return (
    <MantineEmotionProvider>
      <MantineProvider
          // withGlobalStyles
          // withNormalizeCSS
        >
          <AppShell
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
            <ListingsPage></ListingsPage>
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </MantineEmotionProvider>
  );
}
