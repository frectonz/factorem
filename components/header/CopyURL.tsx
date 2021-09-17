// ChakraUI
import { Tooltip, IconButton, useClipboard } from "@chakra-ui/react";
import { useState } from "react";

// Icon
import { FaLink } from "react-icons/fa";

export default function CopyURL() {
  const [copied, setCopied] = useState(false);
  const { onCopy } = useClipboard("aa");

  return (
    <Tooltip
      hasArrow
      transitionDuration="100"
      label={copied ? "Copied!" : "Copy link"}
    >
      <IconButton
        variant="ghost"
        aria-label="Copy URL to clipboard"
        title="Copy URL to clipboard"
        icon={<FaLink />}
        onClick={() => {
          onCopy();
          setCopied(true);
        }}
      />
    </Tooltip>
  );
}
