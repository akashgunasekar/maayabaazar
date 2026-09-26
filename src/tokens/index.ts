// Design Tokens for Maayabaazar Hub
// Final Brand Direction: Midnight Navy, Royal Blue, Metallic Gold, Champagne & Warm Ivory

export const colors = {
  background: {
    DEFAULT: "#020817", // Midnight Navy
    secondary: "#06152F", // Deep Navy
    tertiary: "#0B2145", // Royal Navy
    deep: "#020817",
  },
  surface: {
    DEFAULT: "#06152F",
    elevated: "#0B2145",
    subtle: "#040F22",
    muted: "#020817",
    border: "rgba(201, 154, 50, 0.2)",
    borderSubtle: "rgba(201, 154, 50, 0.12)",
    borderAccent: "rgba(201, 154, 50, 0.35)",
  },
  text: {
    primary: "#FFF8E8", // Warm Ivory
    secondary: "#C9C4B8",
    muted: "#8F8980",
    dimmed: "#6A645B",
    inverse: "#020817",
  },
  accent: {
    DEFAULT: "#C99A32", // Metallic Gold
    highlight: "#F2D477", // Bright Gold
    champagne: "#F7E7B0", // Champagne
    muted: "rgba(201, 154, 50, 0.15)",
    glow: "rgba(201, 154, 50, 0.25)",
    dark: "#A9822A", // Muted Gold
  },
  status: {
    active: {
      DEFAULT: "#52C878", // Live Emerald
      bg: "rgba(82, 200, 120, 0.12)",
      border: "rgba(82, 200, 120, 0.32)",
      glow: "rgba(82, 200, 120, 0.25)",
    },
    upcoming: {
      DEFAULT: "#F2D477", // Amber Gold
      bg: "rgba(242, 212, 119, 0.12)",
      border: "rgba(242, 212, 119, 0.32)",
      glow: "rgba(242, 212, 119, 0.25)",
    },
  },
} as const;

export const typography = {
  fonts: {
    heading: "var(--font-cinzel), var(--font-manrope)",
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
  subtle: "0 2px 8px rgba(0, 0, 0, 0.5)",
  surface: "0 8px 24px rgba(2, 8, 23, 0.65)",
  elevated: "0 16px 40px rgba(2, 8, 23, 0.85)",
  accentGlow: "0 0 32px rgba(201, 154, 50, 0.2)",
  activeGlow: "0 0 20px rgba(82, 200, 120, 0.2)",
} as const;

export const containerWidths = {
  narrow: "max-w-4xl", // 896px
  default: "max-w-6xl", // 1152px
  wide: "max-w-7xl", // 1280px
} as const;
