import { cn } from "@/lib/utils";
import type { Mag } from "@/lib/slides-data";

export function ScopeView({
  src,
  alt,
  mag,
  className,
  size = "lg",
}: {
  src: string;
  alt: string;
  mag?: Mag;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dim =
    size === "sm"
      ? "w-28 h-28"
      : size === "md"
        ? "w-full max-w-56 aspect-square"
        : "w-full max-w-md aspect-square";

  return (
    <figure className={cn("relative mx-auto", dim, className)}>
      <div className="eyepiece absolute inset-0 rounded-full p-[11px]">
        <img
          src={src}
          alt={alt}
          className="slide-img h-full w-full rounded-full object-cover"
          draggable={false}
        />
      </div>
      {mag ? (
        <figcaption className="absolute -bottom-1 left-1/2 z-10 -translate-x-1/2 translate-y-full">
          <span className="font-mono text-xs tabular-nums tracking-wide text-faint">
            {mag === "4x" ? "4×" : mag === "10x" ? "10×" : "40×"}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
