import dayjs from "dayjs";
import { join } from "path";
import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";

export interface Article {
  id: string;
  date: string;
  title: string;
  image: string;
  description: string;
}

const ARTICLES_DIR = join(process.cwd(), "factorem", "../data/articles");

const EXTENSION = ".mdx";

export function getAllArticles(): Article[] {
  const files = readdirSync(ARTICLES_DIR);

  const articles: Article[] = files.map((file) => {
    const fullPath = join(ARTICLES_DIR, file);
    const content = readFileSync(fullPath);

    const { data } = matter(content);

    return {
      id: file.replace(EXTENSION, ""),
      title: data.title,
      date: formatDate(data.date),
      image: data.image,
      description: data.description,
    };
  });

  articles.sort(({ date: a }, { date: b }) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();

    return dateA - dateB;
  });

  return articles;
}

export function getAllArticleIds(): string[] {
  return getAllArticles().map((article) => article.id);
}

export interface ArticleData {
  title: string;
  date: string;
  image: string;
  content: string;
  description: string;
}

export async function getArticleData(id: string): Promise<ArticleData> {
  const file = join(ARTICLES_DIR, `${id}${EXTENSION}`);
  const content = readFileSync(file);

  const { data, content: mdContent } = matter(content);

  return {
    title: data.title,
    description: data.description,
    date: formatDate(data.date),
    image: data.image,
    content: mdContent,
  };
}

const formatDate = (date: string) => dayjs(date).format("ddd, MMM DD, YYYY");
