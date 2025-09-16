import {
  ChainId,
  Currency,
  Ether,
  NativeCurrency,
  Token,
} from "@uniswap/sdk-core";

// WIP: Gnosis, Moonbeam
export const SUPPORTED_CHAINS: ChainId[] = [
  ChainId.MAINNET,
  ChainId.OPTIMISM,
  ChainId.OPTIMISM_GOERLI,
  ChainId.OPTIMISM_SEPOLIA,
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.ARBITRUM_SEPOLIA,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
  ChainId.SEPOLIA,
  ChainId.CELO_ALFAJORES,
  ChainId.CELO,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.BASE,
  ChainId.BLAST,
  ChainId.ZORA,
  ChainId.ZKSYNC,
  ChainId.WORLDCHAIN,
  ChainId.UNICHAIN,
  ChainId.UNICHAIN_SEPOLIA,
  ChainId.MONAD_TESTNET,
  ChainId.BASE_SEPOLIA,
  ChainId.SONEIUM,
  ChainId.GOERLI,
  ChainId.MOONBEAM,
  ChainId.ZKSYNC,
  ChainId.LENS,
  ChainId.GNOSIS,
  ChainId.XLAYER,
  ChainId.BOB,
  ChainId.LISK,
  ChainId.ZKLINK,
  ChainId.TAIKO,
  ChainId.SEI,
  ChainId.MANTLE,
  ChainId.SEI_TESTNET,
  ChainId.LINEA,
  ChainId.MANTA,
  ChainId.POLYGON_ZKEVM,
  ChainId.FILECOIN,
  ChainId.ROOTSTOCK,
  ChainId.SCROLL,
  ChainId.BOBA,
  ChainId.CORN,
  ChainId.ETHERLINK,
  ChainId.METAL,
  ChainId.SONIC,
  ChainId.XDC,
  ChainId.LIGHTLINK,
  ChainId.GOAT,
  ChainId.REDBELLY,
  ChainId.SAGA,
  ChainId.TELOS,
  ChainId.HEMI,
  ChainId.NIBIRU,
  ChainId.MATCHAIN,
  ChainId.PLASMA,
];

export const V2_SUPPORTED = [
  ChainId.MAINNET,
  ChainId.SEPOLIA,
  ChainId.ARBITRUM_ONE,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.BASE,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.MONAD_TESTNET,
  ChainId.UNICHAIN_SEPOLIA,
  ChainId.UNICHAIN,
  ChainId.SONEIUM,
];

export const V4_SUPPORTED = [
  ChainId.MAINNET,
  ChainId.SEPOLIA,
  ChainId.ARBITRUM_ONE,
  ChainId.OPTIMISM,
  ChainId.POLYGON,
  ChainId.BASE,
  ChainId.BNB,
  ChainId.AVALANCHE,
  ChainId.MONAD_TESTNET,
  ChainId.UNICHAIN_SEPOLIA,
  ChainId.UNICHAIN,
  ChainId.SONEIUM,
];

export const MIXED_SUPPORTED = [
  ChainId.MAINNET,
  ChainId.SEPOLIA,
  ChainId.GOERLI,
  ChainId.BASE,
  ChainId.UNICHAIN,
  ChainId.BASE,
  ChainId.ARBITRUM_ONE,
  ChainId.POLYGON,
  ChainId.OPTIMISM,
  ChainId.AVALANCHE,
  ChainId.BNB,
  ChainId.WORLDCHAIN,
  ChainId.ZORA,
  ChainId.SONEIUM,
];

export const MIXED_CROSS_LIQUIDITY_V3_AGAINST_V4_SUPPORTED = [ChainId.BASE];

export const HAS_L1_FEE = [
  ChainId.OPTIMISM,
  ChainId.OPTIMISM_GOERLI,
  ChainId.OPTIMISM_SEPOLIA,
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.ARBITRUM_SEPOLIA,
  ChainId.BASE,
  ChainId.BASE_GOERLI,
  ChainId.BLAST,
  ChainId.ZORA,
  ChainId.WORLDCHAIN,
  ChainId.UNICHAIN_SEPOLIA,
  ChainId.MONAD_TESTNET,
  ChainId.UNICHAIN,
  ChainId.SONEIUM,
];

export const NETWORKS_WITH_SAME_UNISWAP_ADDRESSES = [
  ChainId.MAINNET,
  ChainId.GOERLI,
  ChainId.OPTIMISM,
  ChainId.ARBITRUM_ONE,
  ChainId.POLYGON,
  ChainId.POLYGON_MUMBAI,
];

export const ID_TO_CHAIN_ID = (id: number): ChainId => {
  switch (id) {
    case 1:
      return ChainId.MAINNET;
    case 5:
      return ChainId.GOERLI;
    case 11155111:
      return ChainId.SEPOLIA;
    case 56:
      return ChainId.BNB;
    case 10:
      return ChainId.OPTIMISM;
    case 420:
      return ChainId.OPTIMISM_GOERLI;
    case 11155420:
      return ChainId.OPTIMISM_SEPOLIA;
    case 42161:
      return ChainId.ARBITRUM_ONE;
    case 421613:
      return ChainId.ARBITRUM_GOERLI;
    case 421614:
      return ChainId.ARBITRUM_SEPOLIA;
    case 137:
      return ChainId.POLYGON;
    case 80001:
      return ChainId.POLYGON_MUMBAI;
    case 42220:
      return ChainId.CELO;
    case 44787:
      return ChainId.CELO_ALFAJORES;
    case 100:
      return ChainId.GNOSIS;
    case 1284:
      return ChainId.MOONBEAM;
    case 43114:
      return ChainId.AVALANCHE;
    case 8453:
      return ChainId.BASE;
    case 84531:
      return ChainId.BASE_GOERLI;
    case 84532:
      return ChainId.BASE_SEPOLIA;
    case 81457:
      return ChainId.BLAST;
    case 7777777:
      return ChainId.ZORA;
    case 324:
      return ChainId.ZKSYNC;
    case 480:
      return ChainId.WORLDCHAIN;
    case 1301:
      return ChainId.UNICHAIN_SEPOLIA;
    case 10143:
      return ChainId.MONAD_TESTNET;
    case 130:
      return ChainId.UNICHAIN;
    case 1868:
      return ChainId.SONEIUM;
    case 288:
      return ChainId.BOBA;
    case 232:
      return ChainId.LENS;
    case 196:
      return ChainId.XLAYER;
    case 60808:
      return ChainId.BOB;
    case 1135:
      return ChainId.LISK;
    case 810180:
      return ChainId.ZKLINK;
    case 167000:
      return ChainId.TAIKO;
    case 1329:
      return ChainId.SEI;
    case 5000:
      return ChainId.MANTLE;
    case 713715:
      return ChainId.SEI_TESTNET;
    case 59144:
      return ChainId.LINEA;
    case 169:
      return ChainId.MANTA;
    case 1101:
      return ChainId.POLYGON_ZKEVM;
    case 314:
      return ChainId.FILECOIN;
    case 30:
      return ChainId.ROOTSTOCK;
    case 534352:
      return ChainId.SCROLL;
    case 21000000:
      return ChainId.CORN;
    case 42793:
      return ChainId.ETHERLINK;
    case 1750:
      return ChainId.METAL;
    case 146:
      return ChainId.SONIC;
    case 50:
      return ChainId.XDC;
    case 1890:
      return ChainId.LIGHTLINK;
    case 2345:
      return ChainId.GOAT;
    case 151:
      return ChainId.REDBELLY;
    case 5464:
      return ChainId.SAGA;
    case 40:
      return ChainId.TELOS;
    case 43111:
      return ChainId.HEMI;
    case 6900:
      return ChainId.NIBIRU;
    case 698:
      return ChainId.MATCHAIN;
    case 9745:
      return ChainId.PLASMA;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export enum ChainName {
  MAINNET = "mainnet",
  GOERLI = "goerli",
  SEPOLIA = "sepolia",
  OPTIMISM = "optimism-mainnet",
  OPTIMISM_GOERLI = "optimism-goerli",
  OPTIMISM_SEPOLIA = "optimism-sepolia",
  ARBITRUM_ONE = "arbitrum-mainnet",
  ARBITRUM_GOERLI = "arbitrum-goerli",
  ARBITRUM_SEPOLIA = "arbitrum-sepolia",
  POLYGON = "polygon-mainnet",
  POLYGON_MUMBAI = "polygon-mumbai",
  CELO = "celo-mainnet",
  CELO_ALFAJORES = "celo-alfajores",
  GNOSIS = "gnosis-mainnet",
  MOONBEAM = "moonbeam-mainnet",
  BNB = "bnb-mainnet",
  AVALANCHE = "avalanche-mainnet",
  BASE = "base-mainnet",
  BASE_GOERLI = "base-goerli",
  BASE_SEPOLIA = "base-sepolia",
  BLAST = "blast-mainnet",
  ZORA = "zora-mainnet",
  ZKSYNC = "zksync-mainnet",
  WORLDCHAIN = "worldchain-mainnet",
  UNICHAIN_SEPOLIA = "unichain-sepolia",
  UNICHAIN = "unichain-mainnet",
  MONAD_TESTNET = "monad-testnet",
  SONEIUM = "soneium-mainnet",
  LENS = "lens",
  XLAYER = "xlayer",
  BOB = "bob",
  LISK = "lisk",
  ZKLINK = "zklink",
  TAIKO = "taiko",
  SEI = "sei",
  MANTLE = "mantle",
  SEI_TESTNET = "sei-testnet",
  LINEA = "linea",
  MANTA = "manta-pacific",
  POLYGON_ZKEVM = "polygon-zkevm",
  FILECOIN = "filecoin",
  ROOTSTOCK = "rootstock",
  SCROLL = "scroll",
  BOBA = "boba-mainnet",
  CORN = "corn",
  ETHERLINK = "etherlink",
  METAL = "metal",
  SONIC = "sonic",
  XDC = "xdc",
  LIGHTLINK = "lightlink",
  GOAT = "goat",
  REDBELLY = "redbelly",
  SAGA = "saga",
  TELOS = "telos",
  HEMI = "hemi",
  NIBIRU = "nibiru",
  MATCHAIN = "matchain",
  PLASMA = "plasma",
}

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = "ETH",
  MATIC = "MATIC",
  CELO = "CELO",
  GNOSIS = "XDAI",
  MOONBEAM = "GLMR",
  ZKSYNC = "ETH",
  BNB = "BNB",
  AVALANCHE = "AVAX",
  MONAD = "MON",
  LENS = "GHO",
  XLAYER = "OKB",
  BOB = "ETH",
  LISK = "ETH",
  ZKLINK = "ETH",
  TAIKO = "ETH",
  SEI = "SEI",
  MANTLE = "MNT",
  SEI_TESTNET = "SEI",
  LINEA = "ETH",
  BLAST = "ETH",
  MANTA = "ETH",
  POLYGON_ZKEVM = "ETH",
  FILECOIN = "FIL",
  ROOTSTOCK = "RBTC",
  SCROLL = "ETH",
  BOBA = "BOBA",
  CORN = "BTCN",
  ETHERLINK = "XTZ",
  METAL = "ETH",
  SONIC = "SONIC",
  XDC = "XDC",
  WORLDCHAIN = "ETH",
  LIGHTLINK = "ETH",
  GOAT = "BTC",
  REDBELLY = "RBNT",
  SAGA = "GAS",
  TELOS = "TLOS",
  HEMI = "ETH",
  NIBIRU = "NIBI",
  UNICHAIN = "ETH",
  MATCHAIN = "BNB",
  PLASMA = "XPL",
}

export const NATIVE_NAMES_BY_ID: { [chainId: number]: string[] } = {
  [ChainId.MAINNET]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.GOERLI]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.SEPOLIA]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.OPTIMISM]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.OPTIMISM_GOERLI]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.OPTIMISM_SEPOLIA]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.ARBITRUM_ONE]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.ARBITRUM_GOERLI]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.ARBITRUM_SEPOLIA]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.POLYGON]: ["MATIC", "0x0000000000000000000000000000000000001010"],
  [ChainId.POLYGON_MUMBAI]: [
    "MATIC",
    "0x0000000000000000000000000000000000001010",
  ],
  [ChainId.CELO]: ["CELO"],
  [ChainId.CELO_ALFAJORES]: ["CELO"],
  [ChainId.GNOSIS]: ["XDAI"],
  [ChainId.MOONBEAM]: ["GLMR"],
  [ChainId.BNB]: ["BNB", "BNB", "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
  [ChainId.AVALANCHE]: [
    "AVAX",
    "AVALANCHE",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.BASE]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.BLAST]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.ZORA]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.ZKSYNC]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.WORLDCHAIN]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.UNICHAIN_SEPOLIA]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.MONAD_TESTNET]: [
    "MON",
    "MONAD",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.BASE_SEPOLIA]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.UNICHAIN]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.SONEIUM]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.MOONBEAM]: ["GLMR"],
  [ChainId.ZKSYNC]: ["ETH"],
  [ChainId.LENS]: ["GHO"],
  [ChainId.XLAYER]: ["OKB"],
  [ChainId.BOB]: ["ETH"],
  [ChainId.LISK]: ["ETH"],
  [ChainId.ZKLINK]: ["ETH"],
  [ChainId.TAIKO]: ["ETH"],
  [ChainId.SEI]: ["SEI"],
  [ChainId.MANTLE]: ["MNT"],
  [ChainId.SEI_TESTNET]: ["SEI"],
  [ChainId.LINEA]: ["ETH"],
  [ChainId.MANTA]: ["ETH"],
  [ChainId.POLYGON_ZKEVM]: ["ETH"],
  [ChainId.FILECOIN]: ["FIL"],
  [ChainId.ROOTSTOCK]: ["RBTC"],
  [ChainId.SCROLL]: ["ETH"],
  [ChainId.BOBA]: [
    "ETH",
    "ETHER",
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  ],
  [ChainId.CORN]: ["BTCN"],
  [ChainId.ETHERLINK]: ["XTZ"],
  [ChainId.METAL]: ["ETH"],
  [ChainId.SONIC]: ["SONIC"],
  [ChainId.XDC]: ["XDC"],
  [ChainId.WORLDCHAIN]: ["ETH"],
  [ChainId.LIGHTLINK]: ["ETH"],
  [ChainId.GOAT]: ["BTC"],
  [ChainId.REDBELLY]: ["RBNT"],
  [ChainId.SAGA]: ["GAS"],
  [ChainId.TELOS]: ["TLOS"],
  [ChainId.HEMI]: ["ETH"],
  [ChainId.NIBIRU]: ["NIBI"],
  [ChainId.MATCHAIN]: ["BNB"],
  [ChainId.PLASMA]: ["XPL"],
};

export const NATIVE_CURRENCY: { [chainId: number]: NativeCurrencyName } = {
  [ChainId.MAINNET]: NativeCurrencyName.ETHER,
  [ChainId.GOERLI]: NativeCurrencyName.ETHER,
  [ChainId.SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.OPTIMISM]: NativeCurrencyName.ETHER,
  [ChainId.OPTIMISM_GOERLI]: NativeCurrencyName.ETHER,
  [ChainId.OPTIMISM_SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.ARBITRUM_ONE]: NativeCurrencyName.ETHER,
  [ChainId.ARBITRUM_GOERLI]: NativeCurrencyName.ETHER,
  [ChainId.ARBITRUM_SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.POLYGON]: NativeCurrencyName.MATIC,
  [ChainId.POLYGON_MUMBAI]: NativeCurrencyName.MATIC,
  [ChainId.CELO]: NativeCurrencyName.CELO,
  [ChainId.CELO_ALFAJORES]: NativeCurrencyName.CELO,
  [ChainId.GNOSIS]: NativeCurrencyName.GNOSIS,
  [ChainId.MOONBEAM]: NativeCurrencyName.MOONBEAM,
  [ChainId.BNB]: NativeCurrencyName.BNB,
  [ChainId.AVALANCHE]: NativeCurrencyName.AVALANCHE,
  [ChainId.BASE]: NativeCurrencyName.ETHER,
  [ChainId.BLAST]: NativeCurrencyName.ETHER,
  [ChainId.ZORA]: NativeCurrencyName.ETHER,
  [ChainId.ZKSYNC]: NativeCurrencyName.ETHER,
  [ChainId.WORLDCHAIN]: NativeCurrencyName.ETHER,
  [ChainId.UNICHAIN_SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.MONAD_TESTNET]: NativeCurrencyName.MONAD,
  [ChainId.BASE_SEPOLIA]: NativeCurrencyName.ETHER,
  [ChainId.UNICHAIN]: NativeCurrencyName.ETHER,
  [ChainId.SONEIUM]: NativeCurrencyName.ETHER,
  [ChainId.LENS]: NativeCurrencyName.LENS,
  [ChainId.XLAYER]: NativeCurrencyName.XLAYER,
  [ChainId.BOB]: NativeCurrencyName.BOB,
  [ChainId.LISK]: NativeCurrencyName.LISK,
  [ChainId.ZKLINK]: NativeCurrencyName.ZKLINK,
  [ChainId.TAIKO]: NativeCurrencyName.TAIKO,
  [ChainId.SEI]: NativeCurrencyName.SEI,
  [ChainId.MANTLE]: NativeCurrencyName.MANTLE,
  [ChainId.SEI_TESTNET]: NativeCurrencyName.SEI_TESTNET,
  [ChainId.LINEA]: NativeCurrencyName.LINEA,
  [ChainId.MANTA]: NativeCurrencyName.MANTA,
  [ChainId.POLYGON_ZKEVM]: NativeCurrencyName.POLYGON_ZKEVM,
  [ChainId.FILECOIN]: NativeCurrencyName.FILECOIN,
  [ChainId.ROOTSTOCK]: NativeCurrencyName.ROOTSTOCK,
  [ChainId.SCROLL]: NativeCurrencyName.SCROLL,
  [ChainId.BOBA]: NativeCurrencyName.BOBA,
  [ChainId.CORN]: NativeCurrencyName.CORN,
  [ChainId.ETHERLINK]: NativeCurrencyName.ETHERLINK,
  [ChainId.METAL]: NativeCurrencyName.METAL,
  [ChainId.SONIC]: NativeCurrencyName.SONIC,
  [ChainId.XDC]: NativeCurrencyName.XDC,
  [ChainId.LIGHTLINK]: NativeCurrencyName.LIGHTLINK,
  [ChainId.GOAT]: NativeCurrencyName.GOAT,
  [ChainId.REDBELLY]: NativeCurrencyName.REDBELLY,
  [ChainId.SAGA]: NativeCurrencyName.SAGA,
  [ChainId.TELOS]: NativeCurrencyName.TELOS,
  [ChainId.HEMI]: NativeCurrencyName.HEMI,
  [ChainId.NIBIRU]: NativeCurrencyName.NIBIRU,
  [ChainId.MATCHAIN]: NativeCurrencyName.MATCHAIN,
  [ChainId.PLASMA]: NativeCurrencyName.PLASMA,
};

export const ID_TO_NETWORK_NAME = (id: number): ChainName => {
  switch (id) {
    case 1:
      return ChainName.MAINNET;
    case 5:
      return ChainName.GOERLI;
    case 11155111:
      return ChainName.SEPOLIA;
    case 56:
      return ChainName.BNB;
    case 10:
      return ChainName.OPTIMISM;
    case 420:
      return ChainName.OPTIMISM_GOERLI;
    case 11155420:
      return ChainName.OPTIMISM_SEPOLIA;
    case 42161:
      return ChainName.ARBITRUM_ONE;
    case 421613:
      return ChainName.ARBITRUM_GOERLI;
    case 421614:
      return ChainName.ARBITRUM_SEPOLIA;
    case 137:
      return ChainName.POLYGON;
    case 80001:
      return ChainName.POLYGON_MUMBAI;
    case 42220:
      return ChainName.CELO;
    case 44787:
      return ChainName.CELO_ALFAJORES;
    case 100:
      return ChainName.GNOSIS;
    case 1284:
      return ChainName.MOONBEAM;
    case 43114:
      return ChainName.AVALANCHE;
    case 8453:
      return ChainName.BASE;
    case 84531:
      return ChainName.BASE_GOERLI;
    case 84532:
      return ChainName.BASE_SEPOLIA;
    case 81457:
      return ChainName.BLAST;
    case 7777777:
      return ChainName.ZORA;
    case 324:
      return ChainName.ZKSYNC;
    case 480:
      return ChainName.WORLDCHAIN;
    case 1301:
      return ChainName.UNICHAIN_SEPOLIA;
    case 130:
      return ChainName.UNICHAIN;
    case 10143:
      return ChainName.MONAD_TESTNET;
    case 1868:
      return ChainName.SONEIUM;
    case 232:
      return ChainName.LENS;
    case 196:
      return ChainName.XLAYER;
    case 60808:
      return ChainName.BOB;
    case 1135:
      return ChainName.LISK;
    case 810180:
      return ChainName.ZKLINK;
    case 167000:
      return ChainName.TAIKO;
    case 1329:
      return ChainName.SEI;
    case 5000:
      return ChainName.MANTLE;
    case 713715:
      return ChainName.SEI_TESTNET;
    case 59144:
      return ChainName.LINEA;
    case 169:
      return ChainName.MANTA;
    case 1101:
      return ChainName.POLYGON_ZKEVM;
    case 314:
      return ChainName.FILECOIN;
    case 30:
      return ChainName.ROOTSTOCK;
    case 534352:
      return ChainName.SCROLL;
    case 288:
      return ChainName.BOBA;
    case 21000000:
      return ChainName.CORN;
    case 42793:
      return ChainName.ETHERLINK;
    case 1750:
      return ChainName.METAL;
    case 146:
      return ChainName.SONIC;
    case 50:
      return ChainName.XDC;
    case 1890:
      return ChainName.LIGHTLINK;
    case 2345:
      return ChainName.GOAT;
    case 151:
      return ChainName.REDBELLY;
    case 5464:
      return ChainName.SAGA;
    case 40:
      return ChainName.TELOS;
    case 43111:
      return ChainName.HEMI;
    case 6900:
      return ChainName.NIBIRU;
    case 698:
      return ChainName.MATCHAIN;
    case 9745:
      return ChainName.PLASMA;
    default:
      throw new Error(`Unknown chain id: ${id}`);
  }
};

export const CHAIN_IDS_LIST = Object.values(ChainId).map((c) =>
  c.toString(),
) as string[];

export const ID_TO_PROVIDER = (id: ChainId): string => {
  switch (id) {
    case ChainId.MAINNET:
      return process.env.JSON_RPC_PROVIDER!;
    case ChainId.GOERLI:
      return process.env.JSON_RPC_PROVIDER_GORLI!;
    case ChainId.SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_SEPOLIA!;
    case ChainId.OPTIMISM:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM!;
    case ChainId.OPTIMISM_GOERLI:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM_GOERLI!;
    case ChainId.OPTIMISM_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_OPTIMISM_SEPOLIA!;
    case ChainId.ARBITRUM_ONE:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_ONE!;
    case ChainId.ARBITRUM_GOERLI:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_GOERLI!;
    case ChainId.ARBITRUM_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_ARBITRUM_SEPOLIA!;
    case ChainId.POLYGON:
      return process.env.JSON_RPC_PROVIDER_POLYGON!;
    case ChainId.POLYGON_MUMBAI:
      return process.env.JSON_RPC_PROVIDER_POLYGON_MUMBAI!;
    case ChainId.CELO:
      return process.env.JSON_RPC_PROVIDER_CELO!;
    case ChainId.CELO_ALFAJORES:
      return process.env.JSON_RPC_PROVIDER_CELO_ALFAJORES!;
    case ChainId.BNB:
      return process.env.JSON_RPC_PROVIDER_BNB!;
    case ChainId.AVALANCHE:
      return process.env.JSON_RPC_PROVIDER_AVALANCHE!;
    case ChainId.BASE:
      return process.env.JSON_RPC_PROVIDER_BASE!;
    case ChainId.BLAST:
      return process.env.JSON_RPC_PROVIDER_BLAST!;
    case ChainId.ZORA:
      return process.env.JSON_RPC_PROVIDER_ZORA!;
    case ChainId.ZKSYNC:
      return process.env.JSON_RPC_PROVIDER_ZKSYNC!;
    case ChainId.WORLDCHAIN:
      return process.env.JSON_RPC_PROVIDER_WORLDCHAIN!;
    case ChainId.UNICHAIN_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_UNICHAIN_SEPOLIA!;
    case ChainId.MONAD_TESTNET:
      return process.env.JSON_RPC_PROVIDER_MONAD_TESTNET!;
    case ChainId.BASE_SEPOLIA:
      return process.env.JSON_RPC_PROVIDER_BASE_SEPOLIA!;
    case ChainId.UNICHAIN:
      return process.env.JSON_RPC_PROVIDER_UNICHAIN!;
    case ChainId.SONEIUM:
      return process.env.JSON_RPC_PROVIDER_SONEIUM!;
    case ChainId.BOBA:
      return process.env.JSON_RPC_PROVIDER_BOBA!;
    case ChainId.MOONBEAM:
      return process.env.JSON_RPC_PROVIDER_MOONBEAM!;
    case ChainId.LENS:
      return process.env.JSON_RPC_PROVIDER_LENS!;
    case ChainId.XLAYER:
      return process.env.JSON_RPC_PROVIDER_XLAYER!;
    case ChainId.GNOSIS:
      return process.env.JSON_RPC_PROVIDER_GNOSIS!;
    case ChainId.BOB:
      return process.env.JSON_RPC_PROVIDER_BOB!;
    case ChainId.LISK:
      return process.env.JSON_RPC_PROVIDER_LISK!;
    case ChainId.ZKLINK:
      return process.env.JSON_RPC_PROVIDER_ZKLINK!;
    case ChainId.TAIKO:
      return process.env.JSON_RPC_PROVIDER_TAIKO!;
    case ChainId.SEI:
      return process.env.JSON_RPC_PROVIDER_SEI!;
    case ChainId.SEI_TESTNET:
      return process.env.JSON_RPC_PROVIDER_SEI_TESTNET!;
    case ChainId.LINEA:
      return process.env.JSON_RPC_PROVIDER_LINEA!;
    case ChainId.MANTA:
      return process.env.JSON_RPC_PROVIDER_MANTA!;
    case ChainId.POLYGON_ZKEVM:
      return process.env.JSON_RPC_PROVIDER_POLYGON_ZKEVM!;
    case ChainId.FILECOIN:
      return process.env.JSON_RPC_PROVIDER_FILECOIN!;
    case ChainId.ROOTSTOCK:
      return process.env.JSON_RPC_PROVIDER_ROOTSTOCK!;
    case ChainId.SCROLL:
      return process.env.JSON_RPC_PROVIDER_SCROLL!;
    case ChainId.MANTLE:
      return process.env.JSON_RPC_PROVIDER_MANTLE!;
    case ChainId.CORN:
      return process.env.JSON_RPC_PROVIDER_CORN!;
    case ChainId.ETHERLINK:
      return process.env.JSON_RPC_PROVIDER_ETHERLINK!;
    case ChainId.METAL:
      return process.env.JSON_RPC_PROVIDER_METAL!;
    case ChainId.SONIC:
      return process.env.JSON_RPC_PROVIDER_SONIC!;
    case ChainId.XDC:
      return process.env.JSON_RPC_PROVIDER_XDC!;
    case ChainId.LIGHTLINK:
      return process.env.JSON_RPC_PROVIDER_LIGHTLINK!;
    case ChainId.GOAT:
      return process.env.JSON_RPC_PROVIDER_GOAT!;
    case ChainId.REDBELLY:
      return process.env.JSON_RPC_PROVIDER_REDBELLY!;
    case ChainId.SAGA:
      return process.env.JSON_RPC_PROVIDER_SAGA!;
    case ChainId.TELOS:
      return process.env.JSON_RPC_PROVIDER_TELOS!;
    case ChainId.HEMI:
      return process.env.JSON_RPC_PROVIDER_HEMI!;
    case ChainId.NIBIRU:
      return process.env.JSON_RPC_PROVIDER_NIBIRU!;
    case ChainId.MATCHAIN:
      return process.env.JSON_RPC_PROVIDER_MATCHAIN!;
    case ChainId.PLASMA:
      return process.env.JSON_RPC_PROVIDER_PLASMA!;
    default:
      throw new Error(`Chain id: ${id} not supported`);
  }
};

export const WRAPPED_NATIVE_CURRENCY: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(
    1,
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.GOERLI]: new Token(
    5,
    "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.SEPOLIA]: new Token(
    11155111,
    "0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.BNB]: new Token(
    56,
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    18,
    "WBNB",
    "Wrapped BNB",
  ),
  [ChainId.OPTIMISM]: new Token(
    ChainId.OPTIMISM,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.OPTIMISM_GOERLI]: new Token(
    ChainId.OPTIMISM_GOERLI,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.OPTIMISM_SEPOLIA]: new Token(
    ChainId.OPTIMISM_SEPOLIA,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.ARBITRUM_ONE]: new Token(
    ChainId.ARBITRUM_ONE,
    "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.ARBITRUM_GOERLI]: new Token(
    ChainId.ARBITRUM_GOERLI,
    "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.ARBITRUM_SEPOLIA]: new Token(
    ChainId.ARBITRUM_SEPOLIA,
    "0x980B62Da83eFf3D4576C647993b0c1D7faf17c73",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.POLYGON]: new Token(
    ChainId.POLYGON,
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    18,
    "WMATIC",
    "Wrapped MATIC",
  ),
  [ChainId.POLYGON_MUMBAI]: new Token(
    ChainId.POLYGON_MUMBAI,
    "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
    18,
    "WMATIC",
    "Wrapped MATIC",
  ),

  // The Celo native currency 'CELO' implements the erc-20 token standard
  [ChainId.CELO]: new Token(
    ChainId.CELO,
    "0x471EcE3750Da237f93B8E339c536989b8978a438",
    18,
    "CELO",
    "Celo native asset",
  ),
  [ChainId.CELO_ALFAJORES]: new Token(
    ChainId.CELO_ALFAJORES,
    "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",
    18,
    "CELO",
    "Celo native asset",
  ),
  [ChainId.GNOSIS]: new Token(
    ChainId.GNOSIS,
    "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
    18,
    "WXDAI",
    "Wrapped XDAI on Gnosis",
  ),
  [ChainId.MOONBEAM]: new Token(
    ChainId.MOONBEAM,
    "0xAcc15dC74880C9944775448304B263D191c6077F",
    18,
    "WGLMR",
    "Wrapped GLMR",
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    18,
    "WAVAX",
    "Wrapped AVAX",
  ),
  [ChainId.BASE]: new Token(
    ChainId.BASE,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.BASE_GOERLI]: new Token(
    ChainId.BASE_GOERLI,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.ROOTSTOCK]: new Token(
    ChainId.ROOTSTOCK,
    "0x542fDA317318eBF1d3DEAf76E0b632741A7e677d",
    18,
    "WRBTC",
    "Wrapped BTC",
  ),
  [ChainId.ZORA]: new Token(
    ChainId.ZORA,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.ZORA_SEPOLIA]: new Token(
    ChainId.ZORA_SEPOLIA,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.BLAST]: new Token(
    ChainId.BLAST,
    "0x4300000000000000000000000000000000000004",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.ZKSYNC]: new Token(
    ChainId.ZKSYNC,
    "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.WORLDCHAIN]: new Token(
    ChainId.WORLDCHAIN,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.UNICHAIN_SEPOLIA]: new Token(
    ChainId.UNICHAIN_SEPOLIA,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.UNICHAIN]: new Token(
    ChainId.UNICHAIN,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.MONAD_TESTNET]: new Token(
    ChainId.MONAD_TESTNET,
    "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701",
    18,
    "WMON",
    "Wrapped Monad",
  ),
  [ChainId.BASE_SEPOLIA]: new Token(
    ChainId.BASE_SEPOLIA,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.SONEIUM]: new Token(
    ChainId.SONEIUM,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.LENS]: new Token(
    ChainId.LENS,
    "0x6bDc36E20D267Ff0dd6097799f82e78907105e2F",
    18,
    "WGHO",
    "Wrapped GHO",
  ),
  [ChainId.XLAYER]: new Token(
    ChainId.XLAYER,
    "0xe538905cf8410324e03a5a23c1c177a474d59b2b",
    18,
    "WOKB",
    "Wrapped OKB",
  ),
  [ChainId.BOB]: new Token(
    ChainId.BOB,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.LISK]: new Token(
    ChainId.LISK,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped ETH",
  ),
  [ChainId.ZKLINK]: new Token(
    ChainId.ZKLINK,
    "0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169",
    18,
    "WETH",
    "Wrapped ETH",
  ),
  [ChainId.TAIKO]: new Token(
    ChainId.TAIKO,
    "0xA51894664A773981C6C112C43ce576f315d5b1B6",
    18,
    "WETH",
    "Wrapped ETH",
  ),
  [ChainId.SEI]: new Token(
    ChainId.SEI,
    "0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7",
    18,
    "WSEI",
    "Wrapped SEI",
  ),
  [ChainId.MANTLE]: new Token(
    ChainId.MANTLE,
    "0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8",
    18,
    "MNT",
    "Wrapped Mantle",
  ),
  [ChainId.SEI_TESTNET]: new Token(
    ChainId.SEI_TESTNET,
    "0x57eE725BEeB991c70c53f9642f36755EC6eb2139",
    18,
    "WSEI",
    "Wrapped SEI",
  ),
  [ChainId.LINEA]: new Token(
    ChainId.LINEA,
    "0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f",
    18,
    "WETH",
    "Wrapped ETH",
  ),
  [ChainId.MANTA]: new Token(
    ChainId.MANTA,
    "0x0Dc808adcE2099A9F62AA87D9670745AbA741746",
    18,
    "WETH",
    "Wrapped ETH",
  ),
  [ChainId.POLYGON_ZKEVM]: new Token(
    ChainId.POLYGON_ZKEVM,
    "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
    18,
    "WETH",
    "Wrapped ETH",
  ),
  [ChainId.FILECOIN]: new Token(
    ChainId.FILECOIN,
    "0x60E1773636CF5E4A227d9AC24F20fEca034ee25A",
    18,
    "WFIL",
    "Wrapped FIL",
  ),
  [ChainId.SCROLL]: new Token(
    ChainId.SCROLL,
    "0x5300000000000000000000000000000000000004",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.BOBA]: new Token(
    ChainId.BOBA,
    "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.CORN]: new Token(
    ChainId.CORN,
    "0xda5dDd7270381A7C2717aD10D1c0ecB19e3CDFb2",
    18,
    "WBTCN",
    "Wrapped BTCN",
  ),
  [ChainId.ETHERLINK]: new Token(
    ChainId.ETHERLINK,
    "0xc9B53AB2679f573e480d01e0f49e2B5CFB7a3EAb",
    18,
    "WXTZ",
    "Wrapped XTZ",
  ),
  [ChainId.METAL]: new Token(
    ChainId.METAL,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.SONIC]: new Token(
    ChainId.SONIC,
    "0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38",
    18,
    "wS",
    "Wrapped Sonic",
  ),
  [ChainId.XDC]: new Token(
    ChainId.XDC,
    "0x951857744785e80e2de051c32ee7b25f9c458c42",
    18,
    "WXDC",
    "Wrapped XDC",
  ),
  [ChainId.LIGHTLINK]: new Token(
    ChainId.LIGHTLINK,
    "0x7EbeF2A4b1B09381Ec5B9dF8C5c6f2dBECA59c73",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.GOAT]: new Token(
    ChainId.GOAT,
    "0xbC10000000000000000000000000000000000000",
    18,
    "WGBTC",
    "Wrapped Goat Bitcoin",
  ),
  [ChainId.REDBELLY]: new Token(
    ChainId.REDBELLY,
    "0x6ed1F491e2d31536D6561f6bdB2AdC8F092a6076",
    18,
    "WRBNT",
    "Wrapped RBNT",
  ),
  [ChainId.SAGA]: new Token(
    ChainId.SAGA,
    "0xE3dbcD53f4Ce1b06Ab200f4912BD35672e68f1FA",
    18,
    "wGAS",
    "Wrapped Gas",
  ),
  [ChainId.TELOS]: new Token(
    ChainId.TELOS,
    "0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E",
    18,
    "WTLOS",
    "Wrapped TLOS",
  ),
  [ChainId.HEMI]: new Token(
    ChainId.HEMI,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.NIBIRU]: new Token(
    ChainId.NIBIRU,
    "0x0CaCF669f8446BeCA826913a3c6B96aCD4b02a97",
    18,
    "WNIBI",
    "Wrapped NIBI",
  ),
  [ChainId.MATCHAIN]: new Token(
    ChainId.MATCHAIN,
    "0x4200000000000000000000000000000000000006",
    18,
    "WBNB",
    "Wrapped BNB",
  ),
  [ChainId.PLASMA]: new Token(
    ChainId.PLASMA,
    "0x6100E367285b01F48D07953803A2d8dCA5D19873",
    18,
    "WXPL",
    "Wrapped XPL",
  ),
};

function isMatic(
  chainId: number,
): chainId is ChainId.POLYGON | ChainId.POLYGON_MUMBAI {
  return chainId === ChainId.POLYGON_MUMBAI || chainId === ChainId.POLYGON;
}

class MaticNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMatic(this.chainId)) throw new Error("Not matic");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMatic(chainId)) throw new Error("Not matic");
    super(chainId, 18, "MATIC", "Polygon Matic");
  }
}

function isCelo(
  chainId: number,
): chainId is ChainId.CELO | ChainId.CELO_ALFAJORES {
  return chainId === ChainId.CELO_ALFAJORES || chainId === ChainId.CELO;
}

class CeloNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isCelo(this.chainId)) throw new Error("Not celo");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isCelo(chainId)) throw new Error("Not celo");
    super(chainId, 18, "CELO", "Celo");
  }
}

function isGnosis(chainId: number): chainId is ChainId.GNOSIS {
  return chainId === ChainId.GNOSIS;
}

class GnosisNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isGnosis(this.chainId)) throw new Error("Not gnosis");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isGnosis(chainId)) throw new Error("Not gnosis");
    super(chainId, 18, "XDAI", "xDai");
  }
}

function isBnb(chainId: number): chainId is ChainId.BNB {
  return chainId === ChainId.BNB;
}

class BnbNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isBnb(this.chainId)) throw new Error("Not bnb");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isBnb(chainId)) throw new Error("Not bnb");
    super(chainId, 18, "BNB", "BNB");
  }
}

function isMoonbeam(chainId: number): chainId is ChainId.MOONBEAM {
  return chainId === ChainId.MOONBEAM;
}

class MoonbeamNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMoonbeam(this.chainId)) throw new Error("Not moonbeam");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMoonbeam(chainId)) throw new Error("Not moonbeam");
    super(chainId, 18, "GLMR", "Glimmer");
  }
}

function isAvax(chainId: number): chainId is ChainId.AVALANCHE {
  return chainId === ChainId.AVALANCHE;
}

class AvalancheNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isAvax(this.chainId)) throw new Error("Not avalanche");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isAvax(chainId)) throw new Error("Not avalanche");
    super(chainId, 18, "AVAX", "Avalanche");
  }
}

export class ExtendedEther extends Ether {
  public get wrapped(): Token {
    if (this.chainId in WRAPPED_NATIVE_CURRENCY) {
      return WRAPPED_NATIVE_CURRENCY[this.chainId as ChainId];
    }
    throw new Error("Unsupported chain ID");
  }

  private static _cachedExtendedEther: { [chainId: number]: NativeCurrency } =
    {};

  public static onChain(chainId: number): ExtendedEther {
    return (
      this._cachedExtendedEther[chainId] ??
      (this._cachedExtendedEther[chainId] = new ExtendedEther(chainId))
    );
  }
}

function isZksync(chainId: number): chainId is ChainId.ZKSYNC {
  return chainId === ChainId.ZKSYNC;
}

class ZksyncNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isZksync(this.chainId)) throw new Error("Not zksync");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isZksync(chainId)) throw new Error("Not zksync");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isLens(chainId: number): chainId is ChainId.LENS {
  return chainId === ChainId.LENS;
}

class LensNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isLens(this.chainId)) throw new Error("Not lens");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isLens(chainId)) throw new Error("Not lens");
    super(chainId, 18, "GHO", "GHO");
  }
}

function isXlayer(chainId: number): chainId is ChainId.XLAYER {
  return chainId === ChainId.XLAYER;
}

class XlayerNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isXlayer(this.chainId)) throw new Error("Not xlayer");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isXlayer(chainId)) throw new Error("Not xlayer");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isBob(chainId: number): chainId is ChainId.BOB {
  return chainId === ChainId.BOB;
}

class BobNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isBob(this.chainId)) throw new Error("Not bob");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isBob(chainId)) throw new Error("Not bob");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isLisk(chainId: number): chainId is ChainId.LISK {
  return chainId === ChainId.LISK;
}

class LiskNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isLisk(this.chainId)) throw new Error("Not lisk");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isLisk(chainId)) throw new Error("Not lisk");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isZklink(chainId: number): chainId is ChainId.ZKLINK {
  return chainId === ChainId.ZKLINK;
}

class ZklinkNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isZklink(this.chainId)) throw new Error("Not zklink");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isZklink(chainId)) throw new Error("Not zklink");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isTaiko(chainId: number): chainId is ChainId.TAIKO {
  return chainId === ChainId.TAIKO;
}

class TaikoNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isTaiko(this.chainId)) throw new Error("Not taiko");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isTaiko(chainId)) throw new Error("Not taiko");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isSei(chainId: number): chainId is ChainId.SEI {
  return chainId === ChainId.SEI;
}

class SeiNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isSei(this.chainId)) throw new Error("Not sei");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isSei(chainId)) throw new Error("Not sei");
    super(chainId, 18, "SEI", "Sei");
  }
}

function isMantle(chainId: number): chainId is ChainId.MANTLE {
  return chainId === ChainId.MANTLE;
}

class MantleNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMantle(this.chainId)) throw new Error("Not mantle");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMantle(chainId)) throw new Error("Not mantle");
    super(chainId, 18, "MNT", "Mantle");
  }
}

function isSeiTestnet(chainId: number): chainId is ChainId.SEI_TESTNET {
  return chainId === ChainId.SEI_TESTNET;
}

class SeiTestnetNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isSeiTestnet(this.chainId)) throw new Error("Not sei testnet");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isSeiTestnet(chainId)) throw new Error("Not sei testnet");
    super(chainId, 18, "SEI", "Sei");
  }
}

function isLinea(chainId: number): chainId is ChainId.LINEA {
  return chainId === ChainId.LINEA;
}

class LineaNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isLinea(this.chainId)) throw new Error("Not linea");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isLinea(chainId)) throw new Error("Not linea");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isBlast(chainId: number): chainId is ChainId.BLAST {
  return chainId === ChainId.BLAST;
}

class BlastNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isBlast(this.chainId)) throw new Error("Not blast");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isBlast(chainId)) throw new Error("Not blast");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isManta(chainId: number): chainId is ChainId.MANTA {
  return chainId === ChainId.MANTA;
}

class MantaNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isManta(this.chainId)) throw new Error("Not manta");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isManta(chainId)) throw new Error("Not manta");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isPolygonZkevm(chainId: number): chainId is ChainId.POLYGON_ZKEVM {
  return chainId === ChainId.POLYGON_ZKEVM;
}

class PolygonZkevmNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isPolygonZkevm(this.chainId)) throw new Error("Not polygon-zkevm");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isPolygonZkevm(chainId)) throw new Error("Not polygon-zkevm");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isFilecoin(chainId: number): chainId is ChainId.FILECOIN {
  return chainId === ChainId.FILECOIN;
}

class FilecoinNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isFilecoin(this.chainId)) throw new Error("Not filecoin");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isFilecoin(chainId)) throw new Error("Not filecoin");
    super(chainId, 18, "FIL", "Filecoin");
  }
}

function isRootstock(chainId: number): chainId is ChainId.ROOTSTOCK {
  return chainId === ChainId.ROOTSTOCK;
}

class RootstockNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isRootstock(this.chainId)) throw new Error("Not rootstock");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isRootstock(chainId)) throw new Error("Not rootstock");
    super(chainId, 18, "RBTC", "Rootstock Bitcoin");
  }
}

function isScroll(chainId: number): chainId is ChainId.SCROLL {
  return chainId === ChainId.ROOTSTOCK;
}

class ScrollNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isScroll(this.chainId)) throw new Error("Not scroll");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isScroll(chainId)) throw new Error("Not scroll");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isBoba(chainId: number): chainId is ChainId.BOBA {
  return chainId === ChainId.BOBA;
}

class BobaNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isBoba(this.chainId)) throw new Error("Not boba");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isBoba(chainId)) throw new Error("Not boba");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isCorn(chainId: number): chainId is ChainId.CORN {
  return chainId === ChainId.CORN;
}

class CornNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isCorn(this.chainId)) throw new Error("Not corn");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isCorn(chainId)) throw new Error("Not corn");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isEtherlink(chainId: number): chainId is ChainId.ETHERLINK {
  return chainId === ChainId.ETHERLINK;
}

class EtherlinkNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isEtherlink(this.chainId)) throw new Error("Not etherlink");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isEtherlink(chainId)) throw new Error("Not etherlink");
    super(chainId, 18, "XTZ", "XTZ");
  }
}

function isMetal(chainId: number): chainId is ChainId.METAL {
  return chainId === ChainId.METAL;
}

class MetalNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMetal(this.chainId)) throw new Error("Not metal");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMetal(chainId)) throw new Error("Not metal");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isSonic(chainId: number): chainId is ChainId.SONIC {
  return chainId === ChainId.SONIC;
}

class SonicNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isSonic(this.chainId)) throw new Error("Not sonic");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isSonic(chainId)) throw new Error("Not sonic");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isXdc(chainId: number): chainId is ChainId.XDC {
  return chainId === ChainId.XDC;
}

class XdcNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isXdc(this.chainId)) throw new Error("Not xdc");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isXdc(chainId)) throw new Error("Not xdc");
    super(chainId, 18, "XDC", "XDC");
  }
}

function isWorldchain(chainId: number): chainId is ChainId.WORLDCHAIN {
  return chainId === ChainId.WORLDCHAIN;
}

class WorldchainNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isWorldchain(this.chainId)) throw new Error("Not worldchain");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isWorldchain(chainId)) throw new Error("Not worldchain");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isLightlink(chainId: number): chainId is ChainId.LIGHTLINK {
  return chainId === ChainId.LIGHTLINK;
}

class LightlinkNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isLightlink(this.chainId)) throw new Error("Not lightlink");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isLightlink(chainId)) throw new Error("Not lightlink");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isGoat(chainId: number): chainId is ChainId.GOAT {
  return chainId === ChainId.GOAT;
}

class GoatNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isGoat(this.chainId)) throw new Error("Not goat");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isGoat(chainId)) throw new Error("Not goat");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isRedbelly(chainId: number): chainId is ChainId.REDBELLY {
  return chainId === ChainId.REDBELLY;
}

class RedbellyNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isRedbelly(this.chainId)) throw new Error("Not redbelly");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isRedbelly(chainId)) throw new Error("Not redbelly");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isSaga(chainId: number): chainId is ChainId.SAGA {
  return chainId === ChainId.SAGA;
}

class SagaNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isSaga(this.chainId)) throw new Error("Not saga");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isSaga(chainId)) throw new Error("Not saga");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isTelos(chainId: number): chainId is ChainId.TELOS {
  return chainId === ChainId.TELOS;
}

class TelosNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isTelos(this.chainId)) throw new Error("Not telos");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isTelos(chainId)) throw new Error("Not telos");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isHemi(chainId: number): chainId is ChainId.HEMI {
  return chainId === ChainId.HEMI;
}

class HemiNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isHemi(this.chainId)) throw new Error("Not hemi");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isHemi(chainId)) throw new Error("Not hemi");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isNibiru(chainId: number): chainId is ChainId.NIBIRU {
  return chainId === ChainId.NIBIRU;
}

class NibiruNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isNibiru(this.chainId)) throw new Error("Not nibiru");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isNibiru(chainId)) throw new Error("Not nibiru");
    super(chainId, 18, "NIBI", "Nibiru");
  }
}

function isUnichain(chainId: number): chainId is ChainId.UNICHAIN {
  return chainId === ChainId.UNICHAIN;
}

class UnichainNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isUnichain(this.chainId)) throw new Error("Not unichain");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isUnichain(chainId)) throw new Error("Not unichain");
    super(chainId, 18, "ETH", "Ether");
  }
}

function isMatchain(chainId: number): chainId is ChainId.MATCHAIN {
  return chainId === ChainId.MATCHAIN;
}

class MatchainNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isMatchain(this.chainId)) throw new Error("Not matchain");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isMatchain(chainId)) throw new Error("Not matchain");
    super(chainId, 18, "BNB", "BNB");
  }
}

function isPlasma(chainId: number): chainId is ChainId.PLASMA {
  return chainId === ChainId.PLASMA;
}

class PlasmaNativeCurrency extends NativeCurrency {
  equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId;
  }

  get wrapped(): Token {
    if (!isPlasma(this.chainId)) throw new Error("Not plasma");
    const nativeCurrency = WRAPPED_NATIVE_CURRENCY[this.chainId];
    if (nativeCurrency) {
      return nativeCurrency;
    }
    throw new Error(`Does not support this chain ${this.chainId}`);
  }

  public constructor(chainId: number) {
    if (!isPlasma(chainId)) throw new Error("Not plasma");
    super(chainId, 18, "ETH", "Ether");
  }
}

const cachedNativeCurrency: { [chainId: number]: NativeCurrency } = {};

export function nativeOnChain(chainId: number): NativeCurrency {
  if (cachedNativeCurrency[chainId] != undefined) {
    return cachedNativeCurrency[chainId]!;
  }
  if (isMatic(chainId)) {
    cachedNativeCurrency[chainId] = new MaticNativeCurrency(chainId);
  } else if (isCelo(chainId)) {
    cachedNativeCurrency[chainId] = new CeloNativeCurrency(chainId);
  } else if (isGnosis(chainId)) {
    cachedNativeCurrency[chainId] = new GnosisNativeCurrency(chainId);
  } else if (isXlayer(chainId)) {
    cachedNativeCurrency[chainId] = new XlayerNativeCurrency(chainId);
  } else if (isMoonbeam(chainId)) {
    cachedNativeCurrency[chainId] = new MoonbeamNativeCurrency(chainId);
  } else if (isZksync(chainId)) {
    cachedNativeCurrency[chainId] = new ZksyncNativeCurrency(chainId);
  } else if (isLens(chainId)) {
    cachedNativeCurrency[chainId] = new LensNativeCurrency(chainId);
  } else if (isBob(chainId)) {
    cachedNativeCurrency[chainId] = new BobNativeCurrency(chainId);
  } else if (isLisk(chainId)) {
    cachedNativeCurrency[chainId] = new LiskNativeCurrency(chainId);
  } else if (isZklink(chainId)) {
    cachedNativeCurrency[chainId] = new ZklinkNativeCurrency(chainId);
  } else if (isTaiko(chainId)) {
    cachedNativeCurrency[chainId] = new TaikoNativeCurrency(chainId);
  } else if (isSei(chainId)) {
    cachedNativeCurrency[chainId] = new SeiNativeCurrency(chainId);
  } else if (isMantle(chainId)) {
    cachedNativeCurrency[chainId] = new MantleNativeCurrency(chainId);
  } else if (isSeiTestnet(chainId)) {
    cachedNativeCurrency[chainId] = new SeiTestnetNativeCurrency(chainId);
  } else if (isLinea(chainId)) {
    cachedNativeCurrency[chainId] = new LineaNativeCurrency(chainId);
  } else if (isBlast(chainId)) {
    cachedNativeCurrency[chainId] = new BlastNativeCurrency(chainId);
  } else if (isManta(chainId)) {
    cachedNativeCurrency[chainId] = new MantaNativeCurrency(chainId);
  } else if (isPolygonZkevm(chainId)) {
    cachedNativeCurrency[chainId] = new PolygonZkevmNativeCurrency(chainId);
  } else if (isFilecoin(chainId)) {
    cachedNativeCurrency[chainId] = new FilecoinNativeCurrency(chainId);
  } else if (isRootstock(chainId)) {
    cachedNativeCurrency[chainId] = new RootstockNativeCurrency(chainId);
  } else if (isScroll(chainId)) {
    cachedNativeCurrency[chainId] = new ScrollNativeCurrency(chainId);
  } else if (isBnb(chainId)) {
    cachedNativeCurrency[chainId] = new BnbNativeCurrency(chainId);
  } else if (isAvax(chainId)) {
    cachedNativeCurrency[chainId] = new AvalancheNativeCurrency(chainId);
  } else if (isBoba(chainId)) {
    cachedNativeCurrency[chainId] = new BobaNativeCurrency(chainId);
  } else if (isCorn(chainId)) {
    cachedNativeCurrency[chainId] = new CornNativeCurrency(chainId);
  } else if (isEtherlink(chainId)) {
    cachedNativeCurrency[chainId] = new EtherlinkNativeCurrency(chainId);
  } else if (isMetal(chainId)) {
    cachedNativeCurrency[chainId] = new MetalNativeCurrency(chainId);
  } else if (isSonic(chainId)) {
    cachedNativeCurrency[chainId] = new SonicNativeCurrency(chainId);
  } else if (isXdc(chainId)) {
    cachedNativeCurrency[chainId] = new XdcNativeCurrency(chainId);
  } else if (isWorldchain(chainId)) {
    cachedNativeCurrency[chainId] = new WorldchainNativeCurrency(chainId);
  } else if (isLightlink(chainId)) {
    cachedNativeCurrency[chainId] = new LightlinkNativeCurrency(chainId);
  } else if (isGoat(chainId)) {
    cachedNativeCurrency[chainId] = new GoatNativeCurrency(chainId);
  } else if (isRedbelly(chainId)) {
    cachedNativeCurrency[chainId] = new RedbellyNativeCurrency(chainId);
  } else if (isSaga(chainId)) {
    cachedNativeCurrency[chainId] = new SagaNativeCurrency(chainId);
  } else if (isTelos(chainId)) {
    cachedNativeCurrency[chainId] = new TelosNativeCurrency(chainId);
  } else if (isHemi(chainId)) {
    cachedNativeCurrency[chainId] = new HemiNativeCurrency(chainId);
  } else if (isNibiru(chainId)) {
    cachedNativeCurrency[chainId] = new NibiruNativeCurrency(chainId);
  } else if (isUnichain(chainId)) {
    cachedNativeCurrency[chainId] = new UnichainNativeCurrency(chainId);
  } else if (isMatchain(chainId)) {
    cachedNativeCurrency[chainId] = new MatchainNativeCurrency(chainId);
  } else if (isPlasma(chainId)) {
    cachedNativeCurrency[chainId] = new PlasmaNativeCurrency(chainId);
  } else {
    cachedNativeCurrency[chainId] = ExtendedEther.onChain(chainId);
  }

  return cachedNativeCurrency[chainId]!;
}
