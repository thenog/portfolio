export interface SliderCard {
  image: string;
  title: string;
  description: string;
}

export interface SliderSection {
  title: string;
  cards: SliderCard[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  backgroundImage: string;
  heroImage: string;
  longDescription: string;
  sliderSections: SliderSection[];
  imageCarousel: string[];
  blockQuote: string;
  imageGrid: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "alpine-resort",
    title: "Alpine Resort",
    description:
      "A luxury mountain retreat brand identity and digital experience.",
    backgroundImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80",
    longDescription:
      "This project involved creating a complete brand identity for a luxury alpine resort. From logo design to a full digital experience, every touchpoint was crafted to evoke the serenity and grandeur of mountain living. The visual language draws from natural textures, crisp alpine air, and the warm glow of a lodge fireplace. We developed a responsive website, booking platform, and suite of marketing materials that positioned the resort as a premier destination for discerning travelers.",
    sliderSections: [
      {
        title: "Brand Identity",
        cards: [
          {
            image:
              "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
            title: "Logo System",
            description:
              "A flexible mark inspired by alpine peaks and pristine snow lines",
          },
          {
            image:
              "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800&q=80",
            title: "Color Palette",
            description:
              "Deep forest greens and warm amber tones drawn from the landscape",
          },
          {
            image:
              "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
            title: "Typography",
            description:
              "Elegant serifs paired with clean sans-serifs for readability",
          },
        ],
      },
    ],
    imageCarousel: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    ],
    blockQuote:
      "Where luxury meets the wild. An experience designed to feel as boundless as the horizon.",
    imageGrid: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    ],
  },
  {
    id: "2",
    slug: "neon-nights",
    title: "Neon Nights",
    description:
      "An immersive music festival brand with electrifying visual identity.",
    backgroundImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&q=80",
    longDescription:
      "Neon Nights is a music festival brand that pulses with energy. The visual identity captures the electric atmosphere of live performances through bold gradients, dynamic typography, and immersive motion design. We crafted everything from stage visuals to the mobile app experience, creating a cohesive world that extends the festival beyond the physical venue. The design system is built to scale across merchandise, social media, and environmental graphics.",
    sliderSections: [
      {
        title: "Festival Branding",
        cards: [
          {
            image:
              "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
            title: "Stage Design",
            description:
              "LED-driven stage visuals that react to the music in real time",
          },
          {
            image:
              "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
            title: "Mobile App",
            description:
              "Lineup scheduling, interactive maps, and social features",
          },
          {
            image:
              "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
            title: "Merchandise",
            description:
              "Limited-edition apparel with holographic and UV-reactive prints",
          },
        ],
      },
    ],
    imageCarousel: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    ],
    blockQuote:
      "Feel the bass. See the light. Neon Nights is more than a festival — it's a frequency.",
    imageGrid: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80",
    ],
  },
  {
    id: "3",
    slug: "botanical-studio",
    title: "Botanical Studio",
    description:
      "A wellness brand rooted in nature, designed with organic elegance.",
    backgroundImage:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1400&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1400&q=80",
    longDescription:
      "Botanical Studio is a wellness and skincare brand built around the philosophy that nature provides everything we need. The design direction embraces organic forms, earthy color palettes, and tactile textures that mirror the ingredients in their products. We developed the complete brand system including packaging design, an e-commerce platform, and an editorial content strategy that educates customers about botanical ingredients and sustainable practices.",
    sliderSections: [
      {
        title: "Product Design",
        cards: [
          {
            image:
              "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
            title: "Packaging",
            description:
              "Minimalist glass bottles with hand-illustrated botanical labels",
          },
          {
            image:
              "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
            title: "E-commerce",
            description:
              "Clean shopping experience with ingredient transparency",
          },
          {
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
            title: "Editorial",
            description:
              "Content strategy blending education with brand storytelling",
          },
        ],
      },
    ],
    imageCarousel: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
    ],
    blockQuote:
      "Beauty, distilled. Every product tells a story that begins in the soil and ends with radiance.",
    imageGrid: [
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    ],
  },
  {
    id: "4",
    slug: "urban-canvas",
    title: "Urban Canvas",
    description:
      "Street art meets digital — a platform celebrating urban creativity.",
    backgroundImage:
      "https://images.unsplash.com/photo-1561059488-916d69792237?w=1400&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1561059488-916d69792237?w=1400&q=80",
    longDescription:
      "Urban Canvas is a digital platform that documents and celebrates street art from cities around the world. The project required a bold visual identity that respects the raw energy of street art while creating an accessible digital experience. We built an interactive map, artist profiles, and a curated gallery system. The platform connects artists with property owners and brands, creating new opportunities for public art commissions while preserving the grassroots spirit of the movement.",
    sliderSections: [
      {
        title: "Platform Features",
        cards: [
          {
            image:
              "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80",
            title: "Interactive Map",
            description:
              "Geolocated street art with artist attribution and history",
          },
          {
            image:
              "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
            title: "Artist Profiles",
            description:
              "Portfolio pages with commission inquiries and social links",
          },
          {
            image:
              "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80",
            title: "Curated Gallery",
            description:
              "Themed collections showcasing movements and styles globally",
          },
        ],
      },
    ],
    imageCarousel: [
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80",
      "https://images.unsplash.com/photo-1561059488-916d69792237?w=800&q=80",
    ],
    blockQuote:
      "The city is the gallery. Every wall is an invitation. Urban Canvas makes the invisible visible.",
    imageGrid: [
      "https://images.unsplash.com/photo-1561059488-916d69792237?w=600&q=80",
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=600&q=80",
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&q=80",
    ],
  },
  {
    id: "5",
    slug: "ocean-protocol",
    title: "Ocean Protocol",
    description:
      "A marine conservation initiative with a bold digital presence.",
    backgroundImage:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1400&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1400&q=80",
    longDescription:
      "Ocean Protocol is a marine conservation nonprofit that needed a digital presence as powerful as its mission. We designed a website that immerses visitors in the underwater world through fluid animations, deep blue color palettes, and compelling data visualizations. The platform features interactive ocean health dashboards, donation flows, and educational content. Every design decision was made to create an emotional connection between the user and the ocean, driving engagement and support for conservation efforts.",
    sliderSections: [
      {
        title: "Digital Experience",
        cards: [
          {
            image:
              "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
            title: "Data Dashboard",
            description:
              "Real-time ocean health metrics with interactive visualizations",
          },
          {
            image:
              "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
            title: "Campaign Pages",
            description:
              "Immersive storytelling for specific conservation initiatives",
          },
          {
            image:
              "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
            title: "Donation Flow",
            description:
              "Frictionless giving with impact tracking and reporting",
          },
        ],
      },
    ],
    imageCarousel: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
    ],
    blockQuote:
      "The ocean doesn't need us. We need the ocean. Every wave carries a message worth hearing.",
    imageGrid: [
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(currentSlug: string): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, 4);
}
