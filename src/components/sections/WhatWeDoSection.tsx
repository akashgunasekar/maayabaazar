import React from "react";
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
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

interface BentoServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  colSpanClass: string;
  badgeText: string;
}

const bentoServices: BentoServiceItem[] = [
  {
    id: "cinema-production",
    slug: "cinema-production",
    title: "Cinema Production",
    tagline: "Feature Films, Web Series & Cinematic Narratives",
    description:
      "End-to-end film production bridging creative screenwriting, casting, soundstage filming, and post-production execution.",
    icon: <Film className="w-6 h-6 text-[#D4A72C]" />,
    colSpanClass: "lg:col-span-8",
    badgeText: "Pillar 01 • Core Vertical",
  },
  {
    id: "music-entertainment-events",
    slug: "music-entertainment-events",
    title: "Music & Entertainment Events",
    tagline: "Stadium Concerts, Symphonies & Mega Festivals",
    description:
      "Large-scale live music spectacles, touring concerts, and orchestral performances with spatial 360° acoustic fidelity.",
    icon: <Music className="w-6 h-6 text-[#D4A72C]" />,
    colSpanClass: "lg:col-span-4",
    badgeText: "Pillar 02 • Live Experience",
  },
  {
    id: "film-entertainment-events",
    slug: "film-entertainment-events",
    title: "Film & Entertainment Events",
    tagline: "Audio Launches, Pre-Releases & Movie Premieres",
    description:
      "Star-studded movie audio releases, pre-release celebrations, and theatrical trailer reveals with multi-camera live telecasts.",
    icon: <Sparkles className="w-6 h-6 text-[#D4A72C]" />,
    colSpanClass: "lg:col-span-4",
    badgeText: "Pillar 03 • Cinema Events",
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events",
    tagline: "Product Launches, Brand Activations & Annual Days",
    description:
      "High-impact product unveilings, corporate annual day celebrations, conferences, and executive gala award ceremonies.",
    icon: <Building2 className="w-6 h-6 text-[#D4A72C]" />,
    colSpanClass: "lg:col-span-4",
    badgeText: "Pillar 04 • Corporate",
  },
  {
    id: "awards-special-events",
    slug: "awards-special-events",
    title: "Awards & Special Events",
    tagline: "Red Carpet Galas, Reality Shows & Milestone Honors",
    description:
      "Glamorous award ceremonies, televised reality show finales, and celebratory galas executed with broadcast-grade stagecraft.",
    icon: <Trophy className="w-6 h-6 text-[#D4A72C]" />,
    colSpanClass: "lg:col-span-4",
    badgeText: "Pillar 05 • Galas",
  },
  {
    id: "digital-media-brand-promotion",
    slug: "digital-media-brand-promotion",
    title: "Digital Media & Brand Promotion",
    tagline: "Omnichannel Campaigns, Content Creation & Strategy",
    description:
      "Creative brand commercials, digital marketing video campaigns, and promotional content that connects with culture.",
    icon: <TrendingUp className="w-6 h-6 text-[#D4A72C]" />,
    colSpanClass: "lg:col-span-4",
    badgeText: "Pillar 06 • Digital",
  },
  {
    id: "artist-celebrity-management",
    slug: "artist-celebrity-management",
    title: "Artist & Celebrity Management",
    tagline: "Talent Representation, Appearances & Collaborations",
    description:
      "Facilitating celebrity appearances, concert performance contracts, brand ambassador endorsements, and VIP hospitality.",
    icon: <Users className="w-6 h-6 text-[#D4A72C]" />,
    colSpanClass: "lg:col-span-4",
    badgeText: "Pillar 07 • Talent",
  },
  {
    id: "international-projects",
    slug: "international-projects",
    title: "International Projects",
    tagline: "Cross-Border Cinema Shoots & Global Concert Tours",
    description:
      "Overseas film production logistics, international concert tours for diaspora audiences, and cross-border cultural delegations.",
    icon: <Globe className="w-6 h-6 text-[#D4A72C]" />,
    colSpanClass: "lg:col-span-4",
    badgeText: "Pillar 08 • Global",
  },
  {
    id: "event-production",
    slug: "event-production",
    title: "Event Production & Technical Staging",
    tagline: "Turnkey Stagecraft, Heavy Truss, Audio & Lighting",
    description:
      "Custom 3D stage architecture, heavy-load touring trusses, motorized lighting grids, and synchronized LED display walls.",
    icon: <Layers className="w-6 h-6 text-[#D4A72C]" />,
    colSpanClass: "lg:col-span-12",
    badgeText: "Pillar 09 • Turnkey Staging Infrastructure",
  },
];

export const WhatWeDoSection: React.FC = () => {
  return (
    <Section background="midnight" spacing="lg">
      <FadeIn direction="up">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Our Nine Pillars"
            title="What We Do"
            description="Comprehensive creative media, cinema production, and experiential event capabilities delivered with world-standard execution."
            size="xl"
          />

          <Button href="/services" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            View All Services
          </Button>
        </div>

        {/* Asymmetric Premium Bento Grid with Staggered Cascading Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoServices.map((service, idx) => (
            <FadeIn
              key={service.id}
              direction="up"
              delay={(idx % 6) * 75}
              duration={600}
              className={service.colSpanClass}
            >
              <Link
                href="/services"
                className="group p-8 rounded-3xl bg-[#16091F] border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/40 transition-all duration-300 hover:bg-[#1E0C2B] flex flex-col justify-between hover-lift relative overflow-hidden h-full glow-purple-hover"
              >
                {/* Subtle Ambient Radial Highlight */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(75,10,120,0.18),transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#08050D] border border-[#D4A72C]/25 flex items-center justify-center group-hover:border-[#D4A72C] transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4A72C] px-2.5 py-1 rounded bg-[#08050D] border border-[#D4A72C]/20">
                      {service.badgeText}
                    </span>
                  </div>

                  <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-[#FAF8F2] tracking-tight group-hover:text-white transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D4A72C] font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#FAF8F2]/[0.06] flex items-center justify-between text-xs font-semibold text-[#D4A72C] group-hover:text-[#F4D76A] relative z-10">
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};
