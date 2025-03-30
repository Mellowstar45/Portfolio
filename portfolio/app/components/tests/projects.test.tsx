import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Projects } from "../projects";
import { ProjectCard } from "../projects-box";
import type { Project } from "@/app/actions/queries";
import type React from "react";

vi.mock("../carousel", () => ({
  default: ({ projects }: { projects: Project[] }): React.ReactElement => (
    <div data-testid="mocked-carousel">
      {projects.map((project) => (
        <div key={project.id} data-testid={`project-${project.id}`}>
          {project.title}
        </div>
      ))}
    </div>
  ),
}));

vi.mock("../shared/box", () => ({
  Box: ({
    children,
    title,
    id,
  }: {
    children: React.ReactNode;
    title: string;
    id: string;
  }): React.ReactElement => (
    <div data-testid={`box-${id}`}>
      <h2>{title}</h2>
      {children}
    </div>
  ),
}));

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }): React.ReactElement => (
    <img src={src || "/placeholder.svg"} alt={alt} data-testid="next-image" />
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }): React.ReactElement => (
    <a href={href} data-testid="next-link">
      {children}
    </a>
  ),
}));

vi.mock("next/font/local", () => ({
  default: () => ({
    className: "mocked-font-class",
  }),
}));

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Test Project One",
    description: "This is a description for project one.",
    imageSrc: "/test1.png",
    githubUrl: "https://github.com/test1",
    technologies: ["React", "NextJS"],
  },
  {
    id: 2,
    title: "Test Project Two",
    description: "This is a description for project two.",
    imageSrc: "/test2.png",
    githubUrl: "",
    technologies: ["TypeScript", "Vitest"],
  },
];

describe("Projects Component", () => {
  it("renders the Projects component with correct title", () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });

  it("renders the Box component with correct id", () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByTestId("box-projects")).toBeInTheDocument();
  });

  it("passes projects to the Carousel component", () => {
    render(<Projects projects={mockProjects} />);
    expect(screen.getByTestId("mocked-carousel")).toBeInTheDocument();
    expect(screen.getByText("Test Project One")).toBeInTheDocument();
    expect(screen.getByText("Test Project Two")).toBeInTheDocument();
  });
});

describe("ProjectCard Component", () => {
  it("renders project with GitHub link when URL is provided", () => {
    render(<ProjectCard project={mockProjects[0]} />);
    const link = screen.getByTestId("next-link");
    expect(link).toHaveAttribute("href", "https://github.com/test1");
  });

  it("renders project without GitHub link when URL is not provided", () => {
    render(<ProjectCard project={mockProjects[1]} />);
    expect(screen.queryByTestId("next-link")).not.toBeInTheDocument();
  });

  it("displays project description", () => {
    render(<ProjectCard project={mockProjects[0]} />);
    expect(
      screen.getByText("This is a description for project one.")
    ).toBeInTheDocument();
  });

  it("renders project technologies as tags", () => {
    render(<ProjectCard project={mockProjects[0]} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("NextJS")).toBeInTheDocument();
  });

  it("renders project image with correct src", () => {
    render(<ProjectCard project={mockProjects[0]} />);
    const image = screen.getByTestId("next-image");
    expect(image).toHaveAttribute("src", "/test1.png");
  });
});
