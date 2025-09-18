import { ChainId, Token } from '@uniswap/sdk-core';
import _ from 'lodash';

import { log, WRAPPED_NATIVE_CURRENCY } from '../util';

import { ICache } from './cache';
import {
  BOBA,
  BTC_BNB,
  BUSD_BNB,
  CELO,
  CELO_ALFAJORES,
  CEUR_CELO,
  CUSD_CELO,
  CUSD_CELO_ALFAJORES,
  DAI_ARBITRUM,
  DAI_ARBITRUM_SEPOLIA,
  DAI_AVAX,
  DAI_BNB,
  DAI_CELO,
  DAI_CELO_ALFAJORES,
  DAI_HEMI,
  DAI_LINEA,
  DAI_MAINNET,
  DAI_MOONBEAM,
  DAI_OPTIMISM,
  DAI_OPTIMISM_GOERLI,
  DAI_OPTIMISM_SEPOLIA,
  DAI_POLYGON_MUMBAI,
  DAI_POLYGON_ZKEVM,
  DAI_SCROLL,
  DAI_UNICHAIN,
  ETH_BNB,
  ETH_SAGA,
  FJD_REDBELLY,
  ITokenProvider,
  LIGHTLINK_LIGHTLINK,
  LUSD_SCROLL,
  MST_TELOS,
  PGK_REDBELLY,
  RAUD_REDBELLY,
  RIF_ROOTSTOCK,
  RUSDT_ROOTSTOCK,
  SOLVBTC_BOB,
  STNIBI_NIBIRU,
  TokenAccessor,
  USDB_BLAST,
  USDC_ARBITRUM,
  USDC_ARBITRUM_GOERLI,
  USDC_ARBITRUM_SEPOLIA,
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
  USDC_GNOSIS,
  USDC_GOAT,
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
  USDC_OPTIMISM_SEPOLIA,
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
  USDT_GNOSIS,
  USDT_GOAT,
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
  USDT_OPTIMISM_SEPOLIA,
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
  WBTC_HEMI,
  WBTC_LIGHTLINK,
  WBTC_LINEA,
  WBTC_MAINNET,
  WBTC_MANTA,
  WBTC_MOONBEAM,
  WBTC_OPTIMISM,
  WBTC_OPTIMISM_GOERLI,
  WBTC_OPTIMISM_SEPOLIA,
  WBTC_POLYGON_ZKEVM,
  WBTC_SCROLL,
  WBTC_TELOS,
  WBTC_WORLDCHAIN,
  WBTC_XLAYER,
  WBTC_ZKLINK,
  WBTC_ZKSYNC,
  WETH_ETHERLINK,
  WETH_GOAT,
  WETH_LENS,
  WETH_PLASMA,
  WETH_REDBELLY,
  WLD_WORLDCHAIN,
  WMATIC_POLYGON,
  WMATIC_POLYGON_MUMBAI,
} from './token-provider';

// These tokens will added to the Token cache on initialization.
export const CACHE_SEED_TOKENS: {
  [chainId in ChainId]?: { [symbol: string]: Token };
} = {
  [ChainId.MAINNET]: {
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET]!,
    USDC: USDC_MAINNET,
    USDT: USDT_MAINNET,
    WBTC: WBTC_MAINNET,
    DAI: DAI_MAINNET,
    // This token stores its symbol as bytes32, therefore can not be fetched on-chain using
    // our token providers.
    // This workaround adds it to the cache, so we won't try to fetch it on-chain.
    RING: new Token(
      ChainId.MAINNET,
      '0x9469D013805bFfB7D3DEBe5E7839237e535ec483',
      18,
      'RING',
      'RING'
    ),
  },
  [ChainId.SEPOLIA]: {
    USDC: USDC_SEPOLIA,
  },
  [ChainId.OPTIMISM]: {
    USDC: USDC_OPTIMISM,
    USDT: USDT_OPTIMISM,
    WBTC: WBTC_OPTIMISM,
    DAI: DAI_OPTIMISM,
  },
  [ChainId.OPTIMISM_GOERLI]: {
    USDC: USDC_OPTIMISM_GOERLI,
    USDT: USDT_OPTIMISM_GOERLI,
    WBTC: WBTC_OPTIMISM_GOERLI,
    DAI: DAI_OPTIMISM_GOERLI,
  },
  [ChainId.OPTIMISM_SEPOLIA]: {
    USDC: USDC_OPTIMISM_SEPOLIA,
    USDT: USDT_OPTIMISM_SEPOLIA,
    WBTC: WBTC_OPTIMISM_SEPOLIA,
    DAI: DAI_OPTIMISM_SEPOLIA,
  },
  [ChainId.ARBITRUM_ONE]: {
    USDC: USDC_ARBITRUM,
    USDT: USDT_ARBITRUM,
    WBTC: WBTC_ARBITRUM,
    DAI: DAI_ARBITRUM,
  },
  [ChainId.ARBITRUM_GOERLI]: {
    USDC: USDC_ARBITRUM_GOERLI,
  },
  [ChainId.ARBITRUM_SEPOLIA]: {
    USDC: USDC_ARBITRUM_SEPOLIA,
    DAI: DAI_ARBITRUM_SEPOLIA,
  },
  [ChainId.POLYGON]: {
    WMATIC: WMATIC_POLYGON,
    USDC: USDC_POLYGON,
  },
  [ChainId.POLYGON_MUMBAI]: {
    WMATIC: WMATIC_POLYGON_MUMBAI,
    DAI: DAI_POLYGON_MUMBAI,
  },
  [ChainId.CELO]: {
    CELO: CELO,
    CUSD: CUSD_CELO,
    CEUR: CEUR_CELO,
    DAI: DAI_CELO,
  },
  [ChainId.CELO_ALFAJORES]: {
    CELO: CELO_ALFAJORES,
    CUSD: CUSD_CELO_ALFAJORES,
    CEUR: CUSD_CELO_ALFAJORES,
    DAI: DAI_CELO_ALFAJORES,
  },
  [ChainId.GNOSIS]: {
    WXDAI: WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS],
    USDC_ETHEREUM_GNOSIS: USDC_ETHEREUM_GNOSIS,
  },
  [ChainId.MOONBEAM]: {
    USDC: USDC_MOONBEAM,
    DAI: DAI_MOONBEAM,
    WBTC: WBTC_MOONBEAM,
    WGLMR: WRAPPED_NATIVE_CURRENCY[ChainId.MOONBEAM],
  },
  [ChainId.BNB]: {
    USDC: USDC_BNB,
    USDT: USDT_BNB,
    BUSD: BUSD_BNB,
    ETH: ETH_BNB,
    DAI: DAI_BNB,
    BTC: BTC_BNB,
    WBNB: WRAPPED_NATIVE_CURRENCY[ChainId.BNB],
  },
  [ChainId.AVALANCHE]: {
    USDC: USDC_AVAX,
    DAI: DAI_AVAX,
    WAVAX: WRAPPED_NATIVE_CURRENCY[ChainId.AVALANCHE],
  },
  [ChainId.BASE]: {
    USDC: USDC_BASE,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.BASE],
  },
  [ChainId.BLAST]: {
    USDB: USDB_BLAST,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.BLAST],
  },
  [ChainId.ZORA]: {
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.ZORA],
  },
  [ChainId.ZKSYNC]: {
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.ZKSYNC],
  },
  [ChainId.WORLDCHAIN]: {
    USDC: USDC_WORLDCHAIN,
    WLD: WLD_WORLDCHAIN,
    WBTC: WBTC_WORLDCHAIN,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.WORLDCHAIN],
  },
  [ChainId.UNICHAIN_SEPOLIA]: {
    USDC: USDC_SEPOLIA,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.UNICHAIN_SEPOLIA],
  },
  [ChainId.MONAD_TESTNET]: {
    USDT: USDT_MONAD_TESTNET,
    WMON: WRAPPED_NATIVE_CURRENCY[ChainId.MONAD_TESTNET],
  },
  [ChainId.BASE_SEPOLIA]: {
    USDC: USDC_BASE_SEPOLIA,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.BASE_SEPOLIA],
  },
  [ChainId.UNICHAIN]: {
    USDC: USDC_UNICHAIN,
    USDT: USDT_UNICHAIN,
    DAI: DAI_UNICHAIN,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.UNICHAIN],
  },
  [ChainId.SONEIUM]: {
    USDC: USDC_SONEIUM,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.SONEIUM],
  },
  [ChainId.GNOSIS]: {
    WXDAI: WRAPPED_NATIVE_CURRENCY[ChainId.GNOSIS],
    USDC: USDC_GNOSIS,
    USDT: USDT_GNOSIS,
    WBTC: WBTC_GNOSIS,
  },
  [ChainId.XLAYER]: {
    WOKB: WRAPPED_NATIVE_CURRENCY[ChainId.XLAYER],
    USDC: USDC_XLAYER,
    USDT: USDT_XLAYER,
    WBTC: WBTC_XLAYER,
  },
  [ChainId.ZKSYNC]: {
    USDC: USDC_ZKSYNC,
    USDT: USDT_ZKSYNC,
    WBTC: WBTC_ZKSYNC,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.ZKSYNC],
  },
  [ChainId.LENS]: {
    USDC: USDC_LENS,
    WETH: WETH_LENS,
    WGHO: WRAPPED_NATIVE_CURRENCY[ChainId.LENS],
  },
  [ChainId.BOB]: {
    USDC: USDC_BOB,
    USDT: USDT_BOB,
    WBTC: WBTC_BOB,
    SOLVBTC: SOLVBTC_BOB,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.BOB],
  },
  [ChainId.LISK]: {
    USDT: USDT_LISK,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.LISK],
  },
  [ChainId.ZKLINK]: {
    USDC: USDC_ZKLINK,
    USDT: USDT_ZKLINK,
    WBTC: WBTC_ZKLINK,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.ZKLINK],
  },
  [ChainId.TAIKO]: {
    USDC: USDC_TAIKO,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.TAIKO],
  },
  [ChainId.SEI]: {
    USDC: USDC_SEI,
    WSEI: WRAPPED_NATIVE_CURRENCY[ChainId.SEI],
  },
  [ChainId.MANTLE]: {
    USDC: USDC_MANTLE,
    USDT: USDT_MANTLE,
    WMNT: WRAPPED_NATIVE_CURRENCY[ChainId.MANTLE],
  },
  [ChainId.SEI_TESTNET]: {
    USDC: USDC_SEI_TESTNET,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.SEI_TESTNET],
  },
  [ChainId.LINEA]: {
    USDC: USDC_LINEA,
    DAI: DAI_LINEA,
    WBTC: WBTC_LINEA,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.LINEA],
  },
  [ChainId.MANTA]: {
    USDC: USDC_MANTA,
    USDT: USDT_MANTA,
    WBTC: WBTC_MANTA,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.MANTA],
  },
  [ChainId.POLYGON_ZKEVM]: {
    USDC: USDC_POLYGON_ZKEVM,
    USDT: USDT_POLYGON_ZKEVM,
    DAI: DAI_POLYGON_ZKEVM,
    WBTC: WBTC_POLYGON_ZKEVM,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.POLYGON_ZKEVM],
  },
  [ChainId.FILECOIN]: {
    USDC: USDC_FILECOIN,
    USDT: USDT_FILECOIN,
    WBTC: WBTC_FILECOIN,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.FILECOIN],
  },
  [ChainId.ROOTSTOCK]: {
    USDT: USDT_ROOTSTOCK,
    RUSDT: RUSDT_ROOTSTOCK,
    RIF: RIF_ROOTSTOCK,
    WRBTC: WRAPPED_NATIVE_CURRENCY[ChainId.ROOTSTOCK],
  },
  [ChainId.SCROLL]: {
    USDT: USDT_SCROLL,
    USDC: USDC_SCROLL,
    WBTC: WBTC_SCROLL,
    DAI: DAI_SCROLL,
    LUSD: LUSD_SCROLL,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.SCROLL],
  },
  [ChainId.BOBA]: {
    USDC: USDC_BOBA,
    BOBA: BOBA,
  },
  [ChainId.CORN]: {
    USDC: USDC_CORN,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.CORN],
  },
  [ChainId.ETHERLINK]: {
    USDC: USDC_ETHERLINK,
    USDT: USDT_ETHERLINK,
    WETH: WETH_ETHERLINK,
    WXTZ: WRAPPED_NATIVE_CURRENCY[ChainId.ETHERLINK],
  },
  [ChainId.METAL]: {
    USDC: USDC_METAL,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.METAL],
  },
  [ChainId.SONIC]: {
    USDC: USDC_SONIC,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.SONIC],
  },
  [ChainId.XDC]: {
    USDC: USDC_XDC,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.XDC],
  },
  [ChainId.LIGHTLINK]: {
    USDC: USDC_LIGHTLINK,
    USDT: USDT_LIGHTLINK,
    WBTC: WBTC_LIGHTLINK,
    LL: LIGHTLINK_LIGHTLINK,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.LIGHTLINK],
  },
  [ChainId.TELOS]: {
    USDC: USDC_TELOS,
    USDT: USDT_TELOS,
    USDM: USDM_TELOS,
    WBTC: WBTC_TELOS,
    MST: MST_TELOS,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.TELOS],
  },
  [ChainId.HEMI]: {
    USDC: USDC_HEMI,
    USDT: USDT_HEMI,
    WBTC: WBTC_HEMI,
    DAI: DAI_HEMI,
    WETH: WRAPPED_NATIVE_CURRENCY[ChainId.HEMI],
  },
  [ChainId.GOAT]: {
    USDC: USDC_GOAT,
    USDT: USDT_GOAT,
    WETH: WETH_GOAT,
    WGBTC: WRAPPED_NATIVE_CURRENCY[ChainId.GOAT],
  },
  [ChainId.REDBELLY]: {
    USDC: USDC_REDBELLY,
    USDT: USDT_REDBELLY,
    WETH: WETH_REDBELLY,
    WRBNT: WRAPPED_NATIVE_CURRENCY[ChainId.REDBELLY],
    PGK: PGK_REDBELLY,
    FJD: FJD_REDBELLY,
    RAUD: RAUD_REDBELLY,
  },
  [ChainId.SAGA]: {
    USDC: USDC_SAGA,
    USDT: USDT_SAGA,
    ETH: ETH_SAGA,
  },
  [ChainId.NIBIRU]: {
    USDC: USDC_NIBIRU,
    STNIBI: STNIBI_NIBIRU,
    WNIBI: WRAPPED_NATIVE_CURRENCY[ChainId.NIBIRU],
  },
  [ChainId.MATCHAIN]: {
    USDC: USDC_MATCHAIN,
    USDT: USDT_MATCHAIN,
    WBNB: WRAPPED_NATIVE_CURRENCY[ChainId.MATCHAIN],
  },
  [ChainId.PLASMA]: {
    USDT: USDT_PLASMA,
    WETH: WETH_PLASMA,
    WXPL: WRAPPED_NATIVE_CURRENCY[ChainId.PLASMA],
  },
  // Currently we do not have providers for Moonbeam mainnet or Gnosis testnet
};

/**
 * Provider for getting token metadata that falls back to a different provider
 * in the event of failure.
 *
 * @export
 * @class CachingTokenProviderWithFallback
 */
export class CachingTokenProviderWithFallback implements ITokenProvider {
  private CACHE_KEY = (chainId: ChainId, address: string) =>
    `token-${chainId}-${address}`;

  constructor(
    protected chainId: ChainId,
    // Token metadata (e.g. symbol and decimals) don't change so can be cached indefinitely.
    // Constructing a new token object is slow as sdk-core does checksumming.
    private tokenCache: ICache<Token>,
    protected primaryTokenProvider: ITokenProvider,
    protected fallbackTokenProvider?: ITokenProvider
  ) {}

  public async getTokens(_addresses: string[]): Promise<TokenAccessor> {
    const seedTokens = CACHE_SEED_TOKENS[this.chainId];

    if (seedTokens) {
      for (const token of Object.values(seedTokens)) {
        await this.tokenCache.set(
          this.CACHE_KEY(this.chainId, token.address.toLowerCase()),
          token
        );
      }
    }

    const addressToToken: { [address: string]: Token } = {};
    const symbolToToken: { [symbol: string]: Token } = {};

    const addresses = _(_addresses)
      .map((address) => address.toLowerCase())
      .uniq()
      .value();

    const addressesToFindInPrimary = [];
    const addressesToFindInSecondary = [];

    for (const address of addresses) {
      if (await this.tokenCache.has(this.CACHE_KEY(this.chainId, address))) {
        addressToToken[address.toLowerCase()] = (await this.tokenCache.get(
          this.CACHE_KEY(this.chainId, address)
        ))!;
        symbolToToken[addressToToken[address]!.symbol!] =
          (await this.tokenCache.get(this.CACHE_KEY(this.chainId, address)))!;
      } else {
        addressesToFindInPrimary.push(address);
      }
    }

    log.info(
      { addressesToFindInPrimary },
      `Found ${addresses.length - addressesToFindInPrimary.length} out of ${
        addresses.length
      } tokens in local cache. ${
        addressesToFindInPrimary.length > 0
          ? `Checking primary token provider for ${addressesToFindInPrimary.length} tokens`
          : ``
      }
      `
    );

    if (addressesToFindInPrimary.length > 0) {
      const primaryTokenAccessor = await this.primaryTokenProvider.getTokens(
        addressesToFindInPrimary
      );

      for (const address of addressesToFindInPrimary) {
        const token = primaryTokenAccessor.getTokenByAddress(address);

        if (token) {
          addressToToken[address.toLowerCase()] = token;
          symbolToToken[addressToToken[address]!.symbol!] = token;
          await this.tokenCache.set(
            this.CACHE_KEY(this.chainId, address.toLowerCase()),
            addressToToken[address]!
          );
        } else {
          addressesToFindInSecondary.push(address);
        }
      }

      log.info(
        { addressesToFindInSecondary },
        `Found ${
          addressesToFindInPrimary.length - addressesToFindInSecondary.length
        } tokens in primary. ${
          this.fallbackTokenProvider
            ? `Checking secondary token provider for ${addressesToFindInSecondary.length} tokens`
            : `No fallback token provider specified. About to return.`
        }`
      );
    }

    if (this.fallbackTokenProvider && addressesToFindInSecondary.length > 0) {
      const secondaryTokenAccessor = await this.fallbackTokenProvider.getTokens(
        addressesToFindInSecondary
      );

      for (const address of addressesToFindInSecondary) {
        const token = secondaryTokenAccessor.getTokenByAddress(address);
        if (token) {
          addressToToken[address.toLowerCase()] = token;
          symbolToToken[addressToToken[address]!.symbol!] = token;
          await this.tokenCache.set(
            this.CACHE_KEY(this.chainId, address.toLowerCase()),
            addressToToken[address]!
          );
        }
      }
    }

    return {
      getTokenByAddress: (address: string): Token | undefined => {
        return addressToToken[address.toLowerCase()];
      },
      getTokenBySymbol: (symbol: string): Token | undefined => {
        return symbolToToken[symbol.toLowerCase()];
      },
      getAllTokens: (): Token[] => {
        return Object.values(addressToToken);
      },
    };
  }
}
