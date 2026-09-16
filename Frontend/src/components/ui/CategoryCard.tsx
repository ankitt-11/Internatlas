import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

const bgColors: Record<string, string> = {
  briefcase: "bg-rose-50 text-rose-500",
  user: "bg-blue-50 text-blue-500",
  trophy: "bg-purple-50 text-purple-500",
  zap: "bg-sky-50 text-sky-500",
  graduation: "bg-emerald-50 text-emerald-500",
  clipboard: "bg-orange-50 text-orange-500",
  users: "bg-indigo-50 text-indigo-500",
  star: "bg-fuchsia-50 text-fuchsia-500",
};

export function CategoryCard({ category, className }: CategoryCardProps) {
  const { type, label, description, iconKey } = category;
  
  return (
    <a
      href={`#${type}`}
      className={cn(
        "group relative flex min-w-[150px] flex-col items-center text-center justify-center gap-4 rounded-[20px] bg-white p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md border border-slate-200/60 shadow-[0_4px_12px_rgb(0,0,0,0.02)]",
        className
      )}
      aria-label={`Explore ${label}`}
    >
      <div className={cn("flex h-14 w-14 items-center justify-center rounded-2xl", bgColors[iconKey] || "bg-slate-50")}>
        <CategoryIcon iconKey={iconKey} className="h-7 w-7" />
      </div>
      
      <div className="flex flex-col gap-1 w-full px-1">
        <h3 className="text-[14px] font-bold text-[#0f172a]">{label}</h3>
        <p className="text-[12px] text-slate-500 leading-snug">{description}</p>
      </div>
    </a>
  );
}
