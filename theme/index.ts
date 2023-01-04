import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
import components from "./components";
import config from "./config";
import foundations from "./foundations";
import styles from "./styles";
import semanticTokens from "./tokens";

export const mainTheme: Record<string, any> = extendTheme({
  config,
  fonts: {
    // old fonts from the previous theme
    // TODO: update the fonts when we transition to the Design System
    heading:
      "SFMono-Regular, Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace",
    body: "SFMono-Regular, Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace",
    monospace:
      "SFMono-Regular, Consolas, 'Roboto Mono', 'Droid Sans Mono', 'Liberation Mono', Menlo, Courier, monospace",
  },
  styles,
  ...foundations,
  semanticTokens,
  components,
  withProse,
});

//
