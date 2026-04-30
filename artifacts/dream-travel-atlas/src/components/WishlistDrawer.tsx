import { X, Heart, Trash2, ArrowRight } from "lucide-react";
import { Destination } from "@/data/destinations";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedDestinations: Destination[];
  onRemove: (id: string) => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistedDestinations,
  onRemove,
}: WishlistDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        data-testid="wishlist-backdrop"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 glass border-l border-white/10 flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-testid="wishlist-drawer"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary fill-current" />
            </div>
            <div>
              <h3 className="nazka-heading text-xl text-foreground">My Wishlist</h3>
              <p className="text-muted-foreground text-xs">
                {wishlistedDestinations.length} {wishlistedDestinations.length === 1 ? "destination" : "destinations"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="glass-btn w-8 h-8 rounded-full flex items-center justify-center hover:border-primary/40 transition-colors"
            data-testid="btn-close-wishlist"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistedDestinations.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-primary/5 border border-primary/15 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary/30" />
              </div>
              <h4 className="nazka-heading text-xl text-foreground mb-2">Your wishlist is empty</h4>
              <p className="text-muted-foreground text-sm font-light">
                Tap the heart on any destination to save it here.
              </p>
            </div>
          ) : (
            wishlistedDestinations.map((dest) => (
              <div
                key={dest.id}
                className="glass-card rounded-xl overflow-hidden flex gap-4 hover:border-primary/20 transition-all"
                data-testid={`wishlist-item-${dest.id}`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-24 h-24 object-cover flex-shrink-0"
                />
                <div className="flex-1 p-3 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="nazka-heading text-lg text-foreground leading-tight">{dest.name}</h4>
                      <p className="text-muted-foreground text-xs">{dest.country}</p>
                    </div>
                    <button
                      onClick={() => onRemove(dest.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors flex-shrink-0 mt-0.5"
                      data-testid={`btn-remove-wishlist-${dest.id}`}
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-semibold text-sm">${dest.price.toLocaleString()}</span>
                    <span className="text-muted-foreground text-xs">{dest.duration}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistedDestinations.length > 0 && (
          <div className="p-6 border-t border-border/50">
            <button
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all rose-glow"
              data-testid="btn-enquire-wishlist"
            >
              Enquire About All {wishlistedDestinations.length} Destinations
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
