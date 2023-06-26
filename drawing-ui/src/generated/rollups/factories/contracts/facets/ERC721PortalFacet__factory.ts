/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721PortalFacet,
  ERC721PortalFacetInterface,
} from "../../../contracts/facets/ERC721PortalFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ERC721",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ERC721Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ERC721",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "erc721Withdrawal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610915806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063150b7a021461003b57806315e55ce51461006c575b600080fd5b61004e61004936600461063a565b61008f565b6040516001600160e01b031990911681526020015b60405180910390f35b61007f61007a3660046106ad565b610168565b6040519015158152602001610063565b6040516000907f943d5d24442f02461445e15c5d7d4a4ef0acb0d32c5d6f6af37a6882249912ff90339083906100f5907f64d9de45e7db1c0a7cb7960ad25107a6379b6ab85b30444f3a8d724857c1ac789084908c908c908c908c908c90602001610718565b60408051601f1981840301815291905290506101118382610287565b507f33dcfebf3eaf42764314a95335af55bb1c008027c47c827e6e09119071639e1d828a8a8a8a8a60405161014b96959493929190610767565b60405180910390a150630a85bd0160e11b98975050505050505050565b60003330146101ac5760405162461bcd60e51b815260206004820152600b60248201526a37b7363c9034ba39b2b63360a91b60448201526064015b60405180910390fd5b600080806101bc858701876107af565b604051632142170760e11b81523060048201526001600160a01b03808416602483015260448201839052939650919450925084918216906342842e0e90606401600060405180830381600087803b15801561021657600080fd5b505af115801561022a573d6000803e3d6000fd5b5050604080516001600160a01b038089168252871660208201529081018590527feea167c0d54572a80626f5fd092a7c1f7b5d8e309533747e7e7d77b0558d6cf19250606001905060405180910390a15060019695505050505050565b600061029483833061029b565b9392505050565b600283015482516000917fd32d7f90491bee81172a406b65f3270d810392fe53bb0379dde8bdd4e624189c9111156103155760405162461bcd60e51b815260206004820152601860248201527f696e707574206c656e3a205b302c647269766553697a655d000000000000000060448201526064016101a3565b61031e81610440565b1561032c5761032c85610518565b600085600301546000146103435785600101610345565b855b9050600061035283610537565b8254604080516001600160a01b03891660208083019190915243828401524260608301526080820185905260a08083018590528351808403909101815260c0830184528051908201208b518c83012060e084018290526101008085018290528551808603909101815261012090940190945282519282019290922060018086018955600089815292909220909401849055865494955090939192916103f79190610806565b847fa15a0da5519c084484141aaa73e525cee96062f5decc97e070f0c4da27738bc78a428d60405161042b9392919061081d565b60405180910390a39998505050505050505050565b60018101546000908190600160801b900463ffffffff16600281111561046857610468610889565b600184015490915063ffffffff68010000000000000000820481169116600083600281111561049957610499610889565b1480156104ae57506104ab818361089f565b42115b1561050d576001858101805463ffffffff60801b1916600160801b1790556040517fed606d544c2202d032d2626c390923e6f260ca5d89625bba0cfe70d2bdda4e8f916104fa916108b7565b60405180910390a1506001949350505050565b506000949350505050565b60038101541561052957600061052c565b60015b60ff16600390910155565b7f0635ad75fae4d4e8d896461a635d23700076a1c3fd8da26276f18cb1c09ea5675460018201546000917f0635ad75fae4d4e8d896461a635d23700076a1c3fd8da26276f18cb1c09ea566918390600160801b900463ffffffff1660028111156105a3576105a3610889565b905060008160028111156105b9576105b9610889565b146105ce576105c982600161089f565b6105d0565b815b95945050505050565b6001600160a01b03811681146105ee57600080fd5b50565b60008083601f84011261060357600080fd5b50813567ffffffffffffffff81111561061b57600080fd5b60208301915083602082850101111561063357600080fd5b9250929050565b60008060008060006080868803121561065257600080fd5b853561065d816105d9565b9450602086013561066d816105d9565b935060408601359250606086013567ffffffffffffffff81111561069057600080fd5b61069c888289016105f1565b969995985093965092949392505050565b600080602083850312156106c057600080fd5b823567ffffffffffffffff8111156106d757600080fd5b6106e3858286016105f1565b90969095509350505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8781526001600160a01b0387811660208301528681166040830152851660608201526080810184905260c060a0820181905260009061075a90830184866106ef565b9998505050505050505050565b6001600160a01b0387811682528681166020830152851660408201526060810184905260a0608082018190526000906107a390830184866106ef565b98975050505050505050565b6000806000606084860312156107c457600080fd5b83356107cf816105d9565b925060208401356107df816105d9565b929592945050506040919091013590565b634e487b7160e01b600052601160045260246000fd5b600082821015610818576108186107f0565b500390565b60018060a01b038416815260006020848184015260606040840152835180606085015260005b8181101561085f57858101830151858201608001528201610843565b81811115610871576000608083870101525b50601f01601f19169290920160800195945050505050565b634e487b7160e01b600052602160045260246000fd5b600082198211156108b2576108b26107f0565b500190565b60208101600383106108d957634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220ada45102ca8542269d607ca3adc88e35886a8c2ebeb4598d141e42101f76ec9664736f6c634300080d0033";

type ERC721PortalFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721PortalFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721PortalFacet__factory extends ContractFactory {
  constructor(...args: ERC721PortalFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721PortalFacet> {
    return super.deploy(overrides || {}) as Promise<ERC721PortalFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721PortalFacet {
    return super.attach(address) as ERC721PortalFacet;
  }
  override connect(signer: Signer): ERC721PortalFacet__factory {
    return super.connect(signer) as ERC721PortalFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721PortalFacetInterface {
    return new utils.Interface(_abi) as ERC721PortalFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721PortalFacet {
    return new Contract(address, _abi, signerOrProvider) as ERC721PortalFacet;
  }
}
