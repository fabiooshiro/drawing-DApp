/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Portal,
  ERC20PortalInterface,
} from "../../../contracts/portals/ERC20Portal";

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
    inputs: [],
    name: "ERC20TransferFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
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
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "execLayerData",
        type: "bytes",
      },
    ],
    name: "depositERC20Tokens",
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
  "0x60a060405234801561001057600080fd5b5060405161046e38038061046e83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516103dd61009160003960008181603c015261015201526103dd6000f3fe608060405234801561001057600080fd5b50600436106100355760003560e01c8062aace9a1461003a57806395854b8114610077575b600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006040516001600160a01b03909116815260200160405180910390f35b61008a610085366004610223565b61008c565b005b6040516323b872dd60e01b81523360048201526001600160a01b03858116602483015260448201859052600091908716906323b872dd906064016020604051808303816000875af11580156100e5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010991906102c2565b90508061012957604051633c9fd93960e21b815260040160405180910390fd5b600061013887338787876101d6565b604051631789cd6360e01b81529091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631789cd639061018990899085906004016102eb565b6020604051808303816000875af11580156101a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cc919061034a565b5050505050505050565b606085858585856040516020016101f1959493929190610363565b604051602081830303815290604052905095945050505050565b6001600160a01b038116811461022057600080fd5b50565b60008060008060006080868803121561023b57600080fd5b85356102468161020b565b945060208601356102568161020b565b935060408601359250606086013567ffffffffffffffff8082111561027a57600080fd5b818801915088601f83011261028e57600080fd5b81358181111561029d57600080fd5b8960208285010111156102af57600080fd5b9699959850939650602001949392505050565b6000602082840312156102d457600080fd5b815180151581146102e457600080fd5b9392505050565b60018060a01b03831681526000602060406020840152835180604085015260005b818110156103285785810183015185820160600152820161030c565b506000606082860101526060601f19601f830116850101925050509392505050565b60006020828403121561035c57600080fd5b5051919050565b60006bffffffffffffffffffffffff19808860601b168352808760601b1660148401525084602883015282846048840137506000910160480190815294935050505056fea26469706673582212206e9c57997e262a5573f4d46a834e8afe9777fcbdf098307d8711bdff9b91b3dd64736f6c63430008170033";

type ERC20PortalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20PortalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Portal__factory extends ContractFactory {
  constructor(...args: ERC20PortalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    inputBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Portal> {
    return super.deploy(inputBox, overrides || {}) as Promise<ERC20Portal>;
  }
  override getDeployTransaction(
    inputBox: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(inputBox, overrides || {});
  }
  override attach(address: string): ERC20Portal {
    return super.attach(address) as ERC20Portal;
  }
  override connect(signer: Signer): ERC20Portal__factory {
    return super.connect(signer) as ERC20Portal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20PortalInterface {
    return new utils.Interface(_abi) as ERC20PortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Portal {
    return new Contract(address, _abi, signerOrProvider) as ERC20Portal;
  }
}
