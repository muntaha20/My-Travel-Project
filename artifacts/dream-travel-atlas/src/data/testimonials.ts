export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  destination: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sophia Laurent",
    location: "Paris, France",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=100&q=80",
    rating: 5,
    text: "Dream Travel Atlas turned our anniversary trip to Santorini into something utterly magical. Every detail was curated with such care — the private caldera villa, the candlelit dinner on the cliff edge. I've never felt so transported.",
    destination: "Santorini, Greece",
    date: "March 2026",
  },
  {
    id: "t2",
    name: "Marcus Chen",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "The Kyoto itinerary was extraordinary. Waking before dawn at Fushimi Inari when it's completely empty — that moment alone was worth the journey. An experience I'll carry for the rest of my life.",
    destination: "Kyoto, Japan",
    date: "April 2026",
  },
  {
    id: "t3",
    name: "Elena Vasquez",
    location: "Buenos Aires, Argentina",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "Patagonia through Dream Travel Atlas was the adventure I'd dreamed of for a decade. The guides knew every trail, every hidden viewpoint. Standing before Torres del Paine at golden hour — absolute perfection.",
    destination: "Patagonia, Argentina",
    date: "February 2026",
  },
  {
    id: "t4",
    name: "James Whitfield",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 4,
    text: "Marrakech was a feast for every sense. The riad they arranged was a palace hidden behind an unassuming door — utterly extraordinary. The Sahara night was something I simply cannot put into words.",
    destination: "Marrakech, Morocco",
    date: "January 2026",
  },
  {
    id: "t5",
    name: "Aiko Tanaka",
    location: "Tokyo, Japan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    rating: 5,
    text: "I've travelled extensively, but the Maldives experience Dream Travel Atlas arranged surpassed every expectation. Waking above the lagoon, the water so impossibly clear — it felt like living inside a dream.",
    destination: "Maldives",
    date: "March 2026",
  },
];
