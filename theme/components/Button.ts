import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 8,
    border: "2px solid black",
    boxShadow: `0px 6px 0px black`,
    marginY: 1,
    _hover: {
      transform: "translateY(-2px)",
      boxShadow: "none",
    },
  },
  defaultProps: {
    size: "lg",
  },
};
