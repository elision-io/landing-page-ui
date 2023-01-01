import { Button, ButtonGroup, useToast } from "@chakra-ui/react";
import type { Account } from "config/interfaces";
import { useWalletSelector } from "contexts/WalletSelectorContext";
import { providers } from "near-api-js";
import type { AccountView } from "near-api-js/lib/providers/provider";
import { useCallback, useEffect, useState } from "react";

export default function WalletConnector(): JSX.Element {
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const toast = useToast();
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getAccount = useCallback(async (): Promise<Account | null> => {
    if (!accountId) {
      return null;
    }

    const { network } = selector.options;
    const provider = new providers.JsonRpcProvider({
      url: network.nodeUrl ? network?.nodeUrl : "https://rpc.testnet.near.org",
    });

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
      setAccount(null);
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

    wallet.signOut().catch((err) => {
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

    toast({
      status: "info",
      title: "Switched Account",
      description: `Account switched to ${nextAccountId}`,
      duration: 5000,
      isClosable: true,
    });
  };

  const handleVerifyOwner = async () => {
    const wallet = await selector.wallet();
    try {
      const owner = await wallet.verifyOwner({
        message: "Signature to verify ownership of NEAR account",
      });

      if (owner) {
        toast({
          status: "success",
          title: "Signature Verified",
          description: `Account ownership verified: ${JSON.stringify(owner)}`,
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err: any) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toast({
        status: "error",
        title: "Signature Verification Failed",
        description: message,
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {account ? (
        <ButtonGroup isAttached>
          <Button onClick={handleSwitchWallet}>Switch Wallet</Button>
          <Button onClick={handleVerifyOwner}>Verify Owner</Button>
          <Button onClick={handleSignOut}>Log out</Button>
          {accounts.length > 1 && (
            <Button onClick={handleSwitchAccount}>Switch Account</Button>
          )}
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <Button
            onClick={handleSignIn}
            isLoading={loading}
            spinnerPlacement="start"
            loadingText="Loading"
            size="lg"
            variant="outline"
          >
            Connect Wallet
          </Button>
        </ButtonGroup>
      )}
    </>
  );
}
