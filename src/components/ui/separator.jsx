import * as React from "react";
import { cn } from "@/lib/utils";

export function Separator({ className, ...props }) {
  return <div role="separator" className={cn("my-4 border-t border-border", className)} {...props} />;
}
