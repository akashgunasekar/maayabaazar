import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { GalleryClientView } from "@/components/gallery/GalleryClientView";

import { SITE_URL, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gallery & Production Archive | Maayaa Bazaar Hub",
  description:
    "Explore the visual archive of stadium concerts, acoustic cinema stages, red-carpet galas, and live event production rigs managed by Maayaa Bazaar Hub.",
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
  openGraph: {
    title: "Gallery & Production Archive | Maayaa Bazaar Hub",
    description:
      "Explore the visual archive of stadium concerts, acoustic cinema stages, red-carpet galas, and live event production rigs managed by Maayaa Bazaar Hub.",
    url: `${SITE_URL}/gallery`,
    siteName: "Maayaa Bazaar Hub",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/arena-spectacle.jpg`,
        width: 1200,
        height: 630,
        alt: "Visual Production Archive — Maayaa Bazaar Hub",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery & Production Archive | Maayaa Bazaar Hub",
    description:
      "Explore the visual archive of stadium concerts, acoustic cinema stages, red-carpet galas, and live event production rigs managed by Maayaa Bazaar Hub.",
    images: [`${SITE_URL}/images/arena-spectacle.jpg`],
  },
};

export const dynamic = "force-static";

export default function GalleryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
  ]);

  return (
    <>
      {/* Breadcrumb Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="EDITORIAL ARCHIVE & VISUAL PORTFOLIO"
        title="The Experience Gallery"
        description="A visual curation of stadium concert touring stages, acoustic cinema soundstages, red-carpet entertainment galas, and on-ground production rigs."
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#B9B0BE]">
            <Link href="/" className="hover:text-[#FAF8F2] transition-colors">
              Home
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <span className="text-[#D4A72C]">Gallery</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/services" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Production Verticals
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Initiate Project
            </Button>
          </div>
        }
      />

      {/* 2. Interactive Gallery Archive View */}
      <GalleryClientView />
    </>
  );
}
