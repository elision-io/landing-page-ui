import { GlobalStyles } from "@chakra-ui/theme-tools";

const styles: GlobalStyles = {
  global: () => ({
    header: {
      height: "6.5rem",
      bg: "background",
    },
    body: {
      bg: "background",
    },
    h1: {
      fontWeight: 200,
      fontSize: {
        base: "2.25em",
        md: "3.00em",
      },
      color: "elision.100",
      marginBottom: 4,
    },
  }),
};

export default styles;
