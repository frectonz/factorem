// ChakraUI
import { Stack, Box, useColorMode } from "@chakra-ui/react";

// Code Highlight
import darkTheme from "prism-react-renderer/themes/nightOwl";
import lightTheme from "prism-react-renderer/themes/nightOwlLight";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

// Components
import { Copy } from "./Copy";

const getLanguage = (className = ""): string =>
  className.split("language-").pop();

interface CodeBlockProps {
  title?: string;
  language: string;
  codeString: string;
  [key: string]: any;
}

export default function CodeBlock({
  codeString,
  title = "",
  className: blockClassName,
}: CodeBlockProps) {
  const { colorMode } = useColorMode();
  const language = getLanguage(blockClassName);

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language as Language}
      theme={colorMode === `light` ? lightTheme : darkTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={{ margin: 10 }}>
          {(title || language) && (
            <CodeHeader
              title={title}
              language={language}
              codeString={codeString}
            />
          )}
          <div data-prism-renderer="true">
            <pre
              className={className}
              style={{
                ...style,
                padding: 10,
                overflowX: "scroll",
              }}
            >
              <code className={`language-${language}`}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      )}
    </Highlight>
  );
}

interface CodeHeaderProps {
  title: string;
  language: string;
  codeString: string;
}

function CodeHeader({ title, language, codeString }: CodeHeaderProps) {
  const { colorMode } = useColorMode();

  return (
    <Stack
      direction="row"
      spacing={2}
      padding={4}
      justifyContent="flex-end"
      bgGradient={
        colorMode === "light"
          ? "linear-gradient(to bottom, rgb(253, 253, 253) 0%, rgb(243, 243, 243) 100%)"
          : "linear-gradient(to bottom, rgb(2, 38, 67) 0%, rgb(1, 22, 39) 100%)"
      }
      borderTopRightRadius="2rem"
      borderTopLeftRadius="2rem"
    >
      {title && (
        <Box flexGrow={1} fontSize="md">
          {title}
        </Box>
      )}
      {language && (
        <Box
          textTransform="uppercase"
          display="inline-flex"
          alignItems="center"
          fontSize="smaller"
          color={
            language === "javascript"
              ? "yellow.600"
              : language === "typescript"
              ? "blue.400"
              : "default"
          }
          padding={2}
          borderRadius={10}
          data-lang={language}
        >
          {language}
        </Box>
      )}
      <Copy content={codeString} fileName={title} />
    </Stack>
  );
}
