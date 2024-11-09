/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC1155SinglePortal,
  IERC1155SinglePortalInterface,
} from "../../../contracts/portals/IERC1155SinglePortal";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC1155",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "appContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "baseLayerData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "execLayerData",
        type: "bytes",
      },
    ],
    name: "depositSingleERC1155Token",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getInputBox",
    outputs: [
      {
        internalType: "contract IInputBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC1155SinglePortal__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1155SinglePortalInterface {
    return new utils.Interface(_abi) as IERC1155SinglePortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1155SinglePortal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC1155SinglePortal;
  }
}
