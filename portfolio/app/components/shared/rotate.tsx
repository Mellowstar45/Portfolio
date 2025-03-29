"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

interface RotatingTextProps {
  words: string[];
  className?: string;
}

export default function RotatingText({
  words,
  className = "",
}: RotatingTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
    });

    words.forEach((word, index) => {
      if (index === 0) {
        tl.to(textRef.current, {
          duration: 0.6,
          text: word,
          ease: "power2.out",
        });
      } else {
        tl.to(textRef.current, {
          duration: 0.3,
          text: "",
          ease: "power2.in",
        }).to(textRef.current, {
          duration: 0.6,
          text: word,
          ease: "power2.out",
        });
      }

      tl.to(textRef.current, { duration: 1.5 });
    });

    return () => {
      tl.kill();
    };
  }, [words]);

  return <span ref={textRef} className={className}></span>;
}
