// Design Tokens for Maayabaazar Hub
// Strict adherence to Brand Identity:
// 50% Modern SaaS clarity | 30% Cinematic Entertainment | 20% Luxury Destination

export const colors = {
  background: {
    DEFAULT: "#09090B",
    secondary: "#15171C",
    tertiary: "#1A1D24",
    deep: "#050507",
  },
  surface: {
    DEFAULT: "#1C1F26",
    elevated: "#242831",
    subtle: "#14171D",
    muted: "#101217",
    border: "rgba(255, 255, 255, 0.08)",
    borderSubtle: "rgba(255, 255, 255, 0.04)",
    borderAccent: "rgba(214, 179, 106, 0.28)",
  },
  text: {
    primary: "#F5F5F2",
    secondary: "#A7A9B0",
    muted: "#6B7280",
    dimmed: "#4B5563",
    inverse: "#09090B",
  },
  accent: {
    DEFAULT: "#D6B36A", // Warm Champagne Gold
    highlight: "#F0D99A", // Radiant Gold Highlight
    muted: "rgba(214, 179, 106, 0.15)",
    glow: "rgba(214, 179, 106, 0.2)",
    dark: "#9E7B35",
  },
  status: {
    active: {
      DEFAULT: "#52C878", // Live Emerald
      bg: "rgba(82, 200, 120, 0.12)",
      border: "rgba(82, 200, 120, 0.32)",
      glow: "rgba(82, 200, 120, 0.25)",
    },
    upcoming: {
      DEFAULT: "#E7B85B", // Amber Gold
      bg: "rgba(231, 184, 91, 0.12)",
      border: "rgba(231, 184, 91, 0.32)",
      glow: "rgba(231, 184, 91, 0.25)",
    },
  },
} as const;

export const typography = {
  fonts: {
    heading: "var(--font-manrope)",
    body: "var(--font-inter)",
  },
  tracking: {
    tighter: "-0.04em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.05em",
    wider: "0.12em",
    widest: "0.2em",
  },
} as const;

export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
  "4xl": "6rem", // 96px
  "5xl": "8rem", // 128px
} as const;

export const radii = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px",
} as const;

export const shadows = {
  none: "none",
  subtle: "0 2px 8px rgba(0, 0, 0, 0.35)",
  surface: "0 8px 24px rgba(0, 0, 0, 0.45)",
  elevated: "0 16px 40px rgba(0, 0, 0, 0.65)",
  accentGlow: "0 0 32px rgba(214, 179, 106, 0.14)",
  activeGlow: "0 0 20px rgba(82, 200, 120, 0.2)",
} as const;

export const containerWidths = {
  narrow: "max-w-4xl", // 896px
  default: "max-w-6xl", // 1152px
  wide: "max-w-7xl", // 1280px
  fullEditorial: "max-w-[1440px]", // 1440px
} as const;

export const animation = {
  durations: {
    fast: "150ms",
    base: "250ms",
    slow: "450ms",
    cinematic: "700ms",
  },
  easings: {
    cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
    standard: "cubic-bezier(0.16, 1, 0.3, 1)",
    soft: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
