import { Destination } from "@/data/destinations";
import DestinationCard from "./DestinationCard";
import { Search } from "lucide-react";

interface DestinationsSectionProps {
  destinations: Destination[];
  wishlistedIds: Set<string>;
  onWishlistToggle: (id: string) => void;
  hasFilters: boolean;
}

export default function DestinationsSection({
  destinations,
  wishlistedIds,
  onWishlistToggle,
  hasFilters,
}: DestinationsSectionProps) {
  return (
    <section id="destinations" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-14 text-center">
        <p className="text-primary/70 text-xs tracking-[0.4em] uppercase font-light mb-4">
          {destinations.length} {destinations.length === 1 ? "Destination" : "Destinations"} Found
        </p>
        <h2 className="nazka-heading text-5xl md:text-6xl text-foreground mb-4">
          {hasFilters ? "Search Results" : "Curated Escapes"}
        </h2>
        <div className="w-20 h-px bg-primary/40 mx-auto" />
      </div>

      {/* Empty state */}
      {destinations.length === 0 && (
        <div className="text-center py-24">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-primary/50" />
          </div>
          <h3 className="nazka-heading text-2xl text-foreground mb-2">No destinations found</h3>
          <p className="text-muted-foreground font-light">Try adjusting your search or filters to discover more.</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            isWishlisted={wishlistedIds.has(dest.id)}
            onWishlistToggle={onWishlistToggle}
          />
        ))}
      </div>
    </section>
  );
}
