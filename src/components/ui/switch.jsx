import * as React from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export const Switch = React.forwardRef(({ className, ...props }, ref) => (
  <RadixSwitch.Root ref={ref} className={cn("relative inline-flex h-6 w-11 items-center rounded-full bg-muted p-[2px]", className)} {...props}>
    <RadixSwitch.Thumb className="h-5 w-5 rounded-full bg-background shadow-md transition-transform" />
  </RadixSwitch.Root>
));
Switch.displayName = "Switch";
