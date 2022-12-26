import { StyleFunctionProps } from '@chakra-ui/theme-tools'
export const globalStyles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      header: {
        height: "6.5rem",
        bg: props.theme.color.elision[800],
      },
      body: {
        bg: props.theme.color.elision[800],
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
    }),
  }
}