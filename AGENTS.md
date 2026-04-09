# AGENTS.md — Smart Order Router

## Project Overview

Uniswap Smart Order Router fork maintained by GFX Labs / Oku Trade. Routes token swaps
across Uniswap V2, V3, V4, and mixed protocols on 60+ EVM chains. Published as
`@gfxlabs/uniswap-smart-order-router`. TypeScript, CommonJS + ESM dual build.

## Build / Lint / Test Commands

```bash
# Install dependencies
npm install

# Full build (typechain codegen + CJS + ESM compilation) — required before tests
npm run build

# Build CJS only
npm run build:main

# Build ESM only
npm run build:module

# Run all unit tests
npm run test

# Run a single test file
npx jest test/unit/providers/cache-node.test.ts

# Run tests matching a name pattern
npx jest test/unit -t "validate FeeAmount"

# Integration tests (requires .env with RPC URLs + Tenderly keys)
npm run integ-test

# Lint + auto-fix
npm run fix:lint

# Format with Prettier
npm run fix:prettier

# Run both fixers sequentially
npm run fix
```

**Important:** Always run `npm run build` before running tests. TypeChain types are
generated during the build step and are required by both source and test code.

## Project Structure

```
src/
  index.ts              # Barrel re-export entry point
  abis/                 # Contract ABI JSON files
  providers/            # Data providers (tokens, pools, gas, caching, simulation)
    v2/, v3/, v4/       # Protocol-specific providers
    caching/            # Caching layer providers
  routers/              # Router implementations
    alpha-router/       # Main AlphaRouter (smart order routing)
      entities/         # Route entities, models
      functions/        # Routing functions (compute routes, best swap, etc.)
      gas-models/       # Gas estimation models per protocol version
      quoters/          # Quoter implementations
    legacy-router/      # Legacy router
  types/                # TypeChain-generated contract types
  util/                 # Utilities (chains, amounts, logging, addresses)
test/
  unit/                 # Unit tests (mirrors src/ structure)
  integ/                # Integration tests (require RPC endpoints)
  test-util/            # Shared test utilities and mock data
```

## Code Style

### Formatting

- **Prettier** with single quotes: `{ "singleQuote": true }`
- 2-space indentation, LF line endings, max 80-char lines
- Trailing commas in multi-line constructs

### Imports

Imports are strictly enforced by ESLint (`import/order` + `sort-imports`):

1. External packages first, then relative imports
2. Blank line between import groups
3. Alphabetized within each group (case-insensitive)
4. Members within a destructured import are alphabetized

**Restricted imports (will error):**

- `import ... from 'ethers'` — use `@ethersproject/<module>` for tree-shaking
- `import ... from 'mnemonist'` — use `mnemonist/<module>` for tree-shaking

```typescript
// Correct
import { BigNumber } from '@ethersproject/bignumber';
import { Currency, Token, TradeType } from '@uniswap/sdk-core';
import { Pool as V3Pool, Route as V3RouteRaw } from '@uniswap/v3-sdk';

import { SimulationStatus } from '../providers';
import { CurrencyAmount } from '../util/amounts';
```

### Naming Conventions

| Element             | Convention                        | Example                               |
| ------------------- | --------------------------------- | ------------------------------------- |
| Variables/functions | `camelCase`                       | `getApplicableV3FeeAmounts`           |
| Classes             | `PascalCase`                      | `AlphaRouter`, `TokenProvider`        |
| Interfaces          | `I` prefix                        | `IRouter`, `ICache`, `ITokenProvider` |
| Types               | `PascalCase`                      | `SwapRoute`, `ProviderConfig`         |
| Enums               | `PascalCase`                      | `ChainId`, `Protocol`                 |
| Constants           | `SCREAMING_SNAKE`                 | `USDC_MAINNET`, `SUPPORTED_CHAINS`    |
| Enum members        | `PascalCase` or `SCREAMING_SNAKE` | `Protocol.V3`, `ChainId.MAINNET`      |

### Types

- TypeScript strict mode with `noUncheckedIndexedAccess`, `noUnusedLocals`,
  `noUnusedParameters`, `noImplicitReturns`
- Explicit return types on public/abstract methods
- Use union types and discriminated unions for result types
- Generic type parameters: `ICache<T>`, `IRouter<RoutingConfig>`
- Non-null assertions (`!`) used judiciously for known-safe index access

### Exports

- **Named exports only** — no default exports
- Barrel re-exports via `index.ts` at each module level: `export * from './module'`
- Main entry point `src/index.ts` re-exports `providers`, `routers`, `util`

### Error Handling

- `throw new Error('descriptive message')` for fatal errors
- `try/catch` with structured logging: `log.error(...)`, `log.fatal(...)`
- Fallback patterns: try primary approach, catch, try alternate
- Status enums for operation results: `SimulationStatus`, `SwapToRatioStatus`

### Class Patterns

- Abstract classes as interfaces: `abstract class IRouter<RoutingConfig>`
- Concrete implementations: `class TokenProvider implements ITokenProvider`
- Constructor parameter visibility: `protected chainId: ChainId`
- No leading underscore for private fields

### Comments

- JSDoc (`/** */`) on classes, interfaces, and public methods
- Tags: `@export`, `@abstract`, `@param`, `@returns`
- Inline `//` comments for implementation notes
- `// TODO:` for future work

## Testing

- **Framework:** Jest 27 with ts-jest preset, node environment
- **Mocking:** sinon for stubs/spies, jest-mock for module mocking
- **Test files:** `test/unit/**/*.test.ts` (mirrors `src/` structure)
- **Assertions:** Jest `expect()` with `toEqual`, `toBeDefined`, `toBeUndefined`
- Tests import from both `../../../src` (source) and `../../../build/main` (compiled)

```typescript
import { NodeJSCache } from '../../../src';

describe('NodeJSCache', () => {
  it('set keys and batchGet', async () => {
    // arrange, act, assert pattern
    expect(result).toEqual('expected');
  });
});
```

## Key Dependencies

- `@uniswap/sdk-core`, `v2-sdk`, `v3-sdk`, `v4-sdk`, `router-sdk` — Uniswap SDKs
- `@ethersproject/*` — Ethereum interaction (import per-module, never from `ethers`)
- `bunyan` — Structured logging (`log.info()`, `log.error()`, etc.)
- `lodash` — Utility functions
- `async-retry` — Retry logic for RPC calls
- `node-cache` — In-memory caching
- `mnemonist` — Data structures (import per-module)

**Dependency overrides** (in package.json):

- `@uniswap/sdk-core` -> `@gfxlabs/uniswap-sdk-core`
- `@uniswap/universal-router-sdk` -> `@gfxlabs/uniswap-universal-router-sdk`

## CI / Workflows

- **Unit tests + lint** run on push to main and PRs
- **Integration tests** run per-chain with RPC provider secrets
- **Pre-commit hooks** (husky): `git-secrets` and `trufflehog` for secret scanning
- Node 18.x, npm
