/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type OutputValidityProofStruct = {
  outputIndex: PromiseOrValue<BigNumberish>;
  outputHashesSiblings: PromiseOrValue<BytesLike>[];
};

export type OutputValidityProofStructOutput = [BigNumber, string[]] & {
  outputIndex: BigNumber;
  outputHashesSiblings: string[];
};

export interface ApplicationInterface extends utils.Interface {
  functions: {
    "executeOutput(bytes,(uint64,bytes32[]))": FunctionFragment;
    "getConsensus()": FunctionFragment;
    "getTemplateHash()": FunctionFragment;
    "migrateToConsensus(address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "validateOutput(bytes,(uint64,bytes32[]))": FunctionFragment;
    "validateOutputHash(bytes32,(uint64,bytes32[]))": FunctionFragment;
    "wasOutputExecuted(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "executeOutput"
      | "getConsensus"
      | "getTemplateHash"
      | "migrateToConsensus"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "owner"
      | "renounceOwnership"
      | "supportsInterface"
      | "transferOwnership"
      | "validateOutput"
      | "validateOutputHash"
      | "wasOutputExecuted"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeOutput",
    values: [PromiseOrValue<BytesLike>, OutputValidityProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getConsensus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTemplateHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "migrateToConsensus",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateOutput",
    values: [PromiseOrValue<BytesLike>, OutputValidityProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "validateOutputHash",
    values: [PromiseOrValue<BytesLike>, OutputValidityProofStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "wasOutputExecuted",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConsensus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTemplateHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "migrateToConsensus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateOutputHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wasOutputExecuted",
    data: BytesLike
  ): Result;

  events: {
    "NewConsensus(address)": EventFragment;
    "OutputExecuted(uint64,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewConsensus"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OutputExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface NewConsensusEventObject {
  newConsensus: string;
}
export type NewConsensusEvent = TypedEvent<[string], NewConsensusEventObject>;

export type NewConsensusEventFilter = TypedEventFilter<NewConsensusEvent>;

export interface OutputExecutedEventObject {
  outputIndex: BigNumber;
  output: string;
}
export type OutputExecutedEvent = TypedEvent<
  [BigNumber, string],
  OutputExecutedEventObject
>;

export type OutputExecutedEventFilter = TypedEventFilter<OutputExecutedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Application extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ApplicationInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    executeOutput(
      output: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Get the current consensus.
     */
    getConsensus(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Get the application's template hash.
     */
    getTemplateHash(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Can only be called by the application owner.
     * Migrate the application to a new consensus.
     * @param newConsensus The new consensus
     */
    migrateToConsensus(
      newConsensus: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateOutput(
      output: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: CallOverrides
    ): Promise<[void]>;

    validateOutputHash(
      outputHash: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: CallOverrides
    ): Promise<[void]>;

    /**
     * Check whether an output has been executed.
     * @param outputIndex The index of output
     */
    wasOutputExecuted(
      outputIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  executeOutput(
    output: PromiseOrValue<BytesLike>,
    proof: OutputValidityProofStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Get the current consensus.
   */
  getConsensus(overrides?: CallOverrides): Promise<string>;

  /**
   * Get the application's template hash.
   */
  getTemplateHash(overrides?: CallOverrides): Promise<string>;

  /**
   * Can only be called by the application owner.
   * Migrate the application to a new consensus.
   * @param newConsensus The new consensus
   */
  migrateToConsensus(
    newConsensus: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
   */
  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * See {IERC165-supportsInterface}.
   */
  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateOutput(
    output: PromiseOrValue<BytesLike>,
    proof: OutputValidityProofStruct,
    overrides?: CallOverrides
  ): Promise<void>;

  validateOutputHash(
    outputHash: PromiseOrValue<BytesLike>,
    proof: OutputValidityProofStruct,
    overrides?: CallOverrides
  ): Promise<void>;

  /**
   * Check whether an output has been executed.
   * @param outputIndex The index of output
   */
  wasOutputExecuted(
    outputIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    executeOutput(
      output: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Get the current consensus.
     */
    getConsensus(overrides?: CallOverrides): Promise<string>;

    /**
     * Get the application's template hash.
     */
    getTemplateHash(overrides?: CallOverrides): Promise<string>;

    /**
     * Can only be called by the application owner.
     * Migrate the application to a new consensus.
     * @param newConsensus The new consensus
     */
    migrateToConsensus(
      newConsensus: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateOutput(
      output: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    validateOutputHash(
      outputHash: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Check whether an output has been executed.
     * @param outputIndex The index of output
     */
    wasOutputExecuted(
      outputIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "NewConsensus(address)"(newConsensus?: null): NewConsensusEventFilter;
    NewConsensus(newConsensus?: null): NewConsensusEventFilter;

    "OutputExecuted(uint64,bytes)"(
      outputIndex?: null,
      output?: null
    ): OutputExecutedEventFilter;
    OutputExecuted(
      outputIndex?: null,
      output?: null
    ): OutputExecutedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    executeOutput(
      output: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Get the current consensus.
     */
    getConsensus(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Get the application's template hash.
     */
    getTemplateHash(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Can only be called by the application owner.
     * Migrate the application to a new consensus.
     * @param newConsensus The new consensus
     */
    migrateToConsensus(
      newConsensus: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateOutput(
      output: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateOutputHash(
      outputHash: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Check whether an output has been executed.
     * @param outputIndex The index of output
     */
    wasOutputExecuted(
      outputIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeOutput(
      output: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Get the current consensus.
     */
    getConsensus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Get the application's template hash.
     */
    getTemplateHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Can only be called by the application owner.
     * Migrate the application to a new consensus.
     * @param newConsensus The new consensus
     */
    migrateToConsensus(
      newConsensus: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateOutput(
      output: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateOutputHash(
      outputHash: PromiseOrValue<BytesLike>,
      proof: OutputValidityProofStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Check whether an output has been executed.
     * @param outputIndex The index of output
     */
    wasOutputExecuted(
      outputIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
