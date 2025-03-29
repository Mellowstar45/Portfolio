import type React from "react";
import Image from "next/image";
import { cn } from "../../utils/animation-helper";
import { extraaptos } from "@/app/utils/fonts";

interface BoxProps {
  id?: string;
  title?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  layout?: "left-image" | "right-image" | "full-width";
  footer?: React.ReactNode;
  isFirstSection?: boolean;
  isMiddleSection?: boolean;
}

export function Box({
  id,
  title,
  children,
  imageSrc,
  imageAlt,
  className,
  layout = "left-image",
  footer,
}: BoxProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-h-screen flex items-center justify-center",
        "p-12",
        className
      )}
    >
      <div
        className={cn(
          "w-full max-w-5xl mx-auto bg-[#FFF5F2] md:m-28",
          "rounded-3xl",
          "p-4 sm:p-6 md:p-8 shadow-lg"
        )}
      >
        {title && (
          <h2
            className={`${extraaptos.className}text-3xl sm:text-4xl md:text-5xl font-bold text-[#141414] mb-6 md:mb-8 text-center`}
          >
            {title}
          </h2>
        )}
        <div
          className={cn(
            "grid gap-4 sm:gap-6 md:gap-8",
            layout === "left-image" && "grid-cols-1 md:grid-cols-[1fr,1.5fr]",
            layout === "right-image" && "grid-cols-1 md:grid-cols-[1.5fr,1fr]",
            layout === "full-width" && "grid-cols-1"
          )}
        >
          {imageSrc && layout !== "right-image" && (
            <div className="flex flex-col">
              <div
                className="relative rounded-lg w-full max-w-[350px] mx-auto md:mx-0"
                style={{ height: "350px", maxHeight: "450px" }}
              >
                <Image
                  src={imageSrc || ""}
                  alt={imageAlt || ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                />
              </div>
              {layout === "left-image" && footer && (
                <div className="mt-6 md:mt-8">{footer}</div>
              )}
            </div>
          )}

          <div className="space-y-4 md:space-y-6">{children}</div>

          {imageSrc && layout === "right-image" && (
            <div className="flex flex-col">
              <div
                className="relative rounded-lg overflow-hidden w-full mx-auto md:mx-0"
                style={{ height: "350px", maxHeight: "450px" }}
              >
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={imageAlt || ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                />
              </div>
              {layout === "right-image" && footer && (
                <div className="mt-6 md:mt-8">{footer}</div>
              )}
            </div>
          )}
        </div>

        {layout === "full-width" && footer && (
          <div className="mt-6 md:mt-8">{footer}</div>
        )}
      </div>
    </section>
  );
}
