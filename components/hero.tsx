import {
  chakra,
  Box,
  Button,
  Flex,
  HStack
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex bg="brand.400">
      <Box
        px={4}
        py={32}
        maxW={1200}
        mx={"auto"}
        w={"full"}
      >
      <Box
        w={{
          lg: 8 / 12,
          xl: 5 / 11,
        }}
      >
        <chakra.h1
          mb={3}
          fontSize={{
            base: "3xl",
            md: "4xl",
          }}
          fontWeight={'thin'}
          lineHeight={"taller"}
          color="brand.100"
        >
          Options trading made easy
        </chakra.h1>
        <chakra.p
          mb={5}
          color="brand.50"
          fontSize={{
            md: "lg",
          }}
        >
          Earn more by trading digital assets with easy-to-use financial strategies
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
            color="brand.500"
            _hover={{
              color: "brand.50",
              bg: "brand.200"
            }}
            variant="solid"
            bg="brand.100"
          >
            Start Trading
          </Button>
        </HStack>
      </Box>
      </Box>
    </Flex>
  )
}