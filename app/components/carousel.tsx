"use client";

import type React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./carousel-button";
import { ProjectCard } from "./projects-box";

const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully functional E-commerce website built with React and Symfony",
    longDescription:
      "",
    imageSrc: "/Panier.png",
    technologies: ["React", "PHP", "Symfony", "MySQL", "CSS"],
  },
  {
    id: 2,
    title: "LowBack",
    description: "A project whose aim is to be a backend as a service",
    longDescription: "",
    imageSrc: "/LowBack.png",
    technologies: ["NextJS", "PostgresSQL", ".NET", "C#","NodeJS","Python", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js",
    longDescription:
      "Designed and developed a modern portfolio to showcase projects",
    imageSrc: "/Portfolio2.png",
    technologies: ["Next.js", "Tailwind CSS", "Embla"],
  },
  {
    id: 4,
    title: "Twitter Wish",
    description: "An app whose aim is to replicate Twitter functionalities",
    longDescription: "",
    imageSrc: "/twitterwish.png",
    technologies: ["Javascript(ES6)", "HTML", "CSS", "TailwindCSS", "PHP"],
  },
];

type ProjectCarouselProps = {
  options?: EmblaOptionsType;
};

const Carousel: React.FC<ProjectCarouselProps> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="flex justify-center gap-2 mb-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`w-6 h-6 rounded-full border-none cursor-pointer transition-colors duration-300 ${
              index === selectedIndex ? "bg-[#FFA585]" : "bg-[#FFA585]/50"
            }`}
          />
        ))}
      </div>
      <div className="overflow-hidden h-[600px]" ref={emblaRef}>
        <div className="embla__container h-full">
          {PROJECTS.map((project) => (
            <div
              className="embla__slide h-[600px] flex items-center"
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
