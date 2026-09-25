import { NewsArticle, NewsCategoryKey } from "@/types";

export interface NewsCategoryMeta {
  key: NewsCategoryKey;
  label: string;
}

export const newsCategoriesList: NewsCategoryMeta[] = [
  { key: "latest-news", label: "Latest News" },
  { key: "press-releases", label: "Press Releases" },
  { key: "announcements", label: "Announcements" },
  { key: "event-updates", label: "Event Updates" },
];

export const mediaArticlesData: NewsArticle[] = [
  {
    id: "announcing-maayaa-bazaar-hub-cinema-slate",
    slug: "announcing-maayaa-bazaar-hub-cinema-slate",
    title: "Maayaa Bazaar Hub Unveils New Creative Cinema & Live Entertainment Slate",
    categoryKey: "announcements",
    categoryLabel: "Announcements",
    publishDate: "October 14, 2026",
    isoDate: "2026-10-14",
    summary:
      "Maayaa Bazaar Hub formalizes its integrated entertainment strategy, uniting feature film production, stadium concerts, and brand experiences under one creative banner.",
    content: [
      "Maayaa Bazaar Hub has formally presented its comprehensive entertainment roadmap focusing on high-concept theatrical cinema, monumental music events, and turnkey experiential staging.",
      "Rooted in the philosophy of 'Where Cinema Meets Creativity & Events Become Experiences,' the company pairs disciplined production management with world-standard technical craft.",
      "The initiative establishes integrated line production frameworks that streamline script development, soundstage filming, multi-camera broadcasting, and nationwide promotional launches under a unified management team.",
    ],
    image: {
      src: "/images/film-production.jpg",
      alt: "Cinema Production Lot Announcement",
      caption: "Creative Production & Studio Infrastructure",
    },
    isFeatured: true,
  },
  {
    id: "stadium-concert-production-standards",
    slug: "stadium-concert-production-standards",
    title: "Setting New Benchmarks in Stadium Live Music & Spatial Sound Experiences",
    categoryKey: "event-updates",
    categoryLabel: "Event Updates",
    publishDate: "September 28, 2026",
    isoDate: "2026-09-28",
    summary:
      "Exploring how precision spatial acoustic delays, automated lighting grids, and high-throughput crowd management redefine the live concert experience.",
    content: [
      "Monumental live events demand seamless technical synthesis. Maayaa Bazaar Hub outlines its production frameworks for stadium-tier concert tours, from 120-ton touring truss loads to uniform 360° frequency dispersion.",
      "Audience safety, rapid ingress/egress, and acoustic immersion stand at the forefront of every production.",
      "By utilizing calibrated delay towers and real-time acoustic modeling, our concert engineering ensures that every spectator experiences identical auditory punch and vocal clarity.",
    ],
    image: {
      src: "/images/live-concerts.jpg",
      alt: "Live Concert Stadium Rigging",
      caption: "Stadium Live Music Production",
    },
    isFeatured: true,
  },
  {
    id: "press-release-cross-border-initiatives",
    slug: "press-release-cross-border-initiatives",
    title: "Press Release: International Co-Productions & Global Touring Alliances",
    categoryKey: "press-releases",
    categoryLabel: "Press Releases",
    publishDate: "August 12, 2026",
    isoDate: "2026-08-12",
    summary:
      "Official corporate announcement detailing bilateral production collaborations and overseas concert tours scheduled across international venues.",
    content: [
      "Maayaa Bazaar Hub confirms international alliances supporting cross-border feature film shoots and global concert tours for diaspora audiences.",
      "The initiative ensures seamless permitting, multinational crew deployment, and global standard technical delivery.",
      "Through strategic relationships with international arena operators and filming commissions, the company facilitates turnkey overseas operations with domestic cost discipline.",
    ],
    image: {
      src: "/images/events-expo.jpg",
      alt: "Global Media Alliances",
      caption: "International Media & Production Alliances",
    },
    isFeatured: false,
  },
  {
    id: "maayaa-bazaar-hub-production-initiatives",
    slug: "maayaa-bazaar-hub-production-initiatives",
    title: "Maayaa Bazaar Hub Advances End-to-End Creative Staging & Sound Architecture",
    categoryKey: "latest-news",
    categoryLabel: "Latest News",
    publishDate: "November 04, 2026",
    isoDate: "2026-11-04",
    summary:
      "An overview of Maayaa Bazaar Hub's expanding technical infrastructure, covering multi-camera broadcast switching, acoustic delay towers, and turnkey line production governance.",
    content: [
      "As entertainment productions increase in technical sophistication, Maayaa Bazaar Hub reinforces its core capabilities across staging, acoustic calibration, and broadcast switching.",
      "From high-throughput corporate conventions to star-studded audio launches, our single-window delivery guarantees seamless audio-visual alignment and strict schedule compliance.",
      "Media partners and corporate clients benefit from unified accountability without vendor fragmentation.",
    ],
    image: {
      src: "/images/arena-spectacle.jpg",
      alt: "Creative Staging & Technical Rigging",
      caption: "High-Capacity Technical Arena Infrastructure",
    },
    isFeatured: true,
  },
];

export async function getAllNewsArticles(): Promise<NewsArticle[]> {
  return mediaArticlesData;
}

export async function getNewsArticlesByCategory(categoryKey: NewsCategoryKey): Promise<NewsArticle[]> {
  return mediaArticlesData.filter((a) => a.categoryKey === categoryKey);
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | undefined> {
  return mediaArticlesData.find((a) => a.slug === slug);
}
