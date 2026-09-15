import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { OpportunityType } from "@/lib/types";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide leading-none",
  {
    variants: {
      variant: {
        internship:  "bg-indigo-50  text-indigo-700",
        job:         "bg-green-50   text-green-700",
        hackathon:   "bg-purple-50  text-purple-700",
        competition: "bg-orange-50  text-orange-700",
        scholarship: "bg-yellow-50  text-yellow-700",
        event:       "bg-sky-50     text-sky-700",
        contest:     "bg-blue-50    text-blue-700",
        quiz:        "bg-red-50     text-red-700",
        workshops:   "bg-teal-50    text-teal-700",
        college_fest:"bg-fuchsia-50 text-fuchsia-700",
        cultural:    "bg-rose-50    text-rose-700",
        default:     "bg-slate-100  text-slate-700",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

const OPPORTUNITY_LABEL: Record<OpportunityType, string> = {
  internship:  "Internship",
  job:         "Job",
  hackathon:   "Hackathon",
  competition: "Competition",
  scholarship: "Scholarship",
  event:       "Event",
  contest:     "Contest",
  quiz:        "Quiz",
  workshops:   "Workshops",
  college_fest:"College Fest",
  cultural:    "Cultural",
};

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  opportunityType?: OpportunityType;
}

function Badge({ className, variant, opportunityType, children, ...props }: BadgeProps) {
  const resolvedVariant = opportunityType ? (opportunityType as VariantProps<typeof badgeVariants>["variant"]) : variant;
  const label = opportunityType ? OPPORTUNITY_LABEL[opportunityType] : children;
  return (
    <span className={cn(badgeVariants({ variant: resolvedVariant }), className)} {...props}>
      {label}
    </span>
  );
}

export { Badge, badgeVariants };
