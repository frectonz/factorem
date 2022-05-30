// Components
import { Project } from "../../lib";
import ProjectCard from "./ProjectCard";
import MainContainer from "../utils/Container";

// ChakraUI
import { Stack } from "@chakra-ui/react";

interface ProjectCardListProps {
  projects: Project[];
}

export default function ProjectCardList({ projects }: ProjectCardListProps) {
  return (
    <MainContainer>
      <Stack spacing={100} py={50}>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </Stack>
    </MainContainer>
  );
}
