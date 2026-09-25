import { Partner } from "@/types";

export interface PartnerCategoryMeta {
  category: "Production" | "Technology" | "Media" | "Venue" | "International";
  title: string;
  description: string;
}

export const partnerCategoriesList: PartnerCategoryMeta[] = [
  {
    category: "Production",
    title: "Cinema & Technical Production Alliances",
    description: "Camera houses, lighting rigging specialists, sound design studios, and equipment providers.",
  },
  {
    category: "Technology",
    title: "Audio-Visual & Broadcast Infrastructure",
    description: "Acoustic audio manufacturers, LED display suppliers, and multi-camera broadcast partners.",
  },
  {
    category: "Media",
    title: "Media Networks & Broadcasting Houses",
    description: "Satellite television channels, digital streaming platforms, and entertainment news networks.",
  },
  {
    category: "Venue",
    title: "Arenas, Convention Grounds & Colosseums",
    description: "Open-air colosseums, indoor exhibition auditoriums, and convention complex facilities.",
  },
  {
    category: "International",
    title: "Cross-Border Promoters & Production Houses",
    description: "Overseas concert promoters, distribution agencies, and international filming liaisons.",
  },
];

// Explicitly no fictional partners invented; partner announcements are forthcoming via official press releases
export const partnersData: Partner[] = [];

export async function getAllPartners(): Promise<Partner[]> {
  return partnersData;
}
