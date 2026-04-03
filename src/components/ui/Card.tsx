import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  accentBorder?: "top" | "left" | "none";
}

export default function Card({
  children,
  className,
  glass = false,
  accentBorder = "none",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-default p-6",
        glass
          ? "bg-bg-secondary/80 backdrop-blur-sm"
          : "bg-bg-secondary",
        accentBorder === "top" && "border-t-accent-gold border-t-2",
        accentBorder === "left" && "border-l-accent-gold border-l-2",
        className
      )}
    >
      {children}
    </div>
  );
}
