import { Interface } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
import { parseBytes32String } from '@ethersproject/strings';
import { ChainId, Token } from '@uniswap/sdk-core';
import _ from 'lodash';

import { IERC20Metadata__factory } from '../types/v3/factories/IERC20Metadata__factory';
import { log, WRAPPED_NATIVE_CURRENCY } from '../util';

import { IMulticallProvider, Result } from './multicall-provider';
import { ProviderConfig } from './provider';

/**
 * Provider for getting token data.
 *
 * @export
 * @interface ITokenProvider
 */
export interface ITokenProvider {
  /**
   * Gets the token at each address. Any addresses that are not valid ERC-20 are ignored.
   *
   * @param addresses The token addresses to get.
   * @param [providerConfig] The provider config.
   * @returns A token accessor with methods for accessing the tokens.
   */
  getTokens(
    addresses: string[],
    providerConfig?: ProviderConfig
  ): Promise<TokenAccessor>;
}

export type TokenAccessor = {
  getTokenByAddress(address: string): Token | undefined;
  getTokenBySymbol(symbol: string): Token | undefined;
  getAllTokens: () => Token[];
};

// Some well known tokens on each chain for seeding cache / testing.
export const USDC_MAINNET = new Token(
  ChainId.MAINNET,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD//C'
);
export const USDT_MAINNET = new Token(
  ChainId.MAINNET,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD'
);
export const WBTC_MAINNET = new Token(
  ChainId.MAINNET,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC'
);
export const DAI_MAINNET = new Token(
  ChainId.MAINNET,
  '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  18,
  'DAI',
  'Dai Stablecoin'
);
export const EGGS_MAINNET = new Token(
  ChainId.MAINNET,
  '0x2e516BA5Bf3b7eE47fb99B09eaDb60BDE80a82e0',
  18,
  'EGGS',
  'EGGS'
);
export const AMPL_MAINNET = new Token(
  ChainId.MAINNET,
  '0xD46bA6D942050d489DBd938a2C909A5d5039A161',
  9,
  'AMPL',
  'AMPL'
);
export const FEI_MAINNET = new Token(
  ChainId.MAINNET,
  '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
  18,
  'FEI',
  'Fei USD'
);
export const UNI_MAINNET = new Token(
  ChainId.MAINNET,
  '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  18,
  'UNI',
  'Uniswap'
);

export const AAVE_MAINNET = new Token(
  ChainId.MAINNET,
  '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
  18,
  'AAVE',
  'Aave Token'
);

export const LIDO_MAINNET = new Token(
  ChainId.MAINNET,
  '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
  18,
  'LDO',
  'Lido DAO Token'
);

export const WSTETH_MAINNET = new Token(
  ChainId.MAINNET,
  '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
  18,
  'wstETH',
  'Wrapped liquid staked Ether'
);

export const USDC_SEPOLIA = new Token(
  ChainId.SEPOLIA,
  '0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5',
  18,
  'USDC',
  'USDC Token'
);
export const USDC_NATIVE_SEPOLIA = new Token(
  ChainId.SEPOLIA,
  '0x1c7d4b196cb0c7b01d743fbc6116a902379c7238',
  6,
  'USDC',
  'USDC Token'
);
export const DAI_SEPOLIA = new Token(
  ChainId.SEPOLIA,
  '0x7AF17A48a6336F7dc1beF9D485139f7B6f4FB5C8',
  18,
  'DAI',
  'DAI Token'
);
export const USDC_GOERLI = new Token(
  ChainId.GOERLI,
  '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
  6,
  'USDC',
  'USD//C'
);
export const USDT_GOERLI = new Token(
  ChainId.GOERLI,
  '0xe583769738b6dd4e7caf8451050d1948be717679',
  18,
  'USDT',
  'Tether USD'
);
export const WBTC_GOERLI = new Token(
  ChainId.GOERLI,
  '0xa0a5ad2296b38bd3e3eb59aaeaf1589e8d9a29a9',
  8,
  'WBTC',
  'Wrapped BTC'
);
export const DAI_GOERLI = new Token(
  ChainId.GOERLI,
  '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844',
  18,
  'DAI',
  'Dai Stablecoin'
);
export const UNI_GOERLI = new Token(
  ChainId.GOERLI,
  '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
  18,
  'UNI',
  'Uni token'
);

export const USDC_OPTIMISM = new Token(
  ChainId.OPTIMISM,
  '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
  6,
  'USDC',
  'USD//C.e'
);
export const USDC_NATIVE_OPTIMISM = new Token(
  ChainId.OPTIMISM,
  '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
  6,
  'USDC',
  'USD//C'
);
export const USDT_OPTIMISM = new Token(
  ChainId.OPTIMISM,
  '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
  6,
  'USDT',
  'Tether USD'
);
export const WBTC_OPTIMISM = new Token(
  ChainId.OPTIMISM,
  '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
  8,
  'WBTC',
  'Wrapped BTC'
);
export const DAI_OPTIMISM = new Token(
  ChainId.OPTIMISM,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai Stablecoin'
);
export const OP_OPTIMISM = new Token(
  ChainId.OPTIMISM,
  '0x4200000000000000000000000000000000000042',
  18,
  'OP',
  'Optimism'
);

export const USDC_OPTIMISM_GOERLI = new Token(
  ChainId.OPTIMISM_GOERLI,
  '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E',
  6,
  'USDC',
  'USD//C'
);
export const USDT_OPTIMISM_GOERLI = new Token(
  ChainId.OPTIMISM_GOERLI,
  '0x853eb4bA5D0Ba2B77a0A5329Fd2110d5CE149ECE',
  6,
  'USDT',
  'Tether USD'
);
export const WBTC_OPTIMISM_GOERLI = new Token(
  ChainId.OPTIMISM_GOERLI,
  '0xe0a592353e81a94Db6E3226fD4A99F881751776a',
  8,
  'WBTC',
  'Wrapped BTC'
);
export const DAI_OPTIMISM_GOERLI = new Token(
  ChainId.OPTIMISM_GOERLI,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const USDC_OPTIMISM_SEPOLIA = new Token(
  ChainId.OPTIMISM_SEPOLIA,
  '0x7E07E15D2a87A24492740D16f5bdF58c16db0c4E',
  6,
  'USDC',
  'USD//C'
);
export const USDT_OPTIMISM_SEPOLIA = new Token(
  ChainId.OPTIMISM_SEPOLIA,
  '0x853eb4bA5D0Ba2B77a0A5329Fd2110d5CE149ECE',
  6,
  'USDT',
  'Tether USD'
);
export const WBTC_OPTIMISM_SEPOLIA = new Token(
  ChainId.OPTIMISM_SEPOLIA,
  '0xe0a592353e81a94Db6E3226fD4A99F881751776a',
  8,
  'WBTC',
  'Wrapped BTC'
);
export const DAI_OPTIMISM_SEPOLIA = new Token(
  ChainId.OPTIMISM_SEPOLIA,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const USDC_ARBITRUM = new Token(
  ChainId.ARBITRUM_ONE,
  '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  6,
  'USDC',
  'USD//C.e'
);
export const USDC_NATIVE_ARBITRUM = new Token(
  ChainId.ARBITRUM_ONE,
  '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
  6,
  'USDC',
  'USD//C'
);
export const USDT_ARBITRUM = new Token(
  ChainId.ARBITRUM_ONE,
  '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  6,
  'USDT',
  'Tether USD'
);
export const WBTC_ARBITRUM = new Token(
  ChainId.ARBITRUM_ONE,
  '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
  8,
  'WBTC',
  'Wrapped BTC'
);
export const DAI_ARBITRUM = new Token(
  ChainId.ARBITRUM_ONE,
  '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const ARB_ARBITRUM = new Token(
  ChainId.ARBITRUM_ONE,
  '0x912CE59144191C1204E64559FE8253a0e49E6548',
  18,
  'ARB',
  'Arbitrum'
);

export const DAI_ARBITRUM_GOERLI = new Token(
  ChainId.ARBITRUM_GOERLI,
  '0x0000000000000000000000000000000000000000', // TODO: add address
  18,
  'DAI',
  'Dai Stablecoin'
);

export const DAI_ARBITRUM_SEPOLIA = new Token(
  ChainId.ARBITRUM_SEPOLIA,
  '0xc3826E277485c33F3D99C9e0CBbf8449513210EE',
  18,
  'DAI',
  'Dai Stablecoin'
);

// Bridged version of official Goerli USDC
export const USDC_ARBITRUM_GOERLI = new Token(
  ChainId.ARBITRUM_GOERLI,
  '0x8FB1E3fC51F3b789dED7557E680551d93Ea9d892',
  6,
  'USDC',
  'USD//C'
);

// Bridged version of official Sepolia USDC
export const USDC_ARBITRUM_SEPOLIA = new Token(
  ChainId.ARBITRUM_SEPOLIA,
  '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d',
  6,
  'USDC',
  'USD//C'
);

//polygon tokens
export const WMATIC_POLYGON = new Token(
  ChainId.POLYGON,
  '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  18,
  'WMATIC',
  'Wrapped MATIC'
);

export const WETH_POLYGON = new Token(
  ChainId.POLYGON,
  '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  18,
  'WETH',
  'Wrapped Ether'
);

export const USDC_POLYGON = new Token(
  ChainId.POLYGON,
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  6,
  'USDC',
  'USD//C.e'
);
export const USDC_NATIVE_POLYGON = new Token(
  ChainId.POLYGON,
  '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
  6,
  'USDC',
  'USD//C'
);

export const DAI_POLYGON = new Token(
  ChainId.POLYGON,
  '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const DAI_BASE_SEPOLIA = new Token(
  ChainId.SEPOLIA,
  '0xE6F6e27c0BF1a4841E3F09d03D7D31Da8eAd0a27',
  18,
  'DAI',
  'Dai Stablecoin'
);

//polygon mumbai tokens
export const WMATIC_POLYGON_MUMBAI = new Token(
  ChainId.POLYGON_MUMBAI,
  '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
  18,
  'WMATIC',
  'Wrapped MATIC'
);

export const USDC_POLYGON_MUMBAI = new Token(
  ChainId.POLYGON_MUMBAI,
  '0xe11a86849d99f524cac3e7a0ec1241828e332c62',
  6,
  'USDC',
  'USD//C'
);

export const DAI_POLYGON_MUMBAI = new Token(
  ChainId.POLYGON_MUMBAI,
  '0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const WETH_POLYGON_MUMBAI = new Token(
  ChainId.POLYGON_MUMBAI,
  '0xa6fa4fb5f76172d178d61b04b0ecd319c5d1c0aa',
  18,
  'WETH',
  'Wrapped Ether'
);

// BNB chain Tokens
export const BTC_BNB = new Token(
  ChainId.BNB,
  '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
  18,
  'BTCB',
  'Binance BTC'
);

export const BUSD_BNB = new Token(
  ChainId.BNB,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'BUSD'
);

export const DAI_BNB = new Token(
  ChainId.BNB,
  '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
  18,
  'DAI',
  'DAI'
);

export const ETH_BNB = new Token(
  ChainId.BNB,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'ETH'
);

export const USDC_BNB = new Token(
  ChainId.BNB,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'USDC'
);

export const USDT_BNB = new Token(
  ChainId.BNB,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'USDT'
);

// Celo Tokens
export const CELO = new Token(
  ChainId.CELO,
  '0x471EcE3750Da237f93B8E339c536989b8978a438',
  18,
  'CELO',
  'Celo native asset'
);

export const DAI_CELO = new Token(
  ChainId.CELO,
  '0xE4fE50cdD716522A56204352f00AA110F731932d',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const CUSD_CELO = new Token(
  ChainId.CELO,
  '0x765DE816845861e75A25fCA122bb6898B8B1282a',
  18,
  'CUSD',
  'Celo Dollar Stablecoin'
);
export const USDC_CELO = new Token(
  ChainId.CELO,
  '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
  18,
  'USDC',
  'USD//C.e'
);
export const USDC_WORMHOLE_CELO = new Token(
  ChainId.CELO,
  '0x37f750B7cC259A2f741AF45294f6a16572CF5cAd',
  18,
  'USDC',
  'USD//C.e'
);
export const USDC_NATIVE_CELO = new Token(
  ChainId.CELO,
  '0x765DE816845861e75A25fCA122bb6898B8B1282a',
  18,
  'USDC',
  'USD//C'
);

export const CEUR_CELO = new Token(
  ChainId.CELO,
  '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
  18,
  'CEUR',
  'Celo Euro Stablecoin'
);

// Celo Alfajores Tokens
export const CELO_ALFAJORES = new Token(
  ChainId.CELO_ALFAJORES,
  '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
  18,
  'CELO',
  'Celo native asset'
);
export const DAI_CELO_ALFAJORES = new Token(
  ChainId.CELO_ALFAJORES,
  '0x7d91E51C8F218f7140188A155f5C75388630B6a8',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const CUSD_CELO_ALFAJORES = new Token(
  ChainId.CELO_ALFAJORES,
  '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
  18,
  'CUSD',
  'Celo Dollar Stablecoin'
);

export const CEUR_CELO_ALFAJORES = new Token(
  ChainId.CELO_ALFAJORES,
  '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F',
  18,
  'CEUR',
  'Celo Euro Stablecoin'
);

// Avalanche Tokens
export const DAI_AVAX = new Token(
  ChainId.AVALANCHE,
  '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
  18,
  'DAI.e',
  'DAI.e Token'
);

export const USDC_AVAX = new Token(
  ChainId.AVALANCHE,
  '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
  6,
  'USDC',
  'USDC Token'
);
export const USDC_BRIDGED_AVAX = new Token(
  ChainId.AVALANCHE,
  '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
  6,
  'USDC',
  'USDC Token'
);
export const USDC_NATIVE_AVAX = new Token(
  ChainId.AVALANCHE,
  '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
  6,
  'USDC',
  'USDC Token'
);

// Base Tokens
export const USDC_BASE = new Token(
  ChainId.BASE,
  '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
  6,
  'USDbC',
  'USD Base Coin'
);
export const USDC_NATIVE_BASE = new Token(
  ChainId.BASE,
  '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
  6,
  'USDbC',
  'USD Base Coin'
);
export const VIRTUAL_BASE = new Token(
  ChainId.BASE,
  '0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b',
  18,
  'VIRTUAL',
  'Virtual Protocol'
);

// Base Goerli Tokens
export const USDC_BASE_GOERLI = new Token(
  ChainId.BASE_GOERLI,
  '0x853154e2A5604E5C74a2546E2871Ad44932eB92C',
  6,
  'USDbC',
  'USD Base Coin'
);

// Gnosis Tokens
export const USDC_ETHEREUM_GNOSIS = new Token(
  ChainId.GNOSIS,
  '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
  6,
  'USDC',
  'USDC from Ethereum on Gnosis'
);

export const WXDAI_GNOSIS = new Token(
  ChainId.GNOSIS,
  '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
  18,
  'WXDAI',
  'Wrapped XDAI on Gnosis'
);

export const WBTC_GNOSIS = new Token(
  ChainId.GNOSIS,
  '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252',
  8,
  'WBTC',
  'Wrapped BTC from Ethereum on Gnosis'
);

// Moonbeam Tokens
export const USDC_MOONBEAM = new Token(
  ChainId.MOONBEAM,
  '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
  6,
  'USDC',
  'USD Coin bridged using Multichain'
);

export const WGLMR_MOONBEAM = new Token(
  ChainId.MOONBEAM,
  '0xAcc15dC74880C9944775448304B263D191c6077F',
  18,
  'WGLMR',
  'Wrapped GLMR'
);

export const DAI_MOONBEAM = new Token(
  ChainId.MOONBEAM,
  '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
  6,
  'DAI',
  'Dai on moonbeam bridged using Multichain'
);

export const WBTC_MOONBEAM = new Token(
  ChainId.MOONBEAM,
  '0x922D641a426DcFFaeF11680e5358F34d97d112E1',
  8,
  'WBTC',
  'Wrapped BTC bridged using Multichain'
);

// Blast Tokens
export const USDB_BLAST = new Token(
  ChainId.BLAST,
  '0x4300000000000000000000000000000000000003',
  18,
  'USDB',
  'USD Blast'
);

export const USDC_ZORA = new Token(
  ChainId.ZORA,
  '0xCccCCccc7021b32EBb4e8C08314bD62F7c653EC4',
  6,
  'USDzC',
  'USD Coin (Bridged from Ethereum)'
);

export const USDC_ZKSYNC = new Token(
  ChainId.ZKSYNC,
  '0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4',
  6,
  'USDC',
  'USDC'
);

export const USDCE_ZKSYNC = new Token(
  ChainId.ZKSYNC,
  '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4',
  6,
  'USDC.e',
  'Bridged USDC (zkSync)'
);

export const DAI_ZKSYNC = new Token(
  ChainId.ZKSYNC,
  '0x4B9eb6c0b6ea15176BBF62841C6B2A8a398cb656',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const USDC_WORLDCHAIN = new Token(
  ChainId.WORLDCHAIN,
  '0x79A02482A880bCE3F13e09Da970dC34db4CD24d1',
  6,
  'USDC.e',
  'Bridged USDC (world-chain-mainnet)'
);

export const USDT_MONAD_TESTNET = new Token(
  ChainId.MONAD_TESTNET,
  '0xfBC2D240A5eD44231AcA3A9e9066bc4b33f01149',
  6,
  'USDT',
  'USDT'
);

export const WLD_WORLDCHAIN = new Token(
  ChainId.WORLDCHAIN,
  '0x2cFc85d8E48F8EAB294be644d9E25C3030863003',
  18,
  'WLD',
  'Worldcoin'
);

export const WBTC_WORLDCHAIN = new Token(
  ChainId.WORLDCHAIN,
  '0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3',
  8,
  'WBTC',
  'Wrapped BTC'
);

export const USDC_UNICHAIN_SEPOLIA = new Token(
  ChainId.UNICHAIN_SEPOLIA,
  '0x31d0220469e10c4E71834a79b1f276d740d3768F',
  6,
  'USDC',
  'USDC Token'
);

export const USDC_BASE_SEPOLIA = new Token(
  ChainId.BASE_SEPOLIA,
  '0x036CbD53842c5426634e7929541eC2318f3dCF7e',
  6,
  'USDC',
  'USDC Token'
);

export const USDC_UNICHAIN = new Token(
  ChainId.UNICHAIN,
  // TODO: validate USDC address is final / validated
  '0x078D782b760474a361dDA0AF3839290b0EF57AD6',
  6,
  'USDC',
  'USD Token'
);

export const DAI_UNICHAIN = new Token(
  ChainId.UNICHAIN,
  '0x20CAb320A855b39F724131C69424240519573f81',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const USDT_UNICHAIN = new Token(
  ChainId.UNICHAIN,
  '0x9151434b16b9763660705744891fa906f660ecc5',
  6,
  'USDT',
  'Tether USD'
);

export const USDC_SONEIUM = new Token(
  ChainId.SONEIUM,
  '0xbA9986D2381edf1DA03B0B9c1f8b00dc4AacC369',
  6,
  'USDCE',
  'Soneium Bridged USDC Soneium'
);

// Gnosis Tokens
export const USDC_GNOSIS = new Token(
  ChainId.GNOSIS,
  '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
  6,
  'USDC',
  'USDC from Ethereum on Gnosis'
);

export const USDT_GNOSIS = new Token(
  ChainId.GNOSIS,
  '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
  6,
  'USDT',
  'Tether USD on xDai'
);

export const USDC_MC_MOONBEAM = new Token(
  ChainId.MOONBEAM,
  '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
  6,
  'USDC',
  'USD Coin bridged using Multichain'
);

export const USDT_ZKSYNC = new Token(
  ChainId.ZKSYNC,
  '0x493257fD37EDB34451f62EDf8D2a0C418852bA4C',
  6,
  'USDT',
  'Tether USD'
);

export const WBTC_ZKSYNC = new Token(
  ChainId.ZKSYNC,
  '0xBBeB516fb02a01611cBBE0453Fe3c580D7281011',
  8,
  'WBTC',
  'Wrapped BTC'
);

export const WETH_ZKSYNC = new Token(
  ChainId.ZKSYNC,
  '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
  18,
  'WETH',
  'Wrapped ETH'
);

// lens
export const USDC_LENS = new Token(
  ChainId.LENS,
  '0x88F08E304EC4f90D644Cec3Fb69b8aD414acf884',
  6,
  'USDC',
  'USD Coin'
);

export const WETH_LENS = new Token(
  ChainId.LENS,
  '0xE5ecd226b3032910CEaa43ba92EE8232f8237553',
  18,
  'WETH',
  'Wrapped Ether'
);

// xlayer
export const USDC_XLAYER = new Token(
  ChainId.XLAYER,
  '0x74b7f16337b8972027f6196a17a631ac6de26d22',
  6,
  'USDC',
  'USD Coin'
);

export const USDT_XLAYER = new Token(
  ChainId.XLAYER,
  '0x1e4a5963abfd975d8c9021ce480b42188849d41d',
  6,
  'USDT',
  'Tether USD'
);

export const WBTC_XLAYER = new Token(
  ChainId.XLAYER,
  '0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1',
  8,
  'WBTC',
  'Wrapped BTC'
);

export const WETH_XLAYER = new Token(
  ChainId.XLAYER,
  '0xe538905cf8410324e03a5a23c1c177a474d59b2b',
  18,
  'WOKB',
  'Wrapped OKB'
);

// bob
export const USDC_BOB = new Token(
  ChainId.BOB,
  '0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0',
  6,
  'USDC.e',
  'Bridged USDC (BOB)'
);
export const USDT_BOB = new Token(
  ChainId.BOB,
  '0x05D032ac25d322df992303dCa074EE7392C117b9',
  6,
  'USDT',
  'Tether USD'
);
export const WETH_BOB = new Token(
  ChainId.BOB,
  '0x4200000000000000000000000000000000000006',
  18,
  'WETH',
  'Wrapped Ether'
);
export const WBTC_BOB = new Token(
  ChainId.BOB,
  '0x03c7054bcb39f7b2e5b2c7acb37583e32d70cfa3',
  8,
  'WBTC',
  'Wrapped BTC'
);
export const SOLVBTC_BOB = new Token(
  ChainId.BOB,
  '0x541fd749419ca806a8bc7da8ac23d346f2df8b77',
  8,
  'SolvBTC',
  'Solv Protocol SolvBTC'
);

// lisk
export const USDT_LISK = new Token(
  ChainId.LISK,
  '0x05D032ac25d322df992303dCa074EE7392C117b9',
  6,
  'USDT',
  'Tether USD'
);

export const WETH_LISK = new Token(
  ChainId.LISK,
  '0x4200000000000000000000000000000000000006',
  18,
  'WETH',
  'Wrapped ETH'
);

// zklink
export const USDC_ZKLINK = new Token(
  ChainId.ZKLINK,
  '0x1a1A3b2ff016332e866787B311fcB63928464509',
  6,
  'USDC',
  'USD Coin'
);

export const USDT_ZKLINK = new Token(
  ChainId.ZKLINK,
  '0x2F8A25ac62179B31D62D7F80884AE57464699059',
  6,
  'USDT',
  'Tether USD'
);

export const WBTC_ZKLINK = new Token(
  ChainId.ZKLINK,
  '0xDa4AaEd3A53962c83B35697Cd138cc6df43aF71f',
  8,
  'WBTC',
  'Wrapped BTC'
);

export const WETH_ZKLINK = new Token(
  ChainId.ZKLINK,
  '0x8280a4e7D5B3B658ec4580d3Bc30f5e50454F169',
  18,
  'WETH',
  'Wrapped ETH'
);

// taiko
export const USDC_TAIKO = new Token(
  ChainId.TAIKO,
  '0x07d83526730c7438048D55A4fc0b850e2aaB6f0b',
  6,
  'USDC',
  'USD Coin'
);

export const WETH_TAIKO = new Token(
  ChainId.TAIKO,
  '0xA51894664A773981C6C112C43ce576f315d5b1B6',
  18,
  'WETH',
  'Wrapped ETH'
);

// sei
export const USDC_SEI = new Token(
  ChainId.SEI,
  '0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1',
  6,
  'USDC',
  'USD Coin'
);

export const WSEI_SEI = new Token(
  ChainId.SEI,
  '0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7',
  18,
  'WSEI',
  'Wrapped SEI'
);

// mantle
export const USDC_MANTLE = new Token(
  ChainId.MANTLE,
  '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
  6,
  'USDC',
  'USD Coin'
);

export const USDT_MANTLE = new Token(
  ChainId.MANTLE,
  '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE',
  6,
  'USDT',
  'Tether USD'
);

export const WETH_MANTLE = new Token(
  ChainId.MANTLE,
  '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
  18,
  'WMNT',
  'Wrapped Mantle'
);

// sei testnet
export const USDC_SEI_TESTNET = new Token(
  ChainId.SEI_TESTNET,
  '0xA09F3386E05CEAC547b02f223bF500a728BE7d77',
  6,
  'USDC',
  'USD Coin'
);

export const WSEI_SEI_TESTNET = new Token(
  ChainId.SEI_TESTNET,
  '0x57eE725BEeB991c70c53f9642f36755EC6eb2139',
  18,
  'WSEI',
  'Wrapped SEI'
);

// linea
export const USDC_LINEA = new Token(
  ChainId.LINEA,
  '0x176211869ca2b568f2a7d4ee941e073a821ee1ff',
  6,
  'USDC',
  'USD Coin'
);

export const DAI_LINEA = new Token(
  ChainId.LINEA,
  '0x4af15ec2a0bd43db75dd04e62faa3b8ef36b00d5',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const WBTC_LINEA = new Token(
  ChainId.LINEA,
  '0x3aab2285ddcddad8edf438c1bab47e1a9d05a9b4',
  8,
  'WBTC',
  'Wrapped BTC'
);

export const WETH_LINEA = new Token(
  ChainId.LINEA,
  '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
  18,
  'WETH',
  'Wrapped ETH'
);

export const WETH_BLAST = new Token(
  ChainId.BLAST,
  '0x4300000000000000000000000000000000000004',
  18,
  'WETH',
  'Wrapped ETH'
);

// manta
export const USDC_MANTA = new Token(
  ChainId.MANTA,
  '0xb73603C5d87fA094B7314C74ACE2e64D165016fb',
  6,
  'USDC',
  'USD Coin'
);

export const USDT_MANTA = new Token(
  ChainId.MANTA,
  '0xf417F5A458eC102B90352F697D6e2Ac3A3d2851f',
  6,
  'USDT',
  'Tether USD'
);

export const WBTC_MANTA = new Token(
  ChainId.MANTA,
  '0x305E88d809c9DC03179554BFbf85Ac05Ce8F18d6',
  8,
  'WBTC',
  'Wrapped BTC'
);

export const MANTA_MANTA = new Token(
  ChainId.MANTA,
  '0x95CeF13441Be50d20cA4558CC0a27B601aC544E5',
  18,
  'MANTA',
  'Manta'
);

// polylgon zkevm
export const USDC_POLYGON_ZKEVM = new Token(
  ChainId.POLYGON_ZKEVM,
  '0x37eaa0ef3549a5bb7d431be78a3d99bd360d19e5',
  6,
  'USDC',
  'USD Coin'
);

export const DAI_POLYGON_ZKEVM = new Token(
  ChainId.POLYGON_ZKEVM,
  '0x744C5860ba161b5316F7E80D9Ec415e2727e5bD5',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const USDT_POLYGON_ZKEVM = new Token(
  ChainId.POLYGON_ZKEVM,
  '0x1E4a5963aBFD975d8c9021ce480b42188849D41d',
  6,
  'USDT',
  'Tether USD'
);

export const WBTC_POLYGON_ZKEVM = new Token(
  ChainId.POLYGON_ZKEVM,
  '0xEA034fb02eB1808C2cc3adbC15f447B93CbE08e1',
  8,
  'WBTC',
  'Wrapped BTC'
);

export const WETH_POLYGON_ZKEVM = new Token(
  ChainId.POLYGON_ZKEVM,
  '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
  18,
  'WETH',
  'Wrapped ETH'
);

export const MATIC_POLYGON_ZKEVM = new Token(
  ChainId.POLYGON_ZKEVM,
  '0xa2036f0538221a77A3937F1379699f44945018d0',
  18,
  'MATIC',
  'Matic Token'
);

// filecoin
export const USDC_FILECOIN = new Token(
  ChainId.FILECOIN,
  '0x2421db204968a367cc2c866cd057fa754cb84edf',
  6,
  'celerUSDC',
  'Celer USDC'
);

export const USDT_FILECOIN = new Token(
  ChainId.FILECOIN,
  '0x7f5373AE26c3E8FfC4c77b7255DF7eC1A9aF52a6',
  6,
  'axlUSDT',
  'Axelar Tether USD'
);

export const WBTC_FILECOIN = new Token(
  ChainId.FILECOIN,
  '0x1a35EE4640b0A3B87705B0A4B45D227Ba60Ca2ad',
  8,
  'axlWBTC',
  'Axelar Wrapped BTC'
);

export const WETH_FILECOIN = new Token(
  ChainId.FILECOIN,
  '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
  18,
  'axlWETH',
  'Axelar Wrapped ETH'
);

export const WFIL_FILECOIN = new Token(
  ChainId.FILECOIN,
  '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A',
  18,
  'WFIL',
  'Wrapped FIL'
);

//rootstock
export const RUSDT_ROOTSTOCK = new Token(
  ChainId.ROOTSTOCK,
  '0xef213441a85df4d7acbdae0cf78004e1e486bb96',
  18,
  'RUSDT',
  'Rootstock USDT'
);

export const USDT_ROOTSTOCK = new Token(
  ChainId.ROOTSTOCK,
  '0xaf368c91793cb22739386dfcbbb2f1a9e4bcbebf',
  6,
  'USDT',
  'Tether USD'
);

export const RIF_ROOTSTOCK = new Token(
  ChainId.ROOTSTOCK,
  '0x2acc95758f8b5f583470ba265eb685a8f45fc9d5',
  18,
  'RIF',
  'RIF'
);

export const WRBTC_ROOTSTOCK = new Token(
  ChainId.ROOTSTOCK,
  '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
  18,
  'WRBTC',
  'Wrapped BTC'
);

//scroll
export const USDT_SCROLL = new Token(
  ChainId.SCROLL,
  '0xf55bec9cafdbe8730f096aa55dad6d22d44099df',
  6,
  'USDT',
  'Tether USD'
);

export const USDC_SCROLL = new Token(
  ChainId.SCROLL,
  '0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4',
  6,
  'USDC',
  'USD Coin'
);

export const WBTC_SCROLL = new Token(
  ChainId.SCROLL,
  '0x3c1bca5a656e69edcd0d4e36bebb3fcdaca60cf1',
  8,
  'WBTC',
  'Wrapped BTC'
);

export const DAI_SCROLL = new Token(
  ChainId.SCROLL,
  '0xca77eb3fefe3725dc33bccb54edefc3d9f764f97',
  18,
  'DAI',
  'Dai Stablecoin'
);

export const LUSD_SCROLL = new Token(
  ChainId.SCROLL,
  '0xedeabc3a1e7d21fe835ffa6f83a710c70bb1a051',
  18,
  'LUSD',
  'LUSD Stablecoin'
);

// BOBA Tokens
export const BOBA = new Token(
  ChainId.BOBA,
  '0xa18bf3994c0cc6e3b63ac420308e5383f53120d7',
  18,
  'BOBA',
  'Boba native asset'
);
export const USDC_BOBA = new Token(
  ChainId.BOBA,
  '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
  6,
  'USDC',
  'USD Coin'
);

// Corn Tokens
export const USDC_CORN = new Token(
  ChainId.CORN,
  '0xDF0B24095e15044538866576754F3C964e902Ee6',
  6,
  'USDC',
  'USD Coin'
);

// Etherlink Tokens
export const USDC_ETHERLINK = new Token(
  ChainId.ETHERLINK,
  '0x796Ea11Fa2dD751eD01b53C372fFDB4AAa8f00F9',
  6,
  'USDC',
  'USD Coin'
);

export const USDT_ETHERLINK = new Token(
  ChainId.ETHERLINK,
  '0x2C03058C8AFC06713be23e58D2febC8337dbfE6A',
  6,
  'USDT',
  'Tether USD'
);

export const WETH_ETHERLINK = new Token(
  ChainId.ETHERLINK,
  '0xfc24f770F94edBca6D6f885E12d4317320BcB401',
  18,
  'WETH',
  'Wrapped Ether'
);

// Redbelly Tokens
export const USDT_REDBELLY = new Token(
  ChainId.REDBELLY,
  '0x8C4aCd74Ff4385f3B7911432FA6787Aa14406f8B',
  6,
  'USDT',
  'Tether USD'
);

export const USDC_REDBELLY = new Token(
  ChainId.REDBELLY,
  '0x8201c02d4AB2214471E8C3AD6475C8b0CD9F2D06',
  6,
  'USDC.e',
  'USD Coin'
);

export const WETH_REDBELLY = new Token(
  ChainId.REDBELLY,
  '0x0Fa205c0446cD9EeDCc7538c9E24BC55AD08207f',
  18,
  'WETH',
  'Wrapped Ether'
);

export const PGK_REDBELLY = new Token(
  ChainId.REDBELLY,
  '0xd527b16ade7adb4ad38b0a8baf17fc56050ef596',
  18,
  'PGK',
  'PGK'
);

export const FJD_REDBELLY = new Token(
  ChainId.REDBELLY,
  '0x2c120acf414d6720b0fd7428a2feedfc06a4850c',
  18,
  'FJD',
  'FJD'
);

export const RAUD_REDBELLY = new Token(
  ChainId.REDBELLY,
  '0x3347618acc92226b2efa6eb8c35e5cc3d56eab1f',
  18,
  'RAUD',
  'RAUD'
);

// Saga Tokens
export const USDT_SAGA = new Token(
  ChainId.SAGA,
  '0xC8fe3C1de344854f4429bB333AFFAeF97eF88CEa',
  6,
  'USDT',
  'Usdt'
);

export const USDC_SAGA = new Token(
  ChainId.SAGA,
  '0xfc960C233B8E98e0Cf282e29BDE8d3f105fc24d5',
  6,
  'USDC',
  'Usdc'
);

export const ETH_SAGA = new Token(
  ChainId.SAGA,
  '0xeb41D53F14Cb9a67907f2b8b5DBc223944158cCb',
  18,
  'ETH-WEI',
  'Eth-wei'
);

// Lightlink Tokens
export const USDT_LIGHTLINK = new Token(
  ChainId.LIGHTLINK,
  '0x808d7c71ad2ba3FA531b068a2417C63106BC0949',
  6,
  'USDT',
  'Usdt'
);

export const USDC_LIGHTLINK = new Token(
  ChainId.LIGHTLINK,
  '0xbCF8C1B03bBDDA88D579330BDF236B58F8bb2cFd',
  6,
  'USDC',
  'Usdc'
);

export const WBTC_LIGHTLINK = new Token(
  ChainId.LIGHTLINK,
  '0x46A5e3Fa4a02B9Ae43D9dF9408C86eD643144A67',
  18,
  'ETH-WEI',
  'Eth-wei'
);

export const LIGHTLINK_LIGHTLINK = new Token(
  ChainId.LIGHTLINK,
  '0xd9d7123552fA2bEdB2348bB562576D67f6E8e96E',
  18,
  'LL.e',
  'Lightlink'
);

// Goat Tokens
export const USDT_GOAT = new Token(
  ChainId.GOAT,
  '0xE1AD845D93853fff44990aE0DcecD8575293681e',
  6,
  'USDT',
  'Tether USD'
);

export const USDC_GOAT = new Token(
  ChainId.GOAT,
  '0x3022b87ac063DE95b1570F46f5e470F8B53112D8',
  6,
  'USDC.e',
  'USD Coin'
);

export const WETH_GOAT = new Token(
  ChainId.GOAT,
  '0x3a1293Bdb83bBbDd5Ebf4fAc96605aD2021BbC0f',
  18,
  'WETH',
  'Wrapped Ether'
);

// Metal Tokens
export const USDC_METAL = new Token(
  ChainId.METAL,
  '0x51E85d70944256710cb141847F1a04f568C1Db0e',
  6,
  'USDC',
  'USD Coin'
);

// Sonic Tokens
export const USDC_SONIC = new Token(
  ChainId.SONIC,
  '0x29219dd400f2bf60e5a23d13be72b486d4038894',
  6,
  'USDC',
  'USD Coin'
);

// XDC Tokens
export const USDC_XDC = new Token(
  ChainId.XDC,
  '0x2A8E898b6242355c290E1f4Fc966b8788729A4D4',
  6,
  'USDC.e',
  'USD Coin'
);

// Telos Tokens
export const USDC_TELOS = new Token(
  ChainId.TELOS,
  '0xf1815bd50389c46847f0bda824ec8da914045d14',
  6,
  'USDC',
  'USD Coin'
);

export const USDT_TELOS = new Token(
  ChainId.TELOS,
  '0x674843C06FF83502ddb4D37c2E09C01cdA38cbc8',
  6,
  'USDT',
  'USD Tether'
);

export const WBTC_TELOS = new Token(
  ChainId.TELOS,
  '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
  8,
  'WBTC',
  'Wrapped BTC'
);

export const WETH_TELOS = new Token(
  ChainId.TELOS,
  '0xbab93b7ad7fe8692a878b95a8e689423437cc500',
  18,
  'WETH',
  'Wrapped Ether'
);

export const MST_TELOS = new Token(
  ChainId.TELOS,
  '0x568524da340579887db50ecf602cd1ba8451b243',
  18,
  'MST',
  'MST'
);

export const USDM_TELOS = new Token(
  ChainId.TELOS,
  '0x8f7d64ea96d729ef24a0f30b4526d47b80d877b9',
  18,
  'USDM',
  'USDM Stablecoin'
);

// Hemi Tokens
export const USDC_HEMI = new Token(
  ChainId.HEMI,
  '0xad11a8BEb98bbf61dbb1aa0F6d6F2ECD87b35afA',
  6,
  'USDC',
  'USD Coin'
);
export const USDT_HEMI = new Token(
  ChainId.HEMI,
  '0xbB0D083fb1be0A9f6157ec484b6C79E0A4e31C2e',
  6,
  'USDT',
  'Tether USD'
);
export const DAI_HEMI = new Token(
  ChainId.HEMI,
  '0x6c851F501a3F24E29A8E39a29591cddf09369080',
  18,
  'DAI',
  'Dai Stablecoin'
);
export const WBTC_HEMI = new Token(
  ChainId.HEMI,
  '0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3',
  8,
  'WBTC',
  'Wrapped BTC'
);

//Nibiru
export const USDC_NIBIRU = new Token(
  ChainId.NIBIRU,
  '0x0829F361A05D993d5CEb035cA6DF3446b060970b',
  6,
  'USDC',
  'USD Coin'
);

export const STNIBI_NIBIRU = new Token(
  ChainId.NIBIRU,
  '0xca0a9fb5fbf692fa12fd13c0a900ec56bb3f0a7b',
  6,
  'stNIBI',
  'Liquid Staked Nibiru'
);

//Matchain
export const USDC_MATCHAIN = new Token(
  ChainId.MATCHAIN,
  '0x679Dc08cC3A4acFeea2f7CAFAa37561aE0b41Ce7',
  6,
  'USDC',
  'USD Token'
);

export const USDT_MATCHAIN = new Token(
  ChainId.MATCHAIN,
  '0xB6dc6C8b71e88642cEAD3be1025565A9eE74d1C6',
  6,
  'USDT',
  'Tether USD'
);

//Plasma
export const USDT_PLASMA = new Token(
  ChainId.PLASMA,
  '0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb',
  6,
  'USDT0',
  'USDT0'
);

export const WETH_PLASMA = new Token(
  ChainId.PLASMA,
  '0x9895D81bB462A195b4922ED7De0e3ACD007c32CB',
  18,
  'WXPL',
  'Wrapped XPL'
);

export class TokenProvider implements ITokenProvider {
  constructor(
    private chainId: ChainId,
    protected multicall2Provider: IMulticallProvider
  ) {}

  private async getTokenSymbol(
    addresses: string[],
    providerConfig?: ProviderConfig
  ): Promise<{
    result: {
      blockNumber: BigNumber;
      results: Result<[string]>[];
    };
    isBytes32: boolean;
  }> {
    let result;
    let isBytes32 = false;

    try {
      result =
        await this.multicall2Provider.callSameFunctionOnMultipleContracts<
          undefined,
          [string]
        >({
          addresses,
          contractInterface: IERC20Metadata__factory.createInterface(),
          functionName: 'symbol',
          providerConfig,
        });
    } catch (error) {
      log.error(
        { addresses },
        `TokenProvider.getTokenSymbol[string] failed with error ${error}. Trying with bytes32.`
      );

      const bytes32Interface = new Interface([
        {
          inputs: [],
          name: 'symbol',
          outputs: [
            {
              internalType: 'bytes32',
              name: '',
              type: 'bytes32',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ]);

      try {
        result =
          await this.multicall2Provider.callSameFunctionOnMultipleContracts<
            undefined,
            [string]
          >({
            addresses,
            contractInterface: bytes32Interface,
            functionName: 'symbol',
            providerConfig,
          });
        isBytes32 = true;
      } catch (error) {
        log.fatal(
          { addresses },
          `TokenProvider.getTokenSymbol[bytes32] failed with error ${error}.`
        );

        throw new Error(
          '[TokenProvider.getTokenSymbol] Impossible to fetch token symbol.'
        );
      }
    }

    return { result, isBytes32 };
  }

  private async getTokenDecimals(
    addresses: string[],
    providerConfig?: ProviderConfig
  ) {
    return this.multicall2Provider.callSameFunctionOnMultipleContracts<
      undefined,
      [number]
    >({
      addresses,
      contractInterface: IERC20Metadata__factory.createInterface(),
      functionName: 'decimals',
      providerConfig,
    });
  }

  public async getTokens(
    _addresses: string[],
    providerConfig?: ProviderConfig
  ): Promise<TokenAccessor> {
    const addressToToken: { [address: string]: Token } = {};
    const symbolToToken: { [symbol: string]: Token } = {};

    const addresses = _(_addresses)
      .map((address) => address.toLowerCase())
      .uniq()
      .value();

    if (addresses.length > 0) {
      const [symbolsResult, decimalsResult] = await Promise.all([
        this.getTokenSymbol(addresses, providerConfig),
        this.getTokenDecimals(addresses, providerConfig),
      ]);

      const isBytes32 = symbolsResult.isBytes32;
      const { results: symbols } = symbolsResult.result;
      const { results: decimals } = decimalsResult;

      for (let i = 0; i < addresses.length; i++) {
        const address = addresses[i]!;

        const symbolResult = symbols[i];
        const decimalResult = decimals[i];

        if (!symbolResult?.success || !decimalResult?.success) {
          log.info(
            {
              symbolResult,
              decimalResult,
            },
            `Dropping token with address ${address} as symbol or decimal are invalid`
          );
          continue;
        }

        let symbol;

        try {
          symbol = isBytes32
            ? parseBytes32String(symbolResult.result[0]!)
            : symbolResult.result[0]!;
        } catch (error) {
          if (
            error instanceof Error &&
            error.message.includes(
              'invalid bytes32 string - no null terminator'
            )
          ) {
            log.error(
              {
                symbolResult,
                error,
                address,
              },
              `invalid bytes32 string - no null terminator`
            );
          }

          throw error;
        }
        const decimal = decimalResult.result[0]!;

        addressToToken[address.toLowerCase()] = new Token(
          this.chainId,
          address,
          decimal,
          symbol
        );
        symbolToToken[symbol.toLowerCase()] =
          addressToToken[address.toLowerCase()]!;
      }

      log.info(
        `Got token symbol and decimals for ${
          Object.values(addressToToken).length
        } out of ${addresses.length} tokens on-chain ${
          providerConfig ? `as of: ${providerConfig?.blockNumber}` : ''
        }`
      );
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

export const DAI_ON = (chainId: ChainId): Token => {
  switch (chainId) {
    case ChainId.MAINNET:
      return DAI_MAINNET;
    case ChainId.GOERLI:
      return DAI_GOERLI;
    case ChainId.SEPOLIA:
      return DAI_SEPOLIA;
    case ChainId.OPTIMISM:
      return DAI_OPTIMISM;
    case ChainId.OPTIMISM_GOERLI:
      return DAI_OPTIMISM_GOERLI;
    case ChainId.OPTIMISM_SEPOLIA:
      return DAI_OPTIMISM_SEPOLIA;
    case ChainId.ARBITRUM_ONE:
      return DAI_ARBITRUM;
    case ChainId.ARBITRUM_GOERLI:
      return DAI_ARBITRUM_GOERLI;
    case ChainId.ARBITRUM_SEPOLIA:
      return DAI_ARBITRUM_SEPOLIA;
    case ChainId.POLYGON:
      return DAI_POLYGON;
    case ChainId.POLYGON_MUMBAI:
      return DAI_POLYGON_MUMBAI;
    case ChainId.CELO:
      return DAI_CELO;
    case ChainId.CELO_ALFAJORES:
      return DAI_CELO_ALFAJORES;
    case ChainId.MOONBEAM:
      return DAI_MOONBEAM;
    case ChainId.BNB:
      return DAI_BNB;
    case ChainId.AVALANCHE:
      return DAI_AVAX;
    case ChainId.ZKSYNC:
      return DAI_ZKSYNC;
    case ChainId.UNICHAIN:
      return DAI_UNICHAIN;
    case ChainId.BASE_SEPOLIA:
      return DAI_BASE_SEPOLIA;
    case ChainId.LINEA:
      return DAI_LINEA;
    case ChainId.SCROLL:
      return DAI_SCROLL;
    case ChainId.HEMI:
      return DAI_HEMI;
    default:
      throw new Error(`Chain id: ${chainId} not supported`);
  }
};

export const USDT_ON = (chainId: ChainId): Token => {
  switch (chainId) {
    case ChainId.MAINNET:
      return USDT_MAINNET;
    case ChainId.GOERLI:
      return USDT_GOERLI;
    case ChainId.OPTIMISM:
      return USDT_OPTIMISM;
    case ChainId.OPTIMISM_GOERLI:
      return USDT_OPTIMISM_GOERLI;
    case ChainId.OPTIMISM_SEPOLIA:
      return USDT_OPTIMISM_SEPOLIA;
    case ChainId.ARBITRUM_ONE:
      return USDT_ARBITRUM;
    case ChainId.BNB:
      return USDT_BNB;
    case ChainId.MONAD_TESTNET:
      return USDT_MONAD_TESTNET;
    case ChainId.ZKSYNC:
      return USDT_ZKSYNC;
    case ChainId.BOB:
      return USDT_BOB;
    case ChainId.LISK:
      return USDT_LISK;
    case ChainId.GNOSIS:
      return USDT_GNOSIS;
    case ChainId.XLAYER:
      return USDT_XLAYER;
    case ChainId.ZKLINK:
      return USDT_ZKLINK;
    case ChainId.MANTLE:
      return USDT_MANTLE;
    case ChainId.MANTA:
      return USDT_MANTA;
    case ChainId.FILECOIN:
      return USDT_FILECOIN;
    case ChainId.ROOTSTOCK:
      return USDT_ROOTSTOCK;
    case ChainId.SCROLL:
      return USDT_SCROLL;
    case ChainId.HEMI:
      return USDT_HEMI;
    case ChainId.TELOS:
      return USDT_TELOS;
    case ChainId.REDBELLY:
      return USDT_REDBELLY;
    case ChainId.SAGA:
      return USDT_SAGA;
    case ChainId.GOAT:
      return USDT_GOAT;
    case ChainId.LIGHTLINK:
      return USDT_LIGHTLINK;
    case ChainId.ETHERLINK:
      return USDT_ETHERLINK;
    case ChainId.UNICHAIN:
      return USDT_UNICHAIN;
    case ChainId.MATCHAIN:
      return USDT_MATCHAIN;
    case ChainId.PLASMA:
      return USDT_PLASMA;
    default:
      throw new Error(`Chain id: ${chainId} not supported`);
  }
};

export const USDC_ON = (chainId: ChainId): Token => {
  switch (chainId) {
    case ChainId.MAINNET:
      return USDC_MAINNET;
    case ChainId.GOERLI:
      return USDC_GOERLI;
    case ChainId.SEPOLIA:
      return USDC_SEPOLIA;
    case ChainId.OPTIMISM:
      return USDC_OPTIMISM;
    case ChainId.OPTIMISM_GOERLI:
      return USDC_OPTIMISM_GOERLI;
    case ChainId.OPTIMISM_SEPOLIA:
      return USDC_OPTIMISM_SEPOLIA;
    case ChainId.ARBITRUM_ONE:
      return USDC_ARBITRUM;
    case ChainId.ARBITRUM_GOERLI:
      return USDC_ARBITRUM_GOERLI;
    case ChainId.ARBITRUM_SEPOLIA:
      return USDC_ARBITRUM_SEPOLIA;
    case ChainId.POLYGON:
      return USDC_POLYGON;
    case ChainId.POLYGON_MUMBAI:
      return USDC_POLYGON_MUMBAI;
    case ChainId.GNOSIS:
      return USDC_ETHEREUM_GNOSIS;
    case ChainId.MOONBEAM:
      return USDC_MOONBEAM;
    case ChainId.BNB:
      return USDC_BNB;
    case ChainId.AVALANCHE:
      return USDC_AVAX;
    case ChainId.BASE:
      return USDC_BASE;
    case ChainId.BASE_GOERLI:
      return USDC_BASE_GOERLI;
    case ChainId.ZORA:
      return USDC_ZORA;
    case ChainId.ZKSYNC:
      return USDCE_ZKSYNC;
    case ChainId.WORLDCHAIN:
      return USDC_WORLDCHAIN;
    case ChainId.UNICHAIN_SEPOLIA:
      return USDC_UNICHAIN_SEPOLIA;
    case ChainId.BASE_SEPOLIA:
      return USDC_BASE_SEPOLIA;
    case ChainId.UNICHAIN:
      return USDC_UNICHAIN;
    case ChainId.SONEIUM:
      return USDC_SONEIUM;
    case ChainId.BOBA:
      return USDC_BOBA;
    case ChainId.LENS:
      return USDC_LENS;
    case ChainId.XLAYER:
      return USDC_XLAYER;
    case ChainId.BOB:
      return USDC_BOB;
    case ChainId.ZKLINK:
      return USDC_ZKLINK;
    case ChainId.TAIKO:
      return USDC_TAIKO;
    case ChainId.SEI:
      return USDC_SEI;
    case ChainId.MANTLE:
      return USDC_MANTLE;
    case ChainId.SEI_TESTNET:
      return USDC_SEI_TESTNET;
    case ChainId.LINEA:
      return USDC_LINEA;
    case ChainId.BLAST:
      return USDB_BLAST;
    case ChainId.MANTA:
      return USDC_MANTA;
    case ChainId.FILECOIN:
      return USDC_FILECOIN;
    case ChainId.SCROLL:
      return USDC_SCROLL;
    case ChainId.CORN:
      return USDC_CORN;
    case ChainId.ETHERLINK:
      return USDC_ETHERLINK;
    case ChainId.METAL:
      return USDC_METAL;
    case ChainId.SONIC:
      return USDC_SONIC;
    case ChainId.XDC:
      return USDC_XDC;
    case ChainId.REDBELLY:
      return USDC_REDBELLY;
    case ChainId.SAGA:
      return USDC_SAGA;
    case ChainId.GOAT:
      return USDC_GOAT;
    case ChainId.TELOS:
      return USDC_TELOS;
    case ChainId.HEMI:
      return USDC_HEMI;
    case ChainId.LIGHTLINK:
      return USDC_LIGHTLINK;
    case ChainId.NIBIRU:
      return USDC_NIBIRU;
    case ChainId.MATCHAIN:
      return USDC_MATCHAIN;
    default:
      throw new Error(`Chain id: ${chainId} not supported`);
  }
};

export const WNATIVE_ON = (chainId: ChainId): Token => {
  return WRAPPED_NATIVE_CURRENCY[chainId];
};

export const V4_SEPOLIA_TEST_A = new Token(
  ChainId.SEPOLIA,
  '0x0275C79896215a790dD57F436E1103D4179213be',
  18,
  'A',
  'MockA'
);

export const V4_SEPOLIA_TEST_B = new Token(
  ChainId.SEPOLIA,
  '0x1a6990c77cfbba398beb230dd918e28aab71eec2',
  18,
  'B',
  'MockB'
);
