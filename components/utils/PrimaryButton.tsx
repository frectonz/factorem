import { ReactNode } from "react";

// ChakraUI
import {
  Button,
  useColorMode,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

// Fonts
import { BsArrowRight } from "react-icons/bs";

interface PrimaryButtonProps {
  children: ReactNode;
  variant?: "normal" | "subtle";
}

export default function PrimaryButton({
  variant = "normal",
  children,
}: PrimaryButtonProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { colorMode } = useColorMode();

  return (
    <Button
      as="div"
      bg={
        variant === "normal"
          ? colorMode === "light"
            ? "blue.500"
            : "orange.500"
          : ""
      }
      variant={variant === "normal" ? "primary" : "link"}
      color={
        variant === "normal"
          ? "black"
          : colorMode === "light"
          ? "black"
          : "white"
      }
      rightIcon={<BsArrowRight />}
      sx={{
        span: {
          transform: `translate3d(0px, 0px, 0px)`,
          transition: `transform .3s cubic-bezier(.73,.26,.42,1.24)`,
        },
        "&:hover": {
          span: {
            transform: prefersReducedMotion
              ? undefined
              : `translate3d(6px, 0px, 0px)`,
          },
        },
        svg: {
          height: `1.5em`,
          width: `1.5em`,
        },
      }}
    >
      {children}
    </Button>
  );
}
