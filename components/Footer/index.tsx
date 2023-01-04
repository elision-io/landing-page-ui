import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { FaBook, FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import SocialButton from "../Button/SocialButton";

export default function Footer() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2022 Elision Protocol. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter size={20} />
          </SocialButton>
          <SocialButton label={"Discord"} href={"#"}>
            <FaDiscord size={20} />
          </SocialButton>
          <SocialButton label={"GitHub"} href={"#"}>
            <FaGithub size={20} />
          </SocialButton>
          <SocialButton label={"Docs"} href={"#"}>
            <FaBook size={20} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
