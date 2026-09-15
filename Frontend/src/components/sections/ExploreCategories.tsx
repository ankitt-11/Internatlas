import { CategoryCard } from "@/components/ui/CategoryCard";
import { ChevronRight } from "lucide-react";
import type { Category } from "@/lib/types";

interface ExploreCategoriesProps {
  categories: Category[];
}

// Custom SVG Icons for the Stats
const StatIcons = {
  Box: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
      <circle cx="12" cy="7" r="1.5" fill="#1E293B" />
    </svg>
  ),
  People: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <rect x="5" y="15" width="8" height="4" rx="1" fill="#1E293B" stroke="none" />
    </svg>
  ),
  Badge: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15s8-4 8-10V3L12 5 4 3v2c0 6 8 10 8 10z" />
      <circle cx="12" cy="8" r="2" fill="#1E293B" stroke="none" />
    </svg>
  ),
  Building: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="21" x2="21" y2="21" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M5 6l7-3 7 3" />
      <line x1="4" y1="10" x2="4" y2="21" />
      <line x1="20" y1="10" x2="20" y2="21" />
      <line x1="8" y1="14" x2="8" y2="21" />
      <line x1="12" y1="14" x2="12" y2="21" />
      <line x1="16" y1="14" x2="16" y2="21" />
    </svg>
  ),
};

export function ExploreCategories({ categories }: ExploreCategoriesProps) {
  return (
    <section className="bg-transparent py-8 lg:py-10" aria-label="Explore by category">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Categories Row */}
        <div className="relative flex items-center">
          <div className="flex gap-4 lg:justify-between w-full overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory pr-10 lg:pr-0">
            {categories.map((cat) => (
              <div key={cat.id} className="snap-start shrink-0">
                <CategoryCard category={cat} className="h-[150px] w-[140px] xl:w-[150px]" />
              </div>
            ))}
          </div>
          
          {/* Scroll Button */}
          <div className="hidden absolute -right-4 xl:-right-6 z-10 shrink-0 lg:flex items-center justify-center h-12 w-12 rounded-full border border-blue-100 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer hover:bg-slate-50 transition-colors">
            <ChevronRight size={18} className="text-[#1E293B]" strokeWidth={2.5} />
          </div>
        </div>

        {/* Stats Section (No white box, directly on background) */}
        <div className="mt-8 flex flex-col gap-6 border-t border-slate-100 pt-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="flex flex-col mb-4 lg:mb-0">
            <span className="text-[14px] font-medium text-slate-500">A growing community</span>
            <span className="text-[14px] font-medium text-slate-500">of ambitious students.</span>
          </div>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:flex sm:flex-row sm:items-center sm:gap-8 md:gap-14 lg:flex-1 lg:justify-end">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L2 8L12 13L22 8L12 3Z" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 16L12 21L22 16" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="13" r="2" fill="#475569"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-slate-900 leading-none mb-1">50K+</span>
                <span className="text-[12px] font-medium text-slate-400 leading-none">Opportunities</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-slate-900 leading-none mb-1">10K+</span>
                <span className="text-[12px] font-medium text-slate-400 leading-none">Hiring Partners</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V8" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V22" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12H8" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 12H22" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-slate-900 leading-none mb-1">5M+</span>
                <span className="text-[12px] font-medium text-slate-400 leading-none">Students</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21H21" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 10V21" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 10V21" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 21V10" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 21V10" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 21V10" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 10L12 3L22 10" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-slate-900 leading-none mb-1">1K+</span>
                <span className="text-[12px] font-medium text-slate-400 leading-none">Colleges</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
