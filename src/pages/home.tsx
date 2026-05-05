import { useState, useMemo } from "react";
import { destinations } from "@/data/destinations";
import { useWishlist } from "@/hooks/useWishlist";
import { useTheme } from "@/hooks/useTheme";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import DealSection from "@/components/DealSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WishlistDrawer from "@/components/WishlistDrawer";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const { wishlist, toggle: toggleWishlist, isWishlisted } = useWishlist();
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredDestinations = useMemo(() => {
    let result = [...destinations];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.country.toLowerCase().includes(q) ||
          d.region.toLowerCase().includes(q) ||
          d.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedRegion !== "All") {
      result = result.filter((d) => d.region === selectedRegion);
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedRegion, sortBy]);

  const wishlistedDestinations = useMemo(
    () => destinations.filter((d) => wishlist.has(d.id)),
    [wishlist]
  );

  const hasFilters = searchQuery.trim() !== "" || selectedRegion !== "All" || sortBy !== "featured";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        wishlistCount={wishlist.size}
        onWishlistClick={() => setWishlistOpen(true)}
      />

      <main>
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <DestinationsSection
          destinations={filteredDestinations}
          wishlistedIds={wishlist}
          onWishlistToggle={toggleWishlist}
          hasFilters={hasFilters}
        />

        <DealSection />

        <TestimonialsSection />
      </main>

      <Footer />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistedDestinations={wishlistedDestinations}
        onRemove={toggleWishlist}
      />
    </div>
  );
}
