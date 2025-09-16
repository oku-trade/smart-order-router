import { ADDRESS_ZERO } from "@uniswap/router-sdk";
import {
  CHAIN_TO_ADDRESSES_MAP,
  ChainId,
  Currency,
  SWAP_ROUTER_02_ADDRESSES as SWAP_ROUTER_02_ADDRESSES_HELPER,
  Token,
  WETH9 as WETH9_HELPER,
} from "@uniswap/sdk-core";
import { FACTORY_ADDRESS } from "@uniswap/v3-sdk";

import { NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from "./chains";

export const BNB_TICK_LENS_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].tickLensAddress;
export const BNB_NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].nonfungiblePositionManagerAddress;
export const BNB_SWAP_ROUTER_02_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].swapRouter02Address!;
export const BNB_V3_MIGRATOR_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].v3MigratorAddress;

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(FACTORY_ADDRESS),
  [ChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO].v3CoreFactoryAddress,
  [ChainId.CELO_ALFAJORES]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.CELO_ALFAJORES].v3CoreFactoryAddress,
  [ChainId.OPTIMISM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_GOERLI].v3CoreFactoryAddress,
  [ChainId.OPTIMISM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_SEPOLIA].v3CoreFactoryAddress,
  [ChainId.SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].v3CoreFactoryAddress,
  [ChainId.ARBITRUM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_GOERLI].v3CoreFactoryAddress,
  [ChainId.ARBITRUM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_SEPOLIA].v3CoreFactoryAddress,
  [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].v3CoreFactoryAddress,
  [ChainId.AVALANCHE]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].v3CoreFactoryAddress,
  [ChainId.BASE_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_GOERLI].v3CoreFactoryAddress,
  [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].v3CoreFactoryAddress,
  [ChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[ChainId.BLAST].v3CoreFactoryAddress,
  [ChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZORA].v3CoreFactoryAddress,
  [ChainId.ZKSYNC]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZKSYNC].v3CoreFactoryAddress,
  [ChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.WORLDCHAIN].v3CoreFactoryAddress,
  [ChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN_SEPOLIA].v3CoreFactoryAddress,
  [ChainId.MONAD_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.MONAD_TESTNET].v3CoreFactoryAddress,
  [ChainId.BASE_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_SEPOLIA].v3CoreFactoryAddress,
  // TODO: Gnosis + Moonbeam contracts to be deployed
  [ChainId.UNICHAIN]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN].v3CoreFactoryAddress,
  [ChainId.SONEIUM]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.SONEIUM].v3CoreFactoryAddress,
  [ChainId.MOONBEAM]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.MOONBEAM].v3CoreFactoryAddress,
  [ChainId.LENS]: CHAIN_TO_ADDRESSES_MAP[ChainId.LENS].v3CoreFactoryAddress,
  [ChainId.XLAYER]: CHAIN_TO_ADDRESSES_MAP[ChainId.XLAYER].v3CoreFactoryAddress,
  [ChainId.GNOSIS]: CHAIN_TO_ADDRESSES_MAP[ChainId.GNOSIS].v3CoreFactoryAddress,
  [ChainId.BOB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BOB].v3CoreFactoryAddress,
  [ChainId.LISK]: CHAIN_TO_ADDRESSES_MAP[ChainId.LISK].v3CoreFactoryAddress,
  [ChainId.ZKLINK]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZKLINK].v3CoreFactoryAddress,
  [ChainId.TAIKO]: CHAIN_TO_ADDRESSES_MAP[ChainId.TAIKO].v3CoreFactoryAddress,
  [ChainId.SEI]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEI].v3CoreFactoryAddress,
  [ChainId.MANTLE]: CHAIN_TO_ADDRESSES_MAP[ChainId.MANTLE].v3CoreFactoryAddress,
  [ChainId.SEI_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.SEI_TESTNET].v3CoreFactoryAddress,
  [ChainId.LINEA]: CHAIN_TO_ADDRESSES_MAP[ChainId.LINEA].v3CoreFactoryAddress,
  [ChainId.MANTA]: CHAIN_TO_ADDRESSES_MAP[ChainId.MANTA].v3CoreFactoryAddress,
  [ChainId.POLYGON_ZKEVM]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.POLYGON_ZKEVM].v3CoreFactoryAddress,
  [ChainId.FILECOIN]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.FILECOIN].v3CoreFactoryAddress,
  [ChainId.ROOTSTOCK]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ROOTSTOCK].v3CoreFactoryAddress,
  [ChainId.SCROLL]: CHAIN_TO_ADDRESSES_MAP[ChainId.SCROLL].v3CoreFactoryAddress,
  [ChainId.BOBA]: CHAIN_TO_ADDRESSES_MAP[ChainId.BOBA].v3CoreFactoryAddress,
  [ChainId.CORN]: CHAIN_TO_ADDRESSES_MAP[ChainId.CORN].v3CoreFactoryAddress,
  [ChainId.ETHERLINK]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ETHERLINK].v3CoreFactoryAddress,
  [ChainId.METAL]: CHAIN_TO_ADDRESSES_MAP[ChainId.METAL].v3CoreFactoryAddress,
  [ChainId.SONIC]: CHAIN_TO_ADDRESSES_MAP[ChainId.SONIC].v3CoreFactoryAddress,
  [ChainId.XDC]: CHAIN_TO_ADDRESSES_MAP[ChainId.XDC].v3CoreFactoryAddress,
  [ChainId.LIGHTLINK]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.LIGHTLINK].v3CoreFactoryAddress,
  [ChainId.GOAT]: CHAIN_TO_ADDRESSES_MAP[ChainId.GOAT].v3CoreFactoryAddress,
  [ChainId.REDBELLY]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.REDBELLY].v3CoreFactoryAddress,
  [ChainId.SAGA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SAGA].v3CoreFactoryAddress,
  [ChainId.TELOS]: CHAIN_TO_ADDRESSES_MAP[ChainId.TELOS].v3CoreFactoryAddress,
  [ChainId.HEMI]: CHAIN_TO_ADDRESSES_MAP[ChainId.HEMI].v3CoreFactoryAddress,
  [ChainId.NIBIRU]: CHAIN_TO_ADDRESSES_MAP[ChainId.NIBIRU].v3CoreFactoryAddress,
  [ChainId.MATCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.MATCHAIN].v3CoreFactoryAddress,
  [ChainId.PLASMA]: CHAIN_TO_ADDRESSES_MAP[ChainId.PLASMA].v3CoreFactoryAddress,
};

export const QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap("0x61fFE014bA17989E743c5F6cB21bF9697530B21e"),
  [ChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO].quoterAddress,
  [ChainId.CELO_ALFAJORES]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.CELO_ALFAJORES].quoterAddress,
  [ChainId.OPTIMISM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_GOERLI].quoterAddress,
  [ChainId.OPTIMISM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_SEPOLIA].quoterAddress,
  [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].quoterAddress,
  [ChainId.ARBITRUM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_GOERLI].quoterAddress,
  [ChainId.ARBITRUM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_SEPOLIA].quoterAddress,
  [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].quoterAddress,
  [ChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].quoterAddress,
  [ChainId.BASE_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_GOERLI].quoterAddress,
  [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].quoterAddress,
  [ChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[ChainId.BLAST].quoterAddress,
  [ChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZORA].quoterAddress,
  [ChainId.ZKSYNC]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZKSYNC].quoterAddress,
  [ChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.WORLDCHAIN].quoterAddress,
  [ChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN_SEPOLIA].quoterAddress,
  [ChainId.MONAD_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.MONAD_TESTNET].quoterAddress,
  [ChainId.BASE_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_SEPOLIA].quoterAddress,
  // TODO: Gnosis + Moonbeam contracts to be deployed
  [ChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN].quoterAddress,
  [ChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[ChainId.SONEIUM].quoterAddress,
  [ChainId.MOONBEAM]: CHAIN_TO_ADDRESSES_MAP[ChainId.MOONBEAM].quoterAddress,
  [ChainId.LENS]: CHAIN_TO_ADDRESSES_MAP[ChainId.LENS].quoterAddress,
  [ChainId.XLAYER]: CHAIN_TO_ADDRESSES_MAP[ChainId.XLAYER].quoterAddress,
  [ChainId.GNOSIS]: CHAIN_TO_ADDRESSES_MAP[ChainId.GNOSIS].quoterAddress,
  [ChainId.BOB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BOB].quoterAddress,
  [ChainId.LISK]: CHAIN_TO_ADDRESSES_MAP[ChainId.LISK].quoterAddress,
  [ChainId.ZKLINK]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZKLINK].quoterAddress,
  [ChainId.TAIKO]: CHAIN_TO_ADDRESSES_MAP[ChainId.TAIKO].quoterAddress,
  [ChainId.SEI]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEI].quoterAddress,
  [ChainId.MANTLE]: CHAIN_TO_ADDRESSES_MAP[ChainId.MANTLE].quoterAddress,
  [ChainId.SEI_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.SEI_TESTNET].quoterAddress,
  [ChainId.LINEA]: CHAIN_TO_ADDRESSES_MAP[ChainId.LINEA].quoterAddress,
  [ChainId.MANTA]: CHAIN_TO_ADDRESSES_MAP[ChainId.MANTA].quoterAddress,
  [ChainId.POLYGON_ZKEVM]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.POLYGON_ZKEVM].quoterAddress,
  [ChainId.FILECOIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.FILECOIN].quoterAddress,
  [ChainId.ROOTSTOCK]: CHAIN_TO_ADDRESSES_MAP[ChainId.ROOTSTOCK].quoterAddress,
  [ChainId.SCROLL]: CHAIN_TO_ADDRESSES_MAP[ChainId.SCROLL].quoterAddress,
  [ChainId.BOBA]: CHAIN_TO_ADDRESSES_MAP[ChainId.BOBA].quoterAddress,
  [ChainId.CORN]: CHAIN_TO_ADDRESSES_MAP[ChainId.CORN].quoterAddress,
  [ChainId.ETHERLINK]: CHAIN_TO_ADDRESSES_MAP[ChainId.ETHERLINK].quoterAddress,
  [ChainId.METAL]: CHAIN_TO_ADDRESSES_MAP[ChainId.METAL].quoterAddress,
  [ChainId.SONIC]: CHAIN_TO_ADDRESSES_MAP[ChainId.SONIC].quoterAddress,
  [ChainId.XDC]: CHAIN_TO_ADDRESSES_MAP[ChainId.XDC].quoterAddress,
  [ChainId.LIGHTLINK]: CHAIN_TO_ADDRESSES_MAP[ChainId.LIGHTLINK].quoterAddress,
  [ChainId.GOAT]: CHAIN_TO_ADDRESSES_MAP[ChainId.GOAT].quoterAddress,
  [ChainId.REDBELLY]: CHAIN_TO_ADDRESSES_MAP[ChainId.REDBELLY].quoterAddress,
  [ChainId.SAGA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SAGA].quoterAddress,
  [ChainId.TELOS]: CHAIN_TO_ADDRESSES_MAP[ChainId.TELOS].quoterAddress,
  [ChainId.HEMI]: CHAIN_TO_ADDRESSES_MAP[ChainId.HEMI].quoterAddress,
  [ChainId.NIBIRU]: CHAIN_TO_ADDRESSES_MAP[ChainId.NIBIRU].quoterAddress,
  [ChainId.MATCHAIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.MATCHAIN].quoterAddress,
  [ChainId.PLASMA]: CHAIN_TO_ADDRESSES_MAP[ChainId.PLASMA].quoterAddress,
};

export const NEW_QUOTER_V2_ADDRESSES: AddressMap = {
  ...constructSameAddressMap("0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3"),
  [ChainId.CELO]: "0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3",
  [ChainId.CELO_ALFAJORES]: "0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3",
  [ChainId.OPTIMISM_SEPOLIA]: "0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3",
  [ChainId.SEPOLIA]: "0xf0c802dcb0cf1c4f7b953756b49d940eed190221",
  [ChainId.ARBITRUM_SEPOLIA]: "0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3",
  [ChainId.BNB]: "0x5e55C9e631FAE526cd4B0526C4818D6e0a9eF0e3",
  [ChainId.AVALANCHE]: "0xf0c802dcb0cf1c4f7b953756b49d940eed190221",
  [ChainId.POLYGON_MUMBAI]: "0x60e06b92bC94a665036C26feC5FF2A92E2d04c5f",
  [ChainId.BASE]: "0x222cA98F00eD15B1faE10B61c277703a194cf5d2",
  [ChainId.BLAST]: "0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1",
  [ChainId.ZORA]: "0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1",
  [ChainId.ZKSYNC]: "0x071Bd2063dF031EDd110E27C6F4CDe50A3DeF2d4",
  [ChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.WORLDCHAIN].quoterAddress, // TODO: deploy view-only-quoter to worldchain
  [ChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN_SEPOLIA].quoterAddress, // TODO: deploy view-only-quoter to UNICHAIN
  [ChainId.MONAD_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.MONAD_TESTNET].quoterAddress, // TODO: deploy view-only-quoter to monad testnet
  [ChainId.BASE_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_SEPOLIA].quoterAddress,
  [ChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN].quoterAddress, // TODO: deploy view-only-quoter to unichain
  [ChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[ChainId.SONEIUM].quoterAddress,
};

export const PROTOCOL_V4_QUOTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap("0xf3a39c86dbd13c45365e57fb90fe413371f65af8"),
  [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].v4QuoterAddress,
  [ChainId.ARBITRUM_ONE]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_ONE].v4QuoterAddress,
  [ChainId.BASE]: "0xe1a6c5803e3c44368b171bd680c7d32dfc92ca47",
  [ChainId.POLYGON]: CHAIN_TO_ADDRESSES_MAP[ChainId.POLYGON].v4QuoterAddress,
  [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].v4QuoterAddress,
  [ChainId.AVALANCHE]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].v4QuoterAddress,
  [ChainId.OPTIMISM]: CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM].v4QuoterAddress,
  [ChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.WORLDCHAIN].v4QuoterAddress,
  [ChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZORA].v4QuoterAddress,
  [ChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN_SEPOLIA].v4QuoterAddress,
  [ChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN].v4QuoterAddress,
  [ChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[ChainId.BLAST].v4QuoterAddress,
  [ChainId.MAINNET]: CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].v4QuoterAddress,
  [ChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[ChainId.SONEIUM].v4QuoterAddress,
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = {
  [ChainId.MAINNET]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].mixedRouteQuoterV1Address,
  [ChainId.GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.GOERLI].mixedRouteQuoterV1Address,
  [ChainId.BASE]: "0xe544efae946f0008ae9a8d64493efa7886b73776",
  [ChainId.UNICHAIN]: "0x48C0648E357639B446C99a6c7316A3eaFEaB35aE",
  [ChainId.ARBITRUM_ONE]: "0x003aa18c6E682dB80Cf4aa17261CcbFfd28690CE",
  [ChainId.POLYGON]: "0x58ead433EA99708604C4dD7c9b7E80C70976E202",
  [ChainId.OPTIMISM]: "0x204faca1764b154221e35c0d20abb3c525710498",
  [ChainId.AVALANCHE]: "0x204FAca1764B154221e35c0d20aBb3c525710498",
  [ChainId.BNB]: "0x204FAca1764B154221e35c0d20aBb3c525710498",
  [ChainId.WORLDCHAIN]: "0x204FAca1764B154221e35c0d20aBb3c525710498",
  [ChainId.ZORA]: "0x204FAca1764B154221e35c0d20aBb3c525710498",
  [ChainId.SONEIUM]: "0x42c14CE921e85bf14467A82fAf8182546cf7c604",
};

export const MIXED_ROUTE_QUOTER_V2_ADDRESSES: AddressMap = {
  [ChainId.SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].mixedRouteQuoterV2Address,
  [ChainId.MAINNET]: "0xE63C5F5005909E96b5aA9CE10744CCE70eC16CC3",
  [ChainId.BASE]: "0x253ee8eb6551b47181b613461c15d699fe4a2e39",
  [ChainId.UNICHAIN]: "0x48C0648E357639B446C99a6c7316A3eaFEaB35aE",
  [ChainId.ARBITRUM_ONE]: "0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1",
  [ChainId.POLYGON]: "0x9d0f15f2cf58655fddcd1ee6129c547fdaed01b1",
  [ChainId.OPTIMISM]: "0xf0c802DCb0cF1C4f7B953756b49D940EED190221",
  [ChainId.AVALANCHE]: "0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1",
  [ChainId.BNB]: "0xf0c802DCb0cF1C4f7B953756b49D940EED190221",
  [ChainId.WORLDCHAIN]: "0x9D0F15f2cf58655fDDcD1EE6129C547fDaeD01b1",
  [ChainId.ZORA]: "0x5f739c790a48E97eec0efb81bab5D152c0A0ecA0",
  [ChainId.SONEIUM]: "0x42c14CE921e85bf14467A82fAf8182546cf7c604",
};

export const UNISWAP_MULTICALL_ADDRESSES: AddressMap = {
  ...constructSameAddressMap("0x1F98415757620B543A52E61c46B32eB19261F984"),
  [ChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO].multicallAddress,
  [ChainId.CELO_ALFAJORES]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.CELO_ALFAJORES].multicallAddress,
  [ChainId.OPTIMISM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_GOERLI].multicallAddress,
  [ChainId.OPTIMISM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_SEPOLIA].multicallAddress,
  [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].multicallAddress,
  [ChainId.ARBITRUM_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_GOERLI].multicallAddress,
  [ChainId.ARBITRUM_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_SEPOLIA].multicallAddress,
  [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].multicallAddress,
  [ChainId.AVALANCHE]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].multicallAddress,
  [ChainId.BASE_GOERLI]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_GOERLI].multicallAddress,
  [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].multicallAddress,
  [ChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[ChainId.BLAST].multicallAddress,
  [ChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZORA].multicallAddress,
  [ChainId.ZKSYNC]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZKSYNC].multicallAddress,
  [ChainId.WORLDCHAIN]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.WORLDCHAIN].multicallAddress,
  [ChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN_SEPOLIA].multicallAddress,
  [ChainId.MONAD_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.MONAD_TESTNET].multicallAddress,
  [ChainId.BASE_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_SEPOLIA].multicallAddress,
  [ChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN].multicallAddress,
  [ChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[ChainId.SONEIUM].multicallAddress,
  [ChainId.MOONBEAM]: CHAIN_TO_ADDRESSES_MAP[ChainId.MOONBEAM].multicallAddress,
  [ChainId.LENS]: CHAIN_TO_ADDRESSES_MAP[ChainId.LENS].multicallAddress,
  [ChainId.XLAYER]: CHAIN_TO_ADDRESSES_MAP[ChainId.XLAYER].multicallAddress,
  [ChainId.GNOSIS]: CHAIN_TO_ADDRESSES_MAP[ChainId.GNOSIS].multicallAddress,
  [ChainId.BOB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BOB].multicallAddress,
  [ChainId.LISK]: CHAIN_TO_ADDRESSES_MAP[ChainId.LISK].multicallAddress,
  [ChainId.ZKLINK]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZKLINK].multicallAddress,
  [ChainId.TAIKO]: CHAIN_TO_ADDRESSES_MAP[ChainId.TAIKO].multicallAddress,
  [ChainId.SEI]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEI].multicallAddress,
  [ChainId.MANTLE]: CHAIN_TO_ADDRESSES_MAP[ChainId.MANTLE].multicallAddress,
  [ChainId.SEI_TESTNET]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.SEI_TESTNET].multicallAddress,
  [ChainId.LINEA]: CHAIN_TO_ADDRESSES_MAP[ChainId.LINEA].multicallAddress,
  [ChainId.MANTA]: CHAIN_TO_ADDRESSES_MAP[ChainId.MANTA].multicallAddress,
  [ChainId.POLYGON_ZKEVM]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.POLYGON_ZKEVM].multicallAddress,
  [ChainId.FILECOIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.FILECOIN].multicallAddress,
  [ChainId.ROOTSTOCK]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ROOTSTOCK].multicallAddress,
  [ChainId.SCROLL]: CHAIN_TO_ADDRESSES_MAP[ChainId.SCROLL].multicallAddress,
  [ChainId.BOBA]: CHAIN_TO_ADDRESSES_MAP[ChainId.BOBA].multicallAddress,
  [ChainId.CORN]: CHAIN_TO_ADDRESSES_MAP[ChainId.CORN].multicallAddress,
  [ChainId.ETHERLINK]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ETHERLINK].multicallAddress,
  [ChainId.METAL]: CHAIN_TO_ADDRESSES_MAP[ChainId.METAL].multicallAddress,
  [ChainId.SONIC]: CHAIN_TO_ADDRESSES_MAP[ChainId.SONIC].multicallAddress,
  [ChainId.XDC]: CHAIN_TO_ADDRESSES_MAP[ChainId.XDC].multicallAddress,
  [ChainId.LIGHTLINK]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.LIGHTLINK].multicallAddress,
  [ChainId.GOAT]: CHAIN_TO_ADDRESSES_MAP[ChainId.GOAT].multicallAddress,
  [ChainId.REDBELLY]: CHAIN_TO_ADDRESSES_MAP[ChainId.REDBELLY].multicallAddress,
  [ChainId.SAGA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SAGA].multicallAddress,
  [ChainId.TELOS]: CHAIN_TO_ADDRESSES_MAP[ChainId.TELOS].multicallAddress,
  [ChainId.HEMI]: CHAIN_TO_ADDRESSES_MAP[ChainId.HEMI].multicallAddress,
  [ChainId.NIBIRU]: CHAIN_TO_ADDRESSES_MAP[ChainId.NIBIRU].multicallAddress,
  [ChainId.MATCHAIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.MATCHAIN].multicallAddress,
  [ChainId.PLASMA]: CHAIN_TO_ADDRESSES_MAP[ChainId.PLASMA].multicallAddress,
};

export const SWAP_ROUTER_02_ADDRESSES = (chainId: number): string => {
  return (
    SWAP_ROUTER_02_ADDRESSES_HELPER(chainId) ??
    "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"
  );
};

export const STATE_VIEW_ADDRESSES: AddressMap = {
  ...constructSameAddressMap("0x1F98415757620B543A52E61c46B32eB19261F984"),
  [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].v4StateView,
  [ChainId.ARBITRUM_ONE]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_ONE].v4StateView,
  [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].v4StateView,
  [ChainId.POLYGON]: CHAIN_TO_ADDRESSES_MAP[ChainId.POLYGON].v4StateView,
  [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].v4StateView,
  [ChainId.OPTIMISM]: CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM].v4StateView,
  [ChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].v4StateView,
  [ChainId.WORLDCHAIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.WORLDCHAIN].v4StateView,
  [ChainId.ZORA]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZORA].v4StateView,
  [ChainId.UNICHAIN_SEPOLIA]:
    CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN_SEPOLIA].v4StateView,
  [ChainId.UNICHAIN]: CHAIN_TO_ADDRESSES_MAP[ChainId.UNICHAIN].v4StateView,
  [ChainId.BLAST]: CHAIN_TO_ADDRESSES_MAP[ChainId.BLAST].v4StateView,
  [ChainId.MAINNET]: CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].v4StateView,
  [ChainId.SONEIUM]: CHAIN_TO_ADDRESSES_MAP[ChainId.SONEIUM].v4StateView,
};

export const OVM_GASPRICE_ADDRESS =
  "0x420000000000000000000000000000000000000F";
export const ARB_GASINFO_ADDRESS = "0x000000000000000000000000000000000000006C";
export const TICK_LENS_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_ONE].tickLensAddress;
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].nonfungiblePositionManagerAddress;
export const V3_MIGRATOR_ADDRESS =
  CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].v3MigratorAddress;
export const MULTICALL2_ADDRESS = "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696";

export type AddressMap = { [chainId: number]: string | undefined };

export function constructSameAddressMap<T extends string>(
  address: T,
  additionalNetworks: ChainId[] = [],
): { [chainId: number]: T } {
  return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(
    additionalNetworks,
  ).reduce<{
    [chainId: number]: T;
  }>((memo, chainId) => {
    memo[chainId] = address;
    return memo;
  }, {});
}

export const WETH9: {
  [chainId in Exclude<
    ChainId,
    | ChainId.POLYGON
    | ChainId.POLYGON_MUMBAI
    | ChainId.CELO
    | ChainId.CELO_ALFAJORES
    | ChainId.MOONBEAM
    | ChainId.BNB
    | ChainId.AVALANCHE
    | ChainId.MONAD_TESTNET
  >]: Token;
} = {
  [ChainId.MAINNET]: WETH9_HELPER[ChainId.MAINNET]!,
  [ChainId.GOERLI]: WETH9_HELPER[ChainId.GOERLI]!,
  [ChainId.SEPOLIA]: WETH9_HELPER[ChainId.SEPOLIA]!,
  [ChainId.OPTIMISM]: WETH9_HELPER[ChainId.OPTIMISM]!,
  [ChainId.OPTIMISM_GOERLI]: new Token(
    ChainId.OPTIMISM_GOERLI,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.OPTIMISM_SEPOLIA]: WETH9_HELPER[ChainId.OPTIMISM_SEPOLIA]!,
  [ChainId.ARBITRUM_ONE]: WETH9_HELPER[ChainId.ARBITRUM_ONE]!,
  [ChainId.ARBITRUM_GOERLI]: new Token(
    ChainId.ARBITRUM_GOERLI,
    "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.ARBITRUM_SEPOLIA]: WETH9_HELPER[ChainId.ARBITRUM_SEPOLIA]!,
  [ChainId.BASE_GOERLI]: new Token(
    ChainId.BASE_GOERLI,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.BASE]: WETH9_HELPER[ChainId.BASE]!,
  [ChainId.BLAST]: WETH9_HELPER[ChainId.BLAST]!,
  [ChainId.ZORA]: WETH9_HELPER[ChainId.ZORA]!,
  [ChainId.ZORA_SEPOLIA]: new Token(
    ChainId.ZORA_SEPOLIA,
    "0x4200000000000000000000000000000000000006",
    18,
    "WETH",
    "Wrapped Ether",
  ),
  [ChainId.ZKSYNC]: WETH9_HELPER[ChainId.ZKSYNC]!,
  [ChainId.WORLDCHAIN]: WETH9_HELPER[ChainId.WORLDCHAIN]!,
  [ChainId.UNICHAIN_SEPOLIA]: WETH9_HELPER[ChainId.UNICHAIN_SEPOLIA]!,
  [ChainId.BASE_SEPOLIA]: WETH9_HELPER[ChainId.BASE_SEPOLIA]!,
  [ChainId.UNICHAIN]: WETH9_HELPER[ChainId.UNICHAIN]!,
  [ChainId.SONEIUM]: WETH9_HELPER[ChainId.SONEIUM]!,
  [ChainId.TAIKO]: WETH9_HELPER[ChainId.TAIKO]!,
  [ChainId.SEI]: WETH9_HELPER[ChainId.SEI]!,
  [ChainId.ZKLINK]: WETH9_HELPER[ChainId.ZKLINK]!,
  [ChainId.LISK]: WETH9_HELPER[ChainId.LISK]!,
  [ChainId.MANTLE]: WETH9_HELPER[ChainId.MANTLE]!,
  [ChainId.BOBA]: WETH9_HELPER[ChainId.BOBA]!,
  [ChainId.BOB]: WETH9_HELPER[ChainId.BOB]!,
  [ChainId.SCROLL]: WETH9_HELPER[ChainId.SCROLL]!,
  [ChainId.MANTA]: WETH9_HELPER[ChainId.MANTA]!,
  [ChainId.LINEA]: WETH9_HELPER[ChainId.LINEA]!,
  [ChainId.POLYGON_ZKEVM]: WETH9_HELPER[ChainId.POLYGON_ZKEVM]!,
  [ChainId.XLAYER]: WETH9_HELPER[ChainId.XLAYER]!,
  [ChainId.GNOSIS]: WETH9_HELPER[ChainId.GNOSIS]!,
  [ChainId.CORN]: WETH9_HELPER[ChainId.CORN]!,
  [ChainId.ETHERLINK]: WETH9_HELPER[ChainId.ETHERLINK]!,
  [ChainId.METAL]: WETH9_HELPER[ChainId.METAL]!,
  [ChainId.SONIC]: WETH9_HELPER[ChainId.SONIC]!,
  [ChainId.XDC]: WETH9_HELPER[ChainId.XDC]!,
  [ChainId.WORLDCHAIN]: WETH9_HELPER[ChainId.WORLDCHAIN]!,
  [ChainId.LIGHTLINK]: WETH9_HELPER[ChainId.LIGHTLINK]!,
  [ChainId.GOAT]: WETH9_HELPER[ChainId.GOAT]!,
  [ChainId.REDBELLY]: WETH9_HELPER[ChainId.REDBELLY]!,
  [ChainId.SAGA]: WETH9_HELPER[ChainId.SAGA]!,
  [ChainId.TELOS]: WETH9_HELPER[ChainId.TELOS]!,
  [ChainId.HEMI]: WETH9_HELPER[ChainId.HEMI]!,
  [ChainId.LENS]: WETH9_HELPER[ChainId.LENS]!,
  [ChainId.NIBIRU]: WETH9_HELPER[ChainId.NIBIRU]!,
  [ChainId.MATCHAIN]: WETH9_HELPER[ChainId.MATCHAIN]!,
  [ChainId.PLASMA]: WETH9_HELPER[ChainId.PLASMA]!,
  [ChainId.ROOTSTOCK]: WETH9_HELPER[ChainId.ROOTSTOCK]!,
  [ChainId.SEI_TESTNET]: WETH9_HELPER[ChainId.SEI_TESTNET]!,
  [ChainId.FILECOIN]: WETH9_HELPER[ChainId.FILECOIN]!,
};

export const BEACON_CHAIN_DEPOSIT_ADDRESS =
  "0x00000000219ab540356cBB839Cbe05303d7705Fa";

export function getAddressLowerCase(currency: Currency): string {
  if (currency.isToken) {
    return currency.address.toLowerCase();
  } else {
    return ADDRESS_ZERO;
  }
}

export function getAddress(currency: Currency): string {
  if (currency.isToken) {
    return currency.address;
  } else {
    return ADDRESS_ZERO;
  }
}
