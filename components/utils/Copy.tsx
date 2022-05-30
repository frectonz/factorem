import { useState } from "react";

import { Box, VisuallyHidden } from "@chakra-ui/react";

export const copyToClipboard = (str: string) => {
  const { clipboard } = window.navigator;
  return clipboard.writeText(str);
};

const delay = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

interface CopyProps {
  content: string;
  duration?: number;
  fileName?: string;
  trim?: boolean;
}

export const Copy = ({
  content,
  duration = 5000,
  fileName = "",
  trim = false,
}: CopyProps) => {
  const [copied, setCopied] = useState(false);

  const label = copied
    ? `${fileName ? `${fileName} ` : ""} copied to clipboard`
    : `${fileName ? `${fileName}: ` : ""} copy code to clipboard`;

  return (
    <Box
      as="button"
      type="button"
      name={label}
      disabled={copied}
      onClick={async () => {
        await copyToClipboard(trim ? content.trim() : content);
        setCopied(true);
        await delay(duration);
        setCopied(false);
      }}
      transition="all 0.3s ease-in-out"
      border="1px solid transparent"
      px={2}
      borderRadius="6px"
      _hover={{
        border: `1px solid currentColor`,
      }}
      _disabled={{
        opacity: 0.5,
        cursor: `not-allowed`,
      }}
    >
      {copied ? `Copied` : `Copy`}
      <VisuallyHidden as="span" aria-roledescription="status">
        {label}
      </VisuallyHidden>
    </Box>
  );
};
