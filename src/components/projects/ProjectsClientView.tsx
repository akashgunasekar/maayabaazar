"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Film,
  Music,
  Building2,
  Clock,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { projectCategoriesList, projectsData } from "@/data/projects";

export function ProjectsClientView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    if (key === "all") {
      router.push("/projects", { scroll: false });
    } else {
      router.push(`/projects?category=${key}`, { scroll: false });
    }
  };

  // Filter verified projects
  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.categoryKey === activeCategory);

  const selectedCategoryMeta = projectCategoriesList.find(
    (c) => c.key === activeCategory
  );

  return (
    <Section background="deepPurple" spacing="lg" borderBottom id="portfolio">
      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4A72C]">
            <Filter className="w-4 h-4" />
            <span>Filter by Discipline ({projectCategoriesList.length} Categories)</span>
          </div>

          {selectedCategoryMeta && (
            <span className="text-xs font-mono text-[#B9B0BE]">
              Showing: <strong className="text-[#FAF8F2]">{selectedCategoryMeta.label}</strong> — {selectedCategoryMeta.description}
            </span>
          )}
        </div>

        {/* 9 Categories Pill Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#FAF8F2]/[0.08]">
          <button
            type="button"
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] ${
              activeCategory === "all"
                ? "bg-[#D4A72C] text-[#08050D] font-bold shadow-[0_0_16px_rgba(212,167,44,0.35)]"
                : "bg-[#08050D] text-[#B9B0BE] hover:text-[#FAF8F2] hover:bg-[#16091F] border border-[#FAF8F2]/[0.08]"
            }`}
          >
            All Projects ({projectsData.length})
          </button>

          {projectCategoriesList.map((cat) => {
            const isSelected = activeCategory === cat.key;
            const count = projectsData.filter((p) => p.categoryKey === cat.key).length;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategoryChange(cat.key)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] ${
                  isSelected
                    ? "bg-[#D4A72C] text-[#08050D] font-bold shadow-[0_0_16px_rgba(212,167,44,0.35)]"
                    : "bg-[#08050D] text-[#B9B0BE] hover:text-[#FAF8F2] hover:bg-[#16091F] border border-[#FAF8F2]/[0.08]"
                }`}
              >
                <span>{cat.label}</span>
                {count > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? "bg-[#08050D] text-[#D4A72C]" : "bg-[#16091F] text-[#FAF8F2]/60"}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 3. Verified Projects Grid */}
        {filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-[#08050D] border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/40 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(8,5,13,0.95)]"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#16091F]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={project.status === "In Production" ? "gold" : "purple"}
                      size="sm"
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-mono tracking-wider text-[#FAF8F2]/80 bg-[#08050D]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#FAF8F2]/10">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-[#D4A72C] uppercase tracking-wider block">
                      {project.tagline}
                    </span>

                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#FAF8F2] group-hover:text-[#F4D76A] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FAF8F2]/[0.06] flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4A72C] hover:text-[#F4D76A] transition-colors"
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
            ))}
          </div>
        )}

        {/* 4. Coming Soon — Explore Our Projects */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#16091F] via-[#08050D] to-[#16091F] border border-dashed border-[#D4A72C]/40 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16091F] border border-[#D4A72C]/30 text-xs font-mono text-[#F4D76A]">
                <Clock className="w-3.5 h-3.5 text-[#D4A72C]" />
                <span>Confidential Production Slates</span>
              </div>

              <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FAF8F2]">
                Coming Soon — Explore Our Projects
              </h3>

              <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
                Additional theatrical feature films, streaming series, overseas concert tours, and celebrity promotional campaigns are currently in active pre-production and filming. Official titles, trailers, cast lists, and release dates will be unveiled across upcoming media announcements.
              </p>

              <p className="text-[11px] font-mono text-[#FAF8F2]/60">
                Strict NDA Protection • Zero Fictional Portfolio Entries
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Button href="/contact" variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Inquire For Co-Productions
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
