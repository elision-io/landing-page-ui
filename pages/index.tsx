import type { NextPage } from 'next'
import { Box } from "@chakra-ui/react";
import Hero from "components/hero"
import Features from "components/features";
import Milestones from "components/timeline";

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Features />
      <Milestones />
    </Box>
  )
}

export default Home
