/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAuthority,
  IAuthorityInterface,
} from "../../../../contracts/consensus/authority/IAuthority";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "appContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastProcessedBlockNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "claim",
        type: "bytes32",
      },
    ],
    name: "ClaimAcceptance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "submitter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "appContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lastProcessedBlockNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "claim",
        type: "bytes32",
      },
    ],
    name: "ClaimSubmission",
    type: "event",
  },
  {
    inputs: [],
    name: "getEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "appContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lastProcessedBlockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "claim",
        type: "bytes32",
      },
    ],
    name: "submitClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "appContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "claim",
        type: "bytes32",
      },
    ],
    name: "wasClaimAccepted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IAuthority__factory {
  static readonly abi = _abi;
  static createInterface(): IAuthorityInterface {
    return new utils.Interface(_abi) as IAuthorityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAuthority {
    return new Contract(address, _abi, signerOrProvider) as IAuthority;
  }
}
