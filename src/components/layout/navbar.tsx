"use client";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { BookingButton } from "@/components/booking-button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
export function Navbar() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const savedOverflow = useRef("");
  const destination = useRef<HTMLElement | null>(null);
  const homeLink = useRef<HTMLAnchorElement>(null);

  function openMenu() {
    if (!dialog.current || dialog.current.open) return;
    savedOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
    setOpen(true);
  }

  function closeMenu() {
    dialog.current?.close();
  }

  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    const url = new URL(event.currentTarget.href);
    destination.current =
      url.pathname === window.location.pathname && url.hash
        ? document.getElementById(url.hash.slice(1))
        : null;
    closeMenu();
  }

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches && dialog.current?.open) closeMenu();
    };
    desktop.addEventListener("change", closeOnDesktop);
    const element = dialog.current;
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      if (element?.open) document.body.style.overflow = savedOverflow.current;
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)]/95 backdrop-blur-md">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-4">
          <Link
            ref={homeLink}
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
                  className="nav-link text-link text-[var(--color-text-secondary)]"
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
            onClick={openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-haspopup="dialog"
            aria-label="Abrir menú"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-soft)] xl:hidden"
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
              <path d="M3 6h14M3 13h14" />
            </svg>
          </button>
        </div>
        <dialog
          ref={dialog}
          id="mobile-menu"
          aria-labelledby="mobile-menu-title"
          className="mobile-menu"
          onKeyDown={(event) => {
            if (event.key !== "Tab") return;
            const controls = Array.from(
              event.currentTarget.querySelectorAll<HTMLElement>(
                "a[href], button:not(:disabled)",
              ),
            ).filter(
              (element) =>
                element.tabIndex >= 0 && element.getClientRects().length > 0,
            );
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeMenu();
          }}
          onClose={() => {
            document.body.style.overflow = savedOverflow.current;
            setOpen(false);
            if (destination.current) {
              const target = destination.current;
              target.setAttribute("tabindex", "-1");
              target.focus({ preventScroll: true });
              target.addEventListener(
                "blur",
                () => target.removeAttribute("tabindex"),
                { once: true },
              );
              destination.current = null;
            } else if (!window.matchMedia("(min-width: 1280px)").matches) {
              trigger.current?.focus({ preventScroll: true });
            } else {
              homeLink.current?.focus({ preventScroll: true });
            }
          }}
        >
          <div className="p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2
                id="mobile-menu-title"
                className="text-sm font-semibold text-[var(--color-text-secondary)]"
              >
                Explora Psicobalbi
              </h2>
              <button
                type="button"
                autoFocus
                onClick={closeMenu}
                aria-label="Cerrar menú"
                className="menu-close flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-soft)]"
              >
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="m5 5 10 10M15 5 5 15" />
                </svg>
              </button>
            </div>
            <nav
              id="mobile-nav"
              aria-label="Navegación móvil"
              className="grid gap-1"
            >
              {siteConfig.nav
                .filter((item) => item.label !== "Agendar")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={navigate}
                    className="menu-link flex min-h-12 items-center justify-between gap-3 rounded-xl px-3 py-3 text-base font-medium"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="text-[var(--color-text-secondary)]"
                    >
                      →
                    </span>
                  </Link>
                ))}
            </nav>
            <div
              className="mt-5"
              onClick={(event) => {
                if ((event.target as HTMLElement).closest("a")) closeMenu();
              }}
            >
              <BookingButton className="w-full" />
            </div>
            <p className="mt-3 text-center text-xs text-[var(--color-text-secondary)]">
              Un primer paso, a tu ritmo.
            </p>
          </div>
        </dialog>
      </Container>
    </header>
  );
}
