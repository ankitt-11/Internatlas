import { Bookmark, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Opportunity } from "@/lib/types";

interface OpportunityCardProps {
  opportunity: Opportunity;
  className?: string;
}

export function OpportunityCard({ opportunity, className }: OpportunityCardProps) {
  const { title, organization, location, badges, timeLabel, logoVariant } = opportunity;

  // Generic logo colored backgrounds
  const getLogoBg = (variant: string) => {
    if (variant.includes("yellow")) return "bg-yellow-400 text-white";
    if (variant.includes("orange")) return "bg-orange-500 text-white";
    if (variant.includes("blue")) return "bg-blue-600 text-white";
    if (variant.includes("red")) return "bg-red-500 text-white";
    if (variant.includes("green")) return "bg-emerald-500 text-white";
    if (variant.includes("purple") || variant.includes("pink")) return "bg-purple-600 text-white";
    return "bg-slate-800 text-white";
  };

  // Real logos for known companies
  const renderLogo = () => {
    const org = organization.toLowerCase();
    
    if (org === "google") {
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      );
    }
    
    if (org === "microsoft") {
      return (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#F25022" d="M1 1h10.5v10.5H1z"/><path fill="#7FBA00" d="M12.5 1H23v10.5H12.5z"/><path fill="#00A4EF" d="M1 12.5h10.5V23H1z"/><path fill="#FFB900" d="M12.5 12.5H23V23H12.5z"/>
        </svg>
      );
    }

    if (org === "airbnb") {
      return (
        <svg viewBox="0 0 24 24" fill="#FF5A5F" className="w-8 h-8">
          <path d="M12.015 1.636C8.826 1.636 1.5 6.726 1.5 12.871c0 3.36 2.769 6.088 6.179 6.088 1.933 0 3.738-1.071 4.793-2.868l-.837-.872c-.808 1.41-2.26 2.23-3.956 2.23-2.671 0-4.839-2.128-4.839-4.747 0-4.664 5.922-8.583 9.175-8.583 3.251 0 9.173 3.918 9.173 8.583 0 2.62-2.169 4.747-4.84 4.747-1.696 0-3.148-.82-3.956-2.23l-.838.872c1.056 1.797 2.861 2.868 4.794 2.868 3.409 0 6.178-2.729 6.178-6.088 0-6.145-7.324-11.235-10.511-11.235z"/>
          <path fill="white" d="M12.015 6.375c-1.393 0-2.617 1.258-2.617 2.87 0 1.611 1.224 2.871 2.617 2.871 1.392 0 2.616-1.26 2.616-2.871 0-1.612-1.224-2.87-2.616-2.87z"/>
        </svg>
      );
    }

    if (org === "swiggy") {
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#FC8019] rounded-xl text-white font-bold text-2xl pb-1">
          S
        </div>
      );
    }

    if (org === "zomato") {
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#E23744] rounded-xl text-white font-bold text-2xl italic pb-1">
          z
        </div>
      );
    }
    
    if (org === "flipkart") {
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#FFC200] rounded-xl text-[#2874F0] font-bold text-2xl italic pb-1">
          f
        </div>
      );
    }

    if (org === "deloitte") {
      return (
        <div className="w-full h-full flex items-center justify-center bg-black rounded-xl text-white font-bold text-[10px]">
          Deloitte<span className="text-[#86BC25]">.</span>
        </div>
      );
    }

    // Generic fallback for unknown companies
    const bg = getLogoBg(logoVariant);
    return (
      <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl font-bold text-lg", bg)}>
        {logoVariant.split("-")[1]?.charAt(0).toUpperCase() || title.charAt(0)}
      </div>
    );
  };

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-[20px] border border-slate-200/60 bg-white p-5",
        "transition-all duration-200 cursor-pointer",
        "hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg",
        className
      )}
      tabIndex={0}
    >
      <div className="flex flex-col gap-4">
        {/* Logo */}
        <div className="flex h-12 w-12 items-center justify-center">
          {renderLogo()}
        </div>

        {/* Title & Org */}
        <div className="flex flex-col gap-1 mt-1">
          <h3 className="text-[16px] font-bold leading-snug text-slate-900">{title}</h3>
          <p className="text-[13px] font-medium text-slate-500">{organization}</p>
          <div className="flex items-center gap-1.5 mt-1 text-slate-500">
            <MapPin size={14} />
            <span className="text-[12px]">{location}</span>
          </div>
        </div>

        {/* Badges */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {badges.map((b) => (
              <span key={b} className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-600">
                {b}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-[12px] font-semibold text-slate-400">{timeLabel}</span>
        <button className="text-slate-400 transition-colors hover:text-blue-600" aria-label="Save opportunity">
          <Bookmark size={16} strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}
