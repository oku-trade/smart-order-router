/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ChainId, Token } from "@uniswap/sdk-core";

import {
  BTC_BNB,
  BUSD_BNB,
  DAI_AVAX,
  DAI_BNB,
  DAI_HEMI,
  DAI_MAINNET,
  DAI_UNICHAIN,
  ETH_SAGA,
  FJD_REDBELLY,
  ITokenProvider,
  LIGHTLINK_LIGHTLINK,
  MST_TELOS,
  PGK_REDBELLY,
  RAUD_REDBELLY,
  STNIBI_NIBIRU,
  USDB_BLAST,
  USDC_AVAX,
  USDC_BASE,
  USDC_BASE_SEPOLIA,
  USDC_BNB,
  USDC_ETHERLINK,
  USDC_GOAT,
  USDC_HEMI,
  USDC_LENS,
  USDC_LIGHTLINK,
  USDC_MAINNET,
  USDC_MANTLE,
  USDC_MATCHAIN,
  USDC_NIBIRU,
  USDC_REDBELLY,
  USDC_SAGA,
  USDC_SONEIUM,
  USDC_TELOS,
  USDC_UNICHAIN,
  USDC_UNICHAIN_SEPOLIA,
  USDC_WORLDCHAIN,
  USDC_ZKSYNC,
  USDCE_ZKSYNC,
  USDM_TELOS,
  USDT_BNB,
  USDT_ETHERLINK,
  USDT_GOAT,
  USDT_HEMI,
  USDT_LIGHTLINK,
  USDT_MAINNET,
  USDT_MATCHAIN,
  USDT_MONAD_TESTNET,
  USDT_PLASMA,
  USDT_REDBELLY,
  USDT_SAGA,
  USDT_TELOS,
  USDT_UNICHAIN,
  WBTC_HEMI,
  WBTC_LIGHTLINK,
  WBTC_MAINNET,
  WBTC_TELOS,
  WBTC_WORLDCHAIN,
  WETH_ETHERLINK,
  WETH_GOAT,
  WETH_LENS,
  WETH_PLASMA,
  WETH_REDBELLY,
  WLD_WORLDCHAIN,
  WMATIC_POLYGON,
  WMATIC_POLYGON_MUMBAI,
} from "../../providers/token-provider";
import { WRAPPED_NATIVE_CURRENCY } from "../../util/chains";

type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

export const BASES_TO_CHECK_TRADES_AGAINST = (
  _tokenProvider: ITokenProvider,
): ChainTokenList => {
  return {
    [ChainId.MAINNET]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET]!,
      DAI_MAINNET,
      USDC_MAINNET,
      USDT_MAINNET,
      WBTC_MAINNET,
    ],
    [ChainId.GOERLI]: [WRAPPED_NATIVE_CURRENCY[ChainId.GOERLI]!],
    [ChainId.SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[ChainId.SEPOLIA]!],
    [ChainId.OPTIMISM]: [WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM]!],
    [ChainId.OPTIMISM_GOERLI]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM_GOERLI]!,
    ],
    [ChainId.OPTIMISM_SEPOLIA]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM_SEPOLIA]!,
    ],
    [ChainId.ARBITRUM_ONE]: [WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_ONE]!],
    [ChainId.ARBITRUM_GOERLI]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_GOERLI]!,
    ],
    [ChainId.ARBITRUM_SEPOLIA]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_SEPOLIA]!,
    ],
    [ChainId.POLYGON]: [WMATIC_POLYGON],
    [ChainId.POLYGON_MUMBAI]: [WMATIC_POLYGON_MUMBAI],
    [ChainId.CELO]: [WRAPPED_NATIVE_CURRENCY[ChainId.CELO]],
    [ChainId.CELO_ALFAJORES]: [WRAPPED_NATIVE_CURRENCY[ChainId.CELO_ALFAJORES]],
    [ChainId.GNOSIS]: [WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS]],
    [ChainId.MOONBEAM]: [WRAPPED_NATIVE_CURRENCY[ChainId.MOONBEAM]],
    [ChainId.BNB]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.BNB]!,
      BUSD_BNB,
      DAI_BNB,
      USDC_BNB,
      USDT_BNB,
      BTC_BNB,
    ],
    [ChainId.AVALANCHE]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.AVALANCHE]!,
      USDC_AVAX,
      DAI_AVAX,
    ],
    [ChainId.BASE]: [WRAPPED_NATIVE_CURRENCY[ChainId.BASE]!, USDC_BASE],
    [ChainId.BASE_GOERLI]: [WRAPPED_NATIVE_CURRENCY[ChainId.BASE_GOERLI]!],
    [ChainId.ZORA]: [WRAPPED_NATIVE_CURRENCY[ChainId.ZORA]!],
    [ChainId.ZORA_SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[ChainId.ZORA_SEPOLIA]!],
    [ChainId.ROOTSTOCK]: [WRAPPED_NATIVE_CURRENCY[ChainId.ROOTSTOCK]!],
    [ChainId.BLAST]: [WRAPPED_NATIVE_CURRENCY[ChainId.BLAST]!, USDB_BLAST],
    [ChainId.ZKSYNC]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.ZKSYNC]!,
      USDCE_ZKSYNC,
      USDC_ZKSYNC,
    ],
    [ChainId.WORLDCHAIN]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.WORLDCHAIN]!,
      USDC_WORLDCHAIN,
      WLD_WORLDCHAIN,
      WBTC_WORLDCHAIN,
    ],
    [ChainId.UNICHAIN_SEPOLIA]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.UNICHAIN_SEPOLIA]!,
      USDC_UNICHAIN_SEPOLIA,
      USDT_UNICHAIN,
    ],
    [ChainId.UNICHAIN]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.UNICHAIN]!,
      DAI_UNICHAIN,
      USDC_UNICHAIN,
    ],
    [ChainId.MONAD_TESTNET]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.MONAD_TESTNET]!,
      USDT_MONAD_TESTNET,
    ],
    [ChainId.BASE_SEPOLIA]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.BASE_SEPOLIA]!,
      USDC_BASE_SEPOLIA,
    ],
    [ChainId.SONEIUM]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.SONEIUM]!,
      USDC_SONEIUM,
    ],
    [ChainId.XLAYER]: [WRAPPED_NATIVE_CURRENCY[ChainId.XLAYER]],
    [ChainId.ZKLINK]: [WRAPPED_NATIVE_CURRENCY[ChainId.ZKLINK]],
    [ChainId.LENS]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.LENS],
      USDC_LENS,
      WETH_LENS,
    ],
    [ChainId.BOB]: [WRAPPED_NATIVE_CURRENCY[ChainId.BOB]],
    [ChainId.LISK]: [WRAPPED_NATIVE_CURRENCY[ChainId.LISK]],
    [ChainId.TAIKO]: [WRAPPED_NATIVE_CURRENCY[ChainId.TAIKO]],
    [ChainId.SEI]: [WRAPPED_NATIVE_CURRENCY[ChainId.SEI]],
    [ChainId.MANTLE]: [WRAPPED_NATIVE_CURRENCY[ChainId.MANTLE], USDC_MANTLE],
    [ChainId.SEI_TESTNET]: [WRAPPED_NATIVE_CURRENCY[ChainId.SEI_TESTNET]],
    [ChainId.LINEA]: [WRAPPED_NATIVE_CURRENCY[ChainId.LINEA]],
    [ChainId.MANTA]: [WRAPPED_NATIVE_CURRENCY[ChainId.MANTA]],
    [ChainId.POLYGON_ZKEVM]: [WRAPPED_NATIVE_CURRENCY[ChainId.POLYGON_ZKEVM]],
    [ChainId.FILECOIN]: [WRAPPED_NATIVE_CURRENCY[ChainId.FILECOIN]],
    [ChainId.SCROLL]: [WRAPPED_NATIVE_CURRENCY[ChainId.SCROLL]],
    [ChainId.BOBA]: [WRAPPED_NATIVE_CURRENCY[ChainId.BOBA]],
    [ChainId.CORN]: [WRAPPED_NATIVE_CURRENCY[ChainId.CORN]!],
    [ChainId.ETHERLINK]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.ETHERLINK]!,
      USDC_ETHERLINK,
      USDT_ETHERLINK,
      WETH_ETHERLINK,
    ],
    [ChainId.METAL]: [WRAPPED_NATIVE_CURRENCY[ChainId.METAL]!],
    [ChainId.SONIC]: [WRAPPED_NATIVE_CURRENCY[ChainId.SONIC]!],
    [ChainId.XDC]: [WRAPPED_NATIVE_CURRENCY[ChainId.XDC]!],
    [ChainId.TELOS]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.TELOS]!,
      USDC_TELOS,
      USDT_TELOS,
      USDM_TELOS,
      WBTC_TELOS,
      MST_TELOS,
    ],
    [ChainId.HEMI]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.HEMI]!,
      USDC_HEMI,
      USDT_HEMI,
      DAI_HEMI,
      WBTC_HEMI,
    ],
    [ChainId.GOAT]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.GOAT]!,
      USDC_GOAT,
      USDT_GOAT,
      WETH_GOAT,
    ],
    [ChainId.REDBELLY]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.REDBELLY]!,
      USDC_REDBELLY,
      USDT_REDBELLY,
      WETH_REDBELLY,
      PGK_REDBELLY,
      FJD_REDBELLY,
      RAUD_REDBELLY,
    ],
    [ChainId.SAGA]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.SAGA]!,
      USDC_SAGA,
      USDT_SAGA,
      ETH_SAGA,
    ],
    [ChainId.LIGHTLINK]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.LIGHTLINK]!,
      USDC_LIGHTLINK,
      USDT_LIGHTLINK,
      WBTC_LIGHTLINK,
      LIGHTLINK_LIGHTLINK,
    ],
    [ChainId.NIBIRU]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.NIBIRU]!,
      USDC_NIBIRU,
      STNIBI_NIBIRU,
    ],
    [ChainId.MATCHAIN]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.MATCHAIN]!,
      USDC_MATCHAIN,
      USDT_MATCHAIN,
    ],
    [ChainId.PLASMA]: [
      WRAPPED_NATIVE_CURRENCY[ChainId.PLASMA]!,
      USDT_PLASMA,
      WETH_PLASMA,
    ],
  };
};

const getBasePairByAddress = async (
  tokenProvider: ITokenProvider,
  _chainId: ChainId,
  fromAddress: string,
  toAddress: string,
): Promise<{ [tokenAddress: string]: Token[] }> => {
  const accessor = await tokenProvider.getTokens([toAddress]);
  const toToken: Token | undefined = accessor.getTokenByAddress(toAddress);

  if (!toToken) return {};

  return {
    [fromAddress]: [toToken],
  };
};

export const ADDITIONAL_BASES = async (
  tokenProvider: ITokenProvider,
): Promise<{
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
}> => {
  return {
    [ChainId.MAINNET]: {
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18",
        "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0x561a4717537ff4AF5c687328c0f7E90a319705C0",
        "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
        "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
        "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0x853d955acef822db058eb8505911ed77f175b99e",
        "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
        "0x853d955acef822db058eb8505911ed77f175b99e",
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      )),
    },
  };
};

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES = async (
  tokenProvider: ITokenProvider,
): Promise<{
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] };
}> => {
  return {
    [ChainId.MAINNET]: {
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
        DAI_MAINNET.address,
      )),
      ...(await getBasePairByAddress(
        tokenProvider,
        ChainId.MAINNET,
        "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
        WRAPPED_NATIVE_CURRENCY[1]!.address,
      )),
    },
  };
};
