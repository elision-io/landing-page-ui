import { extendTheme } from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { config } from "./config";
import { fonts } from "./fonts";
import { globalStyles } from "./styles";

export const mainTheme: Record<string, any> = extendTheme({
  breakpoints,
  colors,
  config,
  fonts,
  globalStyles
})
