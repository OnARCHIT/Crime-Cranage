import * as React from "react";
import * as RadixAlert from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";

export const AlertDialog = RadixAlert.Root;
export const AlertDialogTrigger = RadixAlert.Trigger;
export const AlertDialogAction = RadixAlert.Action;
export const AlertDialogCancel = RadixAlert.Cancel;

export const AlertDialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <RadixAlert.Portal>
    <RadixAlert.Overlay className="fixed inset-0 bg-black/50" />
    <RadixAlert.Content ref={ref} className={cn("fixed left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg p-6 bg-card", className)} {...props}>
      {children}
    </RadixAlert.Content>
  </RadixAlert.Portal>
));
AlertDialogContent.displayName = "AlertDialogContent";
