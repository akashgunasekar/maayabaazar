/**
 * MAAYAA BAZAAR HUB — Core Type Definitions
 * 
 * Brand tagline: "Where Cinema Meets Creativity & Events Become Experiences"
 * Core statement: "We Don't Just Create Events. We Create Experiences."
 */

// ==========================================
// 1. Service Types
// ==========================================
export type ServiceCategoryKey =
  | "cinema-production"
  | "music-entertainment-events"
  | "film-entertainment-events"
  | "corporate-events"
  | "awards-special-events"
  | "digital-media-brand-promotion"
  | "artist-celebrity-management"
  | "international-projects"
  | "event-production";

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategoryKey;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  capabilities: string[];
  deliverables?: string[];
  iconName: string;
  featured?: boolean;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
}

// ==========================================
// 2. Event & Event Category Types
// ==========================================
export type EventCategoryKey =
  | "music-events"
  | "entertainment-events"
  | "film-events"
  | "corporate-events"
  | "cultural-events";

export interface EventSubcategory {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export interface EventCategory {
  id: string;
  slug: string;
  title: string;
  categoryKey: EventCategoryKey;
  description: string;
  subcategories: EventSubcategory[];
  iconName: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  capabilities?: string[];
}

export type EventStatus = "Upcoming" | "Live" | "Past" | "Annual";

export interface Event {
  id: string;
  slug: string;
  title: string;
  categoryKey: EventCategoryKey;
  subcategorySlug?: string;
  date: string;
  isoDate?: string;
  location: string;
  status: EventStatus;
  shortDescription: string;
  fullDescription?: string[];
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  gallery?: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  capacity?: string;
  schedule?: Array<{
    time: string;
    activity: string;
  }>;
  enquiryCta?: {
    label: string;
    href: string;
  };
  isFeatured?: boolean;
}

// ==========================================
// 3. Project Types
// ==========================================
export type ProjectCategoryKey =
  | "films"
  | "ott-projects"
  | "music-events"
  | "concerts"
  | "entertainment-shows"
  | "corporate-events"
  | "celebrity-events"
  | "international-projects"
  | "brand-campaigns";

export interface Project {
  id: string;
  slug: string;
  title: string;
  categoryKey: ProjectCategoryKey;
  categoryLabel: string;
  tagline?: string;
  overview: string;
  clientOrPartner?: string;
  year?: string;
  roleOrScope?: string[];
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  gallery?: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  status?: "Completed" | "In Production" | "Coming Soon";
  isFeatured?: boolean;
}

// ==========================================
// 4. Gallery Types
// ==========================================
export type GalleryCategoryKey =
  | "events"
  | "cinema"
  | "artists"
  | "behind-the-scenes"
  | "international-projects"
  | "production"
  | "concerts";

export interface GalleryItem {
  id: string;
  title: string;
  categoryKey: GalleryCategoryKey;
  categoryLabel: string;
  image: {
    src: string;
    alt: string;
    caption?: string;
  };
  date?: string;
  associatedProjectOrEvent?: string;
}

// ==========================================
// 5. Media & News Types
// ==========================================
export type NewsCategoryKey =
  | "latest-news"
  | "press-releases"
  | "announcements"
  | "event-updates";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  categoryKey: NewsCategoryKey;
  categoryLabel: string;
  publishDate: string;
  isoDate: string;
  summary: string;
  content: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  source?: string;
  isFeatured?: boolean;
}

// ==========================================
// 6. Partner Types
// ==========================================
export interface Partner {
  id: string;
  name: string;
  category: "Production" | "Technology" | "Media" | "Venue" | "International";
  logoUrl?: string;
  description?: string;
  websiteUrl?: string;
}

// ==========================================
// 7. Team Member Types
// ==========================================
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department:
    | "Executive Leadership"
    | "Cinema & Production"
    | "Events & Live Experiences"
    | "Digital Media & Brand"
    | "Operations & Administration";
  bio?: string;
  image?: {
    src: string;
    alt: string;
  };
  isVerified: boolean;
  appointmentStatus?: "Confirmed" | "Search In Progress";
}
