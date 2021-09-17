// ChakraUI
import {
  Box,
  Text,
  Link,
  Stack,
  theme,
  HStack,
  Spacer,
  Heading,
  useColorMode,
} from "@chakra-ui/react";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

// Components
import MainContainer from "../utils/Container";
import CreativeCommons from "./CreativeCommons";

// Config
import config from "../../data/config/site.json";

export default function Footer() {
  const { colorMode } = useColorMode();

  const isDarkMode = colorMode === "dark";

  const bottomColor = isDarkMode
    ? theme.colors.gray["900"]
    : theme.colors.gray["200"];
  const topColor = isDarkMode
    ? theme.colors.blue["900"]
    : theme.colors.gray["300"];

  const bg = `linear-gradient(0deg, ${bottomColor} 0%, ${topColor} 100%)`;

  return (
    <Box bg={bg}>
      <MainContainer>
        <Stack py={50} as="section">
          <Heading as="h1">LICENSE</Heading>
          <Text>
            All content in this website by Fraol Lemecha is marked with{" "}
            <Link
              rel="noopener"
              target="_blank"
              href="https://creativecommons.org/publicdomain/zero/1.0/"
            >
              CC0 1.0 Universal.
              <CreativeCommons />
            </Link>
          </Text>
          <Text py={5} maxWidth="80ch">
            By marking the work with a CC0 public domain dedication, the creator
            is giving up their copyright and allowing reusers to distribute,
            remix, adapt, and build upon the material in any medium or format,
            even for commercial purposes.
          </Text>

          <Spacer />

          <Heading as="h1">Accounts</Heading>
          <HStack>
            <a
              href={config.socialMedia.linkedIn}
              title="LinkedIn"
              target="_blank"
              rel="noopener"
            >
              <FaLinkedin fontSize="1.3rem" />
            </a>
            <a
              href={config.socialMedia.github}
              title="GitHub"
              target="_blank"
              rel="noopener"
            >
              <FaGithub fontSize="1.3rem" />
            </a>
            <a
              href={config.socialMedia.twitter}
              title="Twitter"
              target="_blank"
              rel="noopener"
            >
              <FaTwitter fontSize="1.3rem" />
            </a>
          </HStack>
        </Stack>
      </MainContainer>
    </Box>
  );
}
