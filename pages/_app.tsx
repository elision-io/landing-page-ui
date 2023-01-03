import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/open-sans";
import "@near-wallet-selector/modal-ui/styles.css";
import Layout from "components/layouts";
import { WalletSelectorContextProvider } from "contexts/WalletSelectorContext";
import type { AppProps } from "next/app";
import { mainTheme } from "theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mainTheme}>
      <Layout>
        <WalletSelectorContextProvider>
          <Component {...pageProps} />
        </WalletSelectorContextProvider>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
