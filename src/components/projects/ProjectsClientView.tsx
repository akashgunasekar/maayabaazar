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
  Globe2,
  Plane,
  Compass,
  MapPin,
  Camera,
  ExternalLink,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { projectsData } from "@/data/projects";

type FilterTab =
  | "all"
  | "key-projects"
  | "feature-film-credentials"
  | "films"
  | "ott-projects"
  | "international-initiatives";

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

  // Film productions (separate from international initiative)
  const filmProductions = projectsData.filter(
    (p) => p.sectionGroup !== "international-initiatives"
  );

  const internationalProject = projectsData.find(
    (p) => p.sectionGroup === "international-initiatives"
  );

  // Filter projects according to active tab
  const filteredProjects = filmProductions.filter((p) => {
    if (activeFilter === "all" || activeFilter === "international-initiatives") return true;
    if (activeFilter === "key-projects") return p.sectionGroup === "key-projects";
    if (activeFilter === "feature-film-credentials")
      return p.sectionGroup === "feature-film-credentials";
    if (activeFilter === "films") return p.categoryKey === "films";
    if (activeFilter === "ott-projects") return p.categoryKey === "ott-projects";
    return true;
  });

  const filterTabs: Array<{ id: FilterTab; label: string; count: number }> = [
    { id: "all", label: "All Film Projects", count: filmProductions.length },
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
    {
      id: "international-initiatives",
      label: "International Film Tourism (Sabah)",
      count: 1,
    },
  ];

  return (
    <Section background="deepPurple" spacing="lg" borderBottom id="portfolio">
      <FadeIn direction="up">
        {/* ======================================================== */}
        {/* 1. SEPARATE FEATURED SECTION: SABAH FILM TOURISM INITIATIVE */}
        {/* ======================================================== */}
        {internationalProject && (
          <div
            id="sabah-initiative-showcase"
            className="mb-20 rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#06152F] via-[#020817] to-[#0B2145] border-2 border-[#C99A32]/45 shadow-[0_20px_60px_rgba(2,8,23,0.95)] relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C99A32]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B2145]/40 rounded-full blur-3xl pointer-events-none" />

            {/* Header Badge */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#C99A32]/25">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-[#0B2145] border border-[#C99A32]/35 text-[#F2D477]">
                  <Globe2 className="w-5 h-5 text-[#C99A32]" />
                </span>
                <div>
                  <span className="text-[11px] font-mono text-[#C99A32] uppercase tracking-[0.24em] font-semibold block">
                    Special International Partnership Showcase
                  </span>
                  <h2 className="font-[var(--font-cinzel)] text-xl sm:text-2xl lg:text-3xl font-bold text-[#FFF8E8]">
                    Sabah — Bollywood &amp; OTT Film Tourism Initiative
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="gold" size="sm">
                  Southeast Asia&apos;s Film-Friendly Destination
                </Badge>
                <span className="text-[11px] font-mono text-[#F2D477] bg-[#020817]/90 px-3 py-1 rounded-full border border-[#C99A32]/30 flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-[#C99A32]" />
                  <span>Malaysia</span>
                </span>
              </div>
            </div>

            {/* Main Showcase Layout */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Authentic Poster Artwork */}
              <div className="lg:col-span-5 relative">
                <Link
                  href="/projects/sabah-film-tourism"
                  className="block relative aspect-[10/15] max-w-[360px] mx-auto rounded-2xl overflow-hidden border-2 border-[#C99A32]/50 shadow-[0_15px_40px_rgba(201,154,50,0.2)] group"
                >
                  <Image
                    src="/images/projects/sabah-film-tourism.jpg"
                    alt="Sabah Bollywood & OTT Film Tourism Initiative Poster"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#020817]/90 backdrop-blur-md border border-[#C99A32]/30 text-xs text-[#FFF8E8] flex items-center justify-between">
                    <span className="font-semibold text-[#F2D477]">View Full Dossier</span>
                    <ArrowRight className="w-4 h-4 text-[#C99A32] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Right Column: Strategic Narrative & 5 Key Initiatives */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06152F] border border-[#C99A32]/30 text-xs font-mono text-[#F2D477]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C99A32]" />
                    <span>Powering Stories. Promoting Destinations.</span>
                  </div>

                  <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FFF8E8] leading-tight">
                    Where Stories Inspire Journeys
                  </h3>

                  <p className="text-sm text-[#C9C4B8] leading-relaxed">
                    Sabah offers the perfect cinematic backdrop for the world&apos;s greatest stories. From breathtaking tropical islands and ancient rainforests to luxury overwater resorts and modern production facilities — Sabah has it all. Every frame filmed in Sabah creates inspiration for millions to visit.
                  </p>
                </div>

                {/* The 5 Key Initiatives Grid */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-[var(--font-cinzel)] text-xs font-bold text-[#F2D477] uppercase tracking-[0.18em]">
                      Our 5 Key Initiatives
                    </h4>
                    <span className="text-[10px] font-mono text-[#C9C4B8]">
                      Official Framework
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      {
                        num: "01",
                        title: "Sabah Film Incentive Program",
                        desc: "Competitive financial incentives & streamlined permits for Indian productions.",
                      },
                      {
                        num: "02",
                        title: "Bollywood in Sabah Program",
                        desc: "Familiarization trips for India's top producers, directors, and location scouts.",
                      },
                      {
                        num: "03",
                        title: "Sabah Screen Showcase",
                        desc: "Digital location directory of scenic spots, resorts, and local crew support.",
                      },
                      {
                        num: "04",
                        title: "Music Video & Celebrity Content",
                        desc: "Encouraging chartbuster music videos, travel series, and influencer content.",
                      },
                    ].map((item) => (
                      <div
                        key={item.num}
                        className="p-3 rounded-xl bg-[#020817]/85 border border-[#C99A32]/25 space-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#C99A32] font-bold">
                            {item.num}
                          </span>
                          <span className="text-xs font-bold text-[#FFF8E8]">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#C9C4B8] leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* 5th initiative full width */}
                  <div className="p-3 rounded-xl bg-[#020817]/85 border border-[#C99A32]/25 flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#C99A32] font-bold">05</span>
                        <span className="text-xs font-bold text-[#FFF8E8]">
                          OTT &amp; Reality Show Partnerships
                        </span>
                      </div>
                      <p className="text-[11px] text-[#C9C4B8] leading-snug">
                        Collaborate with leading Indian OTT platforms for adventure travel series &amp; lifestyle formats.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benefits Pills */}
                <div className="space-y-2 pt-2 border-t border-[#FFF8E8]/[0.08]">
                  <span className="text-[10px] font-mono text-[#C99A32] uppercase tracking-wider block">
                    Film-Induced Tourism Benefits:
                  </span>
                  <div className="flex flex-wrap gap-2 text-[11px] text-[#FFF8E8]">
                    {[
                      "Reach Millions Across India",
                      "Enhance Destination Visibility",
                      "Create Emotional Connection",
                      "Inspire Direct Travel",
                      "Long-Term Economic Growth",
                    ].map((ben, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#0B2145]/80 border border-[#C99A32]/25 font-sans"
                      >
                        ✓ {ben}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button
                    href="/projects/sabah-film-tourism"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore Complete Sabah Dossier
                  </Button>
                  <Button
                    href="/contact?initiative=sabah-film-tourism"
                    variant="outline"
                    size="md"
                  >
                    Inquire For Filming In Sabah
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 2. THEATRICAL CINEMA & OTT PRODUCTIONS SECTION           */}
        {/* ======================================================== */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C99A32]/25">
            <div>
              <span className="text-[11px] font-mono text-[#C99A32] uppercase tracking-[0.2em] font-semibold block">
                Production Slate &amp; Feature Film Credentials
              </span>
              <h3 className="font-[var(--font-cinzel)] text-xl sm:text-2xl font-bold text-[#FFF8E8]">
                Cinematic Feature Films &amp; OTT Slate
              </h3>
            </div>

            <span className="text-xs font-mono text-[#C9C4B8]">
              Showing: <strong className="text-[#F2D477]">{filteredProjects.length} Verified Titles</strong>
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-12">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    if (tab.id === "international-initiatives") {
                      document
                        .getElementById("sabah-initiative-showcase")
                        ?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      handleFilterChange(tab.id);
                    }
                  }}
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

          {/* Film Projects Cards Grid */}
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
        </div>
      </FadeIn>
    </Section>
  );
}
