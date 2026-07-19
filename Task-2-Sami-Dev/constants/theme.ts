// ─── Color Palette ────────────────────────────────────────────────────────────
// All values mirror the CSS custom properties in globals.css

export const COLORS = {
  // Brand
  primary: '#2563EB',
  secondary: '#7C3AED',
  accent: '#06B6D4',

  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',

  // Dark mode surfaces
  dark: {
    background: '#0B1120',
    surface: '#111827',
    surfaceElevated: '#1A2333',
    border: '#1E2A3B',
    foreground: '#F0F4FF',
    muted: '#64748B',
  },

  // Light mode surfaces
  light: {
    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceElevated: '#F1F5F9',
    border: '#E2E8F0',
    foreground: '#0A0F1A',
    muted: '#64748B',
  },
} as const

// ─── Border Radius ────────────────────────────────────────────────────────────

export const RADII = {
  button: '14px',
  input: '14px',
  card: '20px',
  image: '24px',
  section: '32px',
  full: '9999px',
} as const

// ─── Animation Timings ────────────────────────────────────────────────────────

export const ANIMATION = {
  durationFast: 0.3,
  duration: 0.45,
  durationSlow: 0.6,
  ease: 'easeOut',
  staggerDelay: 0.1,
} as const

// ─── Spacing ──────────────────────────────────────────────────────────────────

export const SPACING = {
  sectionPaddingY: 'py-20 md:py-32',
  containerMaxWidth: 'max-w-7xl',
  containerPaddingX: 'px-4 sm:px-6 lg:px-8',
} as const
