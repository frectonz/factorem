import { ReactNode } from "react";

// ChakraUI
import {
  Box,
  Text,
  theme,
  Stack,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

interface HeroProps {
  title: string;
  text: string;
  image?: string;
  children?: ReactNode;
  isAnArticle?: boolean;
}

export default function Hero({
  title,
  text,
  image,
  children,
  isAnArticle = false,
}: HeroProps) {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";

  const topColor = isDarkMode
    ? theme.colors.gray["900"]
    : theme.colors.gray["100"];
  const bottomColor = isDarkMode
    ? theme.colors.blue["900"]
    : theme.colors.blue["100"];

  const bg = `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`;

  const headline = (
    <>
      <Heading as="h1">{title}</Heading>
      <Text maxWidth="45ch" textAlign="center">
        {text}
      </Text>
    </>
  );

  return (
    <Stack
      py={150}
      spacing="5"
      as="section"
      align="center"
      bgPos="center"
      bgGradient={bg}
      bgRepeat="no-repeat"
      bgImage={image && image}
    >
      {isAnArticle ? (
        <Box p="6" bg="blackAlpha.300" textAlign="center">
          {headline}
        </Box>
      ) : (
        headline
      )}
      {children}
    </Stack>
  );
}
