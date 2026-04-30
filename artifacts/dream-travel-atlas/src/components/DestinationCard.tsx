import { Heart, Star, Ticket, ArrowRight, MapPin } from "lucide-react";
import { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
  isWishlisted: boolean;
  onWishlistToggle: (id: string) => void;
}

export default function DestinationCard({
  destination,
  isWishlisted,
  onWishlistToggle,
}: DestinationCardProps) {
  const { id, name, country, description, price, rating, reviewCount, image, tags, duration } = destination;

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWishlistToggle(id);
  };

  return (
    <div
      className="dest-card group relative rounded-2xl overflow-hidden glass-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
      data-testid={`card-destination-${id}`}
    >
      {/* Image container */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="dest-card-img w-full h-full object-cover"
        />

        {/* Gradient overlay always visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Hover overlay with price & CTA */}
        <div className="dest-card-overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 flex flex-col justify-end p-5">
          <div className="flex items-center gap-2 mb-3">
            <Ticket className="w-4 h-4 text-primary" />
            <span className="text-white text-sm font-light tracking-wide">{duration} from</span>
            <span className="text-primary font-semibold text-lg ml-auto">${price.toLocaleString()}</span>
          </div>
          <button
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors rose-glow"
            data-testid={`btn-book-${id}`}
          >
            Book Now
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full glass-btn flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isWishlisted ? "border-primary/60" : "border-white/20"
          }`}
          data-testid={`btn-wishlist-${id}`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-all duration-300 ${
              isWishlisted
                ? "fill-[hsl(341,40%,62%)] text-[hsl(341,40%,62%)] scale-110"
                : "text-white/80"
            }`}
          />
        </button>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-sm text-white/90 text-[10px] tracking-wide border border-white/15"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Destination name overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="nazka-heading text-2xl text-white">{name}</h3>
          <div className="flex items-center gap-1 text-white/70 text-xs mt-0.5">
            <MapPin className="w-3 h-3" />
            {country}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="nazka-heading text-xl text-foreground">{name}</h3>
            <div className="flex items-center gap-1 text-muted-foreground text-xs mt-0.5">
              <MapPin className="w-3 h-3" />
              {country}
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Star className="w-3.5 h-3.5 star-filled fill-current" />
            <span className="text-foreground font-medium">{rating}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">{duration} · from</span>
            <div className="text-primary font-semibold text-lg">${price.toLocaleString()}</div>
          </div>
          <div className="flex items-center gap-1 text-primary/60 text-xs group-hover:text-primary transition-colors">
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
