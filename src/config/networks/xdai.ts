import xDaiLogo from 'src/config/assets/token_xdai.svg'
import {
  EnvironmentSettings,
  ETHEREUM_LAYER,
  ETHEREUM_NETWORK,
  FEATURES,
  NetworkConfig,
  WALLETS,
} from 'src/config/networks/network.d'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://safe-client.xdai.gnosis.io/v1',
  txServiceUrl: 'https://safe-transaction.xdai.gnosis.io/api/v1',
  safeUrl: 'https://xdai.gnosis-safe.io/app',
  gasPrice: 1e9,
  rpcServiceUrl: 'https://dai.poa.network/',
  safeAppsRpcServiceUrl: 'https://dai.poa.network/',
  networkExplorerName: 'Blockscout',
  networkExplorerUrl: 'https://blockscout.com/poa/xdai',
  networkExplorerApiUrl: 'https://blockscout.com/poa/xdai/api',
}

const xDai: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
      safeUrl: 'https://safe-team-xdai.staging.gnosisdev.com/app/',
    },
    staging: {
      ...baseConfig,
      safeUrl: 'https://safe-team-xdai.staging.gnosisdev.com/app/',
    },
    production: {
      ...baseConfig,
    },
  },
  network: {
    id: ETHEREUM_NETWORK.XDAI,
    backgroundColor: '#48A8A6',
    textColor: '#ffffff',
    label: 'xDai',
    isTestNet: false,
    ethereumLayer: ETHEREUM_LAYER.L2,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'xDai',
      symbol: 'xDai',
      decimals: 18,
      logoUri: xDaiLogo,
    },
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.LEDGER,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP],
}

export default xDai
