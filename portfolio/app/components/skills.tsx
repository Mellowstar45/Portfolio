"use client";
import { Box } from "./shared/box";

interface SkillIconProps {
  name: string;
  icon: string;
}

function SkillIcon({ name, icon }: SkillIconProps) {
  return (
    <div className="bg-white rounded-lg p-3 flex items-center gap-3 shadow-sm max-w-[200px] mx-auto w-full">
      <img
        src={icon || "/placeholder.svg?height=30&width=30"}
        alt={`${name} icon`}
        className="w-7 h-7"
      />
      <span className="text-[#141414] font-medium">{name}</span>
    </div>
  );
}

interface LanguageProps {
  language: string;
  level: string;
}

function Language({ language, level }: LanguageProps) {
  return (
    <div className="bg-[#F8BDA0] rounded-full px-8 py-3 flex justify-between items-center w-full">
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
    { name: "GitHub", icon: "/github-logo.png" },
  ];

  const languages = [
    { language: "French", level: "Native" },
    { language: "English", level: "C2" },
    { language: "German", level: "A1" },
  ];

  return (
    <Box id="skills" title="Skills" layout="full-width" isMiddleSection={true}>
      <div className="space-y-12">
        <div className="bg-[#F8A07E] rounded-lg p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <SkillIcon key={tech.name} {...tech} />
            ))}
            <div className="bg-[#F8BDA0] rounded-full p-3 flex items-center justify-center max-w-[200px] mx-auto w-full">
              <span className="text-[#141414] font-medium">
                and more in progress...
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#141414] mb-4 text-center">
            Languages
          </h3>
          <div className="bg-[#FFA585] rounded-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <Language key={lang.language} {...lang} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
