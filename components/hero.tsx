import { Box, Button, chakra, Flex, HStack } from "@chakra-ui/react";
import MainButton from "components/Button/MainButton";
import SecondaryButton from "components/Button/SecondaryButton";

const Hero = () => (
  <Flex
    bgImage={"/path.svg"}
    bgPos={"bottom"}
    bgSize={"contain"}
    bgRepeat={"no-repeat"}
    height={"85vh"}
  >
    <Box px={12} py={32} mx={"auto"} w={"full"}>
      <Box
        w={{
          lg: 8 / 12,
          xl: 7 / 12,
        }}
      >
        <chakra.h1>Envision, Learn, Build</chakra.h1>
        <chakra.p
          mb={5}
          color="elision.50"
          fontSize={{
            md: "lg",
          }}
        >
          Get involved in the ecosystem to create the future of the
          decentralized web.
        </chakra.p>
        <HStack>
          <SecondaryButton size="lg">Learn More</SecondaryButton>
          <MainButton size="lg">Start Building</MainButton>
          <Button variant="flat">Testnet</Button>
        </HStack>
      </Box>
    </Box>
  </Flex>
);

export default Hero;
