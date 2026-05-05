export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
  duration: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    region: "Europe",
    description: "Where volcanic cliffs kiss the Aegean Sea",
    longDescription: "Experience the iconic blue-domed churches and breathtaking caldera sunsets that have made Santorini the jewel of the Cyclades.",
    price: 2890,
    rating: 4.9,
    reviewCount: 1248,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    tags: ["Luxury", "Beach", "Romance"],
    duration: "7 nights",
    highlights: ["Oia sunset", "Caldera cruise", "Wine tasting", "Akrotiri ruins"],
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "Asia",
    description: "Ancient temples cloaked in cherry blossom mist",
    longDescription: "Walk through the thousand torii gates of Fushimi Inari, marvel at the golden pavilion, and find serenity in bamboo groves.",
    price: 3450,
    rating: 4.8,
    reviewCount: 2103,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    tags: ["Culture", "Nature", "Spiritual"],
    duration: "10 nights",
    highlights: ["Fushimi Inari", "Arashiyama bamboo", "Tea ceremony", "Geisha district"],
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    region: "South America",
    description: "The lost city floating above Andean clouds",
    longDescription: "Trek the legendary Inca Trail through cloud forests to discover the mystical citadel of Machu Picchu at sunrise.",
    price: 2650,
    rating: 4.9,
    reviewCount: 987,
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    tags: ["Adventure", "History", "Hiking"],
    duration: "8 nights",
    highlights: ["Inca Trail trek", "Sun Gate sunrise", "Sacred Valley", "Aguas Calientes"],
  },
  {
    id: "amalfi",
    name: "Amalfi Coast",
    country: "Italy",
    region: "Europe",
    description: "Pastel villages cascading into azure waters",
    longDescription: "Drive the dramatic coastal road past Positano, Ravello and Amalfi — a symphony of lemon groves, cerulean sea and terracotta rooftops.",
    price: 3200,
    rating: 4.8,
    reviewCount: 1567,
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80",
    tags: ["Luxury", "Romance", "Scenic"],
    duration: "6 nights",
    highlights: ["Positano stroll", "Ravello gardens", "Limoncello tasting", "Boat tour"],
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "Asia",
    description: "Island of the Gods, where rice terraces meet ritual",
    longDescription: "Find balance between temples draped in incense, emerald rice paddies, world-class surf breaks and healing jungle retreats.",
    price: 1980,
    rating: 4.7,
    reviewCount: 3421,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    tags: ["Spiritual", "Beach", "Wellness"],
    duration: "9 nights",
    highlights: ["Tegallalang rice terrace", "Uluwatu temple", "Ubud healing", "Seminyak sunset"],
  },
  {
    id: "patagonia",
    name: "Patagonia",
    country: "Argentina & Chile",
    region: "South America",
    description: "Wind-sculpted peaks at the edge of the world",
    longDescription: "Hike through Torres del Paine National Park, traverse ice fields and witness the raw, untamed wilderness of Patagonia.",
    price: 4100,
    rating: 4.9,
    reviewCount: 634,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    tags: ["Adventure", "Hiking", "Wilderness"],
    duration: "12 nights",
    highlights: ["Torres del Paine", "Perito Moreno glacier", "W Trek", "Punta Arenas"],
  },
  {
    id: "morocco",
    name: "Marrakech",
    country: "Morocco",
    region: "Africa",
    description: "A labyrinth of spice, colour and ancient mystery",
    longDescription: "Lose yourself in the labyrinthine medina, sip mint tea in ornate riads, and venture into the Sahara for a night beneath a billion stars.",
    price: 1650,
    rating: 4.6,
    reviewCount: 2089,
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80",
    tags: ["Culture", "Desert", "Exotic"],
    duration: "7 nights",
    highlights: ["Djemaa el-Fna", "Sahara camel trek", "Atlas Mountains", "Souks"],
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "Asia",
    description: "Overwater bungalows above crystalline atolls",
    longDescription: "Drift above coral gardens in a private overwater villa, snorkel with manta rays and surrender to absolute tropical paradise.",
    price: 5800,
    rating: 5.0,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    tags: ["Luxury", "Beach", "Romance"],
    duration: "6 nights",
    highlights: ["Overwater bungalow", "Snorkelling", "Manta ray diving", "Sunset cruise"],
  },
  {
    id: "iceland",
    name: "Iceland",
    country: "Iceland",
    region: "Europe",
    description: "Northern lights dance over volcanic fire and ice",
    longDescription: "Chase the aurora borealis, soak in geothermal lagoons, and trek across lava fields to thundering waterfalls.",
    price: 3750,
    rating: 4.8,
    reviewCount: 1203,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    tags: ["Adventure", "Nature", "Scenic"],
    duration: "8 nights",
    highlights: ["Northern lights", "Blue Lagoon", "Ring Road", "Jökulsárlón glacier"],
  },
];

export const regions = ["All", "Europe", "Asia", "South America", "Africa"];

export const priceSortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating-desc" },
];
