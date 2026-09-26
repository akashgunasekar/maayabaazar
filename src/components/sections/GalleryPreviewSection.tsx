"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { galleryData } from "@/data/gallery";

export const GalleryPreviewSection: React.FC = () => {
  // Extract only categories that have available images
  const availableCategoryKeys = Array.from(
    new Set(galleryData.map((item) => item.categoryKey))
  );

  const categoryLabels: Record<string, string> = {
    concerts: "Concerts",
    cinema: "Cinema",
    events: "Events",
    production: "Production",
    "behind-the-scenes": "Behind The Scenes",
  };

  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredItems =
    activeTab === "all"
      ? galleryData
      : galleryData.filter((item) => item.categoryKey === activeTab);

  return (
    <Section background="midnight" spacing="lg" borderTop borderBottom id="gallery">
      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Visual Portfolio"
            title="The Experience Gallery"
            description="A curated visual record of stadium stages, acoustic soundstages, live concert rigs, and grand entertainment galas."
            size="xl"
          />

          <div className="shrink-0">
            <Button
              href="/gallery"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Full Gallery
            </Button>
          </div>
        </div>

        {/* Filter Tabs - Only Categories with Available Images */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#FFF8E8]/[0.08]">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
              activeTab === "all"
                ? "bg-[#C99A32] text-[#020817] font-bold shadow-[0_0_16px_rgba(201,154,50,0.3)]"
                : "bg-[#06152F] text-[#C9C4B8] hover:text-[#FFF8E8] hover:bg-[#06152F]/80 border border-[#FFF8E8]/[0.06]"
            }`}
          >
            All Works ({galleryData.length})
          </button>

          {availableCategoryKeys.map((key) => {
            const count = galleryData.filter((i) => i.categoryKey === key).length;
            const label = categoryLabels[key] || key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  activeTab === key
                    ? "bg-[#C99A32] text-[#020817] font-bold shadow-[0_0_16px_rgba(201,154,50,0.3)]"
                    : "bg-[#06152F] text-[#C9C4B8] hover:text-[#FFF8E8] hover:bg-[#06152F]/80 border border-[#FFF8E8]/[0.06]"
                }`}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-[#06152F] border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/50 transition-all duration-500 shadow-[0_8px_24px_rgba(2,8,23,0.6)] ${
                idx === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-md bg-[#020817]/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#C99A32] border border-[#C99A32]/30">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 space-y-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <h4 className="font-[var(--font-heading)] text-lg sm:text-xl font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors">
                  {item.title}
                </h4>
                {item.image.caption && (
                  <p className="text-xs text-[#C9C4B8] line-clamp-1">
                    {item.image.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};
