import { extendTheme } from "@chakra-ui/react";
import * as foundations from "./foundations";

export const mainTheme: Record<string, any> = extendTheme({
  ...foundations,
  config: {
    initialColorMode: "dark",
  }
});