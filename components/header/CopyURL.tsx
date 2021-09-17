// ChakraUI
import { Tooltip, IconButton, useBoolean } from "@chakra-ui/react";

// Icon
import { FaLink } from "react-icons/fa";

export default function CopyURL() {
  const [copied, setCopied] = useBoolean(false);

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
        icon={<FaLink fontSize="1rem" />}
        onClick={() => {
          setCopied.toggle();
        }}
      />
    </Tooltip>
  );
}
