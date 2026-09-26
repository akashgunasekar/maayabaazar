import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";

import { SITE_URL, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us | Maayaa Bazaar Hub",
  description:
    "Connect with Maayaa Bazaar Hub in Chennai, Tamil Nadu, India. Inquire about Film Production, Event Management, Concerts, Brand Activations, and International Projects.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Maayaa Bazaar Hub",
    description:
      "Connect with Maayaa Bazaar Hub in Chennai, Tamil Nadu, India. Inquire about Film Production, Event Management, Concerts, Brand Activations, and International Projects.",
    url: `${SITE_URL}/contact`,
    siteName: "Maayaa Bazaar Hub",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero-cinematic.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Maayaa Bazaar Hub",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Maayaa Bazaar Hub",
    description:
      "Connect with Maayaa Bazaar Hub in Chennai, Tamil Nadu, India. Inquire about Film Production, Event Management, Concerts, Brand Activations, and International Projects.",
    images: [`${SITE_URL}/images/hero-cinematic.jpg`],
  },
};

export const dynamic = "force-static";

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
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
        badge={
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06152F] border border-[#C99A32]/30 text-xs font-mono text-[#C99A32]">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A32]" />
            <span>DIRECT EXECUTIVE PROTOCOL</span>
          </div>
        }
        title="Let's Create Something Extraordinary."
        description="Whether you are planning a theatrical feature film, stadium concert tour, high-profile corporate summit, or cross-border entertainment activation, our creative and production teams are ready to bring your vision to life."
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#C9C4B8]">
            <Link href="/" className="hover:text-[#FFF8E8] transition-colors">
              Home
            </Link>
            <span className="text-[#FFF8E8]/30">/</span>
            <span className="text-[#C99A32]">Contact</span>
          </nav>
        }
      />

      {/* 2. Interactive Contact Form & Liaison Dossier */}
      <Section background="deepPurple" spacing="lg" borderBottom id="inquiry-form">
        <Suspense
          fallback={
            <div className="min-h-[40vh] flex items-center justify-center text-[#C99A32] font-mono text-xs">
              Loading executive contact portal...
            </div>
          }
        >
          <ContactForm />
        </Suspense>
      </Section>
    </>
  );
}
