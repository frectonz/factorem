// NextJs
import NextLink from "next/link";

// ChakraUI
import { Stack, Grid, Heading, Text, Box } from "@chakra-ui/react";

// Components
import { Article } from "../../lib";
import MotionBox from "../utils/MotionBox";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Box
      _hover={{
        h1: {
          color: "#6166DC",
        },
      }}
    >
      <Grid
        templateColumns={["repeat(1, 1fr)", null, "repeat(2,1fr)"]}
        gap={10}
      >
        <MotionBox
          height="300"
          bgSize="cover"
          bgPos="center"
          boxShadow="2xl"
          borderRadius="xl"
          bgRepeat="no-repeat"
          bgImage={article.image}
        />
        <Stack justify="center">
          <NextLink href={`/articles/${article.id}`}>
            <a>
              <Heading py={2} as="h1" transition="all 500ms ease-in">
                {article.title}
              </Heading>
            </a>
          </NextLink>
          <Text color="gray.500">{article.description}</Text>
          <Heading size="sm" color="gray.300">
            {article.date}
          </Heading>
        </Stack>
      </Grid>
    </Box>
  );
}
