import { mainTheme } from '../theme'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={mainTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
