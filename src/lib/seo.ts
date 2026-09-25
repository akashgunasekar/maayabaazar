import type { Metadata } from "next";

export const SITE_URL = "https://maayabaazarhub.com";

export const defaultMetadata: Metadata = {
  title: {
    default: "Maayaa Bazaar Hub | Cinema, Events & Entertainment",
    template: "%s | Maayaa Bazaar Hub",
  },
  description:
    "Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music & Entertainment, Digital Media, Brand Promotions, and International Projects.",
  authors: [{ name: "Maayaa Bazaar Hub" }],
  creator: "Maayaa Bazaar Hub",
  publisher: "Maayaa Bazaar Hub",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Maayaa Bazaar Hub",
    title: "Maayaa Bazaar Hub | Cinema, Events & Entertainment",
    description:
      "Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music & Entertainment, Digital Media, Brand Promotions, and International Projects.",
    images: [
      {
        url: "/images/hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Maayaa Bazaar Hub — Where Cinema Meets Creativity & Events Become Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maayaa Bazaar Hub | Cinema, Events & Entertainment",
    description:
      "Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music & Entertainment, Digital Media, Brand Promotions, and International Projects.",
    images: ["/images/hero-cinematic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Helper to generate page metadata with explicit canonical, OpenGraph, and Twitter tags
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image = "/images/hero-cinematic.jpg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Maayaa Bazaar Hub",
      type: "website",
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
    },
  };
}

/**
 * Structured Organization Schema (JSON-LD)
 * Verified client data only: Chennai, Tamil Nadu, filmmakerram@gmail.com, M. J. Ramanan
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maayaa Bazaar Hub",
    legalName: "Maayaa Bazaar Hub",
    url: SITE_URL,
    logo: `${SITE_URL}/images/maayaa-logo.png`,
    image: `${SITE_URL}/images/hero-cinematic.jpg`,
    description:
      "Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music & Entertainment, Digital Media, Brand Promotions, and International Projects.",
    slogan: "Where Cinema Meets Creativity & Events Become Experiences",
    email: "filmmakerram@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "M. J. Ramanan",
      jobTitle: "Founder & Managing Director",
    },
    sameAs: [
      "https://instagram.com",
      "https://facebook.com",
      "https://youtube.com",
      "https://linkedin.com",
    ],
    knowsAbout: [
      "Cinema Production",
      "Live Concerts & Festivals",
      "Film Events & Launches",
      "Corporate Events & Conclaves",
      "Awards & Special Galas",
      "Digital Media & Brand Promotion",
      "Artist & Celebrity Management",
      "International Production Projects",
      "Event Production & Technical Staging",
    ],
  };
}

/**
 * Structured BreadcrumbList Schema (JSON-LD)
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

/**
 * Structured Service Schema (JSON-LD)
 */
export function generateServiceSchema({
  title,
  slug,
  description,
}: {
  title: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    serviceType: title,
    description,
    provider: {
      "@type": "Organization",
      name: "Maayaa Bazaar Hub",
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/${slug}`,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

/**
 * Structured Event Schema (JSON-LD)
 */
export function generateEventSchema({
  title,
  slug,
  description,
  date,
  location,
  image = "/images/live-concerts.jpg",
  status = "EventScheduled",
}: {
  title: string;
  slug: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  status?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: title,
    description,
    startDate: date,
    eventStatus: `https://schema.org/${status}`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressLocality: location.includes("Chennai") ? "Chennai" : location,
        addressCountry: "IN",
      },
    },
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    url: `${SITE_URL}/events/${slug}`,
    organizer: {
      "@type": "Organization",
      name: "Maayaa Bazaar Hub",
      url: SITE_URL,
    },
  };
}

/**
 * Structured NewsArticle Schema (JSON-LD)
 */
export function generateArticleSchema({
  title,
  slug,
  summary,
  publishDate,
  isoDate,
  image = "/images/film-production.jpg",
}: {
  title: string;
  slug: string;
  summary: string;
  publishDate: string;
  isoDate: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: summary,
    datePublished: isoDate,
    dateModified: isoDate,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    url: `${SITE_URL}/media/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "Maayaa Bazaar Hub",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/maayaa-logo.png`,
      },
    },
    author: {
      "@type": "Organization",
      name: "Maayaa Bazaar Hub",
    },
  };
}
