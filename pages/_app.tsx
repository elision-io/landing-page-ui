import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/open-sans";
import "@near-wallet-selector/modal-ui/styles.css";
import { WalletContextProvider } from "contexts/WalletSelectorContext";
import BasicLayout from "layouts";
import type { AppProps } from "next/app";
import { mainTheme } from "theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mainTheme}>
      <BasicLayout>
        <WalletContextProvider>
          <Component {...pageProps} />
        </WalletContextProvider>
      </BasicLayout>
    </ChakraProvider>
  );
}

export default App;
