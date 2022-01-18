import dayjs from "dayjs";
import { join } from "path";
import { parse } from "yaml";
import { readdirSync, readFileSync } from "fs";

export interface Project {
  id: string;
  name: string;
  date: string;
  image: string;
  website: string;
  description: string;
}

const EXTENSION = ".yml";
const PROJECTS_DIR = join(process.cwd(), "factorem", "../data/projects");

export function getAllProjects(): Project[] {
  const files = readdirSync(PROJECTS_DIR);

  const projects: Project[] = files.map((file) => {
    const fullPath = join(PROJECTS_DIR, file);
    const content = readFileSync(fullPath, "utf-8");

    const data = parse(content);

    return {
      id: file.replace(EXTENSION, ""),
      name: data.name,
      date: formatDate(data.date),
      image: data.image,
      website: data.website,
      description: data.description,
    };
  });

  projects.sort(({ date: a }, { date: b }) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();

    return dateA - dateB;
  });

  return projects;
}

export function getAllProjectIds(): string[] {
  return getAllProjects().map((project) => project.id);
}

export async function getProjectData(id: string): Promise<Project> {
  const file = join(PROJECTS_DIR, `${id}${EXTENSION}`);
  const content = readFileSync(file, "utf-8");

  const data = parse(content);

  return {
    id: file.replace(EXTENSION, ""),
    name: data.name,
    date: formatDate(data.date),
    image: data.image,
    website: data.website,
    description: data.description,
  };
}

const formatDate = (date: string) => dayjs(date).format("ddd, MMM DD, YYYY");
