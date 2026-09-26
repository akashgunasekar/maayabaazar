/**
 * MAAYAA BAZAAR HUB — Final Brand Design Tokens
 * 
 * Palette:
 * - Primary Background (Midnight Navy): #020817
 * - Secondary Background (Deep Navy): #06152F
 * - Primary Blue (Royal Navy): #0B2145
 * - Secondary Blue (Cinematic Blue): #102F5C
 * - Primary Gold (Metallic Gold): #C99A32
 * - Highlight Gold (Bright Gold): #F2D477
 * - Light Accent (Champagne): #F7E7B0
 * - Primary Text (Warm Ivory): #FFF8E8
 * - Secondary Text: #C9C4B8
 * - Muted Gold: #A9822A
 */

export const colors = {
  midnight: "#020817",
  deepNavy: "#06152F",
  royalNavy: "#0B2145",
  cinematicBlue: "#102F5C",
  brandGold: "#C99A32",
  highlightGold: "#F2D477",
  champagne: "#F7E7B0",
  warmIvory: "#FFF8E8",
  secondaryText: "#C9C4B8",
  mutedGold: "#A9822A",
  
  // Legacy aliases mapped to navy
  deepPurple: "#06152F",
  royalPurple: "#0B2145",
  warmWhite: "#FFF8E8",

  // Translucent variations for luxury UI layering
  surfaceBorder: "rgba(201, 154, 50, 0.2)",
  surfaceBorderHover: "rgba(242, 212, 119, 0.5)",
  goldGlow: "rgba(201, 154, 50, 0.25)",
  blueAtmosphere: "rgba(11, 33, 69, 0.4)",
} as const;

export const typography = {
  fontHeading: "var(--font-cinzel), var(--font-manrope), serif",
  fontDisplay: "var(--font-cinzel), serif",
  fontBody: "var(--font-inter), sans-serif",
} as const;

export const brand = {
  name: "MAAYAA BAZAAR HUB",
  tagline: "Where Cinema Meets Creativity & Events Become Experiences",
  coreStatement: "We Don't Just Create Events. We Create Experiences.",
} as const;
