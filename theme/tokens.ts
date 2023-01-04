import colors from "./foundations/colors";

const semanticTokens = {
  colors: {
    ...colors,

    // semantic token colors
    primary: "elision.100",
    primaryHover: "elision.200",
    primaryPressed: "elision.100",
    body: "elision.50",
    bodyInverted: "elision.700",
    disabled: "elision.400",
    background: "elision.600",
    neutral: "elision.800",
    success: "green.400",
    successNeutral: "green.900",
    error: "red.500",
    errorNeutral: "red.900",
    attention: "yellow.200",
  },
};

export default semanticTokens;
