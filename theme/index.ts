import { extendTheme } from "@chakra-ui/react";

export const mainTheme: Record<string, any> = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  fonts: {
    heading: `"Montserrat", "Open Sans", sans-serif`,
    body: `"Montserrat", "Open Sans", sans-serif`
  },
  styles: {
    global: {
      header: {
        bg: "#262626",
      },
      body: {
        bg: "#1f1f1f"
      },
      h1: {
        fontWeight: 200,
        fontSize: {
          base: '2.25em',
          md: '3.00em',
        },
        color: "elision.100",
        marginBottom: 4
      }
    }
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
    elision: {
      50: '#f7f7f7',
      100: '#82eaff',
      200: '#8882ff',
      250: '#8981ff',
      300: '#867df9',
      350: '#7a74e5',
      400: '#4f4f4f',
      500: '#262626',
      600: '#1f1f1f',
      700: '#121212',
      800: '#000000',
    }
  }

})


