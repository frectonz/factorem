// NextJs
import NextLink from "next/link";

// ChakraUI
import { Heading } from "@chakra-ui/react";

// Components
import Layout from "../components/layout/Layout";
import MainContainer from "../components/utils/Container";
import PrimaryButton from "../components/utils/PrimaryButton";

export default function NotFoundPage() {
  return (
    <Layout>
      <MainContainer py={100}>
        <Heading size="xl" py={5}>
          404 Page
        </Heading>
        <NextLink href="/">
          <a>
            <PrimaryButton>Return to Homepage</PrimaryButton>
          </a>
        </NextLink>
      </MainContainer>
    </Layout>
  );
}
