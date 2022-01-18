// NextJs
import { GetStaticProps } from "next";

// Library
import { Project, getAllProjects } from "../lib";

// Components
import Seo from "../components/layout/Seo";
import Hero from "../components/main/Hero";
import ProjectCardList from "../components/cards/ProjectCardList";

import config from "../data/config/site.json";

interface ProjectsProps {
  projects: Project[];
}

export default function ProjectPage({ projects }: ProjectsProps) {
  return (
    <>
      <Seo title="Projects" />
      <Hero {...config.projectsPageHeadline} />
      <ProjectCardList projects={projects} />
    </>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  let projects = await getAllProjects();

  return {
    props: { projects },
  };
};
