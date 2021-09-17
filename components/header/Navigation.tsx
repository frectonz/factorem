import NextLink from "next/link";

// Chakra UI
import { HStack, Link as ChakraLink } from "@chakra-ui/react";

// Components
import CopyURL from "./CopyURL";
import ColorModeToggle from "./ColorModeToggle";

import config from "../../data/config/site.json";

export default function Navigation() {
  return (
    <HStack
      spacing={[`2`, `4`]}
      alignContent="center"
      justifyContent="flex-end"
    >
      <nav>
        <HStack as="ul" listStyleType="none" spacing={[`2`, `4`]}>
          {config.links.map((link, i) => (
            <LinkItem key={i} link={link} />
          ))}
        </HStack>
      </nav>
      <CopyURL />
      <ColorModeToggle />
    </HStack>
  );
}

interface NavLink {
  name: string;
  href: string;
}

function LinkItem({ link }: { link: NavLink }) {
  return (
    <NextLink href={link.href}>
      <a>
        <ChakraLink as="div" fontSize={[`md`, null, null, `lg`]} p="2">
          {link.name}
        </ChakraLink>
      </a>
    </NextLink>
  );
}
