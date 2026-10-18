interface CareIconProps {
  kind: number;
  className?: string;
}

const paths = [
  "M3 9c3-6 6 6 9 0s6 6 9 0M3 15c3-6 6 6 9 0s6 6 9 0",
  "M10 8a4 4 0 0 0-6 0l-1 1a4 4 0 0 0 0 6 4 4 0 0 0 6 0l6-6a4 4 0 0 1 6 0 4 4 0 0 1 0 6l-1 1a4 4 0 0 1-6 0",
  "M6 20c0-7 5-12 13-16 2 9-1 15-8 15M6 20l8-10",
  "M3 15h4l4 3h5l5-5M7 15v-5a2 2 0 0 1 4 0v3h5a2 2 0 0 1 0 4M3 12v9",
  "M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M15 9l-2 4-4 2 2-4 4-2",
];

export function CareIcon({ kind, className }: CareIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={paths[kind] ?? paths[0]} />
    </svg>
  );
}
