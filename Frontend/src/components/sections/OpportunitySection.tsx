import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { OpportunityCard } from "@/components/ui/OpportunityCard";
import type { Opportunity } from "@/lib/types";
import { cn } from "@/lib/utils";

interface OpportunitySectionProps {
  eyebrow: string;
  title: string;
  highlightText?: string;
  opportunities: Opportunity[];
  viewAllLink?: string;
  viewAllLabel?: string;
  bgWhite?: boolean;
}

export function OpportunitySection({
  eyebrow,
  title,
  highlightText,
  opportunities,
  viewAllLink = "#",
  viewAllLabel = "View all",
  bgWhite = true,
}: OpportunitySectionProps) {
  return (
    <section className={cn("py-4 lg:py-6", bgWhite ? "bg-white" : "bg-transparent")} aria-label={title}>
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col">
            <span className="mb-2 text-[11px] font-bold uppercase tracking-widest text-blue-600">
              {eyebrow}
            </span>
            <h2 className="text-[28px] font-extrabold text-slate-900 leading-tight">
              {title} {highlightText && <span className="font-serif italic text-red-600">{highlightText}</span>}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link href={viewAllLink} className="hidden sm:flex items-center gap-1.5 text-[14px] font-bold text-blue-600 hover:text-blue-700">
              {viewAllLabel} <ArrowRight size={16} />
            </Link>
            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-slate-300 hover:bg-slate-50">
                <ChevronLeft size={18} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Slider */}
        <div className="relative -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="flex gap-4 lg:gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
            {opportunities.map((opp) => (
              <div key={opp.id} className="snap-start shrink-0">
                <OpportunityCard opportunity={opp} className="w-[280px] lg:w-[300px]" />
              </div>
            ))}
          </div>
          {/* Fade hint */}
          <div className={cn("pointer-events-none absolute bottom-4 right-0 top-0 w-16 lg:w-32 bg-gradient-to-l to-transparent", bgWhite ? "from-white" : "from-[#F8FAFC]")} />
        </div>

      </div>
    </section>
  );
}
