import { Layout } from "../../components";
import styles from "../../styles/article.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { ArticleData, getAllArticleIds, getArticleData } from "../../lib";

interface Props {
  article: ArticleData;
}

export default function Article({ article }: Props) {
  return (
    <Layout title={article.title}>
      <article className={styles.article}>
        <header className={styles.title_box}>
          <h1 className={styles.title}>{article.title}</h1>
          <time>{new Date(article.date).toDateString()}</time>{" "}
          <p>{article.description}</p>
        </header>

        <main
          className={styles.article_box}
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const ids = getAllArticleIds();

  return {
    paths: ids.map((id) => {
      return {
        params: {
          id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const article = await getArticleData(params.id as string);

  return {
    props: {
      article,
    },
  };
};
