import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Film,
  Music,
  Building2,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
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
          <div className="flex items-center gap-2">
            <Badge
              variant={project.status === "In Production" ? "gold" : "purple"}
              size="sm"
            >
              {project.status}
            </Badge>
            <span className="text-[11px] font-mono text-[#FAF8F2]/70 bg-[#16091F] px-2.5 py-0.5 rounded-full border border-[#FAF8F2]/10">
              {project.categoryLabel}
            </span>
          </div>
        }
        title={project.title}
        description={project.overview}
        breadcrumbs={
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#B9B0BE]">
            <Link href="/" className="hover:text-[#FAF8F2] transition-colors">
              Home
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <Link href="/projects" className="hover:text-[#FAF8F2] transition-colors">
              Projects
            </Link>
            <span className="text-[#FAF8F2]/30">/</span>
            <span className="text-[#D4A72C]">{project.title}</span>
          </nav>
        }
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={`/contact?project=${project.slug}`}
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Inquire About Similar Slate
            </Button>
            <Button href="/projects" variant="secondary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
              All Projects
            </Button>
          </div>
        }
      />

      {/* 2. Visual & Production Scope */}
      <Section background="deepPurple" spacing="lg" borderBottom>
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Visual Image */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-[#08050D] border border-[#FAF8F2]/10 shadow-[0_20px_50px_rgba(8,5,13,0.9)] group">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08050D] via-transparent to-transparent opacity-60" />

                {project.image.caption && (
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#08050D]/80 backdrop-blur-md border border-[#FAF8F2]/10 text-xs text-[#FAF8F2]/90 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#D4A72C] shrink-0" />
                    <span>{project.image.caption}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Scope Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-2xl bg-[#08050D] border border-[#FAF8F2]/[0.08] space-y-4">
                <h3 className="font-[var(--font-heading)] text-lg font-bold text-[#FAF8F2] border-b border-[#FAF8F2]/[0.08] pb-3">
                  Production Overview
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#B9B0BE]">Production Category</span>
                    <span className="font-semibold text-[#FAF8F2]">{project.categoryLabel}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#B9B0BE]">Project Status</span>
                    <span className="font-semibold text-[#D4A72C]">{project.status}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#B9B0BE]">Executive Supervision</span>
                    <span className="font-semibold text-[#FAF8F2]">Maayaa Bazaar Hub</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#B9B0BE]">Confidentiality</span>
                    <span className="font-semibold text-[#FAF8F2]">Active Industry NDA</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Inquire For Collaboration
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FAF8F2]">
                  Production Scope &amp; Rigor
                </h4>
                <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
                  {project.overview}
                </p>
                <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
                  Detailed technical breakdowns, press releases, cast attachments, and behind-the-scenes footage will be unveiled across official media partner channels upon authorized schedule milestones.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 3. Related Projects */}
      {otherProjects.length > 0 && (
        <Section background="midnight" spacing="lg" borderTop>
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="More Highlights"
              title="Other Productions"
              description="Explore additional projects across our cinema and event verticals."
              size="lg"
              className="mb-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="rounded-2xl bg-[#16091F]/40 border border-[#FAF8F2]/[0.08] hover:border-[#D4A72C]/40 p-5 flex flex-col justify-between group transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#B9B0BE]">
                      <span className="text-[#D4A72C]">{p.categoryLabel}</span>
                      <span>{p.status}</span>
                    </div>
                    <h4 className="font-[var(--font-heading)] text-base font-bold text-[#FAF8F2] group-hover:text-[#F4D76A] transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs text-[#B9B0BE] line-clamp-2">
                      {p.overview}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#FAF8F2]/[0.06] flex items-center justify-between text-xs font-semibold text-[#D4A72C]">
                    <span>View Project Dossier</span>
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
