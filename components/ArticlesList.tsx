import Link from "next/link";
import { Article } from "../lib";
import styles from "../styles/blogs.module.css";

interface Props {
  articles: Article[];
}

export function ArticlesList({ articles }: Props) {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          id={article.id}
          title={article.title}
          publishedDate={article.date}
          description={article.description}
        />
      ))}
    </>
  );
}

interface ArticleCardProps {
  id: string;
  title: string;
  publishedDate: string;
  description: string;
}

function ArticleCard({
  id,
  title,
  publishedDate,
  description,
}: ArticleCardProps) {
  return (
    <article className={styles.card}>
      <time className={styles.time}>
        {new Date(publishedDate).toDateString()}
      </time>
      <Link href={`articles/${id}`}>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
