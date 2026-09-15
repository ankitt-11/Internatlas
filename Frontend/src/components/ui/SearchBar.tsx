"use client";

import { useRef, useEffect, useCallback } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  className,
  placeholder = "Search opportunities, skills, companies or keywords...",
  onSearch,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGlobalKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
      e.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [handleGlobalKeyDown]);

  const handleSubmit = () => {
    const query = inputRef.current?.value.trim() ?? "";
    if (query) {
      onSearch?.(query);
      document.getElementById("explore")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") inputRef.current?.blur();
  };

  return (
    <div className={cn("group flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-1.5 shadow-sm transition-all duration-200 focus-within:border-blue-500 focus-within:shadow-[0_0_0_4px_rgba(37,99,235,0.1),0_2px_8px_rgba(15,23,42,0.07)]", className)}>
      <Search size={17} className="flex-shrink-0 text-slate-400 transition-colors group-focus-within:text-blue-500" aria-hidden="true" />
      <Input
        ref={inputRef} id="hero-search" type="text" placeholder={placeholder} onKeyDown={handleKeyDown} aria-label="Search opportunities"
        className="h-10 flex-1 border-0 bg-transparent p-0 text-[15px] text-slate-800 shadow-none placeholder:text-slate-400 focus-visible:ring-0"
      />
      <Button id="search-btn" onClick={handleSubmit} size="sm" className="h-9 flex-shrink-0 rounded-xl px-5 text-sm" aria-label="Search">
        Search
      </Button>
    </div>
  );
}
