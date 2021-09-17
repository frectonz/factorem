// Next
import NextLink from "next/link";

// ChakraUI
import { Stack, Badge, Box, Heading, Text } from "@chakra-ui/react";

// Components
import PrimaryButton from "../utils/PrimaryButton";

interface LatestArticleProps {
  title: string;
  description: string;
  link: string;
}

export default function LatestArticle({
  title,
  description,
  link,
}: LatestArticleProps) {
  return (
    <Stack alignItems="flex-start" spacing={[6, 8]}>
      <Badge variant="subtle">Latest Post</Badge>
      <Box>
        <Heading as="h2">{title}</Heading>
        <Text variant="lightContainer">{description}</Text>
      </Box>
      <NextLink href={link}>
        <a>
          <PrimaryButton variant="normal">Continue Reading</PrimaryButton>
        </a>
      </NextLink>
    </Stack>
  );
}
