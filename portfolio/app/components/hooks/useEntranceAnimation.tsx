"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function useEntranceAnimation(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, {
      opacity: 0,
      y: 20,
    });

    gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
      delay: 0.8,
    });
  }, [ref]);
}
