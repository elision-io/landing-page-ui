import { Button } from "@chakra-ui/react";

export interface SecondaryButtonProps {
  children: React.ReactNode;
  size?: string;
}

const SecondaryButton = ({ children, size }: SecondaryButtonProps) => (
  <Button
    as="a"
    w={{
      base: "full",
      sm: "auto",
    }}
    variant="outline"
    size={size ? size : "md"}
    mb={{
      base: 2,
      sm: 0,
    }}
    _hover={{
      bg: "elision.500",
      transform: "translateY(-2px)",
      boxShadow: "lg",
    }}
    cursor="pointer"
  >
    {children}
  </Button>
);

export default SecondaryButton;
