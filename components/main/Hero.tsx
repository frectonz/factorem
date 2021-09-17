import { ReactNode } from "react";

// ChakraUI
import { Text, theme, Stack, Heading, useColorMode } from "@chakra-ui/react";

interface HeroProps {
  title: string;
  text: string;
  children?: ReactNode;
}

export default function Hero({ title, text, children }: HeroProps) {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";

  const topColor = isDarkMode
    ? theme.colors.gray["900"]
    : theme.colors.gray["200"];
  const bottomColor = isDarkMode
    ? theme.colors.blue["900"]
    : theme.colors.gray["300"];

  const bg = `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`;

  return (
    <Stack as="section" align="center" spacing="5" py={150} bgGradient={bg}>
      <Heading as="h1" textShadow="2xl">
        {title}
      </Heading>
      <Text variant="prominent" maxWidth="45ch" textAlign="center">
        {text}
      </Text>
      {children}
    </Stack>
  );
}
