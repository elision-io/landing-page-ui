import { Wallet } from '@near-wallet-selector/core';
import { setupDefaultWallets } from '@near-wallet-selector/default-wallets';
import { setupMeteorWallet } from '@near-wallet-selector/meteor-wallet';
import { setupModal } from '@near-wallet-selector/modal-ui';
import { setupNearWallet } from '@near-wallet-selector/near-wallet';
import { setupSender } from '@near-wallet-selector/sender';
import { distinctUntilChanged, map, Subscription } from 'rxjs';
import {
    DEFAULT_ELSN_CONTRACT_MAINNET,
    DEFAULT_ELSN_CONTRACT_TESTNET,
    NEAR_LOGIN_CONTRACT_ID, NEAR_NETWORK,
    NEAR_WALLET_SELECTOR_DEBUG,
    WALLET_CONNECTION_NOT_FOUND,
    WALLET_CONNECTION_POLL_INTERVAL,
    WALLET_CONNECTION_TIMEOUT,
    WALLET_SETUP_NOT_CALLED_ERROR
} from './constants';

import type { AccountState, WalletSelector } from '@near-wallet-selector/core';
import type { WalletSelectorModal } from '@near-wallet-selector/modal-ui';

// mintbase SDK wallet functionality wraps
// Near Wallet Selector lib, provided by NEAR Protocol
// https://github.com/near/wallet-selector/
export type WalletSelectorComponents = {
    selector: WalletSelector;
    modal: WalletSelectorModal;
}

export let walletSelectorComponents: WalletSelectorComponents = {
  // @ts-ignore
  selector: null,
  // @ts-ignore
  modal: null,
};

export class SetupNotCalledError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SetupNotCalledError';
    this.message = message;
  }
}

export class ConnectionTimeoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ConnectionTimeoutError';
    this.message = message;
  }
}

export class SignMessageError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'ConnectionTimeoutError';
      this.message = message;
    }
  }




/**
* Set up wallet selector components. Returns the modal
* See also docs on {@link https://github.com/near/wallet-selector/ | near wallet selector}
*/
export const setupWalletSelectorComponents = async (): Promise<WalletSelectorComponents> => {
  const selector = await setupWalletSelector({
    network: NEAR_NETWORK,
    debug: NEAR_WALLET_SELECTOR_DEBUG,
    modules: [
      ...(await setupDefaultWallets()),
      setupNearWallet(),
      setupMeteorWallet(),
      setupSender(),
      // setupHereWallet(),
      // setupMathWallet(),
      // setupNightly(),
      // setupWelldoneWallet(),
      // setupLedger(),
    ],
  });

  const defaultMintbaseContract = NEAR_NETWORK === 'testnet'
    ? DEFAULT_ELSN_CONTRACT_TESTNET
    : DEFAULT_ELSN_CONTRACT_MAINNET;

  const modal = setupModal(selector, {
    contractId: NEAR_LOGIN_CONTRACT_ID || defaultMintbaseContract,
  });

  walletSelectorComponents = {
    selector,
    modal,
  };
  return walletSelectorComponents;
};

const validateWalletComponentsAreSetup = (): void => {
  if (!walletSelectorComponents.selector) {
    throw new SetupNotCalledError(
      WALLET_SETUP_NOT_CALLED_ERROR,
    );
  }
};

export const registerWalletAccountsSubscriber = (
  callback: (accounts: AccountState[]) => void,
): Subscription => {
  validateWalletComponentsAreSetup();

  return walletSelectorComponents
    .selector
    .store
    .observable
    .pipe(map((state) => state.accounts), distinctUntilChanged())
    .subscribe(callback);
};

// scoped to module and cleared since pollForWalletConnection might
// get called repeatedly in react enviroments
let timerReference: NodeJS.Timeout | number | undefined;

export const pollForWalletConnection = async (): Promise<AccountState[]> => {
  validateWalletComponentsAreSetup();
  // clear any existing timer
  clearTimeout(timerReference);

  const tryToResolveAccountsFromState = (
    resolve: (value: AccountState[]) => void,
    reject: (err: ConnectionTimeoutError) => void,
    elapsed = 0,
  ): void => {
    const { accounts } = walletSelectorComponents
      .selector
      .store
      .getState() || {};

    // accounts present in state
    if (accounts) {
      resolve(accounts);
    }

    // timed out
    if (elapsed > WALLET_CONNECTION_TIMEOUT) {
      reject(new ConnectionTimeoutError(WALLET_CONNECTION_NOT_FOUND));
    }

    // try again
    clearTimeout(timerReference);
    timerReference = setTimeout(() =>
      tryToResolveAccountsFromState(
        resolve,
        reject,
        elapsed + WALLET_CONNECTION_POLL_INTERVAL,
      ), WALLET_CONNECTION_POLL_INTERVAL);

  };

  return new Promise(
    (resolve, reject) => tryToResolveAccountsFromState(resolve, reject),
  );
};

export const getWallet = async (): Promise<Wallet> => {
  validateWalletComponentsAreSetup();

  return await walletSelectorComponents
    .selector
    .wallet();
};

export const connectWalletSelector = (): void => {
  validateWalletComponentsAreSetup();

  walletSelectorComponents
    .modal
    .show();
};

export const disconnectFromWalletSelector = async(): Promise<void> => {
  validateWalletComponentsAreSetup();

  const wallet = await walletSelectorComponents
    .selector
    .wallet();
  wallet.signOut();
};

export const getVerifiedOwner =
  async (params: VerifyOwnerParams): Promise<VerifiedOwner | undefined> => {
    validateWalletComponentsAreSetup();

    const { message, callbackUrl, meta } = params;

    const wallet = await walletSelectorComponents
      .selector
      .wallet();

    const owner = await wallet.verifyOwner({
      message: message,
      callbackUrl: callbackUrl,
      meta: meta,
    }) as VerifiedOwner;

    return owner;
  };


// returns a signature of message
export const signMessage = async (params: VerifyOwnerParams): Promise<VerifiedOwner> => {
    try {
        const owner = await getVerifiedOwner(params);
        return owner as VerifiedOwner;
    } catch (err: any) {
        throw new SignMessageError(err.message);
    }
}
