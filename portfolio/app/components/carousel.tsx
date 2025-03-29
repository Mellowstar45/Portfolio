"use client";

import type React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./carousel-button";
import { ChevronDown } from "lucide-react";
import { ProjectCard } from "./projects-box";

const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully functional E-commerce website built with React and Symfony. Currently being reworked in NextJS",
    imageSrc: "/Panier.png",
    technologies: ["React", "PHP", "Symfony", "MySQL", "CSS"],
    githubUrl: "test",
  },
  {
    id: 2,
    title: "LowBack",
    description:
      "Lowback is my most ambitious project. Alongside some friends, I'm building a Backend-as-a-Service (BaaS) platform using .NET with a microservice-oriented architecture. We've developed a set of interfaces and created packages for npm, PyPI, and NuGet to streamline integration. It currently is still in progress",
    imageSrc: "/LowBack.png",
    technologies: [
      "NextJS",
      "PostgresSQL",
      ".NET",
      "C#",
      "NodeJS",
      "Python",
      "Tailwind CSS",
    ],
    githubUrl: undefined,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My current portfolio",
    imageSrc: "/Portfolio2.png",
    technologies: ["Next.js", "Tailwind CSS", "Embla"],
    githubUrl: "test",
  },
  {
    id: 4,
    title: "Twitter Wish",
    description:
      "An app whose aim is to replicate  some of Twitter functionalities using Symfony. Includes tweeting, following, sharing, replying, liking, private messaging...",
    imageSrc: "/twitterwish.png",
    technologies: ["Javascript(ES6)", "HTML", "CSS", "TailwindCSS", "PHP"],
    githubUrl: "test",
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
              index === selectedIndex ? "bg-[#F2956A]" : "bg-[#FFA585]/50"
            }`}
          />
        ))}
      </div>
      <div className="flex justify-center pt-3">
        <span className="text-[#FFA585] flex items-end gap-1 text-lg font-medium">
          Drag to scroll
          <ChevronDown className="text-[#FFA585] h-5 w-5 mb-0.5" />
        </span>
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
