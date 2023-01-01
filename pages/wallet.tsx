import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Wallet from "components/Wallet";
import type { NextPage } from "next";

const WalletPage: NextPage = () => {
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
            <Wallet />
          </Stack>
          <Stack spacing="0.5" align="center">
            <Text fontSize="sm" color="muted">
              Having trouble logging in?
            </Text>
            <Button variant="link" colorScheme="blue" size="sm">
              Contact us
            </Button>
          </Stack>
          <Text fontSize="xs" color="subtle" textAlign="center">
            By continuing, you acknowledge that you have read, understood, and
            agree to our terms and condition
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default WalletPage;
