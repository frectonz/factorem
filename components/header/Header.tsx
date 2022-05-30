// ChakraUI
import { Box, Flex, useColorMode } from "@chakra-ui/react";

// Components
import Logo from "../svgs/Logo";
import Navigation from "./Navigation";
import MainContainer from "../utils/Container";

// NextJS
import NextLink from "next/link";

export default function Header() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      width="100vw"
      top="0"
      position="fixed"
      alignItems="center"
      justifyContent="center"
      bg={colorMode === "light" ? "whitesmoke" : "blackAlpha.400"}
      style={{
        zIndex: 100,
      }}
    >
      <MainContainer>
        <Box
          py="13"
          as="header"
          alignItems="center"
          justifyContent="space-between"
          display={{
            sm: "flex",
          }}
        >
          <NextLink href="/">
            <a title="Go to Home Page">
              <Logo />
            </a>
          </NextLink>
          <Navigation />
        </Box>
      </MainContainer>
    </Flex>
  );
}
