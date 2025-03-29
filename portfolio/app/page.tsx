import { About } from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { getProjects } from "./actions/queries";

export default async function Page() {
  const projects = await getProjects();

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </div>
  );
}
