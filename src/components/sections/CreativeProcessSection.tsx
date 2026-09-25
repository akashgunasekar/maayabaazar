import React from "react";
import {
  Lightbulb,
  Compass,
  FileCheck,
  Zap,
  Megaphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Concept",
    tagline: "Vision & Creative Inception",
    description:
      "Ideating core creative premises, thematic architecture, target audience positioning, and high-level structural feasibility for cinema or live events.",
    deliverables: ["Creative Brief", "Thematic Strategy", "Feasibility Matrix"],
    icon: <Lightbulb className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    step: "02",
    title: "Creative Development",
    tagline: "Scripting & Visual Stagecraft",
    description:
      "Drafting screenplays, visual storyboards, 3D stage pre-visualizations, spatial acoustic models, and technical lighting specifications.",
    deliverables: ["Script & Storyboards", "3D Stage Renderings", "Audio Rigs"],
    icon: <Compass className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    step: "03",
    title: "Planning",
    tagline: "Logistics & Production Architecture",
    description:
      "Granular budgeting, regulatory municipal permits, artist agreements, technical equipment sourcing, and contingency protocols.",
    deliverables: ["Master Production Schedule", "Technical Riders", "Permit Approvals"],
    icon: <FileCheck className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    step: "04",
    title: "Execution",
    tagline: "On-Ground Build & Production",
    description:
      "Acoustic soundstage principal photography, heavy truss structural rigging, spatial line-array tuning, and calibrated stage lighting.",
    deliverables: ["Principal Photography", "Stage Rigging", "Acoustic Tuning"],
    icon: <Zap className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    step: "05",
    title: "Promotion",
    tagline: "Media Amplification & Buzz",
    description:
      "Nationwide press releases, theatrical trailer reveals, audio launches, digital campaigns, and targeted media broadcast coverage.",
    deliverables: ["Trailer Reveals", "Press Conferences", "Digital Campaigns"],
    icon: <Megaphone className="w-5 h-5 text-[#D4A72C]" />,
  },
  {
    step: "06",
    title: "Experience",
    tagline: "Audience Immersion & Legacy",
    description:
      "Live show execution, high-throughput crowd hospitality, broadcast quality streaming, visceral audience connection, and enduring brand impact.",
    deliverables: ["Live Experience Delivery", "Broadcast Feeds", "Post-Event Archive"],
    icon: <Sparkles className="w-5 h-5 text-[#D4A72C]" />,
  },
];

export const CreativeProcessSection: React.FC = () => {
  return (
    <Section background="deepPurple" spacing="lg" borderTop borderBottom id="process">
      <FadeIn direction="up">
        <SectionHeading
          eyebrow="Methodology & Discipline"
          title="The Creative Process"
          description="A structured six-stage framework designed to transform creative ambition into world-standard cinema productions and monumental live events."
          size="xl"
          align="center"
          className="mb-16"
        />

        {/* 6 Steps Grid with Sequential Flow and Staggered Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {processSteps.map((item, idx) => (
            <FadeIn key={item.step} direction="up" delay={idx * 80} duration={600}>
              <div
                className="p-8 rounded-2xl bg-[#08050D] border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/40 transition-all duration-300 relative group flex flex-col justify-between hover-lift glow-purple-hover h-full"
              >
                {/* Header: Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D4A72C] to-[#F4D76A] tracking-wider">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#16091F] border border-[#D4A72C]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono tracking-widest text-[#D4A72C] uppercase block mb-1">
                    {item.tagline}
                  </span>

                  <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#FAF8F2] mb-3 group-hover:text-[#F4D76A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables Pills */}
                <div className="pt-4 border-t border-[#FAF8F2]/[0.06]">
                  <span className="text-[10px] font-mono text-[#B9B0BE]/70 uppercase tracking-wider block mb-2">
                    Key Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.deliverables.map((deliv, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-2.5 py-1 rounded-md bg-[#16091F] text-[11px] font-mono text-[#FAF8F2]/90 border border-[#FAF8F2]/[0.05]"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle Step Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(212,167,44,0.06)_0%,transparent_70%)] pointer-events-none rounded-2xl group-hover:opacity-100 transition-opacity" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Process Guarantee Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#16091F] via-[#08050D] to-[#16091F] border border-[#D4A72C]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-[var(--font-heading)] text-base sm:text-lg font-bold text-[#FAF8F2]">
              Ready to embark on a production journey with us?
            </h4>
            <p className="text-xs sm:text-sm text-[#B9B0BE]">
              Our production leadership guarantees transparent timelines, technical rigor, and flawless on-ground delivery.
            </p>
          </div>

          <Button href="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
            Initiate Production Brief
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
};
