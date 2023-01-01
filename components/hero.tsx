import { Box, Button, chakra, Flex, HStack } from "@chakra-ui/react";

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
          <Button
            as="a"
            w={{
              base: "full",
              sm: "auto",
            }}
            variant="outline"
            size="lg"
            mb={{
              base: 2,
              sm: 0,
            }}
            cursor="pointer"
          >
            Learn More
          </Button>
          <Button
            as="a"
            w={{
              base: "full",
              sm: "auto",
            }}
            mb={{
              base: 2,
              sm: 0,
            }}
            size="lg"
            cursor="pointer"
            color="elision.500"
            _hover={{
              color: "elision.50",
              bg: "elision.200",
            }}
            variant="solid"
            bg="elision.100"
          >
            Start Building
          </Button>
        </HStack>
      </Box>
    </Box>
  </Flex>
);

export default Hero;
