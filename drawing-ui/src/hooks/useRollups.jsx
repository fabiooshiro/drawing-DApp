// Copyright 2022 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy
// of the license at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSetChain, useWallets } from "@web3-onboard/react";
 
import {
  InputBox__factory,
  DAppAddressRelay__factory,
  CartesiDApp__factory,
  ERC721Portal__factory,
} from "@cartesi/rollups";

import configFile from "../config/config.json";

const config = configFile;

export const useRollups = (dAddress) => {
  const [contracts, setContracts] = useState();
  const [{ connectedChain }] = useSetChain();
  const [connectedWallet] = useWallets();
  const [dappAddress] = useState(dAddress);
  useEffect(() => {
    const connect = async (chain) => {
      const provider = new ethers.providers.Web3Provider(
        connectedWallet.provider
      );
      const signer = provider.getSigner();

      let dappRelayAddress = "";
      if (config[chain.id]?.DAppRelayAddress) {
        dappRelayAddress = config[chain.id].DAppRelayAddress;
      } else {
        console.error(
          `No dapp relay address address defined for chain ${chain.id}`
        );
      }

      let inputBoxAddress = "";
      if (config[chain.id]?.InputBoxAddress) {
        inputBoxAddress = config[chain.id].InputBoxAddress;
      } else {
        console.error(
          `No input box address address defined for chain ${chain.id}`
        );
      }

      let erc721PortalAddress = "";
      if (config[chain.id]?.Erc721PortalAddress) {
        erc721PortalAddress = config[chain.id].Erc721PortalAddress;
      } else {
        console.error(
          `No erc721 portal address address defined for chain ${chain.id}`
        );
        alert(`No box erc721 portal address defined for chain ${chain.id}`);
      }

      // dapp contract
      const dappContract = CartesiDApp__factory.connect(dappAddress, signer);
      console.log({ dappContract });
      // relay contract
      const realyContract = DAppAddressRelay__factory.connect(
        dappRelayAddress,
        signer
      );
      console.log({ realyContract });

      // input contract
      const inputContract = InputBox__factory.connect(inputBoxAddress, signer);
      console.log({ inputContract });
      const erc721PortalContract = ERC721Portal__factory.connect(
        erc721PortalAddress,
        signer
      );

      return {
        dappContract,
        signer,
        realyContract,
        inputContract,
        erc721PortalContract,
      };
    };
    if (connectedWallet) {
      if (connectedWallet?.provider && connectedChain) {
        connect(connectedChain).then((contracts) => {
          setContracts(contracts);
        });
      }
    }
  }, [connectedWallet, connectedChain, dappAddress]);
  return contracts;
};
