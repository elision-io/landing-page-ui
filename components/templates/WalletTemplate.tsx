import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import WalletConnector from "components/Wallet/WalletConnector";
import { useWalletSelector } from "contexts/WalletSelectorContext";
import type { NextPage } from "next";
import { BsChevronDown, BsWallet } from "react-icons/bs";
const WalletTemplate: NextPage = () => {
  const { accountId } = useWalletSelector();
  console.log(accountId);

  return (
    <Box py={{ base: "12", md: "24" }}>
      <Container
        maxW="xl"
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bgGradient={"linear(to-b, #867df9, #82eaff)"}
        bg="elision.400"
        boxShadow={{ base: "none", sm: "xl" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="8">
          {accountId ? (
            <VStack spacing="4" align="center">
              <Heading size="md">Connected to NEAR Wallet</Heading>
              <HStack spacing="4" justify={"center"}>
                <Button variant={"primary"} leftIcon={<BsWallet />} size={"md"}>
                  <HStack spacing={2} justify="center">
                    <Text>{accountId}</Text>
                    <BsChevronDown />
                  </HStack>
                </Button>
              </HStack>
            </VStack>
          ) : (
            <Stack spacing="6" align="center">
              <Stack spacing="3" textAlign="center">
                <Heading size="xs">Connect to your NEAR Wallet</Heading>
                <Text color="muted">Select your wallet provider</Text>
              </Stack>
            </Stack>
          )}
          <Stack spacing="6">
            <WalletConnector />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default WalletTemplate;
