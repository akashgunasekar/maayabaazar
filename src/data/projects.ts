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
    description: "Theatrical feature films, cinematic storytelling, and commercial releases.",
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

// All verified project content or Coming Soon states
export const projectsData: Project[] = [
  {
    id: "cinema-feature-slate",
    slug: "cinema-feature-slate",
    title: "Feature Film Production Slate",
    categoryKey: "films",
    categoryLabel: "Films",
    tagline: "Theatrical Feature Production",
    overview:
      "Active feature film productions under development and principal photography. Official titles, trailers, and cast announcements will be unveiled in upcoming press releases.",
    image: {
      src: "/images/film-production.jpg",
      alt: "Feature Film Production Stage",
      caption: "Cinema Production Lot & Soundstages",
    },
    status: "In Production",
    isFeatured: true,
  },
  {
    id: "mega-music-concert-series",
    slug: "mega-music-concert-series",
    title: "Live Stadium Concert Tour",
    categoryKey: "concerts",
    categoryLabel: "Concerts",
    tagline: "Stadium Music Production",
    overview:
      "Monumental stadium concert production uniting celebrated musical artists with spatial audio engineering and dynamic stage architecture.",
    image: {
      src: "/images/live-concerts.jpg",
      alt: "Live Stadium Concert Production",
      caption: "Live Stadium Concert Arena",
    },
    status: "Completed",
    isFeatured: true,
  },
  {
    id: "global-entertainment-conclave",
    slug: "global-entertainment-conclave",
    title: "Entertainment & Media Summit",
    categoryKey: "corporate-events",
    categoryLabel: "Corporate Events",
    tagline: "Industry Convention & Conclave",
    overview:
      "Comprehensive convention and corporate conclave gathering international delegates, media buyers, and industry creators across modular exhibition halls.",
    image: {
      src: "/images/events-expo.jpg",
      alt: "Convention and Summit Expo Hall",
      caption: "Corporate Conclave & Exhibition Pavilion",
    },
    status: "Completed",
    isFeatured: true,
  },
];

export async function getAllProjects(): Promise<Project[]> {
  return projectsData;
}

export async function getProjectsByCategory(categoryKey: ProjectCategoryKey): Promise<Project[]> {
  return projectsData.filter((p) => p.categoryKey === categoryKey);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projectsData.find((p) => p.slug === slug);
}
