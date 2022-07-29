import { mainTheme } from 'theme'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/layout";
import '@fontsource/montserrat/200.css'
import '@fontsource/montserrat';
import '@fontsource/open-sans'

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
