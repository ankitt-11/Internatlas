import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <section className="bg-[#0A1128]" aria-label="Call to action">
      {/* Container */}
      <div className="relative mx-auto max-w-[1400px] px-6 py-6 lg:py-8 overflow-hidden">
        
        {/* Subtle Background Glow behind text */}
        <div className="absolute left-[10%] top-[20%] h-[300px] w-[500px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 relative z-10">
          
          {/* ── Left Column: Text & Buttons ──────────────────────────── */}
          <div className="flex flex-col">
            <span className="mb-3 text-[11px] font-bold uppercase tracking-widest text-[#38BDF8]">
              YOUR NEXT CHAPTER STARTS HERE
            </span>
            <h2 className="mb-5 text-[32px] font-bold leading-[1.2] text-white md:text-[40px]">
              Turn your potential <span className="text-[#38BDF8]">into progress.</span>
            </h2>
            <p className="mb-10 max-w-[420px] text-[15px] leading-relaxed text-slate-200">
              Join thousands of students discovering opportunities, learning new skills, and building a brighter future.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button className="h-11 rounded-full bg-[#4F84F6] px-7 text-[14px] font-bold text-white hover:bg-[#3b71e8] shadow-[0_4px_20px_rgba(79,132,246,0.3)] transition-all">
                Create your account <ArrowRight size={16} className="ml-1.5" />
              </Button>
              <Button variant="outline" className="h-11 rounded-full border border-slate-500/50 bg-transparent px-7 text-[14px] font-bold text-white hover:bg-white/10 hover:border-slate-400 transition-all">
                For colleges & employers
              </Button>
            </div>
          </div>

          {/* ── Right Column: Doorway Graphic ────────────────────────── */}
          <div className="relative flex h-[350px] w-full items-end justify-center lg:justify-end lg:pr-[40px] mt-10 lg:mt-0">
            
            <div className="relative flex h-full items-center justify-center w-full max-w-[550px]">
              
              {/* Main Background Block (The dark stone wall) */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E2B45] to-[#121b2e] shadow-2xl">
                
                {/* Brick Texture Full Cover */}
                <svg className="absolute inset-0 h-full w-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="realistic-brick" width="80" height="40" patternUnits="userSpaceOnUse">
                      {/* Brick outlines */}
                      <rect width="80" height="40" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
                      <line x1="40" y1="20" x2="40" y2="40" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
                      <line x1="0" y1="20" x2="80" y2="20" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
                      
                      {/* Brick Highlights (top/left edges for 3D effect) */}
                      <line x1="1" y1="1" x2="79" y2="1" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <line x1="1" y1="21" x2="39" y2="21" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                      <line x1="41" y1="21" x2="79" y2="21" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#realistic-brick)" />
                </svg>

                {/* Volumetric Light casting on the wall from the door */}
                <div className="absolute top-[20%] left-[30%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
                
                {/* The Archway Cutout (White Glowing Hole) */}
                <div className="absolute bottom-0 left-[25%] h-[280px] w-[180px] -translate-x-1/2 rounded-t-[90px] bg-white shadow-[0_0_80px_rgba(255,255,255,0.8),inset_0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden border-t-8 border-x-8 border-[#101726]/40">
                  
                  {/* Stairs inside the archway */}
                  <div className="absolute bottom-0 right-0 flex flex-col items-end">
                    {/* Top step */}
                    <div className="h-[25px] w-[60px] bg-gradient-to-r from-blue-100 to-white shadow-[0_-2px_4px_rgba(0,0,0,0.1)] border-t border-white/50" />
                    {/* Step 2 */}
                    <div className="h-[25px] w-[80px] bg-gradient-to-r from-blue-200 to-blue-100 shadow-[0_-2px_4px_rgba(0,0,0,0.1)] border-t border-white/50" />
                    {/* Step 3 */}
                    <div className="h-[25px] w-[110px] bg-gradient-to-r from-blue-300 to-blue-200 shadow-[0_-2px_4px_rgba(0,0,0,0.1)] border-t border-white/50" />
                    {/* Step 4 */}
                    <div className="h-[25px] w-[140px] bg-gradient-to-r from-blue-400 to-blue-300 shadow-[0_-2px_4px_rgba(0,0,0,0.1)] border-t border-white/50" />
                    {/* Bottom step */}
                    <div className="h-[30px] w-[180px] bg-gradient-to-r from-blue-500 to-blue-400 shadow-[0_-2px_4px_rgba(0,0,0,0.2)] border-t border-white/50" />
                  </div>
                  
                  {/* Blinding Light core */}
                  <div className="absolute top-[20px] left-[20px] h-[150px] w-[150px] rounded-full bg-white blur-[20px]" />
                </div>

                {/* Light spill on the floor in front of the door */}
                <div className="absolute bottom-0 left-[25%] h-[20px] w-[260px] -translate-x-1/2 rounded-[100%] bg-white blur-[15px]" />
                <div className="absolute bottom-[-10px] left-[25%] h-[40px] w-[340px] -translate-x-1/2 rounded-[100%] bg-[#93c5fd]/40 blur-[20px]" />

                {/* Handwriting Text ON the wall */}
                <div className="absolute top-[30%] right-[10%] lg:right-[15%] z-30 -rotate-[6deg] flex flex-col items-start drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                  <span className="font-hand text-white text-[28px] md:text-[34px] leading-tight font-medium">
                    Curious minds. <br />
                    Brighter tomorrows.
                  </span>
                  <svg width="140" height="24" viewBox="0 0 140 24" fill="none" className="mt-2 ml-4">
                    <path d="M5 5 Q 40 0, 130 5" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M25 15 Q 70 11, 115 15" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                  </svg>
                </div>

              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
