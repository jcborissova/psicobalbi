import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrowTone?: "accent" | "warm" | "cool" | "primary";
  className?: string;
}

const eyebrowToneClasses: Record<NonNullable<SectionHeadingProps["eyebrowTone"]>, string> = {
  accent: "text-[var(--color-accent)] bg-[color-mix(in_oklab,var(--color-accent),white_90%)]",
  warm: "text-[var(--color-accent-warm)] bg-[color-mix(in_oklab,var(--color-accent-warm),white_90%)]",
  cool: "text-[var(--color-accent-cool)] bg-[color-mix(in_oklab,var(--color-accent-cool),white_90%)]",
  primary: "text-[var(--color-primary)] bg-[color-mix(in_oklab,var(--color-primary),white_90%)]",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowTone = "accent",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={cn("space-y-4", isCentered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <div className="inline-block">
          <p className={cn("text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full", eyebrowToneClasses[eyebrowTone])}>
            {eyebrow}
          </p>
        </div>
      ) : null}

      <h2
        className={cn(
          "max-w-[22ch] font-heading text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-[var(--color-text)]",
          isCentered && "mx-auto",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "max-w-[60ch] text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]",
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
