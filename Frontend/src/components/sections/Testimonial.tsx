import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonial() {
  return (
    <section className="bg-transparent py-4 lg:py-6" aria-label="Student Stories">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          
          {/* Left Text */}
          <div className="flex flex-col">
            <span className="mb-6 text-[11px] font-bold uppercase tracking-widest text-blue-600">
              STUDENT STORIES
            </span>
            <blockquote className="mb-10 text-[32px] font-extrabold leading-tight text-slate-900 md:text-[40px]">
              "InternAtlas helped me find my first internship and even a scholarship. The platform is simple, genuine and{" "}
              <span className="font-serif italic text-red-600">student-friendly.</span>"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Priya Sharma" 
                  className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm" 
                />
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-slate-900">Priya Sharma</span>
                  <span className="text-[13px] text-slate-500">B.Tech, IIT Delhi</span>
                </div>
              </div>
              
              {/* Pagination controls */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-pink-400" />
                  <div className="h-2 w-2 rounded-full bg-slate-200" />
                  <div className="h-2 w-2 rounded-full bg-slate-200" />
                </div>
                <div className="flex gap-2 ml-4">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-slate-300 hover:bg-slate-50"><ChevronLeft size={18} /></button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"><ChevronRight size={18} /></button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-[40px] bg-pink-50">
            {/* Soft pink blob */}
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/40 blur-3xl" />
            <div className="relative z-10 p-10 text-center font-serif italic text-3xl font-medium text-slate-800">
              <span className="text-pink-500 text-5xl leading-none absolute -top-4 -left-6">"</span>
              More <br />
              opportunities. <br />
              Brighter <br />
              futures.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
