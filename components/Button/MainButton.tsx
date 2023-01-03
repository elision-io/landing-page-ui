import { Button } from "@chakra-ui/react";

export interface MainButtonProps {
  children: React.ReactNode;
  size?: string;
}

const MainButton = ({ children, size }: MainButtonProps) => (
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
    size={size ? size : "md"}
    cursor="pointer"
    color="elision.500"
    _hover={{
      color: "elision.50",
      bg: "elision.200",
      transform: "translateY(-2px)",
      boxShadow: "lg",
    }}
    variant="solid"
    bg="elision.100"
  >
    {children}
  </Button>
);

export default MainButton;
