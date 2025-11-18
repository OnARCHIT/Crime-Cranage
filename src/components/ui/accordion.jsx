import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

export const Accordion = RadixAccordion.Root;
export const AccordionItem = RadixAccordion.Item;
export const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <RadixAccordion.Trigger ref={ref} className={cn("flex w-full items-center justify-between py-2", className)} {...props}>
    {children}
  </RadixAccordion.Trigger>
));
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef(({ className, ...props }, ref) => (
  <RadixAccordion.Content ref={ref} className={cn("pt-2 pb-4 text-sm text-muted-foreground", className)} {...props} />
));
AccordionContent.displayName = "AccordionContent";
