import { ChakraProvider, Flex } from "@chakra-ui/react";
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/open-sans";
import "@near-wallet-selector/modal-ui/styles.css";
import Footer from "components/Footer";
import Header from "components/NavBar";
import { WalletSelectorContextProvider } from "contexts/WalletSelectorContext";
import { ReactNode } from "react";
import { mainTheme } from "theme";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <ChakraProvider theme={mainTheme}>
          <WalletSelectorContextProvider>
            <Flex
              as="nav"
              direction="column"
              align="center"
              justify="space-between"
              wrap="wrap"
              w="100%"
            >
              <Header />
              <main>{children}</main>
              <Footer />
            </Flex>
          </WalletSelectorContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
