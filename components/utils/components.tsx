// ChakraUI
import {
  Text,
  Code,
  Link,
  Image,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { ReactNode } from "react";

// Components
import MotionBox from "./MotionBox";
import CodeBlock from "./CodeBlock";

const padding = 2;

interface ComponentProps {
  children: ReactNode;
}

const H1 = ({ children }: ComponentProps) => (
  <Heading size="xl" py={padding}>
    {children}
  </Heading>
);

const H2 = ({ children }: ComponentProps) => (
  <Heading size="md" py={padding}>
    {children}
  </Heading>
);

const H3 = ({ children }: ComponentProps) => (
  <Heading size="md" py={padding}>
    {children}
  </Heading>
);

const H4 = ({ children }: ComponentProps) => (
  <Heading size="sm" py={padding}>
    {children}
  </Heading>
);

const UL = ({ children }: ComponentProps) => (
  <UnorderedList py={padding}>{children}</UnorderedList>
);

const P = ({ children }: ComponentProps) => (
  <Text py={padding}>{children}</Text>
);

const InlineCode = ({ children }: ComponentProps) => (
  <Code variant="subtle">{children}</Code>
);

interface ImageProps {
  src: string;
}

const IMG = ({ src }: ImageProps) => (
  <MotionBox my={padding}>
    <Image borderRadius="xl" boxShadow="2xl" src={src} />
  </MotionBox>
);

const preToCodeBlock = (preProps: any) => {
  if (preProps?.children?.props?.mdxType === `code`) {
    const {
      children: codeString,
      className = ``,
      ...props
    } = preProps.children.props;

    const match = className.match(/language-([\0-\uFFFF]*)/);
    return {
      codeString: codeString.trim(),
      className,
      language: match !== null ? match[1] : ``,
      ...props,
    };
  }

  return undefined;
};

export const components = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  ul: UL,
  a: Link,
  img: IMG,
  li: ListItem,
  inlineCode: InlineCode,

  pre: (preProps: any) => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <CodeBlock {...props} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
};
