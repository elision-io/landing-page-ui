import { extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import '@fontsource/source-code-pro/variable.css'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  fonts: {
    heading: `'source-code-pro', monospace`,
    body: `'source-code-pro', monospace`,
    mono: `'source-code-pro', monospace`,
  }
}

const mainTheme = extendTheme({ config }, theme)

export default mainTheme