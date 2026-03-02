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
          <p
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
              eyebrowToneClasses[eyebrowTone],
            )}
          >
            {eyebrow}
          </p>
        </div>
      ) : null}

      <h2
        className={cn(
          "max-w-[22ch] font-heading text-[2rem] font-light leading-[1.12] tracking-[-0.015em] text-[var(--color-text)] sm:text-[2.45rem] lg:text-[3rem]",
          isCentered && "mx-auto",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "max-w-[65ch] text-[15px] leading-7 text-[var(--color-text-secondary)] sm:text-base",
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
