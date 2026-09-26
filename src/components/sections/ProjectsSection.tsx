import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Film, Award, Tv, Star, UserCheck, Disc3 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { projectsData } from "@/data/projects";

export const ProjectsSection: React.FC = () => {
  const keyProjects = projectsData.filter((p) => p.sectionGroup === "key-projects");
  const featureFilmCredentials = projectsData.filter(
    (p) => p.sectionGroup === "feature-film-credentials"
  );

  return (
    <Section background="deepPurple" spacing="lg" borderTop borderBottom id="projects">
      <FadeIn direction="up">
        {/* Main Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Portfolio & Production Slate"
            title="Projects & Film Credentials"
            description="Acclaimed cinematic feature films, Academy Award contenders, and high-velocity digital streaming productions produced and executive managed by Maayaa Bazaar Hub."
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

        {/* ======================================================== */}
        {/* 1. KEY PROJECTS SECTION (Matching Brand Reference Banner) */}
        {/* ======================================================== */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#C99A32]/60 to-[#C99A32] flex-1 max-w-[120px]" />
            <h3 className="font-[var(--font-cinzel)] font-bold text-lg sm:text-xl text-[#F2D477] tracking-[0.22em] uppercase text-center">
              Key Projects
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent via-[#C99A32]/60 to-[#C99A32] flex-1 max-w-[120px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {keyProjects.map((project, idx) => (
              <FadeIn key={project.id} direction="up" delay={idx * 120} duration={600}>
                <div className="rounded-2xl bg-[#020817] border border-[#C99A32]/30 hover:border-[#C99A32]/70 overflow-hidden flex flex-col group transition-all duration-300 hover-lift glow-gold-hover h-full shadow-[0_10px_30px_rgba(2,8,23,0.85)]">
                  {/* Image Container with golden border styling */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06152F] border-b border-[#C99A32]/20">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-70" />

                    <div className="absolute top-3 left-3">
                      <Badge variant="gold" size="sm">
                        {project.id === "jal"
                          ? "Oscar Contender"
                          : project.id === "alt-balaji"
                          ? "OTT Slate"
                          : "Sports Biopic"}
                      </Badge>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-mono tracking-wider text-[#FFF8E8]/90 bg-[#020817]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C99A32]/30">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C99A32] uppercase tracking-wider">
                        {project.id === "jal" ? (
                          <Award className="w-3.5 h-3.5 text-[#F2D477]" />
                        ) : project.id === "alt-balaji" ? (
                          <Tv className="w-3.5 h-3.5 text-[#F2D477]" />
                        ) : (
                          <Film className="w-3.5 h-3.5 text-[#F2D477]" />
                        )}
                        <span className="font-semibold">{project.tagline}</span>
                      </div>

                      <h4 className="font-[var(--font-heading)] text-xl font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors">
                        {project.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed line-clamp-3">
                        {project.overview}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#FFF8E8]/[0.08] flex items-center justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C99A32] hover:text-[#F2D477] transition-colors"
                      >
                        <span>View Project Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <span className="text-[11px] font-mono text-[#C9C4B8]/80">
                        Maayaa Bazaar Hub
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. FEATURE FILM CREDENTIALS SECTION                     */}
        {/* ======================================================== */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#C99A32]/60 to-[#C99A32] flex-1 max-w-[120px]" />
            <h3 className="font-[var(--font-cinzel)] font-bold text-lg sm:text-xl text-[#F2D477] tracking-[0.22em] uppercase text-center">
              Feature Film Credentials
            </h3>
            <div className="h-px bg-gradient-to-l from-transparent via-[#C99A32]/60 to-[#C99A32] flex-1 max-w-[120px]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featureFilmCredentials.map((project, idx) => (
              <FadeIn key={project.id} direction="up" delay={idx * 150} duration={600}>
                <div className="rounded-2xl bg-[#020817] border border-[#C99A32]/35 hover:border-[#C99A32]/75 overflow-hidden flex flex-col sm:flex-row group transition-all duration-300 hover-lift glow-gold-hover h-full shadow-[0_12px_36px_rgba(2,8,23,0.9)]">
                  {/* Poster Image (Left) */}
                  <div className="relative w-full sm:w-[220px] aspect-[3/4] sm:aspect-auto shrink-0 overflow-hidden bg-[#06152F] border-b sm:border-b-0 sm:border-r border-[#C99A32]/25">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 240px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/70 via-transparent to-transparent sm:hidden" />

                    <div className="absolute top-3 left-3">
                      <Badge variant="gold" size="sm">
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Details / Credits (Right) */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#C99A32] uppercase tracking-wider font-semibold">
                          {project.roleTitle || "Feature Film"}
                        </span>
                        <span className="text-[10px] font-mono text-[#FFF8E8]/70 bg-[#06152F] px-2.5 py-0.5 rounded-full border border-[#C99A32]/20">
                          {project.categoryLabel}
                        </span>
                      </div>

                      <h4 className="font-[var(--font-heading)] text-2xl font-bold text-[#F2D477] group-hover:text-white transition-colors">
                        {project.title}
                      </h4>

                      {/* Structured Credits List */}
                      <div className="space-y-1.5 text-xs text-[#C9C4B8] border-y border-[#FFF8E8]/[0.08] py-3 font-sans">
                        {project.director && (
                          <div className="flex items-start gap-2">
                            <span className="text-[#FFF8E8] font-semibold min-w-[70px]">Role / Dir:</span>
                            <span className="text-[#F2D477]">{project.director}</span>
                          </div>
                        )}
                        {project.producer && project.producer !== project.director && (
                          <div className="flex items-start gap-2">
                            <span className="text-[#FFF8E8] font-semibold min-w-[70px]">Producer:</span>
                            <span>{project.producer}</span>
                          </div>
                        )}
                        {project.starring && (
                          <div className="flex items-start gap-2">
                            <span className="text-[#FFF8E8] font-semibold min-w-[70px]">Starring:</span>
                            <span>{project.starring}</span>
                          </div>
                        )}
                        {project.music && (
                          <div className="flex items-start gap-2">
                            <span className="text-[#FFF8E8] font-semibold min-w-[70px]">Music:</span>
                            <span className="text-[#F2D477]">{project.music}</span>
                          </div>
                        )}
                        {project.presentedBy && (
                          <div className="flex items-start gap-2">
                            <span className="text-[#FFF8E8] font-semibold min-w-[70px]">Presented:</span>
                            <span>{project.presentedBy}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-xs text-[#C9C4B8] leading-relaxed line-clamp-2">
                        {project.overview}
                      </p>
                    </div>

                    <div className="pt-3 flex items-center justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C99A32] hover:text-[#F2D477] transition-colors"
                      >
                        <span>View Project Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Button href={`/contact?project=${project.slug}`} variant="outline" size="sm">
                        Inquire
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};
