import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Target,
  Compass,
  ArrowRight,
  Film,
  Music,
  CheckCircle2,
  Building2,
  Globe,
  Award,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { CreativeProcessSection } from "@/components/sections/CreativeProcessSection";
import { WhyMaayaaBazaarSection } from "@/components/sections/WhyMaayaaBazaarSection";

import { SITE_URL, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us | Maayaa Bazaar Hub",
  description:
    "Learn about Maayaa Bazaar Hub, our story, vision, mission, creative process, and foundational pillars across cinema, entertainment, and live events.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Us | Maayaa Bazaar Hub",
    description:
      "Learn about Maayaa Bazaar Hub, our story, vision, mission, creative process, and foundational pillars across cinema, entertainment, and live events.",
    url: `${SITE_URL}/about`,
    siteName: "Maayaa Bazaar Hub",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero-cinematic.jpg`,
        width: 1200,
        height: 630,
        alt: "About Maayaa Bazaar Hub",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Maayaa Bazaar Hub",
    description:
      "Learn about Maayaa Bazaar Hub, our story, vision, mission, creative process, and foundational pillars across cinema, entertainment, and live events.",
    images: [`${SITE_URL}/images/hero-cinematic.jpg`],
  },
};

export const dynamic = "force-static";

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. HERO */}
      <PageHero
        eyebrow="ABOUT MAAYAA BAZAAR HUB"
        title="Creating Entertainment. Building Experiences."
        description="Maayaa Bazaar Hub is a creative media and entertainment company focused on Film Production, Event Management, Music & Entertainment, Digital Media, Brand Promotions, and International Projects."
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#C9C4B8]">
            <Link href="/" className="hover:text-[#FFF8E8] transition-colors">
              Home
            </Link>
            <span className="text-[#FFF8E8]/30">/</span>
            <span className="text-[#C99A32]">About</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button href="/services" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Our Services
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Let&apos;s Create
            </Button>
          </div>
        }
      />

      {/* 2. OUR STORY */}
      <Section background="deepPurple" spacing="lg" borderBottom id="our-story">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Copy */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Our Journey & Purpose"
                title="Rooted in Cinema. Dedicated to Live Experiences."
                size="lg"
              />

              <blockquote className="p-5 rounded-2xl bg-[#020817] border-l-2 border-[#C99A32] text-[#FFF8E8] font-[var(--font-heading)] text-lg sm:text-xl font-bold tracking-tight">
                &ldquo;We Don&apos;t Just Create Events. We Create Experiences.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-[#C9C4B8] leading-relaxed">
                Maayaa Bazaar Hub was conceived as a dynamic entertainment company that bridges the boundary between cinematic storytelling and live physical spectacle. We believe that whether on a cinema screen or inside a packed concert stadium, powerful entertainment connects with people on an emotional, visceral level.
              </p>

              <p className="text-sm sm:text-base text-[#C9C4B8] leading-relaxed">
                Our operations integrate theatrical film production, large-format musical concerts, movie promotional galas, high-profile corporate conventions, and cross-border international initiatives. By combining disciplined production governance with premier creative talent and cutting-edge audio-visual infrastructure, we deliver turnkey excellence across every vertical.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Button href="/services" variant="outline" size="sm">
                  View All Nine Pillars
                </Button>
                <Button href="/projects" variant="outline-gold" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Explore Our Slate
                </Button>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#020817] border border-[#FFF8E8]/10 shadow-[0_12px_32px_rgba(2,8,23,0.8)]">
                <Image
                  src="/images/film-production.jpg"
                  alt="Cinema Production Studio"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C99A32] block">
                    Cinema
                  </span>
                  <p className="text-xs font-bold text-[#FFF8E8]">
                    Turnkey Film Stages
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#020817] border border-[#FFF8E8]/10 shadow-[0_12px_32px_rgba(2,8,23,0.8)] translate-y-6">
                <Image
                  src="/images/live-concerts.jpg"
                  alt="Live Concert Spectacle"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C99A32] block">
                    Live Spectacles
                  </span>
                  <p className="text-xs font-bold text-[#FFF8E8]">
                    Stadium Tours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 3. VISION & 4. MISSION */}
      <Section background="midnight" spacing="lg" borderBottom id="vision-mission">
        <FadeIn direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#06152F] to-[#020817] border border-[#C99A32]/40 relative overflow-hidden shadow-[0_20px_50px_rgba(2,8,23,0.9)] flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#020817] border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32] mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-[#C99A32] block mb-3 font-semibold">
                  Our Vision
                </span>

                <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FFF8E8] mb-6 leading-snug">
                  &ldquo;To Build a New Destination for Cinema, Entertainment &amp; Experiences.&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed mb-6">
                  We envision Maayaa Bazaar Hub as a world-class creative powerhouse where artistic imagination unites with cutting-edge production craft—setting new standards for feature cinema, unforgettable live concerts, and premium brand entertainment.
                </p>
              </div>

              <div className="pt-6 border-t border-[#FFF8E8]/[0.08] flex items-center gap-2 text-xs font-mono text-[#C99A32]">
                <Sparkles className="w-4 h-4" />
                <span>Envisioning the Next Era of Entertainment</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#06152F] to-[#020817] border border-[#FFF8E8]/10 hover:border-[#C99A32]/40 relative overflow-hidden shadow-[0_20px_50px_rgba(2,8,23,0.9)] flex flex-col justify-between group transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#020817] border border-[#FFF8E8]/20 flex items-center justify-center text-[#FFF8E8] mb-6 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6 text-[#C99A32]" />
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-[#C99A32] block mb-3 font-semibold">
                  Our Mission
                </span>

                <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FFF8E8] mb-6 leading-snug">
                  &ldquo;To create meaningful entertainment through creativity, technology, talent, and professional execution.&rdquo;
                </h3>

                <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed mb-6">
                  Our daily mission is to execute every film shoot, stage construction, artist tour, and corporate summit with total operational discipline, audience empathy, and the highest standards of audio-visual artistry.
                </p>
              </div>

              <div className="pt-6 border-t border-[#FFF8E8]/[0.08] flex items-center gap-2 text-xs font-mono text-[#FFF8E8]/80">
                <CheckCircle2 className="w-4 h-4 text-[#C99A32]" />
                <span>Creativity • Technology • Talent • Execution</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 5. CREATIVE PROCESS (01 Concept to 06 Experience) */}
      <CreativeProcessSection />

      {/* 6. WHY MAAYAA BAZAAR (6 Foundational Pillars) */}
      <WhyMaayaaBazaarSection />

      {/* 7. CLOSING CTA */}
      <Section background="midnight" spacing="lg" borderTop className="relative overflow-hidden">
        <FadeIn direction="up">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-b from-[#06152F] to-[#020817] border border-[#C99A32]/40 text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C99A32] block">
              Work With Us
            </span>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-5xl font-black text-[#FFF8E8] tracking-tight">
              Ready to Collaborate with Maayaa Bazaar Hub?
            </h2>

            <p className="text-sm sm:text-base text-[#C9C4B8] max-w-xl mx-auto leading-relaxed">
              Explore our comprehensive services across cinema production, live events, and international entertainment initiatives.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Let&apos;s Create
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
