import { useCountdown } from "@/hooks/useCountdown";
import { Tag, Star, ArrowRight, Flame } from "lucide-react";

const dealEndDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000 + 34 * 60 * 1000);

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="glass rounded-xl px-4 py-3 min-w-[72px] text-center rose-glow">
          <span className="countdown-digit">{formatted}</span>
        </div>
      </div>
      <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-2 font-light">{label}</span>
    </div>
  );
}

export default function DealSection() {
  const timeLeft = useCountdown(dealEndDate);

  return (
    <section id="deal" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80"
              alt="Deal destination"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(224,35%,8%)]/95 via-[hsl(224,35%,8%)]/75 to-transparent" />
            <div className="absolute inset-0 light:from-white/95 light:via-white/80 light:to-transparent bg-gradient-to-r hidden light:block" />
          </div>

          <div className="relative z-10 p-8 md:p-16 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-btn border-primary/40 mb-8">
              <Flame className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-primary text-xs font-medium tracking-widest uppercase">Deal of the Week</span>
            </div>

            <h2 className="nazka-heading text-5xl md:text-6xl text-foreground mb-3 leading-tight">
              Amalfi Coast
              <em className="block not-italic text-primary">Escape</em>
            </h2>

            <p className="text-muted-foreground font-light text-base leading-relaxed mb-8 max-w-md">
              Drift through pastel villages, savour freshly pressed limoncello, and fall asleep to the sound of the Tyrrhenian Sea. This week only — at an extraordinary price.
            </p>

            {/* Stars & reviews */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 star-filled fill-current" />
                ))}
              </div>
              <span className="text-foreground font-medium text-sm">4.9</span>
              <span className="text-muted-foreground text-sm">· 1,567 reviews</span>
            </div>

            {/* Pricing */}
            <div className="flex items-end gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Tag className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-xs tracking-widest uppercase font-medium">This week only</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="nazka-heading text-5xl text-primary">$2,299</span>
                  <div className="flex flex-col">
                    <span className="text-muted-foreground text-sm line-through">$3,200</span>
                    <span className="text-green-400 text-xs font-medium">Save $901</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs mt-1">per person · 6 nights all-inclusive</p>
              </div>
            </div>

            {/* Countdown */}
            <div className="mb-10">
              <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-5 font-light">
                Offer expires in
              </p>
              <div className="flex items-start gap-4">
                <CountdownUnit value={timeLeft.days} label="Days" />
                <div className="countdown-digit text-primary/40 mt-2">:</div>
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <div className="countdown-digit text-primary/40 mt-2">:</div>
                <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                <div className="countdown-digit text-primary/40 mt-2">:</div>
                <CountdownUnit value={timeLeft.seconds} label="Seconds" />
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all rose-glow"
                data-testid="btn-claim-deal"
              >
                Claim This Deal
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass-btn text-foreground text-sm font-medium hover:border-primary/40 transition-all"
                data-testid="btn-learn-more-deal"
              >
                View Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
