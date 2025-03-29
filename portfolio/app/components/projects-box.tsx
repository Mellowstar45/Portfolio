import Image from "next/image";
import Link from "next/link";
import { aptos, extraaptos } from "../utils/fonts";

export const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    imageSrc: string;
    description: string;
    technologies: string[];
    githubUrl: string | undefined;
  };
}) => (
  <div className="w-full max-w-5xl mx-auto bg-[#FFC7AB] rounded-3xl p-8 shadow-lg">
    <div className="grid md:grid-cols-[1fr,1.5fr] gap-8">
      <div className="flex flex-col">
        <div
          className="relative rounded-lg overflow-hidden"
          style={{ height: "350px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <Image
              className=" flex items-center justify-center"
              src={project.imageSrc}
              height={450}
              width={350}
              alt={project.title}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {project.githubUrl != undefined ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${extraaptos.className} inline-block text-3xl font-bold underline hover:text-[#FF7F57] transition-colors text-[#141414]`}
          >
            {project.title}
          </Link>
        ) : (
          <h3
            className={`${extraaptos.className} text-3xl font-bold text-[#141414]`}
          >
            {project.title}
          </h3>
        )}
        <p className={` ${aptos.className}text-xl text-[#141414]`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`${aptos.className} px-4 py-2 bg-[#F2956A] text-white rounded-full text-sm font-medium`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
