import { EventCategory, Event } from "@/types";

export const eventCategoriesData: EventCategory[] = [
  {
    id: "music-events",
    slug: "music-events",
    title: "Music Events",
    categoryKey: "music-events",
    description:
      "High-energy live music concerts, monumental touring festivals, symphonic orchestras, and celebratory multi-artist performances engineered with spatial acoustic fidelity.",
    subcategories: [
      {
        id: "live-concerts",
        slug: "live-concerts",
        name: "Live Concerts",
        description: "Stadium and arena concerts featuring celebrated vocalists, rock bands, and musical ensembles.",
      },
      {
        id: "mega-music-festivals",
        slug: "mega-music-festivals",
        name: "Mega Music Festivals",
        description: "Multi-day music festivals with multi-stage audio environments and camping/hospitality compounds.",
      },
      {
        id: "orchestra-symphony",
        slug: "orchestra-symphony",
        name: "Orchestra / Symphony",
        description: "Grand acoustic orchestral performances and cinematic musical tributes with 60+ piece ensembles.",
      },
      {
        id: "tribute-concerts",
        slug: "tribute-concerts",
        name: "Tribute Concerts",
        description: "Commemorative concerts celebrating musical legends, regional heritage, and legendary composers.",
      },
      {
        id: "multi-artist-concerts",
        slug: "multi-artist-concerts",
        name: "Multi-Artist Concerts",
        description: "Ensemble performances uniting acclaimed playback singers and instrumentalists on a single stage.",
      },
    ],
    iconName: "Music",
    image: {
      src: "/images/live-concerts.jpg",
      alt: "Stadium Live Concert Stage with Spatial Lighting Rigs",
      caption: "Live Concert Arena Rigging & Spatial 360° Acoustics",
    },
    capabilities: [
      "Spatial 360° line arrays & delay tower acoustic calibration",
      "High-tonnage overhead aluminum truss rigging & motor hoists",
      "Automated robotic moving heads & kinetic laser projection",
      "High-throughput spectator ingress/egress & multi-tier crowd safety",
      "Artist liaison, hospitality compounds & green room suites",
    ],
  },
  {
    id: "entertainment-events",
    slug: "entertainment-events",
    title: "Entertainment Events",
    categoryKey: "entertainment-events",
    description:
      "Prestigious award ceremonies, televised reality show finales, and glamorous celebrity appearances delivered with broadcast-grade stagecraft.",
    subcategories: [
      {
        id: "award-shows",
        slug: "award-shows",
        name: "Award Shows",
        description: "Opulent entertainment galas honoring creative and artistic brilliance across cinema and media.",
      },
      {
        id: "reality-show-events",
        slug: "reality-show-events",
        name: "Reality Show Events",
        description: "Televised live entertainment show finales and grand performance galas with audience voting.",
      },
      {
        id: "celebrity-events",
        slug: "celebrity-events",
        name: "Celebrity Events",
        description: "High-profile celebrity meetups, special guest appearances, and fan engagement activations.",
      },
    ],
    iconName: "Sparkles",
    image: {
      src: "/images/summit-awards-gala.jpg",
      alt: "Opulent Entertainment Awards and Star Night Gala",
      caption: "Opulent Entertainment Gala Plenary Hall",
    },
    capabilities: [
      "Red-carpet grand arrivals & media wall construction",
      "Broadcast television live multi-camera switching & uplink links",
      "Celebrity liaison, VIP private transit & security escorts",
      "Digital teleprompter systems & stage show cue coordination",
      "VIP seating tier architecture & luxury banquet protocol",
    ],
  },
  {
    id: "film-events",
    slug: "film-events",
    title: "Film Events",
    categoryKey: "film-events",
    description:
      "Star-studded movie promotional events, theatrical audio launches, teaser reveals, and victory celebrations that ignite nationwide anticipation.",
    subcategories: [
      {
        id: "film-audio-launch",
        slug: "film-audio-launch",
        name: "Film Audio Launch",
        description: "Spectacular stage events celebrating music soundtrack releases with cast, composer, and crew.",
      },
      {
        id: "movie-pre-release",
        slug: "movie-pre-release",
        name: "Movie Pre-Release",
        description: "Massive pre-theatrical gatherings generating nationwide release anticipation among thousands of fans.",
      },
      {
        id: "trailer-launch",
        slug: "trailer-launch",
        name: "Trailer Launch",
        description: "High-impact cinematic reveals for mainstream media and film enthusiasts on calibrated LED screens.",
      },
      {
        id: "teaser-launch",
        slug: "teaser-launch",
        name: "Teaser Launch",
        description: "Theatrical first glimpses capturing early audience curiosity with synchronized teaser rollouts.",
      },
      {
        id: "first-look-launch",
        slug: "first-look-launch",
        name: "First Look Launch",
        description: "Unveiling character posters, aesthetic treatments, and concept teasers to national press.",
      },
      {
        id: "film-success-celebration",
        slug: "film-success-celebration",
        name: "Film Success Celebration",
        description: "Commemorative shield presentations and victory banquets celebrating box office milestones.",
      },
      {
        id: "press-meet",
        slug: "press-meet",
        name: "Press Meet",
        description: "Structured media conferences and journalist Q&A forums with high-speed media distribution.",
      },
    ],
    iconName: "Film",
    image: {
      src: "/images/film-production.jpg",
      alt: "Film Audio Launch and Promotional Conclave Stage",
      caption: "Theatrical Launch & Press Conclave Stage Setup",
    },
    capabilities: [
      "Audio launch spatial stage rigging & multi-camera telecast rigs",
      "Mass fan ingress protocols & crowd safety barriers for pre-release galas",
      "High-speed media kit distribution & live stream broadcast feeds",
      "Synchronized theatrical trailer & teaser video reveals on ultra-bright LEDs",
      "Commemorative shield presentation logistics & memento ceremonies",
    ],
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events",
    categoryKey: "corporate-events",
    description:
      "Pinnacle product unveilings, corporate annual summits, brand activations, and executive award ceremonies executed with corporate polish.",
    subcategories: [
      {
        id: "product-launch",
        slug: "product-launch",
        name: "Product Launch",
        description: "Dramatic experiential unveilings for flagship commercial products and technology.",
      },
      {
        id: "brand-activation",
        slug: "brand-activation",
        name: "Brand Activation",
        description: "Interactive installations and consumer engagement zones driving brand immersion.",
      },
      {
        id: "corporate-conference",
        slug: "corporate-conference",
        name: "Corporate Conference",
        description: "Professional multi-session business symposiums, keynote stages, and breakout panel halls.",
      },
      {
        id: "annual-day",
        slug: "annual-day",
        name: "Annual Day",
        description: "Celebratory annual gatherings fostering team spirit, artistic performances, and leadership vision.",
      },
      {
        id: "award-ceremony",
        slug: "award-ceremony",
        name: "Award Ceremony",
        description: "Recognizing outstanding corporate performance and team contributions in an executive gala setting.",
      },
    ],
    iconName: "Building2",
    image: {
      src: "/images/events-expo.jpg",
      alt: "Corporate Convention and Conclave Complex",
      caption: "Executive Conference & Brand Conclave Complex",
    },
    capabilities: [
      "Automated kinetic LED stage unveilings for flagship products",
      "Multi-session breakout hall audio-visual synchronization",
      "Encrypted corporate live streaming & hybrid remote attendee feeds",
      "Executive delegate accreditation, RFID badging & registration portals",
      "Turnkey exhibition staging & modular brand booth systems",
    ],
  },
  {
    id: "cultural-events",
    slug: "cultural-events",
    title: "Cultural Events",
    categoryKey: "cultural-events",
    description:
      "Vibrant cultural festivals, heritage celebrations, traditional music showcases, and public community gatherings celebrating rich heritage.",
    subcategories: [
      {
        id: "cultural-festivals",
        slug: "cultural-festivals",
        name: "Cultural Festivals",
        description: "Multi-day artistic showcases celebrating rich cultural diversity, classical music, and folk arts.",
      },
      {
        id: "traditional-celebrations",
        slug: "traditional-celebrations",
        name: "Traditional Celebrations",
        description: "Authentic festival observances with traditional decor, acoustic instrumentation, and ceremonial protocols.",
      },
      {
        id: "heritage-events",
        slug: "heritage-events",
        name: "Heritage Events",
        description: "Preserving and presenting indigenous art forms, classical dance, and regional folklore.",
      },
      {
        id: "community-festivals",
        slug: "community-festivals",
        name: "Community Festivals",
        description: "Inclusive neighborhood celebrations, family entertainment fairs, and community gatherings.",
      },
      {
        id: "large-scale-public-celebrations",
        slug: "large-scale-public-celebrations",
        name: "Large-Scale Public Celebrations",
        description: "Mass public gatherings engineered with state-of-the-art stage, sound, lighting, and safety logistics.",
      },
    ],
    iconName: "Users",
    image: {
      src: "/images/festival-grounds.jpg",
      alt: "Cultural Festival and Public Celebration Grounds",
      caption: "Waterfront Cultural Light Celebration Grounds",
    },
    capabilities: [
      "Mass public gathering audio dispersion & spatial delay grids",
      "Multi-stage traditional music, dance & theatrical platforms",
      "Emergency medical stations, municipal permits & safety clearances",
      "Artisan pavilion fabrication, exhibition stalls & heritage displays",
      "Night-time architectural illumination & environmental lighting",
    ],
  },
];

export async function getAllEventCategories(): Promise<EventCategory[]> {
  return eventCategoriesData;
}

export async function getEventCategoryByKey(key: string): Promise<EventCategory | undefined> {
  return eventCategoriesData.find((c) => c.categoryKey === key || c.slug === key);
}

export const sampleEvents: Event[] = [
  {
    id: "music-of-the-millennium",
    slug: "music-of-the-millennium",
    title: "Music of the Millennium — A Reinvention Tour",
    categoryKey: "music-events",
    subcategorySlug: "live-concerts",
    date: "September 28, 2026 (Monday)",
    isoDate: "2026-09-28",
    location: "ITC Grand Chola, Guindy, Chennai",
    status: "Upcoming",
    shortDescription:
      "Cine Musicians Union, Maa Aai Production & Maayaa Bazaar Hub present 'Music of the Millennium: A Reinvention Tour' — First Look & Announcement Date Gala at ITC Grand Chola, Chennai.",
    fullDescription: [
      "Cine Musicians Union, Maa Aai Production, and Maayaa Bazaar Hub proudly present 'Music of the Millennium — A Reinvention Tour'. This epochal musical extravaganza celebrates the timeless legacy of Indian cinematic music while pioneering a futuristic live concert experience.",
      "Commencing with an exclusive First Look and official Announcement Date Gala at the legendary ITC Grand Chola in Chennai on Monday, 28th September 2026 from 7:00 PM onwards, the evening brings together revered composers, virtuoso instrumentalists, acclaimed playback singers, and film industry luminaries.",
      "Under the positioning 'A Timeless Journey Through Music', this reinvention tour honors the unsung legends of the Cine Musicians Union, combining symphonic acoustic grandeur with next-generation spatial soundscapes and kinetic visual storytelling.",
      "Venue Address: ITC Grand Chola, 63 Mount Rd, Little Mount, Guindy, Chennai, Tamil Nadu 600032. Managed and produced with turnkey production excellence by Maayaa Bazaar Hub.",
    ],
    image: {
      src: "/images/reinvention-tour-stage.jpg",
      alt: "Music of the Millennium — Reinvention Tour Stage Announcement at ITC Grand Chola",
      caption: "Reinvention Tour Launch Gala • ITC Grand Chola, Chennai",
    },
    gallery: [
      {
        src: "/images/reinvention-tour-stage.jpg",
        alt: "Cine Musicians Union, Maa Aai Production & Maayaa Bazaar Hub on Stage",
        caption: "Reinvention Tour Stage Launch Ceremony",
      },
      {
        src: "/images/music-of-the-millennium-poster.jpg",
        alt: "Music of the Millennium — A Reinvention Tour Official Poster",
        caption: "Official Announcement Poster",
      },
    ],
    capacity: "VIP & Industry Delegation (7 PM Onwards)",
    schedule: [
      { time: "07:00 PM", activity: "Red Carpet VIP Arrivals & Champagne Reception" },
      { time: "07:30 PM", activity: "Grand Orchestral Overture by Cine Musicians Union" },
      { time: "08:00 PM", activity: "Official Welcome & Keynote by Maayaa Bazaar Hub & Partners" },
      { time: "08:30 PM", activity: "First Look Unveiling & Global Tour Route Announcement" },
      { time: "09:00 PM", activity: "Special Musical Performance Showcase" },
      { time: "09:45 PM", activity: "Executive Networking & Royal Gala Dinner" },
    ],
    enquiryCta: {
      label: "Inquire VIP Access",
      href: "/contact?event=music-of-the-millennium",
    },
    isFeatured: true,
  },
  {
    id: "symphonic-crescendo-concert",
    slug: "symphonic-crescendo-concert",
    title: "Symphonic Crescendo: Live in Concert",
    categoryKey: "music-events",
    subcategorySlug: "live-concerts",
    date: "November 28, 2026",
    isoDate: "2026-11-28",
    location: "Open Air Colosseum Arena",
    status: "Upcoming",
    shortDescription:
      "A grand musical evening uniting acclaimed vocalists and a 60-piece orchestra performing timeless cinematic melodies.",
    image: {
      src: "/images/live-concerts.jpg",
      alt: "Symphonic Crescendo Live Concert Stage",
      caption: "Live Concert Stage Rigging & Performance",
    },
    capacity: "25,000 Attendees",
    isFeatured: true,
  },
  {
    id: "pan-india-film-audio-launch",
    slug: "pan-india-film-audio-launch",
    title: "Grand Theatrical Movie Audio Launch",
    categoryKey: "film-events",
    subcategorySlug: "film-audio-launch",
    date: "December 12, 2026",
    isoDate: "2026-12-12",
    location: "Grand Convention Complex",
    status: "Upcoming",
    shortDescription:
      "Celebrated film cast, director, and music composer present the official soundtrack and theatrical trailer to media and fans.",
    image: {
      src: "/images/summit-awards-gala.jpg",
      alt: "Film Audio Launch Grand Stage",
      caption: "Main Plenary Theatrical Launch Stage",
    },
    capacity: "8,000 Delegates",
    isFeatured: true,
  },
  {
    id: "annual-cinema-excellence-awards",
    slug: "annual-cinema-excellence-awards",
    title: "Cinema Excellence Honors & Awards Gala",
    categoryKey: "entertainment-events",
    subcategorySlug: "award-shows",
    date: "January 16, 2027",
    isoDate: "2027-01-16",
    location: "Auditorium Plenary Hall",
    status: "Upcoming",
    shortDescription:
      "Red carpet arrival followed by an opulent awards ceremony honoring technical and artistic achievements in film.",
    image: {
      src: "/images/events-expo.jpg",
      alt: "Cinema Excellence Awards Stage",
      caption: "Award Ceremony Stage Setup",
    },
    capacity: "5,000 Guests",
    isFeatured: true,
  },
];

export async function getAllEvents(): Promise<Event[]> {
  return sampleEvents;
}

export async function getEventBySlug(slug: string): Promise<Event | undefined> {
  return sampleEvents.find((e) => e.slug === slug);
}

