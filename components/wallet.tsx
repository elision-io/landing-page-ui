import { Button } from "@chakra-ui/react";
import { providers, utils } from "near-api-js";
import type {
    AccountView,
    CodeResult
} from "near-api-js/lib/providers/provider";
import { NextComponentType } from "next";
import { Fragment, useCallback, useEffect, useState } from "react";
import type { Account } from "../contexts/WalletSelectorContext";
import { CONTRACT_ID, useWalletSelector } from "../contexts/WalletSelectorContext";

const SUGGESTED_DONATION = "0";
const BOATLOAD_OF_GAS = utils.format.parseNearAmount("0.00000000003")!;

const Wallet: NextComponentType = () => {
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

  const getMessages = useCallback(() => {
    const { network } = selector.options;
    const provider = new providers.JsonRpcProvider({ url: network.nodeUrl });

    return provider
      .query<CodeResult>({
        request_type: "call_function",
        account_id: CONTRACT_ID,
        method_name: "getMessages",
        args_base64: "",
        finality: "optimistic",
      })
      .then((res) => JSON.parse(Buffer.from(res.result).toString()));
  }, [selector]);

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

    alert("Switched account to " + nextAccountId);
  };

  const handleVerifyOwner = async () => {
    const wallet = await selector.wallet();
    try {
      const owner = await wallet.verifyOwner({
        message: "test message for verification",
      });

      if (owner) {
        alert(`Signature for verification: ${JSON.stringify(owner)}`);
      }
    } catch (err: any) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      alert(message);
    }
  };

  if (loading) {
    return null;
  }

  if (!account) {
    return (
      <Fragment>
        <div>
          <Button onClick={handleSignIn}>Log in</Button>
        </div>
        <Fragment>
            <p>
                This app demonstrates a key element of NEAR’s UX: once an app has
                permission to make calls on behalf of a user (that is, once a user signs
                in), the app can make calls to the blockchain for them without prompting
                extra confirmation. So you’ll see that if you don’t include a donation,
                your message gets posted right to the guest book.
            </p>
            <p>
                But if you do add a donation, then NEAR will double-check that you’re ok
                with sending money to this app.
            </p>
            <p>Go ahead and sign in to try it out!</p>
            </Fragment>
        </Fragment>
    );
  }

  return (
    <Fragment>
      <div>
        <Button onClick={handleSignOut}>Log out</Button>
        <Button onClick={handleSwitchWallet}>Switch Wallet</Button>
        <Button onClick={handleVerifyOwner}>Verify Owner</Button>
        {accounts.length > 1 && (
          <Button onClick={handleSwitchAccount}>Switch Account</Button>
        )}
      </div>
    </Fragment>
  );
};

export default Wallet