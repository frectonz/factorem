// ChakraUI
import {
  Tooltip,
  IconButton,
  useBoolean,
  useClipboard,
} from "@chakra-ui/react";

// Icon
import { FaLink } from "react-icons/fa";

export default function CopyURL() {
  const [copied, setCopied] = useBoolean(false);
  const { onCopy } = useClipboard(
    typeof window !== "undefined" && window.location.href
      ? window.location.href
      : ""
  );

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
          onCopy();
          setCopied.toggle();
        }}
      />
    </Tooltip>
  );
}
