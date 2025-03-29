import Image from "next/image";
import Link from "next/link";
import type { Project } from "../actions/queries";

export const ProjectCard = ({ project }: { project: Project }) => (
  <div className="w-full max-w-5xl mx-auto bg-[#FFC7AB] rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg">
    <div className="grid md:grid-cols-[1fr,1.5fr] gap-4 sm:gap-6 md:gap-8">
      <div className="flex flex-col">
        <div className="relative rounded-lg overflow-hidden w-full h-[250px] sm:h-[300px] md:h-[350px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              className="object-contain w-full h-full"
              src={project.imageSrc || "/placeholder.svg"}
              height={450}
              width={350}
              alt={project.title}
            />
          </div>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3 md:space-y-4 overflow-hidden">
        {project.githubUrl ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl sm:text-2xl md:text-3xl font-bold underline hover:text-[#FF7F57] transition-colors text-[#141414] line-clamp-2"
          >
            {project.title}
          </Link>
        ) : (
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#141414] line-clamp-2">
            {project.title}
          </h3>
        )}
        <p className="text-sm sm:text-base md:text-xl text-[#141414] line-clamp-4 sm:line-clamp-5 md:line-clamp-none">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3 md:mt-4 pb-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-[#F2956A] text-white rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
