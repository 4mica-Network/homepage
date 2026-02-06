import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { polygonAmoy, sepolia, type AppKitNetwork } from '@reown/appkit/networks';

const primaryProjectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const envProjectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;
const legacyProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

const resolvedProjectId = primaryProjectId ?? envProjectId ?? legacyProjectId;

if (!resolvedProjectId) {
  throw new Error(
    'Missing NEXT_PUBLIC_PROJECT_ID (or NEXT_PUBLIC_REOWN_PROJECT_ID / NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID). '
      + 'Add it to your environment before starting the app.'
  );
}

export const projectId: string = resolvedProjectId;

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  sepolia,
  polygonAmoy,
];

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
});
