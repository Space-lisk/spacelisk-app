'use client'

import React, { useEffect } from 'react'
// import { ThemeProvider } from "next-themes"
import AppProvider from "@/contexts/appContext";
import {
    getDefaultConfig,
    RainbowKitProvider,
    Chain,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import { ChakraProvider } from '@chakra-ui/react'

const lisk_sepolia = {
    id: 4202,
    name: 'Lisk sepolia',
    // iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Sepolia ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://rpc.sepolia-api.lisk.com/'] },
    },
    blockExplorers: {
        default: { name: 'blockscout', url: 'https://sepolia-blockscout.lisk.com/' },
    }
} as const satisfies Chain;

const config = getDefaultConfig({
    appName: 'Space lisk',
    projectId: 'd7eeb51a3b0af93b58b4d1a984dc8ae9',
    chains: [lisk_sepolia],
    ssr: true, // If your dApp uses server side rendering (SSR)
});

function Providers({ children }: {
    children: React.ReactNode
}) {
    const [mounted, setMounted] = React.useState(false);
    useEffect(() => setMounted(true), []);
    const queryClient = new QueryClient();
    return (
        <AppProvider>
            <ChakraProvider>
                <WagmiProvider config={config}>
                    <QueryClientProvider client={queryClient}>
                        <RainbowKitProvider>
                            {mounted && children}
                        </RainbowKitProvider>
                    </QueryClientProvider>
                </WagmiProvider>
            </ChakraProvider>
        </AppProvider>
    )
}

export default Providers