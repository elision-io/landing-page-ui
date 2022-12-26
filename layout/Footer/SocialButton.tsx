import { Button, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface SocialButtonInterface {
  children: ReactNode;
  label: string;
  href: string;
}

const SocialButton = ({ children, label, href }: SocialButtonInterface) => (
  <Button
    bgGradient="linear(to-br, #82eaff, #8882ff)"
    rounded={"full"}
    w={8}
    h={8}
    cursor={"pointer"}
    as={"a"}
    href={href}
    display={"inline-flex"}
    alignItems={"center"}
    justifyContent={"center"}
    transition={"background 0.3s ease"}
    _hover={{
      color: "elision.50",
      bg: "elision.200",
    }}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </Button>
);

export default SocialButton;
