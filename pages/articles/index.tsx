// NextJs
import { GetStaticProps } from "next";

// Library
import { Article, getAllArticles } from "../../lib";

// Components
import Hero from "../../components/main/Hero";
import Layout from "../../components/layout/Layout";
import ArticleCardList from "../../components/cards/ArticleCardList";

import config from "../../data/config/site.json";

interface ArticlesProps {
  articles: Article[];
}

export default function ArticlesPage({ articles }: ArticlesProps) {
  return (
    <Layout>
      <Hero {...config.articlesPageHeadline} />
      <ArticleCardList articles={articles} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ArticlesProps> = async () => {
  let articles = await getAllArticles();

  return {
    props: { articles },
  };
};
