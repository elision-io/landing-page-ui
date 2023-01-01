import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import WalletConnector from "components/WalletConnector";
import type { NextPage } from "next";

const WalletTemplate: NextPage = () => {
  return (
    <Box
      bgGradient={{ sm: "linear(to-r, blue.600, purple.600)" }}
      py={{ base: "12", md: "24" }}
    >
      <Container
        maxW="md"
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
        boxShadow={{ base: "none", sm: "xl" }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="8">
          <Stack spacing="6" align="center">
            <Stack spacing="3" textAlign="center">
              <Heading size="xs">Connect to your NEAR Wallet</Heading>
              <Text color="muted">Select your wallet provider</Text>
            </Stack>
          </Stack>
          <Stack spacing="6">
            <WalletConnector />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default WalletTemplate;
