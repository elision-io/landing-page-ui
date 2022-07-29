import {
  chakra,
  Box,
  Button,
  Flex,
  HStack, Image
} from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  return (
    <Flex
      bgImage={'/path.svg'}
      bgPos={'bottom'}
      bgSize={'contain'}
      bgRepeat={'no-repeat'}
      height={'85vh'}
    >
      <Box
        px={4}
        py={32}
        maxW={1200}
        mx={"auto"}
        w={"full"}
      >
        <HStack spacing={8}>
          <Box
            justifyContent={'flex-start'}
            w={{
              lg: 8 / 12,
              xl: 7 / 12,
            }}
          >
            <chakra.h1>
              Options trading made easy
            </chakra.h1>
            <chakra.p
              mb={5}
              color="elision.50"
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
                _hover={{
                  color: "elision.50",
                  bg: "elision.200",
                  borderColor: "transparent"
                }}
                variant="outline"
                borderColor="elision.100"
                color="elision.100"
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
                    bg: "elision.200"
                  }}
                variant="solid"
                bg="elision.100"
              >
                Start Trading
              </Button>
            </HStack>
          </Box>
          <Image
            alt="logo"
            borderRadius="12px"
            height="40%"
            w="50%"
            objectFit="contain"
            src={'/app-demo.png'}
            filter={'drop-shadow(4px 4px 3px rgba(0,0,0,0.4))'}
          />
        </HStack>
      </Box>
    </Flex>
  )
}