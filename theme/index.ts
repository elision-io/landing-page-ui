import { extendTheme } from "@chakra-ui/react";

export const mainTheme: Record<string, any> = extendTheme({
  fonts: {
    heading: `"Montserrat", "Open Sans", sans-serif`,
    body: `"Montserrat", "Open Sans", sans-serif`,
  },
  colors: {
    brand: {
      50: '#ffffff',
      100: '#82eaff',
      200: '#8c8c8c',
      300: '#363636',
      400: '#1f1f1f',
      500: '#121212',
      600: '#000000'
    },
  },
  global: {
    body: {
      bg: "#1f1f1f"
    }
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  }
})


