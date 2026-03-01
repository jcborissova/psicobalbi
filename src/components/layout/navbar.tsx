"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const original = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--color-border-subtle)] bg-white/98 backdrop-blur-md shadow-[0_1px_3px_rgba(74,78,99,0.05)]">
        <Container>
          <div className="flex h-[4.5rem] items-center justify-between gap-8">
            {/* Logo Section */}
            <Link
              href="/#inicio"
              className="inline-flex min-w-0 flex-col justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm px-1 py-1"
            >
              <span className="truncate font-heading text-2xl font-normal text-[var(--color-text)]">
                {siteConfig.brandName}
              </span>
              <span className="hidden text-sm font-normal tracking-tight text-[var(--color-text-muted)] sm:block">
                Psicología Clínica
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-normal text-[var(--color-text-muted)] transition-colors duration-150 hover:text-[var(--color-text)] px-4 py-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:block">
                <BookingButton size="md" />
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border-subtle)] bg-white text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 lg:hidden"
                aria-expanded={isOpen}
                aria-controls="mobile-nav-panel"
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
                <span className="relative h-4 w-4">
                  <span
                    className={cn(
                      "absolute left-0 top-0 h-0.5 w-4 rounded-full bg-[var(--color-text)] transition-transform duration-300",
                      isOpen && "translate-y-[7px] rotate-45",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[7px] h-0.5 w-4 rounded-full bg-[var(--color-text)] transition-opacity duration-300",
                      isOpen && "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 top-[14px] h-0.5 w-4 rounded-full bg-[var(--color-text)] transition-transform duration-300",
                      isOpen && "-translate-y-[7px] -rotate-45",
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-300",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-[rgba(31,41,55,0.1)]"
          aria-label="Cerrar menú"
          onClick={() => setIsOpen(false)}
        />

        <aside
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className={cn(
            "absolute right-0 top-0 flex h-full w-[76vw] max-w-sm flex-col border-l border-[var(--color-border-subtle)] bg-white transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Mobile Header */}
          <div className="border-b border-[var(--color-border-subtle)] px-6 py-6">
            <p className="font-heading text-xl font-normal text-[var(--color-text)]">
              {siteConfig.brandName}
            </p>
            <p className="text-sm font-normal text-[var(--color-text-muted)]">
              Psicología Clínica
            </p>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4" aria-label="Navegación móvil">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-base font-normal text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-soft)] transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="border-t border-[var(--color-border-subtle)] px-6 py-6">
            <BookingButton className="w-full justify-center" size="md" variant="primary" />
          </div>
        </aside>
      </div>
    </>
  );
}
