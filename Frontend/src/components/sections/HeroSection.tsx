import { ArrowRight } from "lucide-react";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-4 pb-12 md:pt-6 md:pb-16" aria-label="Hero section">
      {/* Soft background gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-pink-50/50 blur-3xl" />
      
      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* ── Left: Text + Actions ──────────────────────────────────── */}
          <div className="flex flex-col z-10">
            <span className="mb-6 text-[12px] font-bold uppercase tracking-widest text-blue-600">
              FOR INDIA'S NEXT GENERATION
            </span>

            <h1 className="mb-6 text-[clamp(36px,8vw,72px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0f172a]">
              Real <br className="hidden sm:block" />
              opportunities. <br />
              <span className="font-serif italic text-[#DC2626]">A brighter you.</span>
            </h1>

            <p className="mb-10 max-w-[500px] text-[16px] md:text-[18px] leading-relaxed text-slate-600">
              Internships, jobs, competitions, scholarships, workshops, college festivals and more — all in one place for India's students.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <Button className="h-12 w-full sm:w-auto rounded-full bg-[#2563EB] px-8 text-[15px] font-semibold text-white hover:bg-blue-700">
                Get started for free
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="h-12 w-full sm:w-auto rounded-full border-slate-300 px-8 text-[15px] font-semibold text-[#0f172a] hover:bg-slate-50">
                Explore opportunities
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/86.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="Student avatar" 
                    className={`h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm ${i > 0 ? "-ml-3" : ""}`} 
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-slate-900">50,000+ students</span>
                <span className="text-[13px] text-slate-500">already exploring opportunities on InternAtlas</span>
              </div>
            </div>
          </div>

          {/* ── Right: Visual Cards ───────────────────────────────────── */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
