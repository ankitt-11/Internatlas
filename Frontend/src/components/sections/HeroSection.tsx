import { ArrowRight } from "lucide-react";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#FFFFFF_0%,#EFF1F9_68%,#FFE2EB_100%)] pt-0 pb-8 md:pt-0 md:pb-10" aria-label="Hero section">
      {/* Soft background gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-surface/50 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-pink-soft/50 blur-3xl" />
      
      <div className="relative mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* ── Left: Text + Actions ──────────────────────────────────── */}
          <div className="flex flex-col z-10">
            <span className="mb-2 text-[14px] sm:text-[16px] font-bold uppercase tracking-widest text-blue">
              FOR INDIA'S NEXT GENERATION
            </span>

            <h1 className="mb-3 text-[clamp(28px,5vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-primary">
              Real <br className="hidden sm:block" />
              opportunities. <br />
              <span className="font-serif italic font-normal text-editorial-red">A brighter you.</span>
            </h1>

            <p className="mb-4 max-w-[460px] text-[14px] md:text-[16px] leading-relaxed text-text-secondary">
              Internships, jobs, competitions, scholarships, workshops, college festivals and more — all in one place for India's students.
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Button className="h-10 w-full sm:w-auto px-6 text-[14px]">
                Get started for free
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="h-10 w-full sm:w-auto px-6 text-[14px]">
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
                    className={`h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm ${i > 0 ? "-ml-3" : ""}`} 
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-bold text-text-primary">50,000+ students</span>
                <span className="text-[13px] text-text-secondary">already exploring opportunities on InternAtlas</span>
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
