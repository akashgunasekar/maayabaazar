/**
 * MAAYAA BAZAAR HUB — Design Tokens
 * 
 * Palette:
 * - Midnight: #08050D (Deepest dark canvas)
 * - Deep Purple: #16091F (Card & elevated section surfaces)
 * - Royal Purple: #4B0A78 (Atmospheric accents, glows, gradients)
 * - Brand Gold: #D4A72C (Primary gold for CTAs, active states, borders)
 * - Highlight Gold: #F4D76A (Hover states, light accents)
 * - Warm Gold: #B77A12 (Secondary warm borders, small badges)
 * - Warm White: #FAF8F2 (Primary display and reading text)
 * - Secondary Text: #B9B0BE (Muted body copy, meta labels)
 */

export const colors = {
  midnight: "#08050D",
  deepPurple: "#16091F",
  royalPurple: "#4B0A78",
  brandGold: "#D4A72C",
  highlightGold: "#F4D76A",
  warmGold: "#B77A12",
  warmWhite: "#FAF8F2",
  secondaryText: "#B9B0BE",
  
  // Translucent variations for luxury UI layering
  surfaceBorder: "rgba(212, 167, 44, 0.15)",
  surfaceBorderHover: "rgba(212, 167, 44, 0.4)",
  goldGlow: "rgba(212, 167, 44, 0.25)",
  purpleAtmosphere: "rgba(75, 10, 120, 0.35)",
} as const;

export const typography = {
  fontHeading: "var(--font-manrope), sans-serif",
  fontBody: "var(--font-inter), sans-serif",
} as const;

export const brand = {
  name: "MAAYAA BAZAAR HUB",
  tagline: "Where Cinema Meets Creativity & Events Become Experiences",
  coreStatement: "We Don't Just Create Events. We Create Experiences.",
} as const;
