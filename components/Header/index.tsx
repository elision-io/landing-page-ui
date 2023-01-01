import React from "react";

import {
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { useScroll } from "framer-motion";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Ecosystem from "./Ecosystem";

export default function Header() {
  const bg = "elision.600";
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = "brand.100";
  const mobileNav = useDisclosure();

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
    <>
      <chakra.header
        ref={ref}
        shadow={y > height ? "lg" : undefined}
        transition="box-shadow 0.2s"
        w="full"
        overflowY="hidden"
      >
        <chakra.div px={12}>
          <Flex justifyContent="space-between" align={"center"}>
            <Flex>
              <Link href="/">
                <Image alt="logo" m={"8px"} w={190} src={"png/elsn3.png"} />
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
                      Ecosystem
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    w="100vw"
                    maxW="md"
                    _focus={{
                      boxShadow: "md",
                    }}
                  >
                    <Ecosystem />
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
                    bg: "elision.200",
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
    </>
  );
}
