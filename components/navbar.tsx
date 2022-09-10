import React from "react";

import {
  chakra,
  Box,
  Flex,
  HStack,
  IconButton,
  PopoverContent,
  SimpleGrid,
  Stack,
  VStack,
  Link,
  CloseButton,
  Button,
  PopoverTrigger,
  Popover,
  Image,
  useDisclosure
} from "@chakra-ui/react";

import {
  AiFillHome,
  AiOutlineInbox,
  AiOutlineMenu,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io"
import { BsFillCameraVideoFill } from "react-icons/bs"
import { useScroll } from "framer-motion";


export default function NavBar() {
  const bg = "elision.600"
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = "brand.100"
  const mobileNav = useDisclosure();

  const Section = (props: any) => {
    const ic = "elision.50"
    const hbg = "elision.600"
    const tcl = "gray.50"
    const dcl = "gray.50"

    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{
          bg: hbg,
        }}
      >
        <chakra.svg
          flexShrink={0}
          h={6}
          w={6}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const Features = (props: any) => {
    const hbgh = "brand.300"
    const hbg = "elision.600"
    const tcl = "elision.50"

    return (
      <React.Fragment>
        <SimpleGrid
          columns={
            props.h
              ? {
                base: 1,
                md: 3,
                lg: 5,
              }
              : 1
          }
          pos="relative"
          gap={{
            base: 6,
            sm: 8,
          }}
          px={5}
          py={6}
          p={{
            sm: 8,
          }}
        >
          <Section
            title="Analytics"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            }
          >
            Get a better understanding of where your traffic is coming from.
          </Section>

          <Section
            title="Engagement"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            }
          >
            Speak directly to your customers in a more meaningful way.
          </Section>

          <Section
            title="Security"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            }
          >
            Your customers&#039; data will be safe and secure.
          </Section>

          <Section
            title="Integrations"
            description={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            }
          >
            Connect with third-party tools that you&#039;re already using.
          </Section>

          <Section
            title="Automations"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            }
          >
            Build strategic funnels that will drive your customers to convert
          </Section>
        </SimpleGrid>
        <Box
          px={{
            base: 5,
            sm: 8,
          }}
          py={5}
          bg={hbg}
          display={{
            sm: "flex",
          }}
        >
          <Stack
            direction={{
              base: "row",
            }}
            spacing={{
              base: 6,
              sm: 10,
            }}
          >
            <Box display="flow-root">
              <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
                _hover={{
                  bg: hbgh,
                }}
              >
                <chakra.svg
                  flexShrink={0}
                  h={6}
                  w={6}
                  color="gray.400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </chakra.svg>
                <chakra.span ml={3}>Watch Demo</chakra.span>
              </Link>
            </Box>

            <Box display="flow-root">
              <Link
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
                _hover={{
                  bg: hbgh,
                }}
              >
                <chakra.svg
                  flexShrink={0}
                  h={6}
                  w={6}
                  color="gray.400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </chakra.svg>
                <chakra.span ml={3}>Contact Sales</chakra.span>
              </Link>
            </Box>
          </Stack>
        </Box>
      </React.Fragment>
    );
  };

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? "lg" : undefined}
        transition="box-shadow 0.2s"
        w="full"
        overflowY="hidden"
      >
        <chakra.div px={12}>
          <Flex justifyContent="space-between" align={'center'}>
            <Flex>
              <Link href="/">
                <Image
                  alt="logo"
                  m={'8px'}
                  w={190}
                  src={'/elsn3.png'}
                />
              </Link>
            </Flex>
            <Flex alignItems="normal" m={8}>
              <HStack
                spacing="5"
                display={{
                  base: "none",
                  md: "flex",
                }}
              >
                <Popover>
                  <PopoverTrigger>
                    <Button
                      bg={bg}
                      color="elision.50"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="lg"
                      _hover={{
                        color: cl,
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                      rightIcon={<IoIosArrowDown />}
                    >
                      Features
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    w="100vw"
                    maxW="md"
                    _focus={{
                      boxShadow: "md",
                    }}
                  >
                    <Features />
                  </PopoverContent>
                </Popover>
                <Button
                  bg={bg}
                  color="elision.50"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    color: cl,
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  Learn
                </Button>
                <Button
                  bg={bg}
                  color="elision.50"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{
                    color: cl,
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  About
                </Button>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack
                spacing="5"
                display={{
                  base: "none",
                  md: "flex",
                }}
              >
                <Button
                  color="elision.500"
                  _hover={{
                    color: "elision.50",
                    bg: "elision.200"
                  }}
                  variant="solid"
                  bg="brand.100"
                >
                  Enter App
                </Button>
              </HStack>
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}