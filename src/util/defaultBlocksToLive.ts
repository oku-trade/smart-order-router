import { ChainId } from "@uniswap/sdk-core";

export const DEFAULT_BLOCKS_TO_LIVE: { [chain in ChainId]: number } = {
	// (60 minutes) / (12 seconds)= 300
	[ChainId.MAINNET]: 300,
	[ChainId.GOERLI]: 300,
	[ChainId.SEPOLIA]: 300,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.OPTIMISM]: 1800,
	[ChainId.OPTIMISM_GOERLI]: 1800,
	[ChainId.OPTIMISM_SEPOLIA]: 1800,
	[ChainId.BASE]: 1800,
	[ChainId.ZORA]: 1800,
	[ChainId.BASE_GOERLI]: 1800,
	[ChainId.BASE_SEPOLIA]: 1800,
	[ChainId.ZORA_SEPOLIA]: 1800,
	[ChainId.BLAST]: 1800,
	// Note: Experiment with longer TTL
	// (12 hours) / (2 seconds) = 21600
	[ChainId.WORLDCHAIN]: 21600,
	// (60 minutes) / (1 seconds) = 3600
	[ChainId.UNICHAIN_SEPOLIA]: 3600,
	[ChainId.UNICHAIN]: 3600,
	[ChainId.MONAD_TESTNET]: 3600,
	// (60 minutes) / (250 milliseconds) = 14400
	[ChainId.ARBITRUM_ONE]: 14400,
	[ChainId.ARBITRUM_GOERLI]: 14400,
	[ChainId.ARBITRUM_SEPOLIA]: 14400,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.POLYGON]: 1800,
	[ChainId.POLYGON_MUMBAI]: 1800,
	// (60 minutes) / (5 seconds) = 720
	[ChainId.CELO]: 720,
	[ChainId.CELO_ALFAJORES]: 720,
	// (60 minutes) / (5 seconds) = 720
	[ChainId.GNOSIS]: 720,
	// (60 minutes) / (6 seconds) = 600
	[ChainId.MOONBEAM]: 600,
	// (60 minutes) / (3 seconds) = 1200
	[ChainId.BNB]: 1200,
	// (60 minutes) / (3 seconds) = 1200
	[ChainId.AVALANCHE]: 1200,
	// (60 minutes) / (33 seconds) = 148
	[ChainId.ROOTSTOCK]: 148,
	// (60 minutes) / (1 seconds) = 3600
	[ChainId.ZKSYNC]: 3600,
	[ChainId.MONAD_TESTNET]: 3600,
	// (60 minutes) / (1 seconds) = 3600
	[ChainId.SONEIUM]: 3600,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.BOB]: 1800,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.BOBA]: 1800,
	// (60 minutes) / (35 seconds) = 103
	[ChainId.CORN]: 103,
	// (60 minutes) / (0.6 seconds) = 6000
	[ChainId.ETHERLINK]: 6000,
	// (60 minutes) / (30 seconds) = 120
	[ChainId.FILECOIN]: 120,
	// (60 minutes) / (5 seconds) = 720
	[ChainId.GNOSIS]: 720,
	// (60 minutes) / (3 seconds) = 1200
	[ChainId.GOAT]: 1200,
	// (60 minutes) / (12 seconds) = 300
	[ChainId.HEMI]: 300,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.LENS]: 1800,
	// (60 minutes) / (0.5 seconds) = 7200
	[ChainId.LIGHTLINK]: 7200,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.LINEA]: 1800,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.LISK]: 1800,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.MANTA]: 1800,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.MANTLE]: 1800,
	// (60 minutes) / (0.5 seconds) = 7200
	[ChainId.MATCHAIN]: 7200,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.METAL]: 1800,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.NIBIRU]: 1800,
	// (60 minutes) / (1 seconds) = 3600
	[ChainId.PLASMA]: 3600,
	// (60 minutes) / (7 seconds) = 514
	[ChainId.POLYGON_ZKEVM]: 514,
	// (60 minutes) / (5 seconds) = 720
	[ChainId.REDBELLY]: 720,
	// (60 minutes) / (5 seconds) = 720
	[ChainId.SAGA]: 720,
	// (60 minutes) / (3 seconds) = 1200
	[ChainId.SCROLL]: 1200,
	// (60 minutes) / (0.4 seconds) = 9000
	[ChainId.SEI]: 9000,
	// (60 minutes) / (0.4 seconds) = 9000
	[ChainId.SEI_TESTNET]: 9000,
	// (60 minutes) / (3 seconds) = 1200
	[ChainId.SONIC]: 1200,
	// (60 minutes) / (24 seconds) = 150
	[ChainId.TAIKO]: 150,
	// (60 minutes) / (0.5 seconds) = 7200
	[ChainId.TELOS]: 7200,
	// (60 minutes) / (2 seconds) = 1800
	[ChainId.XDC]: 1800,
	// (60 minutes) / (.5 seconds) = 7200
	[ChainId.XLAYER]: 7200,
	// (60 minutes) / (1 minutes) = 60
	[ChainId.ZKLINK]: 60,
};
