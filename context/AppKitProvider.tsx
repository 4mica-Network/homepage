'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider, type Config } from 'wagmi';
import { networks, projectId, wagmiAdapter } from '@/config/appkit';

const queryClient = new QueryClient();

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

const metadata = {
  name: '4Mica',
  description: '4Mica - Sub-second transactions across any blockchain',
  url: appUrl,
  icons: [`${appUrl}/icon.png`],
};

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  metadata,
  features: {
    analytics: true,
  },
});

type AppKitProviderProps = {
  children: React.ReactNode;
};

export default function AppKitProvider({ children }: AppKitProviderProps) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
