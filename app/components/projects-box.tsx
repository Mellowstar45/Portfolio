import Image from "next/image";

export const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    imageSrc: string;
    description: string;
    longDescription: string;
    technologies: string[];
  };
}) => (
  <div className="w-full max-w-5xl mx-auto bg-[#ffc7ab] rounded-3xl p-8 shadow-lg">
    <div className="grid md:grid-cols-[1fr,1.5fr] gap-8">
      <div className="flex flex-col">
        <div
          className="relative rounded-lg overflow-hidden"
          style={{ height: "350px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
            <Image
              src={project.imageSrc}
              height={450}
              width={350}
              alt={project.title}
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-bold text-[#141414]">{project.title}</h3>
        <p className="text-xl text-[#141414]">{project.description}</p>
        <div className="space-y-2 my-4">
          <p className="text-[#141414]">{project.longDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-[#FF9F87] text-[#141414] rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
