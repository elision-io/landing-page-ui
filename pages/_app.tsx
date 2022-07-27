import { mainTheme } from '../theme'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mainTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
