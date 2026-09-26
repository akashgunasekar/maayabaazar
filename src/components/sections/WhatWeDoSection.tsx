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
    icon: <Film className="w-6 h-6 text-[#C99A32]" />,
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
    icon: <Music className="w-6 h-6 text-[#C99A32]" />,
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
    icon: <Sparkles className="w-6 h-6 text-[#C99A32]" />,
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
    icon: <Building2 className="w-6 h-6 text-[#C99A32]" />,
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
    icon: <Trophy className="w-6 h-6 text-[#C99A32]" />,
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
    icon: <TrendingUp className="w-6 h-6 text-[#C99A32]" />,
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
    icon: <Users className="w-6 h-6 text-[#C99A32]" />,
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
    icon: <Globe className="w-6 h-6 text-[#C99A32]" />,
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
    icon: <Layers className="w-6 h-6 text-[#C99A32]" />,
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
                className="group p-8 rounded-2xl bg-[#06152F] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/60 transition-all duration-300 hover:bg-[#0B2145] flex flex-col justify-between hover-lift relative overflow-hidden h-full shadow-[0_4px_20px_rgba(2,8,23,0.6)] hover:shadow-[0_12px_36px_rgba(2,8,23,0.9),0_0_24px_rgba(11,33,69,0.5),0_0_15px_rgba(201,154,50,0.2)]"
              >
                {/* Subtle Ambient Radial Highlight - Warm Gold on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(201,154,50,0.14),transparent_70%)] pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#020817] border border-[#C99A32]/25 flex items-center justify-center group-hover:border-[#C99A32] transition-colors">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C99A32] px-2.5 py-1 rounded bg-[#020817] border border-[#C99A32]/20">
                      {service.badgeText}
                    </span>
                  </div>

                  <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-[#FFF8E8] tracking-tight group-hover:text-white transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C99A32] font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#FFF8E8]/[0.06] flex items-center justify-between text-xs font-semibold text-[#C99A32] group-hover:text-[#F2D477] relative z-10">
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
