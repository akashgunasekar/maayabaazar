import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Film,
  Music,
  Award,
  Tv,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Star,
  Globe2,
  Plane,
  Camera,
  MapPin,
  Palmtree,
  Trees,
  Compass,
  Building,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/typography/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { SITE_URL, generateBreadcrumbSchema } from "@/lib/seo";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Maayaa Bazaar Hub",
    };
  }

  const canonicalUrl = `${SITE_URL}/projects/${project.slug}`;
  const imageUrl = project.image.src.startsWith("http")
    ? project.image.src
    : `${SITE_URL}${project.image.src}`;

  return {
    title: `${project.title} | Maayaa Bazaar Hub`,
    description: project.overview,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} | Maayaa Bazaar Hub`,
      description: project.overview,
      url: canonicalUrl,
      siteName: "Maayaa Bazaar Hub",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.image.alt || project.title,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Maayaa Bazaar Hub`,
      description: project.overview,
      images: [imageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getAllProjects();
  const otherProjects = allProjects.filter((p) => p.slug !== project.slug);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ]);

  const isSabah = project.slug === "sabah-film-tourism";

  return (
    <>
      {/* Breadcrumb Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Page Hero */}
      <PageHero
        badge={
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="gold" size="sm">
              {project.sectionGroup === "international-initiatives"
                ? "International Initiative"
                : project.sectionGroup === "key-projects"
                ? "Key Projects"
                : "Feature Film Credentials"}
            </Badge>
            <span className="text-[11px] font-mono text-[#FFF8E8]/90 bg-[#06152F] px-2.5 py-0.5 rounded-full border border-[#C99A32]/30">
              {project.categoryLabel}
            </span>
            <span className="text-[11px] font-mono text-[#C99A32] bg-[#020817] px-2.5 py-0.5 rounded-full border border-[#C99A32]/20">
              {project.status}
            </span>
          </div>
        }
        title={project.title}
        description={project.overview}
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#C9C4B8]">
            <Link href="/" className="hover:text-[#FFF8E8] transition-colors">
              Home
            </Link>
            <span className="text-[#FFF8E8]/30">/</span>
            <Link href="/projects" className="hover:text-[#FFF8E8] transition-colors">
              Projects
            </Link>
            <span className="text-[#FFF8E8]/30">/</span>
            <span className="text-[#C99A32]">{project.title}</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={
                isSabah
                  ? `/contact?initiative=${project.slug}`
                  : `/contact?project=${project.slug}`
              }
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {isSabah ? "Inquire For Filming In Sabah" : "Inquire About This Title"}
            </Button>
            <Button href="/projects" variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
              All Projects ({allProjects.length})
            </Button>
          </div>
        }
      />

      {/* 2. Visual Artwork & Scope */}
      <Section background="deepPurple" spacing="lg" borderBottom>
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Visual Image / Poster */}
            <div className="lg:col-span-6 relative">
              <div
                className={`relative w-full rounded-3xl overflow-hidden bg-[#020817] border border-[#C99A32]/40 shadow-[0_20px_50px_rgba(2,8,23,0.95)] group ${
                  isSabah ? "aspect-[10/15] max-w-[460px] mx-auto" : "aspect-[4/3] sm:aspect-[16/11]"
                }`}
              >
                <Image
                  src={isSabah ? "/images/projects/sabah-film-tourism.jpg" : project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 via-transparent to-transparent pointer-events-none" />

                {project.image.caption && (
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#020817]/90 backdrop-blur-md border border-[#C99A32]/30 text-xs text-[#FFF8E8] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C99A32] shrink-0" />
                    <span>{project.image.caption}</span>
                  </div>
                )}
              </div>

              {/* Accolades Callout (For Jal & Others) */}
              {project.accolades && project.accolades.length > 0 && (
                <div className="mt-6 p-6 rounded-2xl bg-[#06152F]/90 border border-[#C99A32]/40 shadow-[0_10px_25px_rgba(201,154,50,0.1)] space-y-3">
                  <div className="flex items-center gap-2 text-[#F2D477] font-semibold text-sm">
                    <Award className="w-5 h-5 text-[#C99A32]" />
                    <span className="font-[var(--font-cinzel)] uppercase tracking-wider">
                      Official Honors &amp; Accolades
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {project.accolades.map((acc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#FFF8E8] leading-relaxed">
                        <Sparkles className="w-3.5 h-3.5 text-[#C99A32] shrink-0 mt-0.5" />
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Production Credentials Box */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#020817] border border-[#C99A32]/35 space-y-5 shadow-[0_10px_30px_rgba(2,8,23,0.9)]">
                <div className="flex items-center justify-between border-b border-[#FFF8E8]/[0.08] pb-4">
                  <h3 className="font-[var(--font-heading)] text-lg font-bold text-[#FFF8E8]">
                    {isSabah ? "Initiative Overview" : "Production Credentials"}
                  </h3>
                  <span className="text-[11px] font-mono text-[#C99A32] uppercase tracking-wider font-semibold">
                    {project.sectionGroup === "international-initiatives"
                      ? "Film Tourism"
                      : project.sectionGroup === "key-projects"
                      ? "Key Projects"
                      : "Feature Film"}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start justify-between py-1.5 border-b border-[#FFF8E8]/[0.05]">
                    <span className="text-[#C9C4B8]">Initiative / Title</span>
                    <span className="font-bold text-[#FFF8E8] text-right">{project.title}</span>
                  </div>

                  {project.clientOrPartner && (
                    <div className="flex items-start justify-between py-1.5 border-b border-[#FFF8E8]/[0.05]">
                      <span className="text-[#C9C4B8]">Destination Partner</span>
                      <span className="font-semibold text-[#F2D477] text-right">
                        {project.clientOrPartner}
                      </span>
                    </div>
                  )}

                  {project.roleTitle && (
                    <div className="flex items-start justify-between py-1.5 border-b border-[#FFF8E8]/[0.05]">
                      <span className="text-[#C9C4B8]">Executive Role</span>
                      <span className="font-semibold text-[#F2D477] text-right">{project.roleTitle}</span>
                    </div>
                  )}

                  {project.director && project.director !== project.roleTitle && (
                    <div className="flex items-start justify-between py-1.5 border-b border-[#FFF8E8]/[0.05]">
                      <span className="text-[#C9C4B8]">Directed By</span>
                      <span className="font-semibold text-[#FFF8E8] text-right">{project.director}</span>
                    </div>
                  )}

                  {project.producer && (
                    <div className="flex items-start justify-between py-1.5 border-b border-[#FFF8E8]/[0.05]">
                      <span className="text-[#C9C4B8]">Production House</span>
                      <span className="font-semibold text-[#FFF8E8] text-right">{project.producer}</span>
                    </div>
                  )}

                  {project.starring && (
                    <div className="flex items-start justify-between py-1.5 border-b border-[#FFF8E8]/[0.05]">
                      <span className="text-[#C9C4B8]">Star Cast</span>
                      <span className="font-semibold text-[#F2D477] text-right max-w-[65%]">
                        {project.starring}
                      </span>
                    </div>
                  )}

                  {project.music && (
                    <div className="flex items-start justify-between py-1.5 border-b border-[#FFF8E8]/[0.05]">
                      <span className="text-[#C9C4B8]">Music Score</span>
                      <span className="font-semibold text-[#F2D477] text-right">{project.music}</span>
                    </div>
                  )}

                  {project.presentedBy && (
                    <div className="flex items-start justify-between py-1.5 border-b border-[#FFF8E8]/[0.05]">
                      <span className="text-[#C9C4B8]">Presented By</span>
                      <span className="font-semibold text-[#FFF8E8] text-right">{project.presentedBy}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between py-1.5 border-b border-[#FFF8E8]/[0.05]">
                    <span className="text-[#C9C4B8]">Status</span>
                    <span className="font-semibold text-[#C99A32]">{project.status}</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-[#C9C4B8]">Executive Supervision</span>
                    <span className="font-semibold text-[#FFF8E8]">Maayaa Bazaar Hub</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    href={
                      isSabah
                        ? `/contact?initiative=${project.slug}`
                        : `/contact?project=${project.slug}`
                    }
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {isSabah ? "Inquire For Filming & Permissions" : "Discuss Co-Production & Distribution"}
                  </Button>
                </div>
              </div>

              {/* Scope & Responsibilities */}
              {project.roleOrScope && project.roleOrScope.length > 0 && (
                <div className="p-6 rounded-2xl bg-[#06152F]/60 border border-[#C99A32]/25 space-y-3">
                  <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8]">
                    {isSabah ? "Strategic Scope & Facilitation" : "Production Scope & Deliverables"}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C9C4B8]">
                    {project.roleOrScope.map((scope, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C99A32] shrink-0" />
                        <span>{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 3. DEDICATED SABAH DESTINATION & 5 INITIATIVES SECTION */}
      {isSabah && project.initiatives && (
        <Section background="midnight" spacing="lg" borderBottom>
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Strategic Roadmap"
              title="Our 5 Key Initiatives"
              description="A multifaceted framework designed to bridge Indian cinematic storytellers with Sabah's world-class filming ecosystems."
              size="lg"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {project.initiatives.map((init) => (
                <div
                  key={init.number}
                  className="p-6 rounded-2xl bg-[#020817] border border-[#C99A32]/30 hover:border-[#C99A32]/70 space-y-3 shadow-[0_10px_30px_rgba(2,8,23,0.8)] transition-all hover-lift glow-gold-hover"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-[#C99A32]">
                      {init.number}
                    </span>
                    <Badge variant="gold" size="sm">
                      Program
                    </Badge>
                  </div>
                  <h4 className="font-[var(--font-heading)] text-lg font-bold text-[#FFF8E8]">
                    {init.title}
                  </h4>
                  <p className="text-xs text-[#C9C4B8] leading-relaxed">
                    {init.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 6 Location Pillars & Long-Term Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Pillars Box */}
              <div className="lg:col-span-6 p-7 rounded-3xl bg-[#06152F]/70 border border-[#C99A32]/35 space-y-4">
                <div className="flex items-center gap-2 text-[#F2D477] font-semibold text-sm">
                  <Palmtree className="w-5 h-5 text-[#C99A32]" />
                  <span className="font-[var(--font-cinzel)] uppercase tracking-wider">
                    Filming Backdrops &amp; Location Pillars
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#FFF8E8]">
                  {[
                    "Pristine Beaches & Coral Islands",
                    "Ancient Rainforests & Wildlife",
                    "Luxury Overwater Resorts & Hospitality",
                    "Rich Indigenous Culture & Heritage",
                    "Adventure & Outdoor Expeditions",
                    "Modern Facilities & Urban Infrastructure",
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#020817]/80 border border-[#FFF8E8]/10">
                      <Sparkles className="w-3.5 h-3.5 text-[#C99A32] shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long-Term Vision Box */}
              <div className="lg:col-span-6 p-7 rounded-3xl bg-gradient-to-br from-[#06152F] via-[#020817] to-[#0B2145] border border-[#C99A32]/45 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[11px] font-mono text-[#C99A32] uppercase tracking-widest font-semibold block">
                    Strategic 5-Year Vision
                  </span>
                  <h4 className="font-[var(--font-cinzel)] text-xl font-bold text-[#F2D477]">
                    &ldquo;One Story Can Inspire Millions to Travel&rdquo;
                  </h4>
                  <p className="text-xs text-[#C9C4B8] leading-relaxed">
                    Within five years, Sabah will establish itself as Southeast Asia&apos;s leading film-friendly destination for Indian entertainment productions, creating a powerful tourism engine that combines destination marketing, international media exposure, and measurable visitor growth.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FFF8E8]/[0.08] flex items-center justify-between">
                  <span className="text-xs text-[#FFF8E8] font-mono">
                    Sabah Tourism Board × Maayaa Bazaar Hub
                  </span>
                  <Button href="/contact?initiative=sabah-film-tourism" variant="primary" size="sm">
                    Inquire For Filming
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>
      )}

      {/* 4. Related Projects */}
      {otherProjects.length > 0 && (
        <Section background="midnight" spacing="lg" borderTop>
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Portfolio Archive"
              title="More Verified Productions"
              description="Explore additional landmark titles and credentials in our production slate."
              size="lg"
              className="mb-10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="rounded-2xl bg-[#06152F]/40 border border-[#C99A32]/25 hover:border-[#C99A32]/70 p-5 flex flex-col justify-between group transition-all duration-300 hover-lift glow-gold-hover"
                >
                  <div className="space-y-2.5">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#020817] mb-3">
                      <Image
                        src={p.image.src}
                        alt={p.image.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#C99A32] font-semibold">{p.categoryLabel}</span>
                      <span className="text-[#FFF8E8]/60">{p.status}</span>
                    </div>
                    <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FFF8E8] group-hover:text-[#F2D477] transition-colors line-clamp-1">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[#C9C4B8] line-clamp-2 leading-relaxed">
                      {p.overview}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#FFF8E8]/[0.08] flex items-center justify-between text-xs font-semibold text-[#C99A32]">
                    <span>View Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </Section>
      )}
    </>
  );
}
