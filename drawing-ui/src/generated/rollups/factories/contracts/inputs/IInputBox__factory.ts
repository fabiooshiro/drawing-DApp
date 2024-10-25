/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IInputBox,
  IInputBoxInterface,
} from "../../../contracts/inputs/IInputBox";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "appContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inputLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxInputLength",
        type: "uint256",
      },
    ],
    name: "InputTooLarge",
    type: "error",
  },
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
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "InputAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "appContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
    ],
    name: "addInput",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "getInputHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "appContract",
        type: "address",
      },
    ],
    name: "getNumberOfInputs",
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
] as const;

export class IInputBox__factory {
  static readonly abi = _abi;
  static createInterface(): IInputBoxInterface {
    return new utils.Interface(_abi) as IInputBoxInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInputBox {
    return new Contract(address, _abi, signerOrProvider) as IInputBox;
  }
}
