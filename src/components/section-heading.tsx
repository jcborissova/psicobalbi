import { cn } from "@/lib/utils";
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrowTone?: "accent" | "warm" | "cool" | "primary";
  className?: string;
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "space-y-4",
        align === "center" && "md:text-center",
        className,
      )}
    >
      {eyebrow && <p className="editorial-label">{eyebrow}</p>}
      <h2
        className={cn(
          "max-w-[24ch] text-[1.9rem] font-semibold leading-[1.22] tracking-[-0.035em] text-[var(--color-text)] sm:text-[2.4rem] lg:text-[2.75rem]",
          align === "center" && "md:mx-auto",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-[58ch] text-[15px] leading-relaxed text-[var(--color-text-secondary)]",
            align === "center" && "md:mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
