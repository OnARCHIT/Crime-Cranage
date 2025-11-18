import * as React from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

export const DropdownMenu = RadixDropdown.Root;
export const DropdownMenuTrigger = RadixDropdown.Trigger;

export const DropdownMenuContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <RadixDropdown.Portal>
    <RadixDropdown.Content ref={ref} className={cn("min-w-[150px] rounded-md border bg-card p-2 shadow-lg", className)} {...props}>
      {children}
    </RadixDropdown.Content>
  </RadixDropdown.Portal>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuItem = RadixDropdown.Item;
export const DropdownMenuSeparator = RadixDropdown.Separator;
export const DropdownMenuCheckboxItem = RadixDropdown.CheckboxItem;
