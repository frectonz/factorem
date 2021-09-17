// ChakraUI
import {
  Stack,
  Grid,
  Heading,
  Text,
  Box,
  Link,
  HStack,
} from "@chakra-ui/react";

import { FaExternalLinkSquareAlt } from "react-icons/fa";

// Components
import { Project } from "../../lib";
import MotionBox from "../utils/MotionBox";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box>
      <Grid
        gap={10}
        templateColumns={["repeat(1, 1fr)", null, "repeat(2,1fr)"]}
      >
        <Stack justify="center">
          <MotionBox
            height="300"
            bgSize="cover"
            bgPos="center"
            boxShadow="2xl"
            borderRadius="xl"
            bgRepeat="no-repeat"
            bgImage={project.image}
          />
        </Stack>
        <Stack justify="center">
          <Heading py={2} as="h1" transition="all 500ms ease-in">
            {project.name}
          </Heading>
          <HStack>
            <Link target="_blank" href={project.website}>
              <Text>Website</Text>
            </Link>
            <FaExternalLinkSquareAlt style={{ marginBottom: 5 }} />
          </HStack>
          <Text color="gray.500">{project.description}</Text>
          <Heading size="sm" color="gray.300">
            {project.date}
          </Heading>
        </Stack>
      </Grid>
    </Box>
  );
}
