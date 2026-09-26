import React from "react";
import {
  Sparkles,
  Award,
  Zap,
  Network,
  Lightbulb,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

interface WhyPillar {
  title: string;
  tagline: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

const whyPillars: WhyPillar[] = [
  {
    title: "Creativity",
    tagline: "Bold Vision & Thematic Originality",
    description:
      "Original cinematic storytelling, bold thematic concepts, and evocative stage aesthetics designed to captivate contemporary global audiences.",
    points: [
      "Original screenplay & concept incubation",
      "Signature visual identity & set design",
      "Dynamic multi-sensory audience engagement",
    ],
    icon: <Sparkles className="w-6 h-6 text-[#C99A32]" />,
  },
  {
    title: "Experience",
    tagline: "Decades of Production Mastery",
    description:
      "Vast collective experience spanning high-budget theatrical feature films, stadium concert tours, and prestigious industry awards galas.",
    points: [
      "Proven track record in high-stakes environments",
      "Deep understanding of audience psychology",
      "Seasoned creative and technical directors",
    ],
    icon: <Award className="w-6 h-6 text-[#C99A32]" />,
  },
  {
    title: "Execution",
    tagline: "Flawless Logistical & Technical Rigor",
    description:
      "Uncompromising operational discipline, zero-failure safety standards, acoustic precision, and punctual turnarounds under stringent deadlines.",
    points: [
      "Strict timeline & budget compliance",
      "High-throughput crowd safety protocols",
      "Certified rigging & electrical compliance",
    ],
    icon: <Zap className="w-6 h-6 text-[#C99A32]" />,
  },
  {
    title: "Network",
    tagline: "Extensive Industry Alliances",
    description:
      "Direct relationships with celebrated vocalists, film actors, technical technicians, equipment vendors, and premier venues nationwide.",
    points: [
      "Access to top-tier artist management",
      "Preferred venue and stadium agreements",
      "Multinational crew sourcing and liaison",
    ],
    icon: <Network className="w-6 h-6 text-[#C99A32]" />,
  },
  {
    title: "Innovation",
    tagline: "Cutting-Edge Production Technology",
    description:
      "Pioneering spatial 360° audio design, robotic kinetic lighting grids, synchronized laser stages, and digital media amplification.",
    points: [
      "Immersive spatial audio engineering",
      "Automated robotic stagecraft & LED walls",
      "High-throughput live stream broadcasting",
    ],
    icon: <Lightbulb className="w-6 h-6 text-[#C99A32]" />,
  },
  {
    title: "End-to-End Solutions",
    tagline: "Turnkey Single-Window Delivery",
    description:
      "A complete single-window partner taking projects from raw concept incubation and line production to live event staging and global promotion.",
    points: [
      "Pre-production through post-production",
      "All-in-one technical riders and crew staffing",
      "Integrated marketing, media and PR delivery",
    ],
    icon: <Layers className="w-6 h-6 text-[#C99A32]" />,
  },
];

export const WhyMaayaaBazaarSection: React.FC = () => {
  return (
    <Section background="midnight" spacing="lg" borderTop borderBottom id="why-us">
      <FadeIn direction="up">
        <SectionHeading
          eyebrow="Our Competitive Advantage"
          title="Why Maayaa Bazaar"
          description="Built on six foundational pillars of excellence that define our commitment to cinema, entertainment, and audience-first experiences."
          size="xl"
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyPillars.map((pillar, idx) => (
            <FadeIn key={pillar.title} direction="up" delay={idx * 75} duration={600}>
              <div
                className="p-8 rounded-2xl bg-[#06152F]/50 border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 transition-all duration-300 relative group flex flex-col justify-between hover:bg-[#06152F]/80 hover-lift glow-gold-hover h-full"
              >
                <div>
                  {/* Icon Capsule */}
                  <div className="w-12 h-12 rounded-xl bg-[#020817] border border-[#C99A32]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>

                  <span className="text-[11px] font-mono tracking-widest text-[#C99A32] uppercase block mb-1">
                    {pillar.tagline}
                  </span>

                  <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#FFF8E8] mb-3 group-hover:text-[#F2D477] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Verified Capability Points */}
                <div className="pt-4 border-t border-[#FFF8E8]/[0.06] space-y-2">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#FFF8E8]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A32] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle Ambient Light */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle,rgba(11,33,69,0.18)_0%,transparent_70%)] pointer-events-none rounded-2xl group-hover:opacity-100 transition-opacity" />
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};
