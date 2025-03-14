"use client";
import { About } from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
export default function Page() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>c
  );
}
