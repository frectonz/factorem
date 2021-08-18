import { Article, getAllArticles } from "../lib";
import { ArticlesList, Hero, Layout } from "../components";

interface Props {
  articles: Article[];
}

const IndexPage = ({ articles }: Props) => {
  return (
    <Layout>
      <Hero />
      <ArticlesList articles={articles} />
    </Layout>
  );
};

export async function getStaticProps() {
  const articles = getAllArticles();

  return {
    props: {
      articles,
    },
  };
}

export default IndexPage;
