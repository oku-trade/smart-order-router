import { defaultAbiCoder } from "@ethersproject/abi";
import { getAddress } from "@ethersproject/address";
import { Token } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import {
	concat,
	hexDataSlice,
	keccak256,
	solidityKeccak256,
	zeroPad,
} from "ethers/lib/utils";

export const POOL_INIT_CODE_HASH =
	"0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed";
export const CONSTRUCTOR_INPUT_HASH =
	"0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
export const PREFIX =
	"0x2020dba91b30cc0006188af794c2fb30dd8520db7e2c088b7fc7c103c00ca494";

export function computeZkPoolAddress({
	factoryAddress,
	tokenA,
	tokenB,
	fee,
	initCodeHashManualOverride,
}: {
	factoryAddress: string;
	tokenA: Token;
	tokenB: Token;
	fee: FeeAmount;
	initCodeHashManualOverride?: string;
}): string {
	const salt = solidityKeccak256(
		["bytes"],
		[
			defaultAbiCoder.encode(
				["address", "address", "uint24"],
				[tokenA.address, tokenB.address, fee],
			),
		],
	);
	const pool = getAddress(
		hexDataSlice(
			keccak256(
				concat([
					PREFIX,
					zeroPad(factoryAddress, 32),
					salt,
					initCodeHashManualOverride ?? POOL_INIT_CODE_HASH,
					CONSTRUCTOR_INPUT_HASH,
				]),
			),
			12,
		),
	);
	return pool;
}
