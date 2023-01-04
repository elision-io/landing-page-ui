import { Button } from "@chakra-ui/react";

export interface MainButtonProps {
  children: React.ReactNode;
  size?: string;
}

const MainButton = ({ children, size }: MainButtonProps) => (
  <Button
    as="a"
    size={size}
    cursor="pointer"
    color="elision.500"
    _hover={{
      color: "elision.50",
      bg: "elision.200",
      transform: "translateY(-2px)",
    }}
    bg="elision.100"
  >
    {children}
  </Button>
);

export default MainButton;
