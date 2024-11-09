/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AuthorityFactory,
  AuthorityFactoryInterface,
} from "../../../../contracts/consensus/authority/AuthorityFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "authorityOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochLength",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "calculateAuthorityAddress",
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
    inputs: [
      {
        internalType: "address",
        name: "authorityOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochLength",
        type: "uint256",
      },
    ],
    name: "newAuthority",
    outputs: [
      {
        internalType: "contract IAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "authorityOwner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "epochLength",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "newAuthority",
    outputs: [
      {
        internalType: "contract IAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506108a8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631442f7bb1461004657806393d7217c14610075578063ec99266814610088575b600080fd5b61005961005436600461029d565b61009b565b6040516001600160a01b03909116815260200160405180910390f35b6100596100833660046102d0565b61011e565b61005961009636600461029d565b6101a7565b600061011682604051806020016100b190610274565b601f1982820381018352601f9091011660408181526001600160a01b0389166020830152810187905260600160408051601f19818403018152908290526100fb929160200161032a565b60405160208183030381529060405280519060200120610236565b949350505050565b600080838360405161012f90610274565b6001600160a01b0390921682526020820152604001604051809103906000f080158015610160573d6000803e3d6000fd5b506040516001600160a01b03821681529091507fdca1fad70bee4ba7a4e17a1c6e99e657d2251af7a279124758bc01588abe2d2f9060200160405180910390a19392505050565b6000808285856040516101b990610274565b6001600160a01b03909216825260208201526040018190604051809103906000f59050801580156101ee573d6000803e3d6000fd5b506040516001600160a01b03821681529091507fdca1fad70bee4ba7a4e17a1c6e99e657d2251af7a279124758bc01588abe2d2f9060200160405180910390a1949350505050565b600061024383833061024a565b9392505050565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6105338061034083390190565b80356001600160a01b038116811461029857600080fd5b919050565b6000806000606084860312156102b257600080fd5b6102bb84610281565b95602085013595506040909401359392505050565b600080604083850312156102e357600080fd5b6102ec83610281565b946020939093013593505050565b6000815160005b8181101561031b5760208185018101518683015201610301565b50600093019283525090919050565b600061011661033983866102fa565b846102fa56fe60a060405234801561001057600080fd5b5060405161053338038061053383398101604081905261002f91610116565b8181600081116100865760405162461bcd60e51b815260206004820152601d60248201527f65706f6368206c656e677468206d757374206e6f74206265207a65726f00000060448201526064015b60405180910390fd5b6080526001600160a01b0381166100b357604051631e4fbdf760e01b81526000600482015260240161007d565b6100bc816100c4565b505050610150565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000806040838503121561012957600080fd5b82516001600160a01b038116811461014057600080fd5b6020939093015192949293505050565b6080516103c961016a600039600060f501526103c96000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80636470af0014610067578063715018a61461007c5780638da5cb5b146100845780639618f35b146100a9578063cfe8a73b146100f0578063f2fde38b1461011e575b600080fd5b61007a610075366004610314565b610131565b005b61007a61018f565b61008c610199565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e06100b7366004610347565b6001600160a01b0391909116600090815260208181526040808320938352929052205460ff1690565b60405190151581526020016100a0565b6040517f000000000000000000000000000000000000000000000000000000000000000081526020016100a0565b61007a61012c366004610371565b6101b2565b6101396101be565b60408051838152602081018390526001600160a01b0385169133917ff5a28e07a1b89d1ca3f9a2a7ef16bd650503a4791baf2e70dc401c21ee505f0a910160405180910390a361018a8383836101f5565b505050565b61019761025d565b565b60006101ad6001546001600160a01b031690565b905090565b6101bb8161026f565b50565b336101c7610199565b6001600160a01b0316146101975760405163118cdaa760e01b81523360048201526024015b60405180910390fd5b6001600160a01b038316600081815260208181526040808320858452825291829020805460ff1916600117905581518581529081018490527fd3e4892959c6ddb27e02bcaaebc0c1898d0f677b7360bf80339f10a8717957d3910160405180910390a2505050565b6102656101be565b61019760006102a6565b6102776101be565b6001600160a01b0381166102a157604051631e4fbdf760e01b8152600060048201526024016101ec565b6101bb815b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80356001600160a01b038116811461030f57600080fd5b919050565b60008060006060848603121561032957600080fd5b610332846102f8565b95602085013595506040909401359392505050565b6000806040838503121561035a57600080fd5b610363836102f8565b946020939093013593505050565b60006020828403121561038357600080fd5b61038c826102f8565b939250505056fea2646970667358221220fdfd7afacb990763bde79c74a424d800d5b6d84b9946a046eab3844941271e9864736f6c63430008170033a2646970667358221220cea85fc9e89ea5b4ed137a747c8c035c923896b73e090001968db6647ef1226864736f6c63430008170033";

type AuthorityFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AuthorityFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AuthorityFactory__factory extends ContractFactory {
  constructor(...args: AuthorityFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AuthorityFactory> {
    return super.deploy(overrides || {}) as Promise<AuthorityFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AuthorityFactory {
    return super.attach(address) as AuthorityFactory;
  }
  override connect(signer: Signer): AuthorityFactory__factory {
    return super.connect(signer) as AuthorityFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuthorityFactoryInterface {
    return new utils.Interface(_abi) as AuthorityFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AuthorityFactory {
    return new Contract(address, _abi, signerOrProvider) as AuthorityFactory;
  }
}
