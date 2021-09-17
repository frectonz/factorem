// Static Generation
import { GetStaticPaths, GetStaticProps } from "next";

// Library
import { ArticleData, getAllArticleIds, getArticleData } from "../../lib";

// MDX
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

// Components
import Hero from "../../components/main/Hero";
import Layout from "../../components/layout/Layout";
import MainContainer from "../../components/utils/Container";
import { components } from "../../components/utils/components";

// ChakraUI
import { Text } from "@chakra-ui/react";

interface Props {
  article: ArticleData;
  serialized: MDXRemoteSerializeResult;
}

export default function Article({ article, serialized }: Props) {
  return (
    <>
      <Hero
        title={article.title}
        text={article.description}
        image={article.image}
      />
      <MainContainer py={5}>
        <Text mb={2}>Created {article.date}</Text>
        <MDXRemote {...serialized} components={components} />
      </MainContainer>
    </>
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
  const serialized = await serialize(article.content);

  return {
    props: {
      article,
      serialized,
    },
  };
};
