import { chakra, VisuallyHidden } from "@chakra-ui/react";

export interface SocialButtonProps {
  children: any;
  label: string;
  href: string;
}

const SocialButton = ({ children, label, href }: SocialButtonProps) => (
  <chakra.button
    bgGradient="linear(to-br, #1afed8, #4dfee1)"
    rounded={"full"}
    w={10}
    h={10}
    cursor={"pointer"}
    as={"a"}
    href={href}
    display={"inline-flex"}
    alignItems={"center"}
    justifyContent={"center"}
    transition={"background 0.2s ease-in-out"}
    _hover={{
      color: "elision.50",
      bg: "elision.200",
    }}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </chakra.button>
);

export default SocialButton;
