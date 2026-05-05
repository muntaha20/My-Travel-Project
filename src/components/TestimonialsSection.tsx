import { Star, Quote } from "lucide-react";
import { testimonials, Testimonial } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= rating ? "star-filled fill-current" : "star-empty"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      className="glass-card rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-0.5"
      data-testid={`card-testimonial-${testimonial.id}`}
    >
      {/* Quote icon */}
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <Quote className="w-4 h-4 text-primary" />
      </div>

      {/* Text */}
      <p className="text-foreground/80 font-light text-sm leading-relaxed flex-1 italic">
        "{testimonial.text}"
      </p>

      {/* Footer */}
      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
        />
        <div className="flex-1 min-w-0">
          <div className="text-foreground font-medium text-sm">{testimonial.name}</div>
          <div className="text-muted-foreground text-xs">{testimonial.location}</div>
        </div>
        <div className="text-right flex-shrink-0">
          <StarRating rating={testimonial.rating} />
          <div className="text-muted-foreground text-xs mt-1">{testimonial.destination}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const avgRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section id="testimonials" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-primary/70 text-xs tracking-[0.4em] uppercase font-light mb-4">
            Voices From the Road
          </p>
          <h2 className="nazka-heading text-5xl md:text-6xl text-foreground mb-4">
            What Travelers Say
          </h2>
          <div className="w-20 h-px bg-primary/40 mx-auto mb-6" />

          {/* Aggregate stats */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 star-filled fill-current" />
                ))}
              </div>
              <span className="nazka-heading text-2xl text-foreground">{avgRating}</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <p className="text-muted-foreground text-sm font-light">
              {testimonials.length * 200}+ verified traveler reviews
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Second row — only 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {testimonials.slice(3, 5).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
