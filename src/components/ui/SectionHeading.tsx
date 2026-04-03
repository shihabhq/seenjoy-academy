import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accentUnderline?: boolean;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  title,
  subtitle,
  accentUnderline = true,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight",
          accentUnderline && "relative inline-block"
        )}
      >
        {title}
        {accentUnderline && (
          <span className="block h-1 w-16 bg-accent-gold rounded-full mt-3 mx-auto" />
        )}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
