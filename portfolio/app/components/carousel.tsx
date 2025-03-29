"use client";

import type React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./carousel-button";
import { ChevronDown } from "lucide-react";
import { ProjectCard } from "./projects-box";
import type { Project } from "../actions/queries";

type ProjectCarouselProps = {
  options?: EmblaOptionsType;
  projects: Project[];
};

const Carousel: React.FC<ProjectCarouselProps> = ({ options, projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="relative mx-auto max-w-6xl px-4">
      <div className="flex justify-center gap-2 mb-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full border-none cursor-pointer transition-colors duration-300 ${
              index === selectedIndex ? "bg-[#F2956A]" : "bg-[#FFA585]/50"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center pt-2 sm:pt-3">
        <span className="text-[#FFA585] flex items-end gap-1 text-sm sm:text-base md:text-lg font-medium">
          Drag to scroll
          <ChevronDown className="text-[#FFA585] h-4 w-4 sm:h-5 sm:w-5 mb-0.5" />
        </span>
      </div>
      <div
        className="overflow-hidden h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] my-4 sm:my-6 md:my-8"
        ref={emblaRef}
      >
        <div className="embla__container h-full">
          {projects.map((project) => (
            <div
              className="embla__slide min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex items-center py-4 sm:py-6 md:py-8"
              key={project.id}
              style={{ flex: "0 0 100%" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
