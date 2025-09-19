/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ChainId, Token } from '@uniswap/sdk-core';
import { FeeAmount, Pool } from '@uniswap/v3-sdk';
import JSBI from 'jsbi';
import _ from 'lodash';

import { unparseFeeAmount } from '../../util/amounts';
import { WRAPPED_NATIVE_CURRENCY } from '../../util/chains';
import { log } from '../../util/log';
import { ProviderConfig } from '../provider';
import {
  ARB_ARBITRUM,
  BTC_BNB,
  BUSD_BNB,
  CELO,
  CELO_ALFAJORES,
  CEUR_CELO,
  CEUR_CELO_ALFAJORES,
  CUSD_CELO,
  CUSD_CELO_ALFAJORES,
  DAI_ARBITRUM,
  DAI_AVAX,
  DAI_BNB,
  DAI_CELO,
  DAI_CELO_ALFAJORES,
  DAI_GOERLI,
  DAI_HEMI,
  DAI_LINEA,
  DAI_MAINNET,
  DAI_MOONBEAM,
  DAI_OPTIMISM,
  DAI_OPTIMISM_GOERLI,
  DAI_POLYGON_MUMBAI,
  DAI_POLYGON_ZKEVM,
  DAI_SCROLL,
  DAI_UNICHAIN,
  ETH_BNB,
  ETH_SAGA,
  FJD_REDBELLY,
  LIGHTLINK_LIGHTLINK,
  LUSD_SCROLL,
  MST_TELOS,
  OP_OPTIMISM,
  PGK_REDBELLY,
  RAUD_REDBELLY,
  RIF_ROOTSTOCK,
  RUSDT_ROOTSTOCK,
  SOLVBTC_BOB,
  STNIBI_NIBIRU,
  USDB_BLAST,
  USDCE_XDC,
  USDCE_ZKSYNC,
  USDC_ARBITRUM,
  USDC_ARBITRUM_GOERLI,
  USDC_AVAX,
  USDC_BASE,
  USDC_BASE_SEPOLIA,
  USDC_BNB,
  USDC_BOB,
  USDC_BOBA,
  USDC_CORN,
  USDC_ETHEREUM_GNOSIS,
  USDC_ETHERLINK,
  USDC_FILECOIN,
  USDC_GOAT,
  USDC_GOERLI,
  USDC_HEMI,
  USDC_LENS,
  USDC_LIGHTLINK,
  USDC_LINEA,
  USDC_MAINNET,
  USDC_MANTA,
  USDC_MANTLE,
  USDC_MATCHAIN,
  USDC_METAL,
  USDC_MOONBEAM,
  USDC_NIBIRU,
  USDC_OPTIMISM,
  USDC_OPTIMISM_GOERLI,
  USDC_POLYGON,
  USDC_POLYGON_ZKEVM,
  USDC_REDBELLY,
  USDC_SAGA,
  USDC_SCROLL,
  USDC_SEI,
  USDC_SEI_TESTNET,
  USDC_SEPOLIA,
  USDC_SONEIUM,
  USDC_SONIC,
  USDC_TAIKO,
  USDC_TELOS,
  USDC_UNICHAIN,
  USDC_UNICHAIN_SEPOLIA,
  USDC_WORLDCHAIN,
  USDC_XDC,
  USDC_XLAYER,
  USDC_ZKLINK,
  USDC_ZKSYNC,
  USDM_TELOS,
  USDT_ARBITRUM,
  USDT_BNB,
  USDT_BOB,
  USDT_ETHERLINK,
  USDT_FILECOIN,
  USDT_GOAT,
  USDT_GOERLI,
  USDT_HEMI,
  USDT_LIGHTLINK,
  USDT_LISK,
  USDT_MAINNET,
  USDT_MANTA,
  USDT_MANTLE,
  USDT_MATCHAIN,
  USDT_MONAD_TESTNET,
  USDT_OPTIMISM,
  USDT_OPTIMISM_GOERLI,
  USDT_PLASMA,
  USDT_POLYGON_ZKEVM,
  USDT_REDBELLY,
  USDT_ROOTSTOCK,
  USDT_SAGA,
  USDT_SCROLL,
  USDT_TELOS,
  USDT_UNICHAIN,
  USDT_XLAYER,
  USDT_ZKLINK,
  USDT_ZKSYNC,
  WBTC_ARBITRUM,
  WBTC_BOB,
  WBTC_FILECOIN,
  WBTC_GNOSIS,
  WBTC_GOERLI,
  WBTC_HEMI,
  WBTC_LIGHTLINK,
  WBTC_LINEA,
  WBTC_MAINNET,
  WBTC_MANTA,
  WBTC_MOONBEAM,
  WBTC_OPTIMISM,
  WBTC_OPTIMISM_GOERLI,
  WBTC_POLYGON_ZKEVM,
  WBTC_SCROLL,
  WBTC_TELOS,
  WBTC_WORLDCHAIN,
  WBTC_XLAYER,
  WBTC_ZKLINK,
  WBTC_ZKSYNC,
  WETH_ETHERLINK,
  WETH_FILECOIN,
  WETH_GOAT,
  WETH_LENS,
  WETH_PLASMA,
  WETH_POLYGON,
  WETH_REDBELLY,
  WLD_WORLDCHAIN,
  WMATIC_POLYGON,
  WMATIC_POLYGON_MUMBAI,
  WSTETH_MAINNET,
  WXDAI_GNOSIS,
} from '../token-provider';

import { IV3PoolProvider } from './pool-provider';
import { IV3SubgraphProvider, V3SubgraphPool } from './subgraph-provider';

type ChainTokenList = {
  readonly [chainId in ChainId]: Token[];
};

const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET]!,
    DAI_MAINNET,
    USDC_MAINNET,
    USDT_MAINNET,
    WBTC_MAINNET,
    WSTETH_MAINNET,
  ],
  [ChainId.GOERLI]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.GOERLI]!,
    USDT_GOERLI,
    USDC_GOERLI,
    WBTC_GOERLI,
    DAI_GOERLI,
  ],
  [ChainId.SEPOLIA]: [WRAPPED_NATIVE_CURRENCY[ChainId.SEPOLIA]!, USDC_SEPOLIA],
  [ChainId.OPTIMISM]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM]!,
    USDC_OPTIMISM,
    DAI_OPTIMISM,
    USDT_OPTIMISM,
    WBTC_OPTIMISM,
    OP_OPTIMISM,
  ],
  // todo: once subgraph is created
  [ChainId.OPTIMISM_SEPOLIA]: [
    //   WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM_SEPOLIA]!,
  ],
  [ChainId.ARBITRUM_ONE]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_ONE]!,
    WBTC_ARBITRUM,
    DAI_ARBITRUM,
    USDC_ARBITRUM,
    USDT_ARBITRUM,
    ARB_ARBITRUM,
  ],
  [ChainId.ARBITRUM_GOERLI]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_GOERLI]!,
    USDC_ARBITRUM_GOERLI,
  ],
  [ChainId.ARBITRUM_SEPOLIA]: [
    // WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_SEPOLIA]!,
  ],
  [ChainId.OPTIMISM_GOERLI]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM_GOERLI]!,
    USDC_OPTIMISM_GOERLI,
    DAI_OPTIMISM_GOERLI,
    USDT_OPTIMISM_GOERLI,
    WBTC_OPTIMISM_GOERLI,
  ],
  [ChainId.POLYGON]: [USDC_POLYGON, WETH_POLYGON, WMATIC_POLYGON],
  [ChainId.POLYGON_MUMBAI]: [
    DAI_POLYGON_MUMBAI,
    WRAPPED_NATIVE_CURRENCY[ChainId.POLYGON_MUMBAI]!,
    WMATIC_POLYGON_MUMBAI,
  ],
  [ChainId.CELO]: [CELO, CUSD_CELO, CEUR_CELO, DAI_CELO],
  [ChainId.CELO_ALFAJORES]: [
    CELO_ALFAJORES,
    CUSD_CELO_ALFAJORES,
    CEUR_CELO_ALFAJORES,
    DAI_CELO_ALFAJORES,
  ],
  [ChainId.GNOSIS]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS],
    WBTC_GNOSIS,
    WXDAI_GNOSIS,
    USDC_ETHEREUM_GNOSIS,
  ],
  [ChainId.BNB]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.BNB],
    BUSD_BNB,
    DAI_BNB,
    USDC_BNB,
    USDT_BNB,
    BTC_BNB,
    ETH_BNB,
  ],
  [ChainId.AVALANCHE]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.AVALANCHE],
    USDC_AVAX,
    DAI_AVAX,
  ],
  [ChainId.MOONBEAM]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.MOONBEAM],
    DAI_MOONBEAM,
    USDC_MOONBEAM,
    WBTC_MOONBEAM,
  ],
  [ChainId.BASE_GOERLI]: [WRAPPED_NATIVE_CURRENCY[ChainId.BASE_GOERLI]],
  [ChainId.BASE]: [WRAPPED_NATIVE_CURRENCY[ChainId.BASE], USDC_BASE],
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
  [ChainId.SONEIUM]: [WRAPPED_NATIVE_CURRENCY[ChainId.SONEIUM]!, USDC_SONEIUM],
  [ChainId.XLAYER]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.XLAYER],
    USDC_XLAYER,
    WBTC_XLAYER,
    USDT_XLAYER,
  ],
  [ChainId.ZKSYNC]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.ZKSYNC],
    USDT_ZKSYNC,
    USDC_ZKSYNC,
    WBTC_ZKSYNC,
  ],
  [ChainId.LENS]: [WRAPPED_NATIVE_CURRENCY[ChainId.LENS], USDC_LENS, WETH_LENS],
  [ChainId.BOB]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.BOB],
    USDC_BOB,
    USDT_BOB,
    WBTC_BOB,
    SOLVBTC_BOB,
  ],
  [ChainId.LISK]: [WRAPPED_NATIVE_CURRENCY[ChainId.LISK], USDT_LISK],
  [ChainId.ZKLINK]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.ZKLINK],
    USDC_ZKLINK,
    USDT_ZKLINK,
    WBTC_ZKLINK,
  ],
  [ChainId.TAIKO]: [WRAPPED_NATIVE_CURRENCY[ChainId.TAIKO], USDC_TAIKO],
  [ChainId.SEI]: [WRAPPED_NATIVE_CURRENCY[ChainId.SEI], USDC_SEI],
  [ChainId.MANTLE]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.MANTLE],
    USDT_MANTLE,
    USDC_MANTLE,
  ],
  [ChainId.SEI_TESTNET]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.SEI_TESTNET],
    USDC_SEI_TESTNET,
  ],
  [ChainId.LINEA]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.LINEA],
    USDC_LINEA,
    DAI_LINEA,
    WBTC_LINEA,
  ],
  [ChainId.MANTA]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.MANTA],
    USDT_MANTA,
    USDC_MANTA,
    WBTC_MANTA,
  ],
  [ChainId.POLYGON_ZKEVM]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.POLYGON_ZKEVM],
    USDT_POLYGON_ZKEVM,
    USDC_POLYGON_ZKEVM,
    WBTC_POLYGON_ZKEVM,
    DAI_POLYGON_ZKEVM,
  ],
  [ChainId.FILECOIN]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.FILECOIN],
    USDT_FILECOIN,
    USDC_FILECOIN,
    WBTC_FILECOIN,
    WETH_FILECOIN,
  ],
  [ChainId.ROOTSTOCK]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.ROOTSTOCK],
    USDT_ROOTSTOCK,
    RUSDT_ROOTSTOCK,
    RIF_ROOTSTOCK,
  ],
  [ChainId.SCROLL]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.SCROLL],
    USDC_SCROLL,
    USDT_SCROLL,
    DAI_SCROLL,
    WBTC_SCROLL,
    LUSD_SCROLL,
  ],
  [ChainId.BOBA]: [WRAPPED_NATIVE_CURRENCY[ChainId.BOBA], USDC_BOBA],
  [ChainId.CORN]: [WRAPPED_NATIVE_CURRENCY[ChainId.CORN], USDC_CORN],
  [ChainId.ETHERLINK]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.ETHERLINK],
    USDC_ETHERLINK,
    USDT_ETHERLINK,
    WETH_ETHERLINK,
  ],
  [ChainId.METAL]: [WRAPPED_NATIVE_CURRENCY[ChainId.METAL], USDC_METAL],
  [ChainId.SONIC]: [WRAPPED_NATIVE_CURRENCY[ChainId.SONIC], USDC_SONIC],
  [ChainId.XDC]: [WRAPPED_NATIVE_CURRENCY[ChainId.XDC], USDCE_XDC, USDC_XDC],
  [ChainId.LIGHTLINK]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.LIGHTLINK],
    USDC_LIGHTLINK,
    USDT_LIGHTLINK,
    WBTC_LIGHTLINK,
    LIGHTLINK_LIGHTLINK,
  ],
  [ChainId.TELOS]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.TELOS],
    USDC_TELOS,
    USDT_TELOS,
    USDM_TELOS,
    WBTC_TELOS,
    MST_TELOS,
  ],
  [ChainId.HEMI]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.HEMI],
    USDC_HEMI,
    USDT_HEMI,
    DAI_HEMI,
    WBTC_HEMI,
  ],
  [ChainId.GOAT]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.GOAT],
    USDC_GOAT,
    USDT_GOAT,
    WETH_GOAT,
  ],
  [ChainId.REDBELLY]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.REDBELLY],
    USDC_REDBELLY,
    USDT_REDBELLY,
    WETH_REDBELLY,
    PGK_REDBELLY,
    FJD_REDBELLY,
    RAUD_REDBELLY,
  ],
  [ChainId.SAGA]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.SAGA],
    USDC_SAGA,
    USDT_SAGA,
    ETH_SAGA,
  ],
  [ChainId.NIBIRU]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.NIBIRU],
    USDC_NIBIRU,
    STNIBI_NIBIRU,
  ],
  [ChainId.UNICHAIN]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.UNICHAIN],
    USDC_UNICHAIN,
    USDT_UNICHAIN,
    DAI_UNICHAIN,
  ],
  [ChainId.MATCHAIN]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.MATCHAIN],
    USDC_MATCHAIN,
    USDT_MATCHAIN,
  ],
  [ChainId.PLASMA]: [
    WRAPPED_NATIVE_CURRENCY[ChainId.PLASMA],
    USDT_PLASMA,
    WETH_PLASMA,
  ],
};

/**
 * Provider that uses a hardcoded list of V3 pools to generate a list of subgraph pools.
 *
 * Since the pools are hardcoded and the data does not come from the Subgraph, the TVL values
 * are dummys and should not be depended on.
 *
 * Useful for instances where other data sources are unavailable. E.g. Subgraph not available.
 *
 * @export
 * @class StaticV3SubgraphProvider
 */
export class StaticV3SubgraphProvider implements IV3SubgraphProvider {
  constructor(
    private chainId: ChainId,
    private poolProvider: IV3PoolProvider
  ) {}

  public async getPools(
    tokenIn?: Token,
    tokenOut?: Token,
    providerConfig?: ProviderConfig
  ): Promise<V3SubgraphPool[]> {
    log.info('In static subgraph provider for V3');
    const bases = BASES_TO_CHECK_TRADES_AGAINST[this.chainId];

    const basePairs: [Token, Token][] = _.flatMap(
      bases,
      (base): [Token, Token][] => bases.map((otherBase) => [base, otherBase])
    );

    if (tokenIn && tokenOut) {
      basePairs.push(
        [tokenIn, tokenOut],
        ...bases.map((base): [Token, Token] => [tokenIn, base]),
        ...bases.map((base): [Token, Token] => [tokenOut, base])
      );
    }

    const pairs: [Token, Token, FeeAmount][] = _(basePairs)
      .filter((tokens): tokens is [Token, Token] =>
        Boolean(tokens[0] && tokens[1])
      )
      .filter(
        ([tokenA, tokenB]) =>
          tokenA.address !== tokenB.address && !tokenA.equals(tokenB)
      )
      .flatMap<[Token, Token, FeeAmount]>(([tokenA, tokenB]) => {
        return [
          [tokenA, tokenB, FeeAmount.LOWEST],
          [tokenA, tokenB, FeeAmount.LOW],
          [tokenA, tokenB, FeeAmount.MEDIUM],
          [tokenA, tokenB, FeeAmount.HIGH],
        ];
      })
      .value();

    log.info(
      `V3 Static subgraph provider about to get ${pairs.length} pools on-chain`
    );
    const poolAccessor = await this.poolProvider.getPools(
      pairs,
      providerConfig
    );
    const pools = poolAccessor.getAllPools();

    const poolAddressSet = new Set<string>();
    const subgraphPools: V3SubgraphPool[] = _(pools)
      .map((pool) => {
        const { token0, token1, fee, liquidity } = pool;

        const poolAddress = Pool.getAddress(pool.token0, pool.token1, pool.fee);

        if (poolAddressSet.has(poolAddress)) {
          return undefined;
        }
        poolAddressSet.add(poolAddress);

        const liquidityNumber = JSBI.toNumber(liquidity);

        return {
          id: poolAddress,
          feeTier: unparseFeeAmount(fee),
          liquidity: liquidity.toString(),
          token0: {
            id: token0.address,
          },
          token1: {
            id: token1.address,
          },
          // As a very rough proxy we just use liquidity for TVL.
          tvlETH: liquidityNumber,
          tvlUSD: liquidityNumber,
        };
      })
      .compact()
      .value();

    return subgraphPools;
  }
}
