import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Link: ComponentStyleConfig = {
  baseStyle: {
    color: "primary",
    textDecoration: "underline",
    _focus: {
      boxShadow: "none",
    },
    _hover: {
      border: "0px solid black",
      transform: "translateY(-2px)",
    },
    _focusVisible: {
      boxShadow: "none",
      outline: "auto",
    },
  },
};
