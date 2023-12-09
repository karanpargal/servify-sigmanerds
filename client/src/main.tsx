import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { AnonAadhaarProvider } from 'anon-aadhaar-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { scrollSepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import App from './App.tsx';
import { ANON_AADHAAR_APP_ID, RAINBOWKIT_PROJECT_CONFIG } from './config.ts';
import './index.css';

const { chains, publicClient } = configureChains(
  [scrollSepolia],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: RAINBOWKIT_PROJECT_CONFIG.appName,
  projectId: RAINBOWKIT_PROJECT_CONFIG.projectId,
  chains,
});

// const connectors = connectorsForWallets([
//   {
//     groupName: 'Recommended',
//     wallets: [
//       oktoWallet({
//         chains,
//         projectId: '7438ad45e57979f3ff414f2b2a05a2fa',
//         walletConnectOptions: {
//           projectId: '7438ad45e57979f3ff414f2b2a05a2fa',
//           metadata: {
//             name: 'DAPP_NAME', //mandatory
//             description: 'DAPP_DESCRIPTION',
//             url: 'DAPP_URL',
//             icons: ['DAPP_ICON'],
//           },
//         },
//         walletConnectVersion: '2',
//       }),
//     ],
//   },
// ]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <AnonAadhaarProvider _appId={ANON_AADHAAR_APP_ID}>
          <App />
        </AnonAadhaarProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>,
);
