import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Music,
  Sparkles,
  Film,
  Building2,
  Ticket,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { sampleEvents, eventCategoriesData } from "@/data/events";

export const EventsSection: React.FC = () => {
  // Use the verified sample events from the events data
  const featuredEvents = sampleEvents.slice(0, 3);

  return (
    <Section background="midnight" spacing="lg" borderTop borderBottom id="events">
      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Events & Productions"
            title="Where Events Become Experiences"
            description="From stadium-scale music concerts and theatrical film launches to prestigious corporate conventions and vibrant cultural showcases."
            size="xl"
          />

          <div className="flex items-center gap-3 shrink-0">
            <Button
              href="/events"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All Events
            </Button>
          </div>
        </div>

        {/* 5 Event Categories Bar with Staggered Entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {eventCategoriesData.map((category, idx) => (
            <FadeIn key={category.id} direction="up" delay={idx * 60} duration={500}>
              <Link
                href={`/events#${category.slug}`}
                className="p-4 rounded-xl bg-[#06152F]/60 border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 hover:bg-[#06152F] transition-all duration-300 group flex flex-col items-start h-full glow-gold-hover"
              >
                <div className="w-8 h-8 rounded-lg bg-[#020817] border border-[#C99A32]/20 flex items-center justify-center text-[#C99A32] mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.slug === "music-events" && <Music className="w-4 h-4" />}
                  {category.slug === "entertainment-events" && <Sparkles className="w-4 h-4" />}
                  {category.slug === "film-events" && <Film className="w-4 h-4" />}
                  {category.slug === "corporate-events" && <Building2 className="w-4 h-4" />}
                  {category.slug === "cultural-events" && <Users className="w-4 h-4" />}
                </div>
                <h4 className="font-[var(--font-heading)] text-sm font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors">
                  {category.title}
                </h4>
                <span className="text-[11px] text-[#C9C4B8] mt-1 line-clamp-1">
                  {category.subcategories.length} Event Types
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Featured Events Grid with Staggered Cascading Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((evt, idx) => (
            <FadeIn key={evt.id} direction="up" delay={idx * 120} duration={650}>
              <div
                className="rounded-2xl bg-[#06152F]/40 border border-[#FFF8E8]/[0.08] hover:border-[#C99A32]/40 overflow-hidden flex flex-col group transition-all duration-400 hover:shadow-[0_16px_36px_rgba(11,33,69,0.25)] h-full hover-lift"
              >
                {/* Event Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#020817]">
                  <Image
                    src={evt.image.src}
                    alt={evt.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) will-change-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent opacity-80" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant={evt.status === "Upcoming" ? "gold" : "neutral"} size="sm">
                      {evt.status}
                    </Badge>
                  </div>

                  {evt.capacity && (
                    <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[11px] font-mono text-[#F2D477] bg-[#020817]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C99A32]/20">
                      <Users className="w-3 h-3" />
                      <span>{evt.capacity}</span>
                    </div>
                  )}
                </div>

                {/* Event Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    {/* Meta: Date & Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#C9C4B8]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C99A32]" />
                        {evt.date}
                      </span>
                      <span className="text-[#FFF8E8]/20">•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C99A32]" />
                        {evt.location}
                      </span>
                    </div>

                    <h3 className="font-[var(--font-heading)] text-lg font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors line-clamp-2">
                      {evt.title}
                    </h3>

                    <p className="text-xs text-[#C9C4B8] leading-relaxed line-clamp-2">
                      {evt.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#FFF8E8]/[0.06] flex items-center justify-between">
                    <Link
                      href={`/events/${evt.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C99A32] hover:text-[#F2D477] transition-colors"
                    >
                      <span>Event Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/contact"
                      className="text-[11px] text-[#C9C4B8] hover:text-[#FFF8E8] transition-colors flex items-center gap-1"
                    >
                      <Ticket className="w-3 h-3 text-[#C99A32]" />
                      <span>Inquire Access</span>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
};
