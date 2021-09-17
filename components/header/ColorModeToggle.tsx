import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon as Moon, FaSun as Sun } from "react-icons/fa";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isLight = colorMode === `light`;

  return (
    <IconButton
      variant="ghost"
      aria-label={isLight ? "Activate Dark Mode" : "Activate Light Mode"}
      title={isLight ? "Activate Dark Mode" : "Activate Light Mode"}
      color={isLight ? `brand.textMuted` : `brand.dark.textMuted`}
      _hover={{
        color: isLight ? `white` : `black`,
        background: isLight ? `black` : `white`,
      }}
      icon={isLight ? <Moon /> : <Sun />}
      onClick={toggleColorMode}
    />
  );
}
