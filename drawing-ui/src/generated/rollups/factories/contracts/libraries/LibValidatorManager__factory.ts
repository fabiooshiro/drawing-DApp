/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LibValidatorManager,
  LibValidatorManagerInterface,
} from "../../../contracts/libraries/LibValidatorManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Result",
        name: "result",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "claims",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "address payable[2]",
        name: "validators",
        type: "address[2]",
      },
    ],
    name: "ClaimReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum Result",
        name: "result",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bytes32[2]",
        name: "claims",
        type: "bytes32[2]",
      },
      {
        indexed: false,
        internalType: "address payable[2]",
        name: "validators",
        type: "address[2]",
      },
    ],
    name: "DisputeEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "claim",
        type: "bytes32",
      },
    ],
    name: "NewEpoch",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ef4fc2370688cdd6f930819779525f4eb40cfe2940c34c21dac114e88cbc1ea764736f6c634300080d0033";

type LibValidatorManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibValidatorManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibValidatorManager__factory extends ContractFactory {
  constructor(...args: LibValidatorManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibValidatorManager> {
    return super.deploy(overrides || {}) as Promise<LibValidatorManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibValidatorManager {
    return super.attach(address) as LibValidatorManager;
  }
  override connect(signer: Signer): LibValidatorManager__factory {
    return super.connect(signer) as LibValidatorManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibValidatorManagerInterface {
    return new utils.Interface(_abi) as LibValidatorManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibValidatorManager {
    return new Contract(address, _abi, signerOrProvider) as LibValidatorManager;
  }
}
