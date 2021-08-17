import { join } from "path";
import matter from "gray-matter";
import { readdirSync, readFileSync } from "fs";

import hljs from "highlight.js";
import { Marked } from "@ts-stack/markdown";

export interface Article {
  id: string;
  date: string;
  title: string;
  description: string;
}

const ARTICLES_DIR = join(process.cwd(), "factorem", "../data/articles");

export function getAllArticles(): Article[] {
  const files = readdirSync(ARTICLES_DIR);

  const articles: Article[] = files.map((file) => {
    const fullPath = join(ARTICLES_DIR, file);
    const content = readFileSync(fullPath);

    const { data } = matter(content);

    return {
      id: file.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
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
  description: string;
  date: string;
  contentHtml: string;
}

export async function getArticleData(id: string): Promise<ArticleData> {
  const file = join(ARTICLES_DIR, `${id}.md`);
  const content = readFileSync(file);

  const { data, content: mdContent } = matter(content);

  Marked.setOptions({
    highlight: (code, lang) =>
      hljs.highlight(code, {
        language: lang,
      }).value,
  });

  const contentHtml = Marked.parse(mdContent);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    contentHtml,
  };
}
