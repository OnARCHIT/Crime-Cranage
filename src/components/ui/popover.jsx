import * as React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

export const Popover = RadixPopover.Root;
export const PopoverTrigger = RadixPopover.Trigger;

export const PopoverContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <RadixPopover.Portal>
    <RadixPopover.Content ref={ref} className={cn("rounded-md border bg-card p-3 shadow-md", className)} {...props}>
      {children}
    </RadixPopover.Content>
  </RadixPopover.Portal>
));
PopoverContent.displayName = "PopoverContent";
