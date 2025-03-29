"use client";
import React from "react";
import { Box } from "./shared/box";
import { Download } from "lucide-react";
import Image from "next/image";
import { aptos, extraaptos } from "../utils/fonts";

export function About() {
  const renderHighlightedContent = (text: string, highlight: string) => {
    const parts = text.split(highlight);
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <span className="text-[#FF6B6B]">{highlight}</span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  const aboutContent =
    "Driven by a lifelong passion for video games and technology, I turned my enthusiasm into a profession, becoming a competitive E-sports player in 2022. Competing in national and European tournaments honed my team skills and strategic thinking, ultimately inspiring me to take my career in a new direction: web development. I am now committed to expanding my expertise, mastering a wide array of digital skills, and embracing the world of technology as both a creator and innovator.";

  const downloadSection = (
    <div className="flex flex-col items-center">
      <h3 className="text-xl font-medium text-center mb-4">
        Want to see more?
      </h3>
      <a
        href="/CV Nicolas Ramanantsoa MSC.pdf"
        download
        className="flex flex-row-reverse items-center justify-center gap-2 bg-[#F2956A] hover:bg-[#FF8B6E] text-white rounded-full px-8 py-3 w-full md:w-auto transition-colors"
      >
        <Download size={20} />
        Download my resume here
      </a>
    </div>
  );

  return (
    <Box
      id="about"
      imageSrc="/Moi.jpg"
      imageAlt="Nicolas Ramanantsoa"
      footer={downloadSection}
    >
      <h2
        className={`${extraaptos.className}text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#141414] mb-4 md:mb-8`}
      >
        About Me
      </h2>
      <p
        className={`${aptos.className} text-lg text-[#333333] leading-relaxed`}
      >
        {renderHighlightedContent(aboutContent, "web development")}
      </p>

      <div className="flex flex-wrap items-center gap-4 mt-8">
        <h3
          className={`${extraaptos.className} text-3xl font-bold text-[#141414] mr-4`}
        >
          Education
        </h3>
        <div className="bg-[#F8BDA0] px-6 py-2 rounded-full">
          <Image
            width={120}
            height={120}
            src={"/webaca2.png"}
            alt="Web@cadémie logo"
          ></Image>
        </div>
        <div className="bg-[#F8BDA0] px-4 py-2 rounded-full">2nd Year</div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-8">
        <h3 className="text-3xl font-bold text-[#141414] mr-4">Hobbies</h3>
        {["Video Games", "Chess", "Boxing"].map((hobby, index) => (
          <span
            key={index}
            className={` ${extraaptos.className} bg-[#F8BDA0] px-6 py-2 rounded-full`}
          >
            {hobby}
          </span>
        ))}
      </div>
    </Box>
  );
}
