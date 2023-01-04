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
  useOutsideClick,
  VStack,
} from "@chakra-ui/react";

import MainButton from "components/Button/MainButton";
import { useScroll } from "framer-motion";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Ecosystem from "./Ecosystem";

export default function Header() {
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const mobileNav = useDisclosure();
  const { scrollY } = useScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  useOutsideClick({
    ref: ref,
    handler: () => mobileNav.onClose(),
  });

  const MobileNavContent = (
    <VStack
      pos="absolute"
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      bg="elision.600"
      rounded="sm"
      shadow="dark-lg"
      ref={ref}
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button w="full" variant="ghost" leftIcon={<AiOutlineInbox />}>
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "lg" : undefined}
      transition="box-shadow 0.2s"
      w="full"
      overflowY="hidden"
      px={12}
    >
      <chakra.div>
        <Flex justifyContent="space-between" align={"center"}>
          <Flex>
            <Link href="/">
              <Image
                alt="logo"
                w={190}
                src={"png/elsn3.png"}
                display={{ base: "none", lg: "flex" }}
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
                    bg="elision.600"
                    color="elision.50"
                    display="inline-flex"
                    alignItems="center"
                    fontSize="lg"
                    _hover={{
                      color: "elision.100",
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
                    boxShadow: "dark-lg",
                  }}
                >
                  <Ecosystem />
                </PopoverContent>
              </Popover>
              <Button
                bg="elision.600"
                color="elision.50"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  color: "elision.100",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                Learn
              </Button>
              <Button
                bg="elision.600"
                color="elision.50"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{
                  color: "elision.100",
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
              <MainButton>Enter App</MainButton>
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
  );
}
