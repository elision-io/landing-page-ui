import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/open-sans";
import { WalletSelectorContextProvider } from "contexts/WalletSelectorContext";
import Layout from "layout/index";
import type { AppProps } from "next/app";
import { mainTheme } from "theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      <WalletSelectorContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WalletSelectorContextProvider>
    </ChakraProvider>
  );
}

export default App;
