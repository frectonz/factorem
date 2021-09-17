// NextJs
import { GetStaticProps } from "next";

// ChakraUI
import { Stack } from "@chakra-ui/react";

// Components
import Hero from "../components/main/Hero";
import Layout from "../components/layout/Layout";
import CardsList from "../components/cards/CardsList";
import MainContainer from "../components/utils/Container";
import LatestArticle from "../components/main/LatestArticle";

// Library
import { Article, getAllArticles, getAllProjects, Project } from "../lib";

// Config
import config from "../data/config/site.json";
import repositories from "../data/config/repositories.json";
import certificates from "../data/config/certificates.json";

interface IndexProps {
  articles: Article[];
  projects: Project[];
}

export default function IndexPage({ articles, projects }: IndexProps) {
  const firstArticle = articles[0];

  return (
    <Layout>
      <Hero {...config.frontPageHeadline} />
      <MainContainer>
        <Stack alignItems="flex-start" spacing={24} py={100}>
          <LatestArticle
            title={firstArticle.title}
            description={firstArticle.description}
            link={`/articles/${firstArticle.id}`}
          />

          <CardsList
            {...config.articlesSection}
            cards={articles.map((article) => {
              return {
                title: article.title,
                bgImg: article.image,
                link: `/articles/${article.id}`,
              };
            })}
          />

          <CardsList
            {...config.projectsSection}
            cards={projects.map((project) => {
              return {
                title: project.name,
                link: project.website,
                bgImg: project.image,
                isExternal: true,
              };
            })}
          />

          <CardsList {...config.repositoriesSection} cards={repositories} />

          <CardsList
            {...config.certificatesSection}
            cards={certificates
              .map((certificate) => {
                return {
                  link: "",
                  isExternal: true,
                  title: certificate.name,
                  bgImg: certificate.image,
                };
              })
              .slice(0, 3)}
          />
        </Stack>
      </MainContainer>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let articles = await getAllArticles();
  let projects = await getAllProjects();

  if (articles.length > 3) {
    articles = articles.slice(0, 3);
  }

  if (projects.length > 3) {
    projects = projects.slice(0, 3);
  }

  return {
    props: { articles, projects },
  };
};
