// ChakraUI
import { Stack, Flex, Badge, Grid } from "@chakra-ui/react";

// Components
import { Card, CardData } from "./Card";
import PrimaryButton from "../utils/PrimaryButton";

// NextJS
import NextLink from "next/link";

interface CardsListProps {
  title: string;
  link: {
    text: string;
    href: string;
  };
  isExternal?: boolean;
  cards: CardData[];
}

export default function CardsList({
  link,
  title,
  cards,
  isExternal = false,
}: CardsListProps) {
  return (
    <Stack direction="column" width="100%" spacing={6}>
      <Flex justifyContent="space-between" alignItems="center">
        <Badge variant="subtle">{title}</Badge>
        {isExternal ? (
          <a target="_blank" href={link.href}>
            <PrimaryButton variant="subtle">{link.text}</PrimaryButton>
          </a>
        ) : (
          <NextLink href={link.href}>
            <a>
              <PrimaryButton variant="subtle">{link.text}</PrimaryButton>
            </a>
          </NextLink>
        )}
      </Flex>

      <Grid
        templateColumns={[`repeat(1, 1fr)`, null, `repeat(3, 1fr)`]}
        gap={[4, null, 8]}
      >
        {cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </Grid>
    </Stack>
  );
}
