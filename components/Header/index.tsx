import React from "react";

import {
  Button,
  chakra,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  useOutsideClick,
  VStack,
} from "@chakra-ui/react";

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
    <Drawer
      placement="top"
      initialFocusRef={ref}
      isOpen={mobileNav.isOpen}
      onClose={mobileNav.onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color="black" />
        <DrawerHeader
          borderBottomWidth="2px"
          bgGradient="linear(to-bl, #1afed8, #ba5de6)"
        >
          <HStack mx={4}>
            <Image alt="logo" w={39} h={39} src={"png/icon-black.png"} />
            <Text color="elision.800">&nbsp;Navigation</Text>
          </HStack>
        </DrawerHeader>
        <DrawerBody bg="elision.600">
          <VStack>
            <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
              Ecosystem
            </Button>
            <Button w="full" variant="ghost" leftIcon={<AiOutlineInbox />}>
              Learn
            </Button>
            <Button
              w="full"
              variant="ghost"
              leftIcon={<BsFillCameraVideoFill />}
            >
              About
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "lg" : undefined}
      transition="box-shadow 0.2s"
      w="full"
      overflowY="hidden"
      px={8}
    >
      <chakra.div>
        <Flex justifyContent="space-between" align={"center"}>
          <Flex>
            <Link href="/">
              <Image
                alt="logo"
                w={300}
                src={"png/elision-color-nb.png"}
                display={{ base: "none", lg: "flex" }}
              />
              <Image
                alt="logo"
                w={57}
                h={57}
                src={"png/elision.png"}
                display={{ base: "flex", lg: "none" }}
              />
            </Link>
          </Flex>
          <Flex alignItems="normal" m={8}>
            <HStack
              spacing="5"
              display={{
                base: "none",
                lg: "flex",
              }}
            >
              <Popover>
                <PopoverTrigger>
                  <Button variant="ghost" rightIcon={<IoIosArrowDown />}>
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
              <Button variant="ghost">Learn</Button>
              <Button variant="ghost">About</Button>
            </HStack>
          </Flex>
          <Flex justify="flex-end" align="center">
            <HStack
              spacing="5"
              display={{
                base: "none",
                lg: "flex",
              }}
            >
              <Button variant="primary">Enter App</Button>
            </HStack>
            <IconButton
              display={{
                base: "flex",
                lg: "none",
              }}
              alignSelf="flex-end"
              aria-label="Open menu"
              fontSize="20px"
              color="elision.50"
              variant="outline"
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
