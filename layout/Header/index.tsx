import {
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import type { Account } from "contexts/WalletSelectorContext";
import { useWalletSelector } from "contexts/WalletSelectorContext";
import { useScroll } from "framer-motion";
import React, { useState } from "react";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Features from "./Features";

export default function Header() {
  const { selector, modal, accounts, accountId } = useWalletSelector();
  const [account, setAccount] = useState<Account | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const mobileNav = useDisclosure();

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

    alert(`Switched account to ${nextAccountId}`);
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

  if (!accountId) {
    return (
      <Button
        colorScheme="brand"
        variant="solid"
        onClick={handleSignIn}
        size="lg"
      >
        Connect Wallet
      </Button>
    );
  }

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg="elision.600"
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

  return (
    <>
      <chakra.header
        ref={ref}
        shadow={y > height ? "lg" : undefined}
        transition="box-shadow 0.2s"
        w="full"
        overflowY="hidden"
      >
        <chakra.div px={12}>
          <Flex justifyContent="space-between" align={"center"}>
            <Flex>
              <Link href="/">
                <Image alt="logo" m={"8px"} w={190} src={"/elsn3.png"} />
              </Link>
            </Flex>
            <Flex alignItems="normal" m={8}>
              <HStack
                spacing="5"
                display={{
                  base: "none",
                  md: "flex",
                }}
              >
                <Popover>
                  <PopoverTrigger>
                    <Button
                      bg="elision.600"
                      color="elision.50"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="lg"
                      _hover={{
                        color: "brand.100",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                      rightIcon={<IoIosArrowDown />}
                    >
                      Features
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    w="100vw"
                    maxW="md"
                    _focus={{
                      boxShadow: "md",
                    }}
                  >
                    <Features />
                  </PopoverContent>
                </Popover>
                <Button
                  bg="elision.600"
                  color="elision.50"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    color: "brand.100",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  Learn
                </Button>
                <Button
                  bg="elision.600"
                  color="elision.50"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    color: "brand.100",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  About
                </Button>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack
                spacing="5"
                display={{
                  base: "none",
                  md: "flex",
                }}
              >
                <Button
                  color="elision.500"
                  _hover={{
                    color: "elision.50",
                    bg: "elision.200",
                  }}
                  variant="solid"
                  bg="brand.100"
                >
                  Enter App
                </Button>
              </HStack>
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </>
  );
}
