import * as React from "react";

import { cn } from "@/lib/utils";

export function Separator({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={cn("border-0 border-t border-[var(--color-border)]", className)}
      {...props}
    />
  );
}
