import { GalleryItem, GalleryCategoryKey } from "@/types";

export interface GalleryCategoryMeta {
  key: GalleryCategoryKey;
  label: string;
}

export const galleryCategoriesList: GalleryCategoryMeta[] = [
  { key: "events", label: "Events" },
  { key: "cinema", label: "Cinema" },
  { key: "artists", label: "Artists" },
  { key: "behind-the-scenes", label: "Behind The Scenes" },
  { key: "international-projects", label: "International Projects" },
  { key: "production", label: "Production" },
  { key: "concerts", label: "Concerts" },
];

export const galleryData: GalleryItem[] = [
  {
    id: "gal-concert-1",
    title: "Stadium Live Concert Stage",
    categoryKey: "concerts",
    categoryLabel: "Concerts",
    image: {
      src: "/images/live-concerts.jpg",
      alt: "Monumental Stadium Concert Stage Setup",
      caption: "Live Stadium Concert Production with 360° Lighting",
    },
    date: "2026",
  },
  {
    id: "gal-cinema-1",
    title: "Soundstage Film Shooting Lot",
    categoryKey: "cinema",
    categoryLabel: "Cinema",
    image: {
      src: "/images/film-production.jpg",
      alt: "Feature Film Production on Acoustic Soundstage",
      caption: "NC-25 Acoustic Soundstage with Robotic Lighting Grids",
    },
    date: "2026",
  },
  {
    id: "gal-events-1",
    title: "Grand Entertainment Gala Hall",
    categoryKey: "events",
    categoryLabel: "Events",
    image: {
      src: "/images/summit-awards-gala.jpg",
      alt: "Grand Entertainment and Cinema Awards Plenary Hall",
      caption: "Architectural Awards Gala and Dinner Setting",
    },
    date: "2026",
  },
  {
    id: "gal-events-2",
    title: "Conclave & Expo Pavilions",
    categoryKey: "events",
    categoryLabel: "Events",
    image: {
      src: "/images/events-expo.jpg",
      alt: "Modular Exhibition and Summit Complex",
      caption: "120,000 sq ft Exhibition Hall Floorplan",
    },
    date: "2026",
  },
  {
    id: "gal-production-1",
    title: "Arena Multi-Tier Production Bowl",
    categoryKey: "production",
    categoryLabel: "Production",
    image: {
      src: "/images/arena-spectacle.jpg",
      alt: "Multi-Discipline Arena Production Stage",
      caption: "Overhead Truss Hoists & Center-Hung Display Cubes",
    },
    date: "2026",
  },
  {
    id: "gal-bts-1",
    title: "Waterfront Cultural Light Celebration",
    categoryKey: "behind-the-scenes",
    categoryLabel: "Behind The Scenes",
    image: {
      src: "/images/festival-grounds.jpg",
      alt: "Waterfront Evening Cultural Festivities",
      caption: "Outdoor Kinetic Light Display & Waterfront Promenade",
    },
    date: "2026",
  },
  {
    id: "gal-artists-1",
    title: "Headline Vocalist Arena Tour",
    categoryKey: "artists",
    categoryLabel: "Artists",
    image: {
      src: "/images/live-concerts.jpg",
      alt: "Celebrated Playback Artist Live on Arena Stage",
      caption: "Live Vocalist Arena Tour with Synchronized Pyrotechnics",
    },
    date: "2026",
  },
  {
    id: "gal-intl-1",
    title: "Global Media Summit & Conclave",
    categoryKey: "international-projects",
    categoryLabel: "International Projects",
    image: {
      src: "/images/events-expo.jpg",
      alt: "Cross-Border Media Conclave & Exhibition Pavilion",
      caption: "International Media Summit & Bilateral Production Conclave",
    },
    date: "2026",
  },
  {
    id: "gal-cinema-2",
    title: "Cinematic Atmosphere & Lighting Rig",
    categoryKey: "cinema",
    categoryLabel: "Cinema",
    image: {
      src: "/images/hero-cinematic.jpg",
      alt: "Cinematic Atmosphere and Soundstage Lighting",
      caption: "Atmospheric Lighting Grids & Pre-Visualization Sets",
    },
    date: "2026",
  },
];

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  return galleryData;
}

export async function getGalleryItemsByCategory(categoryKey: GalleryCategoryKey): Promise<GalleryItem[]> {
  return galleryData.filter((item) => item.categoryKey === categoryKey);
}
