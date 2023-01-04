import { Box, Button, chakra, Flex, HStack } from "@chakra-ui/react";

const Hero = () => (
  <Flex
    bgImage={"svg/path.svg"}
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
          fontSize={{
            md: "lg",
          }}
        >
          Get involved in the ecosystem to create the future of the
          decentralized web.
        </chakra.p>
        <HStack>
          <Button variant="outline">Learn More</Button>
          <Button variant="primary">Start Building</Button>
        </HStack>
      </Box>
    </Box>
  </Flex>
);

export default Hero;
