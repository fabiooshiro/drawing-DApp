/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC1155BatchPortal,
  ERC1155BatchPortalInterface,
} from "../../../contracts/portals/ERC1155BatchPortal";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IInputBox",
        name: "inputBox",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
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
    name: "depositBatchERC1155Token",
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

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161064538038061064583398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516105b461009160003960008181603c015261012601526105b46000f3fe608060405234801561001057600080fd5b50600436106100355760003560e01c8062aace9a1461003a57806324d15c6714610077575b600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006040516001600160a01b03909116815260200160405180910390f35b61008a6100853660046102c1565b61008c565b005b604051631759616b60e11b81526001600160a01b038b1690632eb2c2d6906100c69033908d908d908d908d908d908d908d90600401610404565b600060405180830381600087803b1580156100e057600080fd5b505af11580156100f4573d6000803e3d6000fd5b50505050600061010c8b338b8b8b8b8b8b8b8b6101ae565b604051631789cd6360e01b81529091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631789cd639061015d908d90859060040161048c565b6020604051808303816000875af115801561017c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a091906104ce565b505050505050505050505050565b6060600089898989898989896040516020016101d19897969594939291906104e7565b60405160208183030381529060405290508b8b826040516020016101f793929190610538565b6040516020818303038152906040529150509a9950505050505050505050565b80356001600160a01b038116811461022e57600080fd5b919050565b60008083601f84011261024557600080fd5b50813567ffffffffffffffff81111561025d57600080fd5b6020830191508360208260051b850101111561027857600080fd5b9250929050565b60008083601f84011261029157600080fd5b50813567ffffffffffffffff8111156102a957600080fd5b60208301915083602082850101111561027857600080fd5b60008060008060008060008060008060c08b8d0312156102e057600080fd5b6102e98b610217565b99506102f760208c01610217565b985060408b013567ffffffffffffffff8082111561031457600080fd5b6103208e838f01610233565b909a50985060608d013591508082111561033957600080fd5b6103458e838f01610233565b909850965060808d013591508082111561035e57600080fd5b61036a8e838f0161027f565b909650945060a08d013591508082111561038357600080fd5b506103908d828e0161027f565b915080935050809150509295989b9194979a5092959850565b81835260006001600160fb1b038311156103c257600080fd5b8260051b80836020870137939093016020019392505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b0389811682528816602082015260a060408201819052600090610431908301888a6103a9565b82810360608401526104448187896103a9565b905082810360808401526104598185876103db565b9b9a5050505050505050505050565b60005b8381101561048357818101518382015260200161046b565b50506000910152565b60018060a01b038316815260406020820152600082518060408401526104b9816060850160208701610468565b601f01601f1916919091016060019392505050565b6000602082840312156104e057600080fd5b5051919050565b6080815260006104fb608083018a8c6103a9565b828103602084015261050e81898b6103a9565b905082810360408401526105238187896103db565b905082810360608401526104598185876103db565b60006bffffffffffffffffffffffff19808660601b168352808560601b16601484015250825161056f816028850160208701610468565b9190910160280194935050505056fea264697066735822122035db86f04505cf3f941203bf956d2dde8c705c85e4bb9bdbc3fdac6c5b1e565564736f6c63430008170033";

type ERC1155BatchPortalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155BatchPortalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155BatchPortal__factory extends ContractFactory {
  constructor(...args: ERC1155BatchPortalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    inputBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155BatchPortal> {
    return super.deploy(
      inputBox,
      overrides || {}
    ) as Promise<ERC1155BatchPortal>;
  }
  override getDeployTransaction(
    inputBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(inputBox, overrides || {});
  }
  override attach(address: string): ERC1155BatchPortal {
    return super.attach(address) as ERC1155BatchPortal;
  }
  override connect(signer: Signer): ERC1155BatchPortal__factory {
    return super.connect(signer) as ERC1155BatchPortal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155BatchPortalInterface {
    return new utils.Interface(_abi) as ERC1155BatchPortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155BatchPortal {
    return new Contract(address, _abi, signerOrProvider) as ERC1155BatchPortal;
  }
}
