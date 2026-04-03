import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  icon?: ReactNode;
  children: ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export default function Badge({
  icon,
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border",
        variant === "default"
          ? "bg-bg-secondary border-border-default text-text-secondary"
          : "bg-accent-gold/10 border-accent-gold/30 text-accent-gold",
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
