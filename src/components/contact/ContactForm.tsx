"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// Accessible Social Icons
const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ENQUIRY_TYPES = [
  "Film Production",
  "Event",
  "Concert",
  "Brand Activation",
  "Digital Media",
  "Artist / Celebrity",
  "International Project",
  "General Enquiry",
] as const;

type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  enquiryType: EnquiryType;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  message?: string;
}

// ========================================================
// ISOLATED BACKEND INTEGRATION HANDLER
// Connect your webhook, CRM (Hubspot/Salesforce), or email API route here.
// ========================================================
async function submitContactEnquiry(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Simulating async network call with safety timeout
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // Log for development validation (isolated integration stub)
  if (process.env.NODE_ENV !== "production") {
    console.log("[Contact Submission Received]:", data);
  }

  return { success: true, message: "Enquiry submitted successfully" };
}

export function ContactForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiryType: "Film Production",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Pre-select enquiry type based on query params (e.g. ?service=cinema-production or ?vertical=events)
  useEffect(() => {
    const serviceParam = searchParams.get("service") || searchParams.get("vertical") || searchParams.get("category");
    if (!serviceParam) return;

    const lower = serviceParam.toLowerCase();
    if (lower.includes("film") || lower.includes("cinema")) {
      setFormData((prev) => ({ ...prev, enquiryType: "Film Production" }));
    } else if (lower.includes("concert") || lower.includes("music")) {
      setFormData((prev) => ({ ...prev, enquiryType: "Concert" }));
    } else if (lower.includes("event")) {
      setFormData((prev) => ({ ...prev, enquiryType: "Event" }));
    } else if (lower.includes("brand")) {
      setFormData((prev) => ({ ...prev, enquiryType: "Brand Activation" }));
    } else if (lower.includes("digital")) {
      setFormData((prev) => ({ ...prev, enquiryType: "Digital Media" }));
    } else if (lower.includes("artist") || lower.includes("celebrity")) {
      setFormData((prev) => ({ ...prev, enquiryType: "Artist / Celebrity" }));
    } else if (lower.includes("intl") || lower.includes("international")) {
      setFormData((prev) => ({ ...prev, enquiryType: "International Project" }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid contact phone number.";
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please provide details about your project or enquiry.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitContactEnquiry(formData);
      if (res.success) {
        setIsSubmitted(true);
      }
    } catch {
      setErrors({ message: "Unable to submit enquiry right now. Please email us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      enquiryType: "Film Production",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Direct Contact Dossier & Socials */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4A72C] font-semibold block">
            Executive Liaison
          </span>
          <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-bold text-[#FAF8F2] tracking-tight">
            Connect With Our Leadership
          </h2>
          <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
            We partner with film producers, musical artists, corporate brands, and international promoters. Share your project requirements and our production directors will connect directly.
          </p>
        </div>

        {/* Verified Location & Direct Email Box */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#08050D] border border-[#FAF8F2]/[0.08] space-y-5 shadow-[0_16px_36px_rgba(8,5,13,0.8)]">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#16091F] border border-[#D4A72C]/30 flex items-center justify-center text-[#D4A72C] shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#FAF8F2]/50 uppercase tracking-wider block mb-0.5">
                Headquarters
              </span>
              <h4 className="font-[var(--font-heading)] text-sm font-bold text-[#FAF8F2]">
                Maayaa Bazaar Hub
              </h4>
              <p className="text-xs text-[#B9B0BE] mt-0.5">
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#FAF8F2]/[0.06] flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#16091F] border border-[#D4A72C]/30 flex items-center justify-center text-[#D4A72C] shrink-0 mt-0.5">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#FAF8F2]/50 uppercase tracking-wider block mb-0.5">
                Official Direct Email
              </span>
              <a
                href="mailto:filmmakerram@gmail.com"
                className="text-xs sm:text-sm font-semibold text-[#D4A72C] hover:text-[#F4D76A] transition-colors"
              >
                filmmakerram@gmail.com
              </a>
              <p className="text-[11px] text-[#B9B0BE] mt-0.5">
                General inquiries, co-productions &amp; press releases
              </p>
            </div>
          </div>
        </div>

        {/* Social Channels */}
        <div className="p-6 rounded-3xl bg-[#08050D] border border-[#FAF8F2]/[0.08] space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FAF8F2]/60 block">
            Follow Our Updates
          </span>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Maayaa Bazaar Hub on Instagram"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16091F] border border-[#FAF8F2]/10 text-xs font-mono text-[#FAF8F2] hover:text-[#D4A72C] hover:border-[#D4A72C]/40 transition-all"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Maayaa Bazaar Hub on Facebook"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16091F] border border-[#FAF8F2]/10 text-xs font-mono text-[#FAF8F2] hover:text-[#D4A72C] hover:border-[#D4A72C]/40 transition-all"
            >
              <FacebookIcon />
              <span>Facebook</span>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to Maayaa Bazaar Hub on YouTube"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16091F] border border-[#FAF8F2]/10 text-xs font-mono text-[#FAF8F2] hover:text-[#D4A72C] hover:border-[#D4A72C]/40 transition-all"
            >
              <YoutubeIcon />
              <span>YouTube</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Maayaa Bazaar Hub on LinkedIn"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#16091F] border border-[#FAF8F2]/10 text-xs font-mono text-[#FAF8F2] hover:text-[#D4A72C] hover:border-[#D4A72C]/40 transition-all"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Accessible Form & Submission Confirmation */}
      <div className="lg:col-span-7">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#08050D] border border-[#FAF8F2]/[0.08] relative overflow-hidden shadow-[0_24px_64px_rgba(8,5,13,0.95)]">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-6 animate-fade-in" role="alert">
              <div className="w-16 h-16 rounded-full bg-[#16091F] border-2 border-[#D4A72C] flex items-center justify-center text-[#D4A72C] mx-auto shadow-[0_0_24px_rgba(212,167,44,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-[#FAF8F2]">
                  Enquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-[#B9B0BE] leading-relaxed">
                  Thank you, <strong className="text-[#FAF8F2]">{formData.name}</strong>. Your {formData.enquiryType} brief has been routed to our executive production desk. We will respond to <strong className="text-[#FAF8F2]">{formData.email}</strong> within 24 business hours.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-[#16091F] border border-[#D4A72C]/40 text-xs font-mono text-[#D4A72C] hover:bg-[#D4A72C] hover:text-[#08050D] transition-all font-semibold"
                >
                  Submit Another Brief
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4A72C] font-semibold block">
                  Project Brief Submission
                </span>
                <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-[#FAF8F2]">
                  Send Your Project Specifications
                </h3>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-mono text-[#FAF8F2]/80 block">
                    Full Name <span className="text-[#D4A72C]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="e.g. Anand Ranganathan"
                    className={`w-full px-4 py-3 rounded-xl bg-[#16091F] text-sm text-[#FAF8F2] placeholder-[#FAF8F2]/30 border transition-all focus:outline-none focus:ring-1 focus:ring-[#D4A72C] ${
                      errors.name ? "border-red-500/80" : "border-[#FAF8F2]/10 focus:border-[#D4A72C]"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* 2. Company / Organisation */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-company" className="text-xs font-mono text-[#FAF8F2]/80 block">
                    Company / Organisation <span className="text-[#FAF8F2]/40">(Optional)</span>
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Studio Productions / Media Ltd"
                    className="w-full px-4 py-3 rounded-xl bg-[#16091F] text-sm text-[#FAF8F2] placeholder-[#FAF8F2]/30 border border-[#FAF8F2]/10 focus:border-[#D4A72C] transition-all focus:outline-none focus:ring-1 focus:ring-[#D4A72C]"
                  />
                </div>

                {/* 3. Email */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-mono text-[#FAF8F2]/80 block">
                    Business Email <span className="text-[#D4A72C]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#16091F] text-sm text-[#FAF8F2] placeholder-[#FAF8F2]/30 border transition-all focus:outline-none focus:ring-1 focus:ring-[#D4A72C] ${
                      errors.email ? "border-red-500/80" : "border-[#FAF8F2]/10 focus:border-[#D4A72C]"
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* 4. Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="text-xs font-mono text-[#FAF8F2]/80 block">
                    Contact Phone <span className="text-[#D4A72C]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-[#16091F] text-sm text-[#FAF8F2] placeholder-[#FAF8F2]/30 border transition-all focus:outline-none focus:ring-1 focus:ring-[#D4A72C] ${
                      errors.phone ? "border-red-500/80" : "border-[#FAF8F2]/10 focus:border-[#D4A72C]"
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* 5. Enquiry Type Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="contact-enquiry-type" className="text-xs font-mono text-[#FAF8F2]/80 block">
                  Enquiry Type <span className="text-[#D4A72C]">*</span>
                </label>
                <select
                  id="contact-enquiry-type"
                  required
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as EnquiryType })}
                  className="w-full px-4 py-3 rounded-xl bg-[#16091F] text-sm text-[#FAF8F2] border border-[#FAF8F2]/10 focus:border-[#D4A72C] transition-all focus:outline-none focus:ring-1 focus:ring-[#D4A72C]"
                >
                  {ENQUIRY_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-[#08050D] text-[#FAF8F2]">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* 6. Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-mono text-[#FAF8F2]/80 block">
                  Message / Project Scope <span className="text-[#D4A72C]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  placeholder="Outline your project timeline, venue location, scale of production, or specific requirements..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#16091F] text-sm text-[#FAF8F2] placeholder-[#FAF8F2]/30 border transition-all focus:outline-none focus:ring-1 focus:ring-[#D4A72C] ${
                    errors.message ? "border-red-500/80" : "border-[#FAF8F2]/10 focus:border-[#D4A72C]"
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="text-[11px] text-red-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#D4A72C] hover:bg-[#F4D76A] text-[#08050D] font-bold text-sm font-mono tracking-wider transition-all shadow-[0_0_24px_rgba(212,167,44,0.35)] disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A72C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08050D]"
                >
                  {isSubmitting ? (
                    <span>Routing To Production Desk...</span>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
