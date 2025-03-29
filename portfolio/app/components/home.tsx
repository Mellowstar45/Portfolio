"use client";

import Link from "next/link";
import RotatingText from "./shared/rotate";
import { ChevronDown } from "lucide-react";
import { useEntranceAnimation } from "./hooks/useEntranceAnimation";
import { useRef } from "react";
import { extraaptos, aptos, narrowaptos } from "../utils/fonts";
const Home = () => {
  const titles = ["full stack developer", "problem solver", "gaming addict"];
  const buttonRef = useRef<HTMLAnchorElement>(null);
  useEntranceAnimation(buttonRef as React.RefObject<HTMLElement>);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center z-10">
        <h2 className={`${aptos.className}text-2xl md:text-5xl font-bold`}>
          Hello, Im
        </h2>
        <h1
          className={`${extraaptos.className} text-5xl md:text-7xl font-bold mb-6 animate-fade-in`}
        >
          Nicolas Ramanantsoa
        </h1>

        <p
          className={`${narrowaptos.className} font-bold text-3xl text-foreground mb-8 max-w-2xl mx-auto`}
        >
          A{" "}
          <RotatingText words={titles} className="inline-block min-w-[12rem]" />{" "}
          passionate about clean and functional solutions
        </p>
        <Link
          ref={buttonRef}
          href="#about"
          className={`${aptos.className} inline-flex items-center gap-1 px-5 py-2 rounded-full bg-[#ffb8a1] text-[#141414]font-medium transition-all hover:opacity-90`}
        >
          Take a look <ChevronDown size={16} />
        </Link>
      </div>
    </section>
  );
};

export default Home;
