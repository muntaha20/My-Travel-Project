import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { regions, priceSortOptions } from "@/data/destinations";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedRegion: string;
  onRegionChange: (r: string) => void;
  sortBy: string;
  onSortChange: (s: string) => void;
}

export default function HeroSection({
  searchQuery,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  sortBy,
  onSortChange,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80"
          alt="World travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(224,35%,8%)]/70 via-[hsl(224,35%,8%)]/50 to-[hsl(224,35%,8%)] dark:from-[hsl(224,35%,8%)]/70 dark:to-[hsl(224,35%,8%)]" />
        <div className="absolute inset-0 light:from-white/80 light:to-white/40" />
      </div>

      {/* Light mode overlay */}
      <div className="absolute inset-0 z-0 hidden light:block bg-gradient-to-b from-white/60 via-white/30 to-[hsl(0,0%,98%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-primary/80 text-xs tracking-[0.4em] uppercase font-light mb-6 animate-fade-in">
          Curated Journeys · Extraordinary Destinations
        </p>

        {/* Heading */}
        <h1 className="nazka-heading text-6xl md:text-8xl text-foreground mb-6 leading-none">
          Dream Travel
          <em className="block text-primary not-italic"> Atlas</em>
        </h1>

        <p className="text-muted-foreground text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Discover the world's most extraordinary destinations, curated for those who travel not to escape life, but so life doesn't escape them.
        </p>

        {/* Search & Filter bar */}
        <div className="glass rounded-2xl p-4 max-w-3xl mx-auto rose-glow">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search input */}
            <div className="flex-1 flex items-center gap-3 bg-white/5 dark:bg-white/5 light:bg-white/70 rounded-xl px-4 py-3 border border-white/10 light:border-primary/15 focus-within:border-primary/50 transition-colors">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <input
                type="search"
                placeholder="Search destinations, countries..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                data-testid="input-search"
              />
            </div>

            {/* Region filter */}
            <div className="relative flex items-center gap-2 bg-white/5 dark:bg-white/5 light:bg-white/70 rounded-xl px-4 py-3 border border-white/10 light:border-primary/15 min-w-[140px] hover:border-primary/40 transition-colors">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <select
                value={selectedRegion}
                onChange={(e) => onRegionChange(e.target.value)}
                className="flex-1 bg-transparent text-sm text-foreground outline-none cursor-pointer appearance-none"
                data-testid="select-region"
              >
                {regions.map((r) => (
                  <option key={r} value={r} className="bg-card text-foreground">
                    {r}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-muted-foreground flex-shrink-0" />
            </div>

            {/* Sort */}
            <div className="relative flex items-center gap-2 bg-white/5 dark:bg-white/5 light:bg-white/70 rounded-xl px-4 py-3 border border-white/10 light:border-primary/15 min-w-[180px] hover:border-primary/40 transition-colors">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="flex-1 bg-transparent text-sm text-foreground outline-none cursor-pointer appearance-none"
                data-testid="select-sort"
              >
                {priceSortOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-card text-foreground">
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-muted-foreground flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs text-muted-foreground tracking-widest uppercase">Scroll to explore</p>
          <ChevronDown className="w-4 h-4 text-primary/60" />
        </div>
      </div>
    </section>
  );
}
