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

// Components
import MotionBox from "./MotionBox";
import CodeBlock from "./CodeBlock";

const padding = 2;

const H1 = ({ children }) => {
  return (
    <Heading size="xl" py={padding}>
      {children}
    </Heading>
  );
};

const H2 = ({ children }) => {
  return (
    <Heading size="md" py={padding}>
      {children}
    </Heading>
  );
};

const H3 = ({ children }) => {
  return (
    <Heading size="md" py={padding}>
      {children}
    </Heading>
  );
};

const H4 = ({ children }) => {
  return (
    <Heading size="sm" py={padding}>
      {children}
    </Heading>
  );
};

const UL = ({ children }) => (
  <UnorderedList py={padding}>{children}</UnorderedList>
);

const P = ({ children }) => <Text py={padding}>{children}</Text>;

const InlineCode = ({ children }) => <Code variant="subtle">{children}</Code>;

const IMG = ({ src }) => (
  <MotionBox my={padding}>
    <Image borderRadius="xl" boxShadow="2xl" src={src} />
  </MotionBox>
);

const preToCodeBlock = (preProps) => {
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

  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <CodeBlock {...props} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
};
