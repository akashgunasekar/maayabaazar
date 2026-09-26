import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Film, Music, Building2, Sparkles, Clock } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { ComingSoonCard } from "@/components/ui/ComingSoonCard";
import { projectsData } from "@/data/projects";

export const ProjectsSection: React.FC = () => {
  // Verified real projects only
  const activeProjects = projectsData.filter((p) => p.status !== "Coming Soon");

  return (
    <Section background="deepPurple" spacing="lg" borderTop borderBottom id="projects">
      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Portfolio & Production Slate"
            title="Signature Projects"
            description="A glimpse into active productions, completed stadium concerts, and major entertainment initiatives managed by Maayaa Bazaar Hub."
            size="xl"
          />

          <div className="shrink-0">
            <Button
              href="/projects"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View Full Portfolio
            </Button>
          </div>
        </div>

        {/* Active Verified Projects Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {activeProjects.map((project, idx) => (
            <FadeIn key={project.id} direction="up" delay={idx * 120} duration={650}>
              <div
                className="rounded-2xl bg-[#020817] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 overflow-hidden flex flex-col group transition-all duration-400 hover-lift glow-gold-hover h-full"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06152F]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) will-change-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={project.status === "In Production" ? "gold" : "purple"}
                      size="sm"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-mono tracking-wider text-[#FFF8E8]/80 bg-[#020817]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#FFF8E8]/10">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-[#C99A32] uppercase tracking-wider block">
                      {project.tagline}
                    </span>

                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FFF8E8]/[0.06] flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C99A32] hover:text-[#F2D477] transition-colors"
                    >
                      <span>View Project Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <span className="text-[11px] font-mono text-[#807687]">
                      Maayaa Bazaar Hub
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Elegant Coming Soon State for Unrevealed Portfolios */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#020817]/60 border border-dashed border-[#C99A32]/30 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06152F] border border-[#C99A32]/30 text-xs font-mono text-[#F2D477]">
                <Clock className="w-3.5 h-3.5 text-[#C99A32]" />
                <span>NDA &amp; Confidential Production Slates</span>
              </div>

              <h4 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-[#FFF8E8]">
                Upcoming Entertainment &amp; OTT Slates Coming Soon
              </h4>

              <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
                Additional theatrical feature films, streaming series, overseas concert tours, and celebrity promotional campaigns are currently in active pre-production and filming. Official titles, trailers, cast lists, and dates will be unveiled across upcoming media announcements.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Button href="/contact" variant="primary" size="md">
                Inquire For Co-Productions
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};
