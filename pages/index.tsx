import { Box, Flex } from "@chakra-ui/react";
import Features from "components/features";
import Hero from "components/hero";
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Flex
        bgGradient={'linear(to-b, #867df9, #82eaff)'}
        bgSize={'contain'}
        bgRepeat={'no-repeat'}
        mt={-1}
        flexDir={'column'}
        overflow={'visible'}
      >
        <Features />
      </Flex>
    </Box>
  )
}

export default Home
