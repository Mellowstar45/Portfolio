"use client";

import type { EmblaOptionsType } from "embla-carousel";
import Carousel from "./carousel";
import { Box } from "./shared/box";

export function Projects() {
  const OPTIONS: EmblaOptionsType = {
    axis: "y",
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    align: "center",
  };

  return (
    <Box
      id="projects"
      title="My Projects"
      layout="full-width"
      isMiddleSection={true}
    >
      <Carousel options={OPTIONS} />
    </Box>
  );
}
