"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)]/95 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link
            href="/#inicio"
            className="inline-flex min-h-11 items-center gap-2 text-[var(--color-text)]"
            aria-label="Psicobalbi, inicio"
          >
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-t-full border border-[var(--color-primary)]"
            >
              <span className="h-3 w-3 rounded-full bg-[#c2cdb8]" />
            </span>
            <span className="font-heading text-[23px] tracking-[-.06em]">
              {siteConfig.brandName}
            </span>
          </Link>
          <nav
            className="hidden items-center gap-7 xl:flex"
            aria-label="Navegación principal"
          >
            {siteConfig.nav
              .filter((item) => !["Inicio", "Agendar"].includes(item.label))
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-link text-[var(--color-text-secondary)] hover:underline"
                >
                  {item.label}
                </Link>
              ))}
          </nav>
          <div className="hidden xl:block">
            <BookingButton label="Agendar" size="sm" />
          </div>
          <button
            ref={trigger}
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-control)] xl:hidden"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {open ? (
                <path d="m5 5 10 10M15 5 5 15" />
              ) : (
                <path d="M3 6h14M3 13h14" />
              )}
            </svg>
          </button>
        </div>
        <nav
          id="mobile-nav"
          hidden={!open}
          aria-label="Navegación móvil"
          className="max-h-[calc(100dvh-72px)] overflow-y-auto pb-5 xl:hidden"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-t border-[var(--color-border-subtle)] text-sm"
            >
              {item.label}
            </Link>
          ))}
          <BookingButton className="mt-3 w-full" />
        </nav>
      </Container>
    </header>
  );
}
