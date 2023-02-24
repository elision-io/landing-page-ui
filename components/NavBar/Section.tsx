import { Box, chakra, Link } from "@chakra-ui/react";

export interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: any;
}

const Section = ({ title, icon, children }: SectionProps) => (
  <Link
    m={-3}
    p={3}
    display="flex"
    alignItems="start"
    rounded="md"
    _hover={{
      bg: "elision.500",
    }}
  >
    <chakra.svg
      flexShrink={0}
      h={6}
      w={6}
      mr={3}
      color="elision.50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      {icon}
    </chakra.svg>
    <Box>
      <chakra.p fontSize="sm" fontWeight="700" color="elision.50">
        {title}
      </chakra.p>
      <chakra.p mt={1} fontSize="sm" color="elision.50">
        {children}
      </chakra.p>
    </Box>
  </Link>
);

export default Section;
