import { Button, ButtonGroup, Link, useToast } from "@chakra-ui/react";
import { providers } from "near-api-js";
import type { AccountView } from "near-api-js/lib/providers/provider";
import NearLogo from "public/svg/near-logo.svg";
import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Account } from "contexts/auth";
import { useWallet } from "contexts/WalletSelectorContext";

export default function Wallet() {
  const {
    connect,
    disconnect,
    activeAccountId,
    errorMessage,
    selector,
    modal,
  } = useWallet();
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  const getAccount = useCallback(async (): Promise<Account | null> => {
    if (!activeAccountId) {
      return null;
    }

    const { network } = selector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    return provider
      .query<AccountView>({
        request_type: "view_account",
        finality: "final",
        account_id: activeAccountId,
      })
      .then((data) => ({
        ...data,
        account_id: activeAccountId,
      }));
  }, [activeAccountId, selector.options]);

  useEffect(() => {
    if (!activeAccountId) {
      return setAccount(null);
    }

    setLoading(true);

    getAccount().then((nextAccount) => {
      setAccount(nextAccount);
      setLoading(false);
    });
  }, [activeAccountId, getAccount]);

  const handleSignIn = () => {
    modal.show();
  };

  const handleSignOut = async () => {
    const wallet = await selector.wallet();

    wallet.signOut().catch((err: any) => {
      toast({
        title: "Error: Failed to sign out",
        description: err.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    });
  };

  const handleSwitchWallet = () => {
    modal.show();
  };

  const handleSwitchAccount = () => {
    const currentIndex = accounts.findIndex(
      (x) => x.accountId === activeAccountId
    );
    const nextIndex = currentIndex < accounts.length - 1 ? currentIndex + 1 : 0;

    const nextAccountId = accounts[nextIndex].accountId;

    selector.setActiveAccount(nextAccountId);

    toast({
      title: "Switched Account",
      description: `Account switched to ${nextAccountId}`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleVerifyOwner = async () => {
    const wallet = await selector.wallet();
    try {
      const owner = await wallet.verifyOwner({
        message: "Verifying ownership of NEAR account",
      });

      if (owner) {
        toast({
          title: "Verifed Signature",
          description: `Signature ${JSON.stringify(owner)} verified`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err: any) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toast({
        title: "Error",
        description: `${message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      {!account ? (
        <ButtonGroup>
          <Button
            onClick={handleSignIn}
            isLoading={loading}
            spinnerPlacement="start"
            leftIcon={<NearLogo />}
          >
            Connect Wallet
          </Button>
          <Button
            as={Link}
            href="https://wallet.near.org/create"
            isExternal
            spinnerPlacement="start"
            leftIcon={<FaPlus />}
          >
            Create
          </Button>
        </ButtonGroup>
      ) : (
        <ButtonGroup isAttached>
          <Button onClick={handleSignOut}>Log out</Button>
          <Button onClick={handleSwitchWallet}>Switch Wallet</Button>
          <Button onClick={handleVerifyOwner}>Verify Owner</Button>
          {accounts.length > 1 && (
            <Button onClick={handleSwitchAccount}>Switch Account</Button>
          )}
        </ButtonGroup>
      )}
    </>
  );
}
