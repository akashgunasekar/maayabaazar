"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { galleryCategoriesList, galleryData } from "@/data/gallery";

export function GalleryClientView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items by category
  const filteredItems =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.categoryKey === selectedCategory);

  // Progressive slicing (do not load all immediately)
  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : 0
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : 0
        );
      }
    },
    [lightboxIndex, filteredItems.length]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, handleKeyDown]);

  const currentLightboxItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <Section background="deepPurple" spacing="lg" borderBottom id="gallery-archive">
      <FadeIn direction="up">
        {/* Categories Pill Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D4A72C]">
            <Camera className="w-4 h-4" />
            <span>Filter Archive by Category ({galleryCategoriesList.length} Disciplines)</span>
          </div>

          <span className="text-xs font-mono text-[#B9B0BE]">
            Showing {displayedItems.length} of {filteredItems.length} Photographs
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#FAF8F2]/[0.08]">
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setVisibleCount(6);
            }}
            className={`px-4 py-2 rounded-full text-xs font-mono transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] ${
              selectedCategory === "all"
                ? "bg-[#D4A72C] text-[#08050D] font-bold shadow-[0_0_16px_rgba(212,167,44,0.35)]"
                : "bg-[#08050D] text-[#B9B0BE] hover:text-[#FAF8F2] hover:bg-[#16091F] border border-[#FAF8F2]/[0.08]"
            }`}
          >
            All Categories ({galleryData.length})
          </button>

          {galleryCategoriesList.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            const count = galleryData.filter((i) => i.categoryKey === cat.key).length;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.key);
                  setVisibleCount(6);
                }}
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

        {/* 3. Responsive Editorial Masonry / Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedItems.map((item, index) => {
            const isFeature = index === 0;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`group relative rounded-3xl overflow-hidden bg-[#08050D] border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/60 cursor-pointer transition-all duration-500 shadow-[0_12px_32px_rgba(8,5,13,0.8)] focus:outline-none focus:ring-2 focus:ring-[#D4A72C] ${
                  isFeature ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIndex(index);
                  }
                }}
                aria-label={`Open photo lightbox for ${item.title}`}
              >
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-[#08050D]/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#08050D]/85 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#D4A72C] border border-[#D4A72C]/30">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Top Right Zoom Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#08050D]/80 backdrop-blur-md border border-[#FAF8F2]/20 flex items-center justify-center text-[#FAF8F2] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D4A72C]" />
                </div>

                {/* Bottom Text Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 space-y-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-[var(--font-heading)] text-lg sm:text-xl font-bold text-[#FAF8F2] group-hover:text-[#F4D76A] transition-colors">
                    {item.title}
                  </h3>
                  {item.image.caption && (
                    <p className="text-xs text-[#B9B0BE] line-clamp-1">
                      {item.image.caption}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Progressive "Load More" Button */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#16091F] hover:bg-[#08050D] text-xs font-mono text-[#D4A72C] border border-[#D4A72C]/40 hover:border-[#D4A72C] transition-all shadow-[0_4px_16px_rgba(212,167,44,0.15)]"
            >
              <span>Load More Photographs ({filteredItems.length - displayedItems.length} Remaining)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </FadeIn>

      {/* 5. ACCESSIBLE LIGHTBOX MODAL */}
      {lightboxIndex !== null && currentLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view of ${currentLightboxItem.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#08050D]/95 backdrop-blur-xl p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Lightbox Content Container */}
          <div
            className="relative w-full max-w-5xl bg-[#16091F] border border-[#FAF8F2]/10 rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.95)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="p-4 sm:p-5 border-b border-[#FAF8F2]/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-[#08050D] text-[10px] font-mono text-[#D4A72C] border border-[#D4A72C]/30">
                  {currentLightboxItem.categoryLabel}
                </span>
                <span className="text-xs font-mono text-[#B9B0BE]">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close image lightbox"
                className="w-9 h-9 rounded-full bg-[#08050D] border border-[#FAF8F2]/10 flex items-center justify-center text-[#B9B0BE] hover:text-[#FAF8F2] hover:border-[#D4A72C]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Image Display */}
            <div className="relative aspect-[16/10] w-full max-h-[65vh] bg-[#08050D]">
              <Image
                src={currentLightboxItem.image.src}
                alt={currentLightboxItem.image.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />

              {/* Prev / Next Keyboard Accessible Arrows */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                  )
                }
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#08050D]/85 backdrop-blur-md border border-[#FAF8F2]/15 flex items-center justify-center text-[#FAF8F2] hover:text-[#D4A72C] hover:border-[#D4A72C] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                }
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#08050D]/85 backdrop-blur-md border border-[#FAF8F2]/15 flex items-center justify-center text-[#FAF8F2] hover:text-[#D4A72C] hover:border-[#D4A72C] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption Dossier */}
            <div className="p-6 bg-[#08050D] border-t border-[#FAF8F2]/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-[var(--font-heading)] text-lg font-bold text-[#FAF8F2]">
                  {currentLightboxItem.title}
                </h4>
                {currentLightboxItem.image.caption && (
                  <p className="text-xs text-[#B9B0BE] mt-0.5">
                    {currentLightboxItem.image.caption}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-[#FAF8F2]/50">
                <span>Use ← and → arrows to navigate • ESC to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
