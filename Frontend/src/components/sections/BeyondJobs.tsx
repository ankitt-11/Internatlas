import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap, MonitorPlay, Ticket, Music, Library } from "lucide-react";

const CARDS = [
  { id: "c1", title: "Scholarships", desc: "Fund your dreams", bg: "bg-gradient-to-br from-[#1E293B] to-[#0F172A]", icon: GraduationCap, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" },
  { id: "c2", title: "Workshops", desc: "Learn from experts", bg: "bg-gradient-to-br from-[#0F172A] to-[#1E3A8A]", icon: MonitorPlay, img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop" },
  { id: "c3", title: "College Festivals", desc: "Be part of campus life", bg: "bg-gradient-to-br from-[#312E81] to-[#1E1B4B]", icon: Ticket, img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop" },
  { id: "c4", title: "Cultural Events", desc: "Express. Perform. Belong.", bg: "bg-gradient-to-br from-[#4C1D95] to-[#2E1065]", icon: Music, img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop" },
  { id: "c5", title: "Study Resources", desc: "Tools for your growth", bg: "bg-gradient-to-br from-[#022C22] to-[#064E3B]", icon: Library, img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop" },
];

export function BeyondJobs() {
  return (
    <section className="bg-transparent py-4 lg:py-6" aria-label="Beyond Jobs">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col">
            <span className="mb-2 text-[11px] font-bold uppercase tracking-widest text-blue-600">
              EXPLORE MORE
            </span>
            <h2 className="text-[28px] font-extrabold text-slate-900 leading-tight">
              Opportunities <span className="font-serif italic text-red-600">beyond jobs.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-[14px] font-bold text-blue-600 cursor-pointer hover:text-blue-700">
              View all <ArrowRight size={16} />
            </span>
            <div className="flex items-center gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:border-slate-300 hover:bg-slate-50"><ChevronLeft size={18} /></button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 pb-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className={`group relative flex h-[260px] w-full flex-col justify-between overflow-hidden rounded-2xl p-6 ${card.bg} cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5`}
            >
              {/* Background Image with Duotone Blend */}
              <img 
                src={card.img} 
                alt={card.title} 
                className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay transition-all duration-700 group-hover:scale-110 group-hover:opacity-40" 
              />

              {/* Huge subtle abstract glow in the background */}
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/5 blur-[50px] transition-opacity duration-500 group-hover:bg-white/20" />

              {/* Top Section: Glassmorphic Glowing Icon */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-[14px] bg-white/10 backdrop-blur-md border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3">
                <card.icon size={26} className="text-white drop-shadow-md" strokeWidth={2} />
              </div>

              {/* Bottom Section: Text & Animated Arrow */}
              <div className="relative z-10 mt-auto flex items-end justify-between">
                <div className="flex flex-col pr-4">
                  <h3 className="text-[20px] font-bold text-white tracking-tight mb-1 drop-shadow-sm">{card.title}</h3>
                  <p className="text-[13px] font-medium text-slate-200/90 leading-tight">{card.desc}</p>
                </div>
                
                {/* Hover Arrow popping in from bottom right */}
                <div className="flex h-10 w-10 shrink-0 translate-x-4 translate-y-4 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-xl">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Subtle gradient overlay at the bottom for text contrast */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
