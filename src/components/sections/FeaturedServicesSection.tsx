"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Film,
  Music,
  Sparkles,
  Building2,
  Trophy,
  TrendingUp,
  Users,
  Globe,
  Layers,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

interface FeaturedServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  image: string;
  alt: string;
  icon: React.ReactNode;
}

const featuredServicesList: FeaturedServiceItem[] = [
  {
    id: "cinema-production",
    slug: "cinema-production",
    title: "Cinema Production",
    eyebrow: "Vertical 01 • Theatrical Cinema",
    tagline: "Feature Films, Web Series & Production Infrastructure",
    description:
      "A complete studio production ecosystem designed for high-budget theatrical feature films, streaming series, and cinematic commercials. Offering turnkey soundstage support, certified camera packages, robotic lighting grids, and end-to-end line production management.",
    capabilities: [
      "Script development, storyboarding & creative pre-visualization",
      "Line production, budgeting, location scouting & permitting",
      "Acoustic soundstage filming, camera packages & robotic lighting",
      "Executive casting & guild talent agreements",
    ],
    deliverables: ["Theatrical Features", "OTT Series", "Cinematic Commercials"],
    image: "/images/film-production.jpg",
    alt: "Cinema Production Stage",
    icon: <Film className="w-5 h-5" />,
  },
  {
    id: "music-entertainment-events",
    slug: "music-entertainment-events",
    title: "Music & Entertainment Events",
    eyebrow: "Vertical 02 • Live Spectacles",
    tagline: "Stadium Concerts, Symphony Showcases & Mega Festivals",
    description:
      "Large-scale live music spectacles, touring concert productions, and orchestral performances engineered with spatial acoustic fidelity. From high-tonnage overhead truss rigging to synchronized environmental laser design.",
    capabilities: [
      "Stadium concert tour logistics & technical riders",
      "Spatial 360° acoustic engineering & line array calibration",
      "Artist liaison, hospitality compounds & green room suites",
      "High-throughput spectator ingress/egress & crowd safety protocols",
    ],
    deliverables: ["Stadium Concerts", "Music Festivals", "Symphony Showcases"],
    image: "/images/live-concerts.jpg",
    alt: "Live Music Concert Spectacle",
    icon: <Music className="w-5 h-5" />,
  },
  {
    id: "film-entertainment-events",
    slug: "film-entertainment-events",
    title: "Film & Entertainment Events",
    eyebrow: "Vertical 03 • Cinema Milestones",
    tagline: "Audio Launches, Pre-Releases & Movie Premieres",
    description:
      "High-voltage cinema promotional events including star-studded audio launches, pre-release celebrations, theatrical trailer reveals, and press conclaves that generate massive organic anticipation.",
    capabilities: [
      "Audio launch stage design, sound engineering & live telecast rigs",
      "Movie pre-release events accommodating thousands of fans & media",
      "Trailer & teaser launch press conferences with instant distribution",
      "Celebrity red-carpet protocol & national press accreditation",
    ],
    deliverables: ["Audio Launches", "Pre-Release Galas", "Trailer Launches"],
    image: "/images/summit-awards-gala.jpg",
    alt: "Film Audio Launch and Gala Stage",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events",
    eyebrow: "Vertical 04 • Executive Summits",
    tagline: "Conferences, Product Unveilings & Brand Conclaves",
    description:
      "Executive corporate events, annual general meetings, product unveilings, and dealer meets delivered with corporate polish, synchronized AV technology, and turnkey hospitality.",
    capabilities: [
      "Multi-track corporate conference staging & breakout rooms",
      "Product launch reveals with automated kinetic LED stages",
      "Executive delegate management, accreditation & VIP protocol",
      "Hybrid event broadcasting & encrypted corporate streaming",
    ],
    deliverables: ["Corporate Conferences", "Product Launches", "Annual Meets"],
    image: "/images/events-expo.jpg",
    alt: "Corporate Conclave and Exhibition Stage",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    id: "awards-special-events",
    slug: "awards-special-events",
    title: "Awards & Special Events",
    eyebrow: "Vertical 05 • Red Carpet Galas",
    tagline: "Film Awards Galas, Red Carpets & Star Nights",
    description:
      "Glamorous award ceremonies, television network entertainment galas, and bespoke red-carpet celebrations engineered for broadcast perfection and audience enchantment.",
    capabilities: [
      "Red-carpet media arches, photo-call walls & broadcast feeds",
      "Stage choreography, performance artist rehearsals & lighting cues",
      "Broadcast transmission coordination & satellite telecast links",
      "Trophy distribution management & dignitary protocol",
    ],
    deliverables: ["Award Ceremonies", "Star Nights", "Television Galas"],
    image: "/images/summit-awards-gala.jpg",
    alt: "Awards Gala Presentation Stage",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    id: "digital-media-brand-promotion",
    slug: "digital-media-brand-promotion",
    title: "Digital Media & Brand Promotion",
    eyebrow: "Vertical 06 • Digital Amplification",
    tagline: "Creative Campaigns, Content & Influencer Activation",
    description:
      "Integrated promotional strategies bridging digital storytelling, viral video production, influencer partnerships, and on-ground brand activations.",
    capabilities: [
      "Film and event marketing campaigns across digital networks",
      "Short-form video content production & behind-the-scenes teasers",
      "Celebrity & digital creator promotional collaborations",
      "Performance marketing, audience targeting & digital analytics",
    ],
    deliverables: ["Digital Campaigns", "Brand Films", "Influencer Activations"],
    image: "/images/festival-grounds.jpg",
    alt: "Brand Promotion and Media Display",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    id: "artist-celebrity-management",
    slug: "artist-celebrity-management",
    title: "Artist & Celebrity Management",
    eyebrow: "Vertical 07 • Talent Coordination",
    tagline: "Talent Representation, Tour Logistics & Liaison",
    description:
      "Professional coordination and representation for acclaimed playback singers, film personalities, musicians, and performers for film shoots and live tours.",
    capabilities: [
      "Celebrity booking, performance agreements & guild contracts",
      "Artist tour hospitality, presidential travel & green room suites",
      "Security protocol, crowd isolation & private escort logistics",
      "Brand endorsement negotiations & commercial appearances",
    ],
    deliverables: ["Artist Bookings", "Celebrity Logistics", "Talent Liaisons"],
    image: "/images/live-concerts.jpg",
    alt: "Artist Performing on Live Concert Stage",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: "international-projects",
    slug: "international-projects",
    title: "International Projects",
    eyebrow: "Vertical 08 • Global Horizon",
    tagline: "Cross-Border Cinema Shoots & International Concert Tours",
    description:
      "Facilitating cross-border entertainment initiatives, overseas film shoots, international concert tours for diaspora audiences, and bilateral cultural summits.",
    capabilities: [
      "Overseas film production logistics, crews & international permitting",
      "Global concert tour coordination across international arenas",
      "Cross-border talent agreements & visa coordination",
      "International broadcast distribution rights & media coordination",
    ],
    deliverables: ["Overseas Film Shoots", "Global Tours", "Cultural Exchanges"],
    image: "/images/events-expo.jpg",
    alt: "Global Conclave and International Events",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: "event-production",
    slug: "event-production",
    title: "Event Production",
    eyebrow: "Vertical 09 • Technical Infrastructure",
    tagline: "Staging, Acoustic Sound, Truss Rigging & Lighting Infrastructure",
    description:
      "Complete technical event infrastructure and engineering services supplying heavy structural staging, acoustic line arrays, robotic moving heads, and outdoor power generation.",
    capabilities: [
      "Certified structural aluminum truss grids & ground supports",
      "Large-format outdoor LED video walls with high-refresh processors",
      "Precision acoustic line array sound systems & digital mixing consoles",
      "Redundant silent industrial power generation & electrical distribution",
    ],
    deliverables: ["Structural Staging", "Audio & Truss Rigs", "LED Video Walls"],
    image: "/images/arena-spectacle.jpg",
    alt: "Structural Arena Rigging and Production",
    icon: <Layers className="w-5 h-5" />,
  },
];

export const FeaturedServicesSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>("cinema-production");
  const currentService =
    featuredServicesList.find((s) => s.id === selectedId) || featuredServicesList[0];

  return (
    <Section background="deepPurple" spacing="lg" borderTop borderBottom id="featured-services">
      <FadeIn direction="up">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Featured Services Spotlight"
          description="In-depth technical capabilities, specialized staging infrastructure, and end-to-end production management across our nine core disciplines."
          size="xl"
          className="mb-12"
        />

        {/* 9 Services Pill Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#FFF8E8]/[0.08] overflow-x-auto">
          {featuredServicesList.map((svc) => {
            const isSelected = svc.id === currentService.id;
            return (
              <button
                key={svc.id}
                type="button"
                onClick={() => setSelectedId(svc.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono transition-all shrink-0 ${
                  isSelected
                    ? "bg-[#C99A32] text-[#020817] font-bold shadow-[0_0_16px_rgba(201,154,50,0.35)] scale-105"
                    : "bg-[#020817] text-[#C9C4B8] hover:text-[#FFF8E8] hover:bg-[#06152F] border border-[#FFF8E8]/[0.08]"
                }`}
              >
                <span className={isSelected ? "text-[#020817]" : "text-[#C99A32]"}>
                  {svc.icon}
                </span>
                <span>{svc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#020817] border border-[#FFF8E8]/[0.08] relative overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(2,8,23,0.95)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#06152F] border border-[#FFF8E8]/10 shadow-[0_16px_40px_rgba(2,8,23,0.8)] group">
                <Image
                  src={currentService.image}
                  alt={currentService.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Content Dossier */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#06152F] border border-[#C99A32]/30 flex items-center justify-center text-[#C99A32]">
                  {currentService.icon}
                </div>
                <span className="text-xs font-mono tracking-widest text-[#C99A32] uppercase font-semibold">
                  {currentService.eyebrow}
                </span>
              </div>

              <div>
                <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FFF8E8] mb-2 tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-sm font-medium text-[#F2D477]">
                  {currentService.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
                {currentService.description}
              </p>

              {/* Capabilities Checklist */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFF8E8]/60 block mb-1">
                  Key Technical Capabilities
                </span>
                {currentService.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs text-[#FFF8E8]/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A32] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables Badges & CTA */}
              <div className="pt-4 border-t border-[#FFF8E8]/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  {currentService.deliverables.map((deliv, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-1 rounded-md bg-[#06152F] text-[11px] font-mono text-[#C99A32] border border-[#C99A32]/20"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>

                <Button
                  href={`/services/${currentService.slug}`}
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Full Specification
                </Button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};
