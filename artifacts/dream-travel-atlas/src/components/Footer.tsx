import { Globe, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Globe className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="nazka-heading text-lg text-foreground tracking-widest uppercase">
                  Dream Travel Atlas
                </span>
              </div>
            </div>
            <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-sm">
              Curating extraordinary journeys for those who believe the world's most beautiful places deserve to be experienced, not just seen.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full glass-btn flex items-center justify-center hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-foreground text-sm font-medium tracking-widest uppercase mb-5">Destinations</h4>
            <ul className="space-y-3">
              {["Europe", "Asia", "Americas", "Africa", "Oceania"].map((item) => (
                <li key={item}>
                  <a href="#destinations" className="text-muted-foreground text-sm font-light hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground text-sm font-medium tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Story", "Press", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground text-sm font-light hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 glass rounded-2xl p-6">
            <div className="flex-1">
              <h4 className="nazka-heading text-xl text-foreground mb-1">Whispers from the atlas</h4>
              <p className="text-muted-foreground text-sm font-light">Exclusive deals and hidden destinations, delivered weekly.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="flex-1 flex items-center gap-2 bg-white/5 rounded-xl px-4 py-3 border border-white/10 focus-within:border-primary/40 transition-colors min-w-[220px]">
                <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  data-testid="input-newsletter"
                />
              </div>
              <button className="px-5 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap rose-glow">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
          <p>© 2026 Dream Travel Atlas. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
