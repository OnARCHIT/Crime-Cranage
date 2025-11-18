import * as React from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <RadixCheckbox.Root ref={ref} className={cn("inline-flex h-5 w-5 items-center justify-center rounded border border-border", className)} {...props}>
    <RadixCheckbox.Indicator>
      <Check size={16} />
    </RadixCheckbox.Indicator>
  </RadixCheckbox.Root>
));
Checkbox.displayName = "Checkbox";
