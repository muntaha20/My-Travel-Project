import { Sun, Moon, Globe, Heart } from "lucide-react";
import { Theme } from "@/hooks/useTheme";

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  wishlistCount: number;
  onWishlistClick: () => void;
}

export default function Navbar({ theme, onToggleTheme, wishlistCount, onWishlistClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5" data-testid="nav-logo">
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
            <Globe className="w-4 h-4 text-primary" />
          </div>
          <div>
            <span className="nazka-heading text-xl text-foreground tracking-widest uppercase">
              Dream Travel
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-primary/80 uppercase font-light -mt-1">
              Atlas
            </span>
          </div>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#destinations" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Destinations
          </a>
          <a href="#deal" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Deals
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide">
            Stories
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Wishlist */}
          <button
            onClick={onWishlistClick}
            className="relative glass-btn rounded-full w-9 h-9 flex items-center justify-center hover:border-primary/40 transition-all"
            data-testid="btn-wishlist-nav"
            aria-label="View wishlist"
          >
            <Heart className="w-4 h-4 text-muted-foreground" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-white text-[10px] flex items-center justify-center font-medium">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="glass-btn rounded-full w-9 h-9 flex items-center justify-center hover:border-primary/40 transition-all"
            data-testid="btn-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-muted-foreground hover:text-amber-400 transition-colors" />
            ) : (
              <Moon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
            )}
          </button>

          {/* CTA */}
          <button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all rose-glow">
            Explore Now
          </button>
        </div>
      </div>
    </nav>
  );
}
