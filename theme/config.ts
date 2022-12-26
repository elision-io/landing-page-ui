import type { ThemeConfig } from "@chakra-ui/react";

/**
 * @docs
 * https://chakra-ui.com/docs/styled-system/color-mode#difference-between-initialcolormodesystem-and-usesystemcolormode
 */
export const config: ThemeConfig = {
  initialColorMode: "dark",
  disableTransitionOnChange: false,
  useSystemColorMode: false,
};