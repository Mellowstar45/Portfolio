import type { EmblaOptionsType } from "embla-carousel";
import Carousel from "./carousel";
import { Box } from "./shared/box";
import type { Project } from "../actions/queries";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const OPTIONS: EmblaOptionsType = {
    axis: "y",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
    align: "center",
    slidesToScroll: 1,
  };

  return (
    <Box id="projects" title="My Projects" layout="full-width">
      <Carousel options={OPTIONS} projects={projects} />
    </Box>
  );
}
