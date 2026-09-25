import React from "react";
import { Metadata } from "next";
import {
  HeroSection,
  AboutSection,
  WhatWeDoSection,
  FeaturedServicesSection,
  EventsSection,
  CreativeProcessSection,
  WhyMaayaaBazaarSection,
  ProjectsSection,
  GalleryPreviewSection,
  PartnersSection,
  MediaNewsSection,
  ContactCtaSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Maayaa Bazaar Hub | Cinema, Events & Entertainment",
  description:
    "Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music & Entertainment, Digital Media, Brand Promotions, and International Projects.",
  alternates: {
    canonical: "https://maayabaazarhub.com",
  },
  openGraph: {
    title: "Maayaa Bazaar Hub | Cinema, Events & Entertainment",
    description:
      "Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music & Entertainment, Digital Media, Brand Promotions, and International Projects.",
    url: "https://maayabaazarhub.com",
    siteName: "Maayaa Bazaar Hub",
    images: [
      {
        url: "https://maayabaazarhub.com/images/hero-cinematic.jpg",
        width: 1200,
        height: 630,
        alt: "Maayaa Bazaar Hub — Where Cinema Meets Creativity & Events Become Experiences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maayaa Bazaar Hub | Cinema, Events & Entertainment",
    description:
      "Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music & Entertainment, Digital Media, Brand Promotions, and International Projects.",
    images: ["https://maayabaazarhub.com/images/hero-cinematic.jpg"],
  },
};

// Guarantee 100% static pre-rendering with zero database calls on request
export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. About: Creating Entertainment. Building Experiences. */}
      <AboutSection />

      {/* 3. What We Do: 9 Service Pillars in Asymmetric Bento */}
      <WhatWeDoSection />

      {/* 4. Featured Services: Deep-Dive Spotlight Across Core Verticals */}
      <FeaturedServicesSection />

      {/* 5. Events: Where Events Become Experiences */}
      <EventsSection />

      {/* 6. Creative Process: 01 Concept to 06 Experience */}
      <CreativeProcessSection />

      {/* 7. Why Maayaa Bazaar: 6 Foundational Pillars */}
      <WhyMaayaaBazaarSection />

      {/* 8. Projects: Active Production Slate & Confidential Slates */}
      <ProjectsSection />

      {/* 9. Gallery: Available Imagery Categories Only */}
      <GalleryPreviewSection />

      {/* 10. Partners: Strategic Alliance Frameworks */}
      <PartnersSection />

      {/* 11. Media & News: Real Supplied Updates */}
      <MediaNewsSection />

      {/* 12. Contact CTA: Let's Create Something Extraordinary */}
      <ContactCtaSection />
    </>
  );
}
