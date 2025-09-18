import { ADDRESS_ZERO } from '@uniswap/router-sdk';
import { ChainId } from '@uniswap/sdk-core';
import { Pool as V4Pool } from '@uniswap/v4-sdk';

import { nativeOnChain } from './chains';

const FAKE_TICK_SPACING = 0;

export const V4_ETH_WETH_FAKE_POOL: { [chainId in ChainId]: V4Pool } = {
  [ChainId.MAINNET]: new V4Pool(
    nativeOnChain(ChainId.MAINNET),
    nativeOnChain(ChainId.MAINNET).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.GOERLI]: new V4Pool(
    nativeOnChain(ChainId.GOERLI),
    nativeOnChain(ChainId.GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.SEPOLIA),
    nativeOnChain(ChainId.SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.OPTIMISM]: new V4Pool(
    nativeOnChain(ChainId.OPTIMISM),
    nativeOnChain(ChainId.OPTIMISM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.OPTIMISM_GOERLI]: new V4Pool(
    nativeOnChain(ChainId.OPTIMISM_GOERLI),
    nativeOnChain(ChainId.OPTIMISM_GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.OPTIMISM_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.OPTIMISM_SEPOLIA),
    nativeOnChain(ChainId.OPTIMISM_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ARBITRUM_ONE]: new V4Pool(
    nativeOnChain(ChainId.ARBITRUM_ONE),
    nativeOnChain(ChainId.ARBITRUM_ONE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ARBITRUM_GOERLI]: new V4Pool(
    nativeOnChain(ChainId.ARBITRUM_GOERLI),
    nativeOnChain(ChainId.ARBITRUM_GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ARBITRUM_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.ARBITRUM_SEPOLIA),
    nativeOnChain(ChainId.ARBITRUM_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.POLYGON]: new V4Pool(
    nativeOnChain(ChainId.POLYGON),
    nativeOnChain(ChainId.POLYGON).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.POLYGON_MUMBAI]: new V4Pool(
    nativeOnChain(ChainId.POLYGON_MUMBAI),
    nativeOnChain(ChainId.POLYGON_MUMBAI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.CELO]: new V4Pool(
    nativeOnChain(ChainId.CELO),
    nativeOnChain(ChainId.CELO).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.CELO_ALFAJORES]: new V4Pool(
    nativeOnChain(ChainId.CELO_ALFAJORES),
    nativeOnChain(ChainId.CELO_ALFAJORES).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.GNOSIS]: new V4Pool(
    nativeOnChain(ChainId.GNOSIS),
    nativeOnChain(ChainId.GNOSIS).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.MOONBEAM]: new V4Pool(
    nativeOnChain(ChainId.MOONBEAM),
    nativeOnChain(ChainId.MOONBEAM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BNB]: new V4Pool(
    nativeOnChain(ChainId.BNB),
    nativeOnChain(ChainId.BNB).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.AVALANCHE]: new V4Pool(
    nativeOnChain(ChainId.AVALANCHE),
    nativeOnChain(ChainId.AVALANCHE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BASE_GOERLI]: new V4Pool(
    nativeOnChain(ChainId.BASE_GOERLI),
    nativeOnChain(ChainId.BASE_GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BASE_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.BASE_SEPOLIA),
    nativeOnChain(ChainId.BASE_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BASE]: new V4Pool(
    nativeOnChain(ChainId.BASE),
    nativeOnChain(ChainId.BASE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ZORA]: new V4Pool(
    nativeOnChain(ChainId.ZORA),
    nativeOnChain(ChainId.ZORA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ZORA_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.ZORA_SEPOLIA),
    nativeOnChain(ChainId.ZORA_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ROOTSTOCK]: new V4Pool(
    nativeOnChain(ChainId.ROOTSTOCK),
    nativeOnChain(ChainId.ROOTSTOCK).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BLAST]: new V4Pool(
    nativeOnChain(ChainId.BLAST),
    nativeOnChain(ChainId.BLAST).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ZKSYNC]: new V4Pool(
    nativeOnChain(ChainId.ZKSYNC),
    nativeOnChain(ChainId.ZKSYNC).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.WORLDCHAIN]: new V4Pool(
    nativeOnChain(ChainId.WORLDCHAIN),
    nativeOnChain(ChainId.WORLDCHAIN).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.UNICHAIN_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.UNICHAIN_SEPOLIA),
    nativeOnChain(ChainId.UNICHAIN_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.UNICHAIN]: new V4Pool(
    nativeOnChain(ChainId.UNICHAIN),
    nativeOnChain(ChainId.UNICHAIN).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.MONAD_TESTNET]: new V4Pool(
    nativeOnChain(ChainId.MONAD_TESTNET),
    nativeOnChain(ChainId.MONAD_TESTNET).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.SONEIUM]: new V4Pool(
    nativeOnChain(ChainId.SONEIUM),
    nativeOnChain(ChainId.SONEIUM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  // TODO: ADD FAKE POOLS FOR THE FOLLOWING CHAINS
  [ChainId.LENS]: new V4Pool(
    nativeOnChain(ChainId.LENS),
    nativeOnChain(ChainId.LENS).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.XLAYER]: new V4Pool(
    nativeOnChain(ChainId.XLAYER),
    nativeOnChain(ChainId.XLAYER).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BOB]: new V4Pool(
    nativeOnChain(ChainId.BOB),
    nativeOnChain(ChainId.BOB).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.LISK]: new V4Pool(
    nativeOnChain(ChainId.LISK),
    nativeOnChain(ChainId.LISK).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ZKLINK]: new V4Pool(
    nativeOnChain(ChainId.ZKLINK),
    nativeOnChain(ChainId.ZKLINK).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.TAIKO]: new V4Pool(
    nativeOnChain(ChainId.TAIKO),
    nativeOnChain(ChainId.TAIKO).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.SEI]: new V4Pool(
    nativeOnChain(ChainId.SEI),
    nativeOnChain(ChainId.SEI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.MANTLE]: new V4Pool(
    nativeOnChain(ChainId.MANTLE),
    nativeOnChain(ChainId.MANTLE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.SEI_TESTNET]: new V4Pool(
    nativeOnChain(ChainId.SEI_TESTNET),
    nativeOnChain(ChainId.SEI_TESTNET).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.LINEA]: new V4Pool(
    nativeOnChain(ChainId.LINEA),
    nativeOnChain(ChainId.LINEA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.MANTA]: new V4Pool(
    nativeOnChain(ChainId.MANTA),
    nativeOnChain(ChainId.MANTA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.POLYGON_ZKEVM]: new V4Pool(
    nativeOnChain(ChainId.POLYGON_ZKEVM),
    nativeOnChain(ChainId.POLYGON_ZKEVM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.FILECOIN]: new V4Pool(
    nativeOnChain(ChainId.FILECOIN),
    nativeOnChain(ChainId.FILECOIN).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.SCROLL]: new V4Pool(
    nativeOnChain(ChainId.SCROLL),
    nativeOnChain(ChainId.SCROLL).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BOBA]: new V4Pool(
    nativeOnChain(ChainId.BOBA),
    nativeOnChain(ChainId.BOBA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.CORN]: new V4Pool(
    nativeOnChain(ChainId.CORN),
    nativeOnChain(ChainId.CORN).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.METAL]: new V4Pool(
    nativeOnChain(ChainId.METAL),
    nativeOnChain(ChainId.METAL).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.SONIC]: new V4Pool(
    nativeOnChain(ChainId.SONIC),
    nativeOnChain(ChainId.SONIC).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.XDC]: new V4Pool(
    nativeOnChain(ChainId.XDC),
    nativeOnChain(ChainId.XDC).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.LIGHTLINK]: new V4Pool(
    nativeOnChain(ChainId.LIGHTLINK),
    nativeOnChain(ChainId.LIGHTLINK).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.TELOS]: new V4Pool(
    nativeOnChain(ChainId.TELOS),
    nativeOnChain(ChainId.TELOS).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.HEMI]: new V4Pool(
    nativeOnChain(ChainId.HEMI),
    nativeOnChain(ChainId.HEMI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.GOAT]: new V4Pool(
    nativeOnChain(ChainId.GOAT),
    nativeOnChain(ChainId.GOAT).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.REDBELLY]: new V4Pool(
    nativeOnChain(ChainId.REDBELLY),
    nativeOnChain(ChainId.REDBELLY).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.SAGA]: new V4Pool(
    nativeOnChain(ChainId.SAGA),
    nativeOnChain(ChainId.SAGA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.NIBIRU]: new V4Pool(
    nativeOnChain(ChainId.NIBIRU),
    nativeOnChain(ChainId.NIBIRU).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ETHERLINK]: new V4Pool(
    nativeOnChain(ChainId.ETHERLINK),
    nativeOnChain(ChainId.ETHERLINK).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.MATCHAIN]: new V4Pool(
    nativeOnChain(ChainId.MATCHAIN),
    nativeOnChain(ChainId.MATCHAIN).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.PLASMA]: new V4Pool(
    nativeOnChain(ChainId.PLASMA),
    nativeOnChain(ChainId.PLASMA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
};
