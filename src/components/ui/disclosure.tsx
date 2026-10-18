"use client";

import { useId, useState, type ReactNode } from "react";

export function Disclosure({
  title,
  description,
  defaultOpen = false,
  children,
}: {
  title: string;
  description?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const id = useId();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="disclosure" data-open={open}>
      <h3>
        <button
          id={`${id}-trigger`}
          type="button"
          className="disclosure-trigger"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen(!open)}
        >
          <span>
            <span className="block text-sm font-semibold sm:text-base">
              {title}
            </span>
            {description && (
              <span className="mt-1 block text-xs font-normal text-[var(--color-text-secondary)]">
                {description}
              </span>
            )}
          </span>
          <span className="disclosure-indicator" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
        inert={!open}
        className="disclosure-panel"
      >
        <div className="min-h-0 overflow-hidden">
          <div className="disclosure-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
