"use client";
import { Box } from "./shared/box";

interface SkillIconProps {
  name: string;
  icon: string;
}

function SkillIcon({ name, icon }: SkillIconProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 sm:w-18 md:w-20 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center">
        <img
          src={icon || "/placeholder.svg"}
          alt={`${name} icon`}
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </div>
      <span className="text-sm md:text-base text-[#141414] font-medium">
        {name}
      </span>
    </div>
  );
}

interface LanguageProps {
  language: string;
  level: string;
}

function Language({ language, level }: LanguageProps) {
  return (
    <div className="bg-[#FFD7CC] rounded-full px-8 py-3 flex justify-between items-center w-full">
      <span className="font-medium">{language}</span>
      <span>{level}</span>
    </div>
  );
}

export function Skills() {
  const technologies = [
    { name: "HTML5", icon: "/html-5.png" },
    { name: "CSS3", icon: "/css-3.png" },
    { name: "JavaScript", icon: "/js.png" },
    { name: "PHP", icon: "/php.png" },
    { name: "C#", icon: "/csharp.png" },
    { name: "React", icon: "/react.js.png" },
    { name: "NextJs", icon: "/nextjs.png" },
    { name: "Tailwind", icon: "/TailwindCSS.png" },
    { name: "Node.js", icon: "/node.png" },
    { name: "MySQL", icon: "/mysql.png" },
    { name: "PostgreSQL", icon: "/postgressql.png" },
    { name: "AzureDevOps", icon: "/azuredevops.png" },
    { name: "Github", icon: "/github-logo.png" },
  ];

  const languages = [
    { language: "French", level: "Native" },
    { language: "English", level: "C2" },
    { language: "German", level: "A1" },
  ];

  return (
    <Box id="skills" title="Skills" layout="full-width" isMiddleSection={true}>
      <div className="grid md:grid-cols-[2fr,1fr] gap-8 md:gap-12">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-[#141414]">
            Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {technologies.map((tech) => (
              <SkillIcon key={tech.name} {...tech} />
            ))}
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-[#141414]">
            Languages
          </h3>
          <div className="space-y-3 md:space-y-4">
            {languages.map((lang) => (
              <Language key={lang.language} {...lang} />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
}
