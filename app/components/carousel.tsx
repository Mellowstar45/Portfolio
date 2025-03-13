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
    description: "A fully functional online store built with React and Node.js",
    longDescription:
      "Developed a complete e-commerce solution with user authentication",
    imageSrc: "/placeholder.svg?height=450&width=350",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app created using Vue.js and Firebase",
    longDescription: "Designed an intuitive interface for managing daily tasks",
    imageSrc: "/placeholder.svg?height=450&width=350",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js",
    longDescription:
      "Designed and developed a modern portfolio to showcase projects",
    imageSrc: "/placeholder.svg?height=450&width=350",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 4,
    title: "Weather Application",
    description: "A weather forecast app using OpenWeather API",
    longDescription:
      "Built a clean interface showing current weather and forecasts",
    imageSrc: "/placeholder.svg?height=450&width=350",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST API"],
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media accounts",
    longDescription: "Developed a comprehensive dashboard showing key metrics",
    imageSrc: "/placeholder.svg?height=450&width=350",
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
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
