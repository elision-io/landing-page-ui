import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import WalletConnector from "components/WalletConnector";
import type { NextPage } from "next";

const WalletTemplate: NextPage = () => {
  return (
    <Box py={{ base: "12", md: "24" }}>
      <Container
        maxW="md"
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bgGradient={"linear(to-b, #867df9, #82eaff)"}
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
