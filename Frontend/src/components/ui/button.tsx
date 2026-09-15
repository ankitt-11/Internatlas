import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 hover:shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:-translate-y-px active:translate-y-0",
        outline:
          "border border-slate-200 bg-transparent hover:bg-slate-50 hover:text-slate-900 text-slate-700",
        ghost:
          "bg-transparent text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900",
        link: "bg-transparent text-blue-600 underline-offset-4 hover:underline border-0 p-0 h-auto",
        icon: "rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:shadow-[0_4px_12px_rgba(37,99,235,0.3)] hover:scale-110 active:scale-100",
      },
      size: {
        sm:        "h-8 px-3 text-xs",
        default:   "h-9 px-4 py-2",
        lg:        "h-11 px-6 text-base",
        icon:      "h-8 w-8 p-0",
        "icon-sm": "h-7 w-7 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
