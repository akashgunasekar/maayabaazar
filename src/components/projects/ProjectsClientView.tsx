"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Film,
  Award,
  Tv,
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { projectsData } from "@/data/projects";

type FilterTab = "all" | "key-projects" | "feature-film-credentials" | "films" | "ott-projects";

export function ProjectsClientView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("filter") as FilterTab) || "all";

  const [activeFilter, setActiveFilter] = useState<FilterTab>(initialCategory);

  useEffect(() => {
    const filter = searchParams.get("filter") as FilterTab;
    if (filter) {
      setActiveFilter(filter);
    }
  }, [searchParams]);

  const handleFilterChange = (filter: FilterTab) => {
    setActiveFilter(filter);
    if (filter === "all") {
      router.push("/projects", { scroll: false });
    } else {
      router.push(`/projects?filter=${filter}`, { scroll: false });
    }
  };

  // Filter projects according to active tab
  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "key-projects") return p.sectionGroup === "key-projects";
    if (activeFilter === "feature-film-credentials")
      return p.sectionGroup === "feature-film-credentials";
    if (activeFilter === "films") return p.categoryKey === "films";
    if (activeFilter === "ott-projects") return p.categoryKey === "ott-projects";
    return true;
  });

  const filterTabs: Array<{ id: FilterTab; label: string; count: number }> = [
    { id: "all", label: "All Projects", count: projectsData.length },
    {
      id: "key-projects",
      label: "Key Projects",
      count: projectsData.filter((p) => p.sectionGroup === "key-projects").length,
    },
    {
      id: "feature-film-credentials",
      label: "Feature Film Credentials",
      count: projectsData.filter((p) => p.sectionGroup === "feature-film-credentials").length,
    },
    {
      id: "films",
      label: "Theatrical Films",
      count: projectsData.filter((p) => p.categoryKey === "films").length,
    },
    {
      id: "ott-projects",
      label: "OTT Slate",
      count: projectsData.filter((p) => p.categoryKey === "ott-projects").length,
    },
  ];

  return (
    <Section background="deepPurple" spacing="lg" borderBottom id="portfolio">
      <FadeIn direction="up">
        {/* Filter Navigation Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#C99A32]">
            <Filter className="w-4 h-4" />
            <span>Curated Portfolio Archive ({projectsData.length} Verified Titles)</span>
          </div>

          <span className="text-xs font-mono text-[#C9C4B8]">
            Showing: <strong className="text-[#F2D477]">{filteredProjects.length} Projects</strong>
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-4 border-b border-[#FFF8E8]/[0.08]">
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleFilterChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A32] ${
                  isSelected
                    ? "bg-[#C99A32] text-[#020817] font-bold shadow-[0_0_16px_rgba(201,154,50,0.35)]"
                    : "bg-[#020817] text-[#C9C4B8] hover:text-[#FFF8E8] hover:bg-[#06152F] border border-[#C99A32]/25"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? "bg-[#020817] text-[#C99A32]"
                      : "bg-[#06152F] text-[#FFF8E8]/70"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <FadeIn key={project.id} direction="up" delay={idx * 100} duration={500}>
              <div className="rounded-3xl bg-[#020817] border border-[#C99A32]/30 hover:border-[#C99A32]/70 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover-lift glow-gold-hover h-full shadow-[0_16px_40px_rgba(2,8,23,0.9)]">
                {/* Visual Media with Golden Border */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#06152F] border-b border-[#C99A32]/20">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-75" />

                  <div className="absolute top-4 left-4">
                    <Badge variant="gold" size="sm">
                      {project.sectionGroup === "key-projects"
                        ? "Key Projects"
                        : "Feature Film Credentials"}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-mono tracking-wider text-[#FFF8E8]/90 bg-[#020817]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C99A32]/30">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C99A32] uppercase tracking-wider font-semibold">
                      {project.id === "jal" ? (
                        <Award className="w-3.5 h-3.5 text-[#F2D477]" />
                      ) : project.id === "alt-balaji" ? (
                        <Tv className="w-3.5 h-3.5 text-[#F2D477]" />
                      ) : (
                        <Film className="w-3.5 h-3.5 text-[#F2D477]" />
                      )}
                      <span className="truncate">{project.tagline}</span>
                    </div>

                    <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors">
                      {project.title}
                    </h3>

                    {/* Specific Credits for Feature Films */}
                    {(project.director || project.starring) && (
                      <div className="text-xs text-[#C9C4B8] space-y-1 bg-[#06152F]/70 p-3 rounded-xl border border-[#C99A32]/20">
                        {project.director && (
                          <div className="flex items-start gap-1.5">
                            <span className="text-[#FFF8E8] font-semibold">Role:</span>
                            <span className="text-[#F2D477]">{project.director}</span>
                          </div>
                        )}
                        {project.starring && (
                          <div className="flex items-start gap-1.5">
                            <span className="text-[#FFF8E8] font-semibold">Cast:</span>
                            <span className="line-clamp-1">{project.starring}</span>
                          </div>
                        )}
                        {project.music && (
                          <div className="flex items-start gap-1.5">
                            <span className="text-[#FFF8E8] font-semibold">Music:</span>
                            <span className="text-[#F2D477]">{project.music}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Accolades for Jal & Alt Balaji */}
                    {project.accolades && project.accolades.length > 0 && (
                      <div className="space-y-1">
                        {project.accolades.slice(0, 2).map((acc, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[#F2D477]/90">
                            <Sparkles className="w-3.5 h-3.5 text-[#C99A32] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{acc}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FFF8E8]/[0.08] flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C99A32] hover:text-[#F2D477] transition-colors"
                    >
                      <span>Explore Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Badge variant={project.status === "In Production" ? "gold" : "royal"} size="sm">
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Co-Production & Inquiries Banner */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#06152F] via-[#020817] to-[#0B2145] border border-[#C99A32]/40 relative overflow-hidden shadow-[0_10px_30px_rgba(2,8,23,0.8)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06152F] border border-[#C99A32]/35 text-xs font-mono text-[#F2D477]">
                <Film className="w-3.5 h-3.5 text-[#C99A32]" />
                <span>Executive Film &amp; OTT Production Partnerships</span>
              </div>

              <h4 className="font-[var(--font-heading)] text-2xl font-bold text-[#FFF8E8]">
                Collaborate on Upcoming Theatrical &amp; Digital Slates
              </h4>

              <p className="text-xs sm:text-sm text-[#C9C4B8] leading-relaxed">
                Partner with Maayaa Bazaar Hub for co-productions, creative direction, pan-India distribution, and end-to-end film &amp; OTT production management.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Initiate Project Discussion
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
