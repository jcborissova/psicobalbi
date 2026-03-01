import { siteConfig } from "@/config/site";
import { isValidHttpUrl } from "@/lib/utils";
import { buttonStyles, type ButtonSize, type ButtonVariant } from "@/components/ui/button";

interface BookingButtonProps {
  className?: string;
  label?: string;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function BookingButton({
  className,
  label = "Agendar consulta",
  href,
  variant = "primary",
  size = "md",
}: BookingButtonProps) {
  const bookingHref = href ?? siteConfig.bookingUrl;

  if (!isValidHttpUrl(bookingHref)) {
    return (
      <button
        type="button"
        disabled
        className={buttonStyles({ variant, size, className })}
        title="Configura NEXT_PUBLIC_BOOKING_URL para habilitar la agenda"
      >
        {label}
      </button>
    );
  }

  return (
    <a
      href={bookingHref}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonStyles({ variant, size, className })}
    >
      {label}
    </a>
  );
}
