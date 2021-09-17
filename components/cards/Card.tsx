// ChakraUI
// import { Link, usePrefersReducedMotion } from "@chakra-ui/react";

// Components
import MotionBox from "../utils/MotionBox";

import NextLink from "next/link";

interface CardProps {
  card: CardData;
}

export interface CardData {
  title: string;
  bgImg: string;
  link: string;
  isExternal?: boolean;
}

export function Card({ card }: CardProps) {
  const { link, isExternal = false } = card;

  return (
    <>
      {isExternal ? (
        <a target="_blank" href={link}>
          <MotionCard card={card} />
        </a>
      ) : (
        <NextLink href={link}>
          <a>
            <MotionCard card={card} />
          </a>
        </NextLink>
      )}
    </>
  );
}

const MotionCard = ({ card }: CardProps) => (
  <MotionBox
    p={4}
    bgSize="cover"
    bgImage={card.bgImg}
    bgRepeat="no-repeat"
    bgPosition="center"
    color="white"
    borderRadius="lg"
    height={[`150px`, null, null, `200px`, `250px`]}
    boxShadow="lg"
    display="flex"
    alignItems="flex-end"
    fontSize={[`lg`, null, `md`, `1.125rem`, `1.3125rem`]}
    sx={{ textShadow: `0 1px 2px rgba(0, 0, 0, 0.5)` }}
  >
    {card.title}
  </MotionBox>
);
