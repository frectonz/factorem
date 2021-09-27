// Components
import { Article } from "../../lib";
import ArticleCard from "./ArticleCard";
import MainContainer from "../utils/Container";

// ChakraUI
import { Stack } from "@chakra-ui/react";

interface ArticleCardListProps {
  articles: Article[];
}

export default function ArticleCardList({ articles }: ArticleCardListProps) {
  return (
    <MainContainer>
      <Stack spacing={100} py={50}>
        {articles.map((article, i) => (
          <ArticleCard key={i} article={article} />
        ))}
      </Stack>
    </MainContainer>
  );
}
