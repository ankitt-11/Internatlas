import { CategoryIcon } from "@/components/ui/CategoryIcon";
import { cn } from "@/lib/utils";
import type { Category } from "@/lib/types";

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  const { type, label, description, iconKey } = category;
  
  return (
    <a
      href={`#${type}`}
      className={cn(
        "group relative flex min-w-[150px] flex-col items-center text-center justify-center gap-4 rounded-[16px] bg-white p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md border border-slate-100/50",
        className
      )}
      aria-label={`Explore ${label}`}
    >
      <CategoryIcon iconKey={iconKey} className="h-8 w-8" />
      
      <div className="flex flex-col gap-1 w-full px-1">
        <h3 className="text-[13px] font-bold text-[#1E293B]">{label}</h3>
        <p className="text-[11px] text-[#64748B] leading-snug">{description}</p>
      </div>
    </a>
  );
}
