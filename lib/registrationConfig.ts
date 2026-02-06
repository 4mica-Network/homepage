import type { Chain } from 'viem/chains';
import { polygonAmoy, sepolia } from 'viem/chains';

export type RegistrationChainKey = 'sepolia' | 'polygonAmoy';
export type RegistrationAssetKey = 'native' | 'usdc' | 'usdt';

export type RegistrationAsset = {
  key: RegistrationAssetKey;
  label: string;
  symbol: string;
  decimals: number;
  type: 'native' | 'erc20';
  address?: `0x${string}`;
};

export type RegistrationChain = {
  key: RegistrationChainKey;
  id: number;
  label: string;
  shortLabel: string;
  viemChain: Chain;
  explorerUrl: string;
  coreContractAddress: `0x${string}` | '';
  assets: Record<RegistrationAssetKey, RegistrationAsset>;
  addChainParams: {
    chainId: `0x${string}`;
    chainName: string;
    nativeCurrency: { name: string; symbol: string; decimals: number };
    rpcUrls: string[];
    blockExplorerUrls: string[];
  };
};

const chainIdToHex = (chainId: number): `0x${string}` => `0x${chainId.toString(16)}`;

export const REGISTRATION_CONFIG: { chains: Record<RegistrationChainKey, RegistrationChain> } = {
  chains: {
    sepolia: {
      key: 'sepolia',
      id: 11155111,
      label: 'Ethereum Sepolia',
      shortLabel: 'Sepolia',
      viemChain: sepolia,
      explorerUrl: 'https://sepolia.etherscan.io',
      coreContractAddress:
        (process.env.NEXT_PUBLIC_4MICA_CORE_CONTRACT_SEPOLIA as `0x${string}` | undefined) ?? '',
      assets: {
        native: {
          key: 'native',
          label: 'Sepolia ETH',
          symbol: 'ETH',
          decimals: 18,
          type: 'native',
        },
        usdc: {
          key: 'usdc',
          label: 'USDC',
          symbol: 'USDC',
          decimals: 6,
          type: 'erc20',
          address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
        },
        usdt: {
          key: 'usdt',
          label: 'USDT',
          symbol: 'USDT',
          decimals: 6,
          type: 'erc20',
          address: '0xEDb85a5c17135B82966B686cCC9C28F42078f3E0',
        },
      },
      addChainParams: {
        chainId: chainIdToHex(11155111),
        chainName: 'Ethereum Sepolia',
        nativeCurrency: { name: 'Sepolia ETH', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://rpc.sepolia.org'],
        blockExplorerUrls: ['https://sepolia.etherscan.io'],
      },
    },
    polygonAmoy: {
      key: 'polygonAmoy',
      id: 80002,
      label: 'Polygon Amoy',
      shortLabel: 'Amoy',
      viemChain: polygonAmoy,
      explorerUrl: 'https://amoy.polygonscan.com',
      coreContractAddress:
        (process.env.NEXT_PUBLIC_4MICA_CORE_CONTRACT_AMOY as `0x${string}` | undefined) ?? '',
      assets: {
        native: {
          key: 'native',
          label: 'POL',
          symbol: 'POL',
          decimals: 18,
          type: 'native',
        },
        usdc: {
          key: 'usdc',
          label: 'USDC',
          symbol: 'USDC',
          decimals: 6,
          type: 'erc20',
          address: '0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582',
        },
        usdt: {
          key: 'usdt',
          label: 'USDT',
          symbol: 'USDT',
          decimals: 6,
          type: 'erc20',
          address: '0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582',
        },
      },
      addChainParams: {
        chainId: chainIdToHex(80002),
        chainName: 'Polygon Amoy',
        nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
        rpcUrls: ['https://rpc-amoy.polygon.technology'],
        blockExplorerUrls: ['https://amoy.polygonscan.com'],
      },
    },
  },
};
