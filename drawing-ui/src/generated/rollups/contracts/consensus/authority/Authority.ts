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
} from "../../../common";

export interface AuthorityInterface extends utils.Interface {
  functions: {
    "getEpochLength()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "submitClaim(address,uint256,bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "wasClaimAccepted(address,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getEpochLength"
      | "owner"
      | "renounceOwnership"
      | "submitClaim"
      | "transferOwnership"
      | "wasClaimAccepted"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getEpochLength",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitClaim",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "wasClaimAccepted",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEpochLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wasClaimAccepted",
    data: BytesLike
  ): Result;

  events: {
    "ClaimAcceptance(address,uint256,bytes32)": EventFragment;
    "ClaimSubmission(address,address,uint256,bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimAcceptance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimSubmission"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface ClaimAcceptanceEventObject {
  appContract: string;
  lastProcessedBlockNumber: BigNumber;
  claim: string;
}
export type ClaimAcceptanceEvent = TypedEvent<
  [string, BigNumber, string],
  ClaimAcceptanceEventObject
>;

export type ClaimAcceptanceEventFilter = TypedEventFilter<ClaimAcceptanceEvent>;

export interface ClaimSubmissionEventObject {
  submitter: string;
  appContract: string;
  lastProcessedBlockNumber: BigNumber;
  claim: string;
}
export type ClaimSubmissionEvent = TypedEvent<
  [string, string, BigNumber, string],
  ClaimSubmissionEventObject
>;

export type ClaimSubmissionEventFilter = TypedEventFilter<ClaimSubmissionEvent>;

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

export interface Authority extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuthorityInterface;

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
    /**
     * The epoch number of a block is defined as the integer division of the block number by the epoch length.
     * Get the epoch length, in number of base layer blocks.
     */
    getEpochLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Fires a `ClaimSubmission` event and a `ClaimAcceptance` event.Can only be called by the owner.
     * Submit a claim.
     * @param appContract The application contract address
     * @param claim The output Merkle root hash
     * @param lastProcessedBlockNumber The number of the last processed block
     */
    submitClaim(
      appContract: PromiseOrValue<string>,
      lastProcessedBlockNumber: PromiseOrValue<BigNumberish>,
      claim: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Check if an output Merkle root hash was ever accepted by the consensus for a particular application.
     * @param appContract The application contract address
     * @param claim The root of the Merkle tree of outputs
     */
    wasClaimAccepted(
      appContract: PromiseOrValue<string>,
      claim: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  /**
   * The epoch number of a block is defined as the integer division of the block number by the epoch length.
   * Get the epoch length, in number of base layer blocks.
   */
  getEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Fires a `ClaimSubmission` event and a `ClaimAcceptance` event.Can only be called by the owner.
   * Submit a claim.
   * @param appContract The application contract address
   * @param claim The output Merkle root hash
   * @param lastProcessedBlockNumber The number of the last processed block
   */
  submitClaim(
    appContract: PromiseOrValue<string>,
    lastProcessedBlockNumber: PromiseOrValue<BigNumberish>,
    claim: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Check if an output Merkle root hash was ever accepted by the consensus for a particular application.
   * @param appContract The application contract address
   * @param claim The root of the Merkle tree of outputs
   */
  wasClaimAccepted(
    appContract: PromiseOrValue<string>,
    claim: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    /**
     * The epoch number of a block is defined as the integer division of the block number by the epoch length.
     * Get the epoch length, in number of base layer blocks.
     */
    getEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Fires a `ClaimSubmission` event and a `ClaimAcceptance` event.Can only be called by the owner.
     * Submit a claim.
     * @param appContract The application contract address
     * @param claim The output Merkle root hash
     * @param lastProcessedBlockNumber The number of the last processed block
     */
    submitClaim(
      appContract: PromiseOrValue<string>,
      lastProcessedBlockNumber: PromiseOrValue<BigNumberish>,
      claim: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Check if an output Merkle root hash was ever accepted by the consensus for a particular application.
     * @param appContract The application contract address
     * @param claim The root of the Merkle tree of outputs
     */
    wasClaimAccepted(
      appContract: PromiseOrValue<string>,
      claim: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ClaimAcceptance(address,uint256,bytes32)"(
      appContract?: PromiseOrValue<string> | null,
      lastProcessedBlockNumber?: null,
      claim?: null
    ): ClaimAcceptanceEventFilter;
    ClaimAcceptance(
      appContract?: PromiseOrValue<string> | null,
      lastProcessedBlockNumber?: null,
      claim?: null
    ): ClaimAcceptanceEventFilter;

    "ClaimSubmission(address,address,uint256,bytes32)"(
      submitter?: PromiseOrValue<string> | null,
      appContract?: PromiseOrValue<string> | null,
      lastProcessedBlockNumber?: null,
      claim?: null
    ): ClaimSubmissionEventFilter;
    ClaimSubmission(
      submitter?: PromiseOrValue<string> | null,
      appContract?: PromiseOrValue<string> | null,
      lastProcessedBlockNumber?: null,
      claim?: null
    ): ClaimSubmissionEventFilter;

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
    /**
     * The epoch number of a block is defined as the integer division of the block number by the epoch length.
     * Get the epoch length, in number of base layer blocks.
     */
    getEpochLength(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Fires a `ClaimSubmission` event and a `ClaimAcceptance` event.Can only be called by the owner.
     * Submit a claim.
     * @param appContract The application contract address
     * @param claim The output Merkle root hash
     * @param lastProcessedBlockNumber The number of the last processed block
     */
    submitClaim(
      appContract: PromiseOrValue<string>,
      lastProcessedBlockNumber: PromiseOrValue<BigNumberish>,
      claim: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Check if an output Merkle root hash was ever accepted by the consensus for a particular application.
     * @param appContract The application contract address
     * @param claim The root of the Merkle tree of outputs
     */
    wasClaimAccepted(
      appContract: PromiseOrValue<string>,
      claim: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * The epoch number of a block is defined as the integer division of the block number by the epoch length.
     * Get the epoch length, in number of base layer blocks.
     */
    getEpochLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Fires a `ClaimSubmission` event and a `ClaimAcceptance` event.Can only be called by the owner.
     * Submit a claim.
     * @param appContract The application contract address
     * @param claim The output Merkle root hash
     * @param lastProcessedBlockNumber The number of the last processed block
     */
    submitClaim(
      appContract: PromiseOrValue<string>,
      lastProcessedBlockNumber: PromiseOrValue<BigNumberish>,
      claim: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Check if an output Merkle root hash was ever accepted by the consensus for a particular application.
     * @param appContract The application contract address
     * @param claim The root of the Merkle tree of outputs
     */
    wasClaimAccepted(
      appContract: PromiseOrValue<string>,
      claim: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
