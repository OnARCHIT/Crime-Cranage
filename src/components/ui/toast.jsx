import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { cn } from "@/lib/utils";

export const ToastProvider = RadixToast.Provider;
export const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <RadixToast.Viewport ref={ref} className={cn("fixed bottom-4 right-4 z-50 flex w-[390px] max-w-[90vw] flex-col gap-2 p-4", className)} {...props} />
));

export const Toast = React.forwardRef(({ className, title, description, ...props }, ref) => (
  <RadixToast.Root ref={ref} className={cn("rounded-md border bg-card p-3 shadow-md", className)} {...props}>
    {title && <div className="font-semibold">{title}</div>}
    {description && <div className="text-sm text-muted-foreground">{description}</div>}
    <RadixToast.Close />
  </RadixToast.Root>
));
Toast.displayName = "Toast";
