import { Button, ButtonGroup, useToast } from "@chakra-ui/react";
import { useWalletSelector } from "contexts/WalletSelectorContext";
import { useState, useEffect, useCallback, useRef } from "react";
import { providers, utils } from "near-api-js";
import type {
  AccountView,
  CodeResult,
} from "near-api-js/lib/providers/provider";
import type { Transaction } from "@near-wallet-selector/core";

type Account = AccountView & {
  account_id: string;
};

const WalletSelector = () => {
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const toastIdRef = useRef();

  type Submitted = SubmitEvent & {
    target: { elements: { [key: string]: HTMLInputElement } };
  };

  const CONTRACT_ID = "guest-book.testnet";
  const getAccount = useCallback(async (): Promise<Account | null> => {
    if (!accountId) {
      return null;
    }

    const { network } = selector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    return provider
      .query<AccountView>({
        request_type: "view_account",
        finality: "final",
        account_id: accountId,
      })
      .then((data) => ({
        ...data,
        account_id: accountId,
      }));
  }, [accountId, selector.options]);

  useEffect(() => {
    if (!accountId) {
      return setAccount(null);
    }

    setLoading(true);

    getAccount().then((nextAccount) => {
      setAccount(nextAccount);
      setLoading(false);
    });
  }, [accountId, getAccount]);

  const handleSignIn = () => {
    modal.show();
  };

  const handleSignOut = async () => {
    const wallet = await selector.wallet();

    wallet.signOut().catch((err: any) => {
      console.log("Failed to sign out");
      console.error(err);
    });
  };

  const handleSwitchWallet = () => {
    modal.show();
  };

  const handleSwitchAccount = () => {
    const currentIndex = accounts.findIndex((x) => x.accountId === accountId);
    const nextIndex = currentIndex < accounts.length - 1 ? currentIndex + 1 : 0;

    const nextAccountId = accounts[nextIndex].accountId;

    selector.setActiveAccount(nextAccountId);

    toast({ description: `Switched account to ${nextAccountId}` });
  };

  const handleVerifyOwner = async () => {
    const wallet = await selector.wallet();
    try {
      const owner = await wallet.verifyOwner({
        message: "test message for verification",
      });

      if (owner) {
        toast({
          description: `Signature for verification: ${JSON.stringify(owner)}`,
        });
      }
    } catch (err: any) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toast({ description: message });
    }
  };

  if (!account) {
    return (
      <Button
        isLoading={loading}
        loadingText="Connecting"
        colorScheme="brand"
        variant="solid"
        onClick={handleSignIn}
        size="lg"
      >
        Connect Wallet
      </Button>
    );
  }
  return (
    <ButtonGroup isAttached>
      <Button
        colorScheme="brand"
        variant="solid"
        onClick={handleSignOut}
        size="lg"
      >
        Disconnect
      </Button>
      <Button
        colorScheme="brand"
        variant="solid"
        onClick={handleSwitchWallet}
        size="lg"
      >
        Switch
      </Button>
      <Button
        colorScheme="brand"
        variant="solid"
        onClick={handleVerifyOwner}
        size="lg"
      >
        Verify
      </Button>
      {accounts.length > 1 && (
        <Button
          colorScheme="brand"
          variant="solid"
          onClick={handleSwitchAccount}
          size="lg"
        >
          Accounts
        </Button>
      )}
    </ButtonGroup>
  );
};

export default WalletSelector;
