import { Box, Flex } from "@chakra-ui/react";
import Features from "components/Features";
import Hero from "components/Hero";
import type { NextPage } from "next";

const HomeTemplate: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Flex
        bgGradient={"linear(to-b, #1afed8, #01e4be)"}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        mt={-1}
        flexDir={"column"}
        overflow={"visible"}
      >
        <Features />
      </Flex>
    </Box>
  );
};

export default HomeTemplate;
