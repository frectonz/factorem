// Components
import { Article } from "../../lib";
import ArticleCard from "./ArticleCard";
import MainContainer from "../utils/Container";

// ChakraUI
import { Stack } from "@chakra-ui/react";

// NextJs
import NextLink from "next/link";

interface ArticleCardListProps {
  articles: Article[];
}

export default function ArticleCardList({ articles }: ArticleCardListProps) {
  return (
    <MainContainer>
      <Stack spacing={100} py={50}>
        {articles.map((article, i) => (
          <NextLink key={i} href={`/articles/${article.id}`}>
            <a>
              <ArticleCard article={article} />
            </a>
          </NextLink>
        ))}
      </Stack>
    </MainContainer>
  );
}
