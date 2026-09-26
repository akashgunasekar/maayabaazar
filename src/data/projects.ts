import { Project, ProjectCategoryKey } from "@/types";

export interface ProjectCategoryMeta {
  key: ProjectCategoryKey;
  label: string;
  description: string;
}

export const projectCategoriesList: ProjectCategoryMeta[] = [
  {
    key: "films",
    label: "Films",
    description: "Theatrical feature films, cinematic storytelling, and acclaimed credentials.",
  },
  {
    key: "ott-projects",
    label: "OTT Projects",
    description: "Original series, digital streaming content, and episodic entertainment.",
  },
  {
    key: "music-events",
    label: "Music Events",
    description: "Multi-genre music festivals, acoustic concerts, and symphonic showcases.",
  },
  {
    key: "concerts",
    label: "Concerts",
    description: "High-capacity stadium tours and live artist concert experiences.",
  },
  {
    key: "entertainment-shows",
    label: "Entertainment Shows",
    description: "Award ceremonies, televised specials, and reality entertainment galas.",
  },
  {
    key: "corporate-events",
    label: "Corporate Events",
    description: "Product unveilings, executive conferences, and brand activations.",
  },
  {
    key: "celebrity-events",
    label: "Celebrity Events",
    description: "Star-studded promotional tours, public appearances, and meetups.",
  },
  {
    key: "international-projects",
    label: "International Projects",
    description: "Overseas film production logistics, global concert tours, and cultural summits.",
  },
  {
    key: "brand-campaigns",
    label: "Brand Campaigns",
    description: "Creative digital campaigns, commercial films, and promotional narratives.",
  },
];

// Verified Exclusive Project Portfolio: Key Projects & Feature Film Credentials
export const projectsData: Project[] = [
  // ----------------------------------------------------
  // SECTION: KEY PROJECTS
  // ----------------------------------------------------
  {
    id: "muthiah-muralidaran-biopic",
    slug: "muthiah-muralidaran-biopic",
    title: "Muthiya Murlidharan Bio Pic",
    categoryKey: "films",
    categoryLabel: "Films",
    sectionGroup: "key-projects",
    tagline: "Cinematic Sports Biopic",
    overview:
      "The monumental cinematic biographical feature film chronicling the extraordinary life, struggles, and international cricket legacy of bowling icon Muthiah Muralidaran — portraying his journey from humble beginnings to claiming a world-record 800 international Test wickets.",
    image: {
      src: "/images/projects/muthiah-muralidaran.png",
      alt: "Muthiya Murlidharan Bio Pic Poster",
      caption: "Key Projects — Muthiya Murlidharan Bio Pic",
    },
    status: "In Production",
    isFeatured: true,
    highlightBadges: ["Key Projects", "Bio Pic", "Cricket Legend"],
    roleOrScope: [
      "Feature Film Production",
      "Biopic Screenplay & Creative Development",
      "Stadium & International Shoot Logistics",
      "Worldwide Theatrical Release",
    ],
  },
  {
    id: "jal",
    slug: "jal",
    title: "JAL",
    categoryKey: "films",
    categoryLabel: "Films",
    sectionGroup: "key-projects",
    tagline: "Nominated in 2 Categories for Oscar • Screenplay Inducted in the Oscar's Library",
    overview:
      "High-concept, visually poetic drama set against the stark expanse of the Rann of Kutch focusing on water scarcity and human survival. Critically acclaimed worldwide, JAL was shortlisted in contention across 2 categories at the Academy Awards (Oscars) and its screenplay was permanently inducted into the Margaret Herrick Library of the Academy.",
    image: {
      src: "/images/projects/jal-oscar.png",
      alt: "JAL — Nominated in 2 Categories for Oscar",
      caption: "Key Projects — JAL (Oscar Contender)",
    },
    status: "Completed",
    isFeatured: true,
    highlightBadges: [
      "Key Projects",
      "Nominated in 2 Categories for Oscar",
      "Screenplay Inducted in the Oscar's Library",
    ],
    accolades: [
      "Nominated in 2 Categories for Oscar (Academy Awards — Best Picture & Best Original Score contention)",
      "Screenplay permanently inducted into the Margaret Herrick Library of the Academy of Motion Picture Arts and Sciences (Oscars)",
      "Official Selection across premier global international film festivals",
      "National Film Award Winner for Best Visual Effects",
    ],
    roleOrScope: [
      "Theatrical Feature Production",
      "Academy Awards Oscar Campaign",
      "Global Film Festival Circuit",
      "Cinematic Sound & Score Production",
    ],
  },
  {
    id: "alt-balaji",
    slug: "alt-balaji",
    title: "ALT Balaji",
    categoryKey: "ott-projects",
    categoryLabel: "OTT Projects",
    sectionGroup: "key-projects",
    tagline: "12+ Webshows & Films Produced",
    overview:
      "A landmark high-velocity digital production collaboration delivering over 12+ original web series, episodic dramas, and digital feature films across the ALT Balaji OTT platform, reaching tens of millions of viewers across India and overseas diaspora.",
    image: {
      src: "/images/projects/alt-balaji.png",
      alt: "ALT Balaji — 12+ Webshows & Films Produced",
      caption: "Key Projects — ALT Balaji Digital Streaming Slate",
    },
    status: "Completed",
    isFeatured: true,
    highlightBadges: [
      "Key Projects",
      "12+ Webshows & Films Produced",
      "Leading OTT Streaming Partner",
    ],
    accolades: [
      "Over 12+ original episodic web series and feature films produced for digital streaming",
      "Multi-genre digital entertainment spanning thriller, urban drama, romance, and youth fiction",
      "High-tempo episodic production pipelines achieving multi-million streaming hours",
    ],
    roleOrScope: [
      "OTT Series & Digital Film Production",
      "End-to-End Executive Production & Showrunning",
      "Star Casting & Talent Direction",
      "High-Tempo Post-Production Mastering",
    ],
  },

  // ----------------------------------------------------
  // SECTION: FEATURE FILM CREDENTIALS
  // ----------------------------------------------------
  {
    id: "meri-bhi-suno",
    slug: "meri-bhi-suno",
    title: "Meri Bhi Suno",
    categoryKey: "films",
    categoryLabel: "Films",
    sectionGroup: "feature-film-credentials",
    tagline: "Producer & Director • Music by Maestro Ilaiyaraaja • Presented by Mr. Pahlaj Nihalani",
    roleTitle: "Producer & Director",
    director: "Producer & Director",
    producer: "Producer & Director",
    starring: "Jackie Shroff, Mandira Bedi, Sonu Sood, Reema Lagoo",
    music: "Maestro Ilaiyaraaja",
    presentedBy: "Mr. Pahlaj Nihalani",
    overview:
      "An inspiring, emotionally resonant theatrical feature film produced and directed under consummate artistic leadership. Presented by veteran industry leader Mr. Pahlaj Nihalani, featuring an extraordinary musical score composed by Maestro Ilaiyaraaja, and an illustrious ensemble cast starring Jackie Shroff, Mandira Bedi, Sonu Sood, and the late Reema Lagoo.",
    image: {
      src: "/images/projects/meri-bhi-suno.png",
      alt: "Meri Bhi Suno Feature Film Poster",
      caption: "Feature Film Credentials — Meri Bhi Suno",
    },
    status: "In Production",
    isFeatured: true,
    highlightBadges: [
      "Feature Film Credentials",
      "Producer & Director",
      "Music: Maestro Ilaiyaraaja",
      "Releasing Soon",
    ],
    roleOrScope: [
      "Producer & Director",
      "Original Screenplay & Directorial Execution",
      "Ensemble Star Cast Direction",
      "Original Score Collaboration with Maestro Ilaiyaraaja",
      "Presented by Mr. Pahlaj Nihalani",
    ],
  },
  {
    id: "sss-7",
    slug: "sss-7",
    title: "SSS-7",
    categoryKey: "films",
    categoryLabel: "Films",
    sectionGroup: "feature-film-credentials",
    tagline: "Executive Producer • Starring Abhishek Bachchan • Directed by R. Parthiban",
    roleTitle: "Executive Producer",
    producer: "Produced by Saraswati Entertainment Pvt. Ltd.",
    director: "Directed by R. Parthiban",
    starring: "Abhishek Bachchan & other leading actors",
    overview:
      "An audacious, critically heralded solo-character psychological thriller feature film executive produced in association with Saraswati Entertainment Pvt. Ltd. Directed by National Award-winning visionary R. Parthiban, SSS-7 features Abhishek Bachchan delivering a powerhouse, tour-de-force leading performance carrying the entire narrative single-handedly.",
    image: {
      src: "/images/projects/sss-7.png",
      alt: "SSS-7 Feature Film Poster Starring Abhishek Bachchan",
      caption: "Feature Film Credentials — SSS-7",
    },
    status: "Completed",
    isFeatured: true,
    highlightBadges: [
      "Feature Film Credentials",
      "Executive Producer",
      "Starring Abhishek Bachchan",
      "Directed by R. Parthiban",
    ],
    roleOrScope: [
      "Executive Producer",
      "Production Supervision & Co-Production Logistics",
      "Produced by Saraswati Entertainment Pvt. Ltd.",
      "Directorial Collaboration with R. Parthiban",
      "Pan-India Theatrical Distribution Strategy",
    ],
  },

  // ----------------------------------------------------
  // SECTION: INTERNATIONAL FILM TOURISM INITIATIVES
  // ----------------------------------------------------
  {
    id: "sabah-film-tourism",
    slug: "sabah-film-tourism",
    title: "Sabah — Bollywood & OTT Film Tourism Initiative",
    categoryKey: "international-projects",
    categoryLabel: "International Projects",
    sectionGroup: "international-initiatives",
    tagline: "Lights. Camera. Sabah! • Where Stories Inspire Journeys",
    roleTitle: "Destination Film Tourism Partner",
    clientOrPartner: "Sabah Tourism Board, Malaysia",
    overview:
      "A flagship international film tourism collaboration positioning Sabah, Malaysia as Southeast Asia's leading film-friendly destination for Indian cinema, Bollywood feature films, and major OTT streaming productions. Leveraging film-induced tourism, the initiative connects world-class filming incentives, breathtaking landscapes, and streamlined permissions with India's top entertainment creators.",
    image: {
      src: "/images/projects/sabah-hero-landscape.jpg",
      alt: "Sabah — Bollywood & OTT Film Tourism Initiative",
      caption: "Southeast Asia's Film-Friendly Destination — Sabah, Malaysia",
    },
    status: "Active Initiative",
    isFeatured: true,
    highlightBadges: [
      "International Initiative",
      "Southeast Asia's Film-Friendly Destination",
      "Bollywood & OTT Tourism",
      "5 Strategic Programs",
    ],
    initiatives: [
      {
        number: "01",
        title: "Sabah Film Incentive Program",
        description:
          "Competitive financial incentives, production facilitation, location permits, and tailored logistical support to attract high-value Indian feature films and OTT series.",
      },
      {
        number: "02",
        title: "Bollywood in Sabah Program",
        description:
          "Curated familiarization delegations inviting India's top producers, directors, A-list actors, and veteran location scouts to experience Sabah's cinematic terrain first-hand.",
      },
      {
        number: "03",
        title: "Sabah Screen Showcase",
        description:
          "A comprehensive digital location library and production directory showcasing cinematic locations, premium accommodations, state-of-the-art facilities, and local filming crews.",
      },
      {
        number: "04",
        title: "Music Video & Celebrity Content Program",
        description:
          "High-speed production pipeline encouraging blockbuster Indian music videos, celebrity travel vlogs, and digital influencer series for exponential social reach.",
      },
      {
        number: "05",
        title: "OTT & Reality Show Partnerships",
        description:
          "Strategic co-productions with leading Indian OTT platforms and TV networks for adventure travel series, survival reality shows, lifestyle, and culinary competitions.",
      },
    ],
    benefits: [
      "Reach Millions of Viewers Across India & Global Diaspora",
      "Massive Global Destination Visibility Across Cinematic Screens",
      "Establish Deep Emotional Connection with Travelers & Audiences",
      "Inspire Direct Tourism Footfall to Iconic Filming Locations",
      "Drive Sustainable, High-Yield Long-Term Tourism Economy",
    ],
    pillars: [
      "Pristine Beaches & Tropical Coral Islands",
      "Ancient Rainforests & Exotic Wildlife",
      "Luxury Overwater Resorts & World-Class Hospitality",
      "Rich Indigenous Culture & Heritage",
      "High-Adrenaline Adventure & Eco-Outdoors",
      "Modern Facilities & Filming Infrastructure",
    ],
    roleOrScope: [
      "Destination Film Marketing & Strategic Partnerships",
      "Bilateral India-Malaysia Entertainment Bilateral Bridge",
      "Producer & Director Familiarization Delegations",
      "Location Scouting, Permits & Government Liaison",
      "Incentive Structuring & Co-Production Facilitation",
    ],
  },
];

export async function getAllProjects(): Promise<Project[]> {
  return projectsData;
}

export async function getProjectsByCategory(categoryKey: ProjectCategoryKey): Promise<Project[]> {
  return projectsData.filter((p) => p.categoryKey === categoryKey);
}

export async function getProjectsByGroup(
  group: "key-projects" | "feature-film-credentials" | "international-initiatives"
): Promise<Project[]> {
  return projectsData.filter((p) => p.sectionGroup === group);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projectsData.find((p) => p.slug === slug);
}
