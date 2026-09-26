import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { mediaArticlesData } from "@/data/media";

export const MediaNewsSection: React.FC = () => {
  return (
    <Section background="midnight" spacing="lg" borderTop borderBottom id="media">
      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Press & Communications"
            title="Latest Updates & Media"
            description="Official corporate statements, cinema slate announcements, and production technical milestones."
            size="xl"
          />

          <div className="shrink-0">
            <Button
              href="/media"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Press Releases
            </Button>
          </div>
        </div>

        {/* Real Supplied Media Articles Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mediaArticlesData.map((article, idx) => (
            <FadeIn key={article.id} direction="up" delay={idx * 100} duration={600}>
              <article
                className="rounded-2xl bg-[#06152F]/40 border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 overflow-hidden flex flex-col group transition-all duration-400 hover-lift glow-gold-hover h-full"
              >
                {/* Article Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#020817]">
                  <Image
                    src={article.image?.src || "/images/film-production.jpg"}
                    alt={article.image?.alt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) will-change-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#020817]/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-[#C99A32] border border-[#C99A32]/30">
                      {article.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-[#C9C4B8]">
                      <Calendar className="w-3.5 h-3.5 text-[#C99A32]" />
                      <time dateTime={article.isoDate}>{article.publishDate}</time>
                    </div>

                    <h3 className="font-[var(--font-heading)] text-lg font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-[#C9C4B8] leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FFF8E8]/[0.06] flex items-center justify-between">
                    <Link
                      href={`/media/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C99A32] hover:text-[#F2D477] transition-colors"
                    >
                      <span>Read Full Statement</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <span className="text-[11px] font-mono text-[#807687]">
                      Official Release
                    </span>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};
